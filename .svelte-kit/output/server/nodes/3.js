import * as universal from '../entries/pages/archive/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/archive/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/archive/+page.ts";
export const imports = ["_app/immutable/nodes/3._rXFoRJo.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.M97hDp6e.js","_app/immutable/chunks/Heading.MgBlCC0J.js"];
export const stylesheets = ["_app/immutable/assets/Heading.OWjTzpTy.css"];
export const fonts = [];
