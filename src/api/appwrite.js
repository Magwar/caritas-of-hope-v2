import { Client, Account, Databases, Storage, Query } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Re-export Query so components never import from "appwrite" directly
export { Query };

// ── Database & collection IDs ─────────────────────────────────────────────────
// Fill these in once you've created your collections in Appwrite Console
export const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;

export const COLLECTIONS = {
  programs: import.meta.env.VITE_COL_PROGRAMS,
  blog: import.meta.env.VITE_COL_BLOG,
  team: import.meta.env.VITE_COL_TEAM,
  testimonials: import.meta.env.VITE_COL_TESTIMONIALS,
  metrics: import.meta.env.VITE_COL_METRICS,
  trainings: import.meta.env.VITE_COL_TRAININGS,
  worklogs: import.meta.env.VITE_COL_WORKLOGS,
  projects: import.meta.env.VITE_COL_PROJECTS,
  contact: import.meta.env.VITE_COL_CONTACT,
};

export default client;
