// Prefixes internal links with the site's base path, so the site works both at
// ai-a13x.github.io/alexainsworth.com/ and, later, at the root of alexainsworth.com.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (path: string) => `${base}${path}`;
