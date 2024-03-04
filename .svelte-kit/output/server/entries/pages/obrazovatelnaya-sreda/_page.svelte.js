import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
const Image = "/_app/immutable/assets/bg.QWfANHSr.png";
let nameMap = "";
let namePage = "Цифровая образовательная среда";
var heading = "Цифровая образовательная среда";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1l4g5e6_START -->${$$result.title = `<title>Цифровая образовательная среда</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1l4g5e6_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="digital" data-svelte-h="svelte-18nsk2q"><div class="digital__container _container"><div class="digital__body"><div class="digital__img"><img${add_attribute("src", Image, 0)} alt="Image"></div> <div class="digital__content"><div class="digital__item-wrapper"><div class="digital__item"><div class="digital__title">Приказ об утверждении Целевой модели цифровой образовательной среды</div> <div class="digital__icon _icon-download"></div></div> <div class="digital__item"><div class="digital__title">Паспорт федерального проекта Цифровая образовательная среда</div> <div class="digital__icon _icon-download"></div></div> <div class="digital__item"><div class="digital__title">Методические рекомендации по обновлению информационного наполнения и функциональных возможностей открытых и общедоступных информационных ресурсов образовательных организаций, в том числе официальных сайтов в информационно-телекоммуникационной сети «Интернет»</div> <div class="digital__icon _icon-download"></div></div></div> <div class="digital__item-wrapper"><div class="digital__item"><div class="digital__title">Методические рекомендации об организации повышения квалификации педагогических работников, привлекаемых к осуществлению образовательной деятельности в области современных информационно-телекоммуникационных и цифровых технологий</div> <div class="digital__icon _icon-download"></div></div> <div class="digital__item"><div class="digital__title">Паспорт регионального проекта Цифровая образовательная среда РС(Я)</div> <div class="digital__icon _icon-download"></div></div> <div class="digital__item"><div class="digital__title">Полезные ссылки</div> <div class="digital__icon _icon-download"></div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
