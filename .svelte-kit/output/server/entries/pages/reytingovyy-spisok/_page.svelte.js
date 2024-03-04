import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
let nameMap = "Абитуриенту -";
let namePage = "Рейтинговый список абитуриентов";
var heading = "Рейтинговый список \nабитуриентов";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-x7e9is_START -->${$$result.title = `<title>Рейтинговый список</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-x7e9is_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="rating" data-svelte-h="svelte-13jc0c7"><div class="rating__container _container"><div class="rating__body"><a href="#" class="rating__button">Yandex диск - посмотреть список Абитуриентов 202# <div class="rating__button-icon _icon-arrow"></div></a></div></div></section>`;
});
export {
  Page as default
};
