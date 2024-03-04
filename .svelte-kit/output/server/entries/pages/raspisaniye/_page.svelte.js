import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import "swiper/bundle";
/* empty css                            */
const Raspisaniye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="schedule__slider swiper" data-svelte-h="svelte-d10ecd"><div class="schedule__slider-wrapper swiper-wrapper"><div class="schedule__slide swiper-slide"><div class="schedule__item-main"><a href="/"><div class="schedule__item"><div class="schedule__item-title">06 февраля — 11 февраля 2023</div> <div class="schedule__icon _icon-download"></div></div></a></div> <div class="schedule__item-content"><div class="schedule__item-wrapper"><a href=""><div class="schedule__item"><div class="schedule__item-title">06 февраля — 11 февраля 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">30 января — 4 февраля 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">23 января — 28 января 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">16 января — 21 января 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">09 января — 14 января 2023</div> <div class="schedule__icon _icon-download"></div></div></a></div> <div class="schedule__item-wrapper"><a href=""><div class="schedule__item"><div class="schedule__item-title">19 декабря — 24 декабря 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">12 декабря — 17 декабря 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">05 февраля — 10 февраля 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">28 февраля — 03 февраля 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">21 февраля — 26 февраля 2022</div> <div class="schedule__icon _icon-download"></div></div></a></div></div></div> <div class="schedule__slide swiper-slide"><div class="schedule__item-main"><a href=""><div class="schedule__item"><div class="schedule__item-title">06 февраля — 11 февраля 2023</div> <div class="schedule__icon _icon-download"></div></div></a></div> <div class="schedule__item-content"><div class="schedule__item-wrapper"><a href=""><div class="schedule__item"><div class="schedule__item-title">06 февраля — 11 февраля 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">30 января — 4 февраля 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">23 января — 28 января 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">16 января — 21 января 2023</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">09 января — 14 января 2023</div> <div class="schedule__icon _icon-download"></div></div></a></div> <div class="schedule__item-wrapper"><a href=""><div class="schedule__item"><div class="schedule__item-title">19 декабря — 24 декабря 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href=""><div class="schedule__item"><div class="schedule__item-title">12 декабря — 17 декабря 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">05 февраля — 10 февраля 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">28 февраля — 03 февраля 2022</div> <div class="schedule__icon _icon-download"></div></div></a> <a href="#"><div class="schedule__item"><div class="schedule__item-title">21 февраля — 26 февраля 2022</div> <div class="schedule__icon _icon-download"></div></div></a></div></div></div></div> <div class="schedule__arrow-wrapper"><div class="schedule__arrow-prev _icon-arrow"></div> <div class="schedule__arrow-next _icon-arrow"></div></div> <div class="schedule__slide-bottom"><div class="schedule__pagination swiper-pagination"></div></div></div>`;
});
let nameMap = "Студенту -";
let namePage = "Расписание";
var heading = "Расписание групп";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1khhgbe_START -->${$$result.title = `<title>Расписание групп</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1khhgbe_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="schedule"><div class="schedule__container _container"><div class="schedule__body">${validate_component(Raspisaniye, "Raspisaniye").$$render($$result, {}, {}, {})}</div></div></section>`;
});
export {
  Page as default
};