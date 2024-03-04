import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { C as Contact } from "../../../chunks/Contact.js";
const Image = "/_app/immutable/assets/bg.QWfANHSr.png";
let nameMap = "";
let namePage = "Организация питания в образовательной организации";
var heading = "Организация питания \nв образовательной \nорганизации";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1had6b1_START -->${$$result.title = `<title>Организация питания в образовательной организации</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1had6b1_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="catering" data-svelte-h="svelte-rs0nu7"><div class="catering__container _container"><div class="catering__body"><div class="catering__content"><div class="catering__img"><img${add_attribute("src", Image, 0)} alt="Image"></div> <div class="catering__item-body"><div class="catering__item-wrapper"><div class="catering__item"><div class="catering__item-title">Приказ об утверждении Целевой модели цифровой образовательной среды</div> <div class="catering__item-icon _icon-download"></div></div> <div class="catering__item"><div class="catering__item-title">Паспорт федерального проекта Цифровая образовательная среда</div> <div class="catering__item-icon _icon-download"></div></div> <div class="catering__item"><div class="catering__item-title">Методические рекомендации по обновлению информационного наполнения и функциональных возможностей открытых и общедоступных информационных ресурсов образовательных организаций, в том числе официальных сайтов в информационно-телекоммуникационной сети «Интернет»</div> <div class="catering__item-icon _icon-download"></div></div></div> <div class="catering__item-wrapper"><div class="catering__item"><div class="catering__item-title">Методические рекомендации об организации повышения квалификации педагогических работников, привлекаемых к осуществлению образовательной деятельности в области современных информационно-телекоммуникационных и цифровых технологий</div> <div class="catering__item-icon _icon-download"></div></div> <div class="catering__item"><div class="catering__item-title">Паспорт регионального проекта Цифровая образовательная среда РС(Я)</div> <div class="catering__item-icon _icon-download"></div></div> <div class="catering__item"><div class="catering__item-title">Полезные ссылки</div> <div class="catering__item-icon _icon-download"></div></div></div></div></div></div></div></section> ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
