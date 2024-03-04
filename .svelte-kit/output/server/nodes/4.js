import * as universal from '../entries/pages/dokumenty/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dokumenty/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dokumenty/+page.ts";
export const imports = ["_app/immutable/nodes/4._GkzCFFY.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.M97hDp6e.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Heading.MgBlCC0J.js","_app/immutable/chunks/Document.GRKFvHGy.js"];
export const stylesheets = ["_app/immutable/assets/Heading.OWjTzpTy.css"];
export const fonts = [];
