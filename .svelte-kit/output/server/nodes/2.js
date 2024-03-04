import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.ylxsovDz.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.M97hDp6e.js","_app/immutable/chunks/News.eDrQVsY1.js","_app/immutable/chunks/stores.5SmxkEaY.js","_app/immutable/chunks/entry.KB5bx9zm.js","_app/immutable/chunks/04.Ymv_Jl7D.js","_app/immutable/chunks/Contact.ENEsi2cp.js","_app/immutable/chunks/swiper-bundle.AuTkEPbf.js"];
export const stylesheets = ["_app/immutable/assets/swiper-bundle.7t5sOE1N.css"];
export const fonts = [];
