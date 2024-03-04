import { c as create_ssr_component, e as escape } from "./ssr.js";
const css = {
  code: "@media(max-width: 600px){}@media(max-width: 600px){}.page-nav .page-nav-content li.svelte-19o6ckp a.svelte-19o6ckp{color:#B1B1B1}.page-nav .page-nav-content li.svelte-19o6ckp a.active.svelte-19o6ckp{color:#000000}@media(max-width: 1000px){}@media(max-width: 1000px){}@media(max-width: 1000px){}.page-heading.svelte-19o6ckp.svelte-19o6ckp{margin-top:150px}@media(max-width: 600px){.page-heading.svelte-19o6ckp.svelte-19o6ckp{margin-top:180px}}.page-heading-content.svelte-19o6ckp.svelte-19o6ckp{display:flex;margin-bottom:40px}@media(max-width: 600px){.page-heading-content.svelte-19o6ckp.svelte-19o6ckp{margin-bottom:20px}}.page-heading-content.svelte-19o6ckp li.svelte-19o6ckp{font-weight:400;font-size:20px;line-height:120%;margin-right:2px}@media(max-width: 600px){.page-heading-content.svelte-19o6ckp li.svelte-19o6ckp{font-size:14px;font-weight:400;line-height:120%}.page-heading-content.svelte-19o6ckp li.svelte-19o6ckp:first-child{min-width:68px}}.page-heading-content.svelte-19o6ckp li.svelte-19o6ckp:last-child{margin-right:0}.page-heading-content.svelte-19o6ckp li a.svelte-19o6ckp{color:#B1B1B1}.page-heading-content.svelte-19o6ckp li a.active.svelte-19o6ckp{color:#000000}.page-heading-title.svelte-19o6ckp.svelte-19o6ckp{font-weight:500;font-size:75px;line-height:90%;letter-spacing:-0.03em;text-transform:uppercase;margin-bottom:100px;white-space:pre-wrap}@media(max-width: 600px){.page-heading-title.svelte-19o6ckp.svelte-19o6ckp{font-size:32px;font-weight:500;line-height:100%;letter-spacing:-0.96px;text-transform:uppercase;margin-bottom:40px}}",
  map: null
};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageMapName, pageName, pageHeading } = $$props;
  if ($$props.pageMapName === void 0 && $$bindings.pageMapName && pageMapName !== void 0)
    $$bindings.pageMapName(pageMapName);
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  if ($$props.pageHeading === void 0 && $$bindings.pageHeading && pageHeading !== void 0)
    $$bindings.pageHeading(pageHeading);
  $$result.css.add(css);
  return `<div class="page-heading svelte-19o6ckp"><div class="page-heading-container _container"><ul class="page-heading-content svelte-19o6ckp"><li class="svelte-19o6ckp" data-svelte-h="svelte-1em0vwf"><a href="/" class="svelte-19o6ckp">Главная -</a></li> <li class="svelte-19o6ckp"><a class="svelte-19o6ckp">${escape(pageMapName)}</a></li> <li class="svelte-19o6ckp"><a class="active svelte-19o6ckp">${escape(pageName)}</a></li></ul> <div class="page-heading-title svelte-19o6ckp">${escape(pageHeading)}</div></div> </div>`;
});
export {
  Heading as H
};
