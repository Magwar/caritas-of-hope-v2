import { createContext, useContext, useEffect, useReducer } from "react";
import { account } from "../api/appwrite";

const AuthContext = createContext(null);

const initialState = { user: null, loading: true };

function authReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, loading: false };
    case "CLEAR_USER":
      return { ...state, user: null, loading: false };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for an active Appwrite session on mount
  useEffect(() => {
    account
      .get()
      .then((user) => dispatch({ type: "SET_USER", payload: user }))
      .catch(() => dispatch({ type: "CLEAR_USER" }));
  }, []);

  const login = async (email, password) => {
    await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    dispatch({ type: "SET_USER", payload: user });
  };

  const logout = async () => {
    await account.deleteSession("current");
    dispatch({ type: "CLEAR_USER" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
