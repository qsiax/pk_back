import * as universal from '../entries/pages/obrazovaniye/_page.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/obrazovaniye/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/obrazovaniye/+page.ts";
export const imports = ["_app/immutable/nodes/12.vHp_hFIU.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.M97hDp6e.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Heading.MgBlCC0J.js","_app/immutable/chunks/Document.GRKFvHGy.js"];
export const stylesheets = ["_app/immutable/assets/Heading.OWjTzpTy.css"];
export const fonts = [];
