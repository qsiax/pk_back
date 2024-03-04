import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { D as Document } from "../../../chunks/Document.js";
let nameMap = "";
let namePage = "Документы";
let heading = "Планы, приказы и т.п.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-5icpxf_START -->${$$result.title = `<title>Документы</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-5icpxf_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="document"><div class="document__container _container"><div class="document__body">${validate_component(Document, "Document").$$render($$result, {}, {}, {})}</div></div></section>`;
});
export {
  Page as default
};
