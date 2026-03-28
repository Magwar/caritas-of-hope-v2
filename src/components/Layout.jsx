import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* pt-[65px] offsets the fixed navbar height (1px accent + 64px nav) */}
      <main className="flex-1 pt-[65px]">{children}</main>
      <Footer />
    </div>
  );
}
