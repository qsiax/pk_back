import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
let nameMap = "";
let namePage = "Структура и органы управления образовательной организацией";
var heading = "Структура и органы управления образовательной организацией";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1efvm7_START -->${$$result.title = `<title>Структура и органы управления</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1efvm7_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
