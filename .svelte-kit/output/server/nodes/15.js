import * as universal from '../entries/pages/obshchezhitiye/_page.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/obshchezhitiye/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/obshchezhitiye/+page.ts";
export const imports = ["_app/immutable/nodes/15.SOsXVDL2.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.M97hDp6e.js","_app/immutable/chunks/Heading.MgBlCC0J.js"];
export const stylesheets = ["_app/immutable/assets/Heading.OWjTzpTy.css"];
export const fonts = [];
