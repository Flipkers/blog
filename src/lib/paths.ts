/** Ensure GitHub Pages `base` joins cleanly: `/blog` + `slug/` → `/blog/slug/`. */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\//, '')}`;
}
