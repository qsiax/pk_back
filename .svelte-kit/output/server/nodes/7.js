import * as universal from '../entries/pages/kursy/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kursy/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/kursy/+page.ts";
export const imports = ["_app/immutable/nodes/7.p6EeLLhY.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.M97hDp6e.js","_app/immutable/chunks/Heading.MgBlCC0J.js","_app/immutable/chunks/swiper-bundle.AuTkEPbf.js"];
export const stylesheets = ["_app/immutable/assets/Heading.OWjTzpTy.css","_app/immutable/assets/swiper-bundle.7t5sOE1N.css"];
export const fonts = [];
