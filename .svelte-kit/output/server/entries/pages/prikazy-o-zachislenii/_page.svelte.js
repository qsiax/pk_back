import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { D as Document } from "../../../chunks/Document.js";
let nameMap = "Абитуриенту -";
let namePage = "Приказы о зачислении";
var heading = "Приказы о зачислении";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-9ktyf0_START -->${$$result.title = `<title>Приказы о зачислении</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-9ktyf0_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="document"><div class="document__container _container"><div class="document__body">${validate_component(Document, "Document").$$render($$result, {}, {}, {})}</div></div></section> `;
});
export {
  Page as default
};
