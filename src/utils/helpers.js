/**
 * Format an ISO date string to a readable format
 * e.g. "2025-05-08" → "May 8, 2025"
 */
export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Truncate text to a max character count, appending "…"
 */
export function truncateText(text, max = 120) {
  if (!text || text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}
