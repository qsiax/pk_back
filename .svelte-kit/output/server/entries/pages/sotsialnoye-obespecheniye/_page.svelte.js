import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
let nameMap = "Студенту -";
let namePage = "Социальное обеспечение";
var heading = "Социальное обеспечение";
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
  )} <section class="welfare" data-svelte-h="svelte-3t8od4"><div class="welfare__container _container"><div class="welfare__body"><div class="welfare__content"><div class="welfare__block"><div class="welfare__title">Стипендия</div> <div class="welfare__item-wrapper"><div class="welfare__item"><div class="welfare__item-title">Академическая стипендия:<br>
                                Хорошист — <span>2 511 рб.</span>, Отличник — <span>3 348 рб.</span></div></div> <div class="welfare__item"><div class="welfare__item-title">Социальная стипендия: <span>2 511 рб.</span></div></div> <div class="welfare__item"><div class="welfare__item-title">Льготное питание: <span>99,40 рб.</span> <span>(в день)</span></div></div></div></div> <div class="welfare__block"><div class="welfare__title">Меры поддержки детям-сиротам и детям, оставшимся без попечения родителей</div> <div class="welfare__item-wrapper"><div class="welfare__item"><div class="welfare__item-title">Текст</div></div> <div class="welfare__item"><div class="welfare__item-title">Текст</div></div> <div class="welfare__item"><div class="welfare__item-title">Текст</div></div></div></div> <div class="welfare__block"><div class="welfare__title">Меры поддержки детям из малоимущих семей</div> <div class="welfare__item-wrapper"><div class="welfare__item"><div class="welfare__item-title">Текст</div></div> <div class="welfare__item"><div class="welfare__item-title">Текст</div></div> <div class="welfare__item"><div class="welfare__item-title">Текст</div></div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
