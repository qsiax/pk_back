import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { N as News01, a as News02, b as News03, c as News04 } from "../../../chunks/04.js";
let nameMap = "";
let namePage = "Новости";
var heading = "Недавние новости";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-13rgy7h_START -->${$$result.title = `<title>Новости</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-13rgy7h_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="novosty" data-svelte-h="svelte-xt0h66"><div class="novosty__container _container"><div class="novosty__body"><div class="novosty__head"><div class="novosty__head-item"><div class="novosty__head-item-title">ВСе</div></div> <div class="novosty__head-item"><div class="novosty__head-item-title">Колледж</div></div> <div class="novosty__head-item"><div class="novosty__head-item-title">Технологии</div></div></div> <div class="novosty__item-wrapper"><div class="novosty__item"><div class="novosty__item-block"><div class="novosty__item-date">21.01.23</div> <div class="novosty__item-content"><div class="novosty__item-title">С Днём студенчества — Татьяниным днём!</div> <div class="novosty__item-text">Студенческие годы – это один из важнейших жизненных этапов, время для новых достижений, побед и знакомств!
                                В жизни каждого человека студенческие годы – самое удивительное и незабываемое время, пора смелых идей и творческих амбиций, новых поисков и интересных открытий. Вы являетесь самой инициативной частью молодого поколения, занимаете активную жизненную позицию, проявляете высокую заинтересованность, как в собственном будущем, так и в будущем нашего государства.
                                Вдохновения вам, терпения в труде и в жизни, активного долголетия, бодрости духа и успешного творческого поиска!
                                Сергей Иннокентьевич Сысолятин директор ГБПОУ РС (Я) «Покровский колледж»</div></div></div> <div class="novosty__item-block"><div class="novosty__item-img"><img${add_attribute("src", News01, 0)} alt=""></div> <div class="novosty__item-arrow _icon-arrow"></div></div></div> <div class="novosty__item"><div class="novosty__item-block"><div class="novosty__item-date">21.01.23</div> <div class="novosty__item-content"><div class="novosty__item-title">Спорт объединяет</div> <div class="novosty__item-text"></div></div></div> <div class="novosty__item-block"><div class="novosty__item-img"><img${add_attribute("src", News02, 0)} alt=""></div> <div class="novosty__item-arrow _icon-arrow"></div></div></div> <div class="novosty__item"><div class="novosty__item-block"><div class="novosty__item-date">21.01.23</div> <div class="novosty__item-content"><div class="novosty__item-title">Покровский колледж отчитался о проделанной работе
                                за 2022 год</div> <div class="novosty__item-text"></div></div></div> <div class="novosty__item-block"><div class="novosty__item-img"><img${add_attribute("src", News03, 0)} alt=""></div> <div class="novosty__item-arrow _icon-arrow"></div></div></div> <div class="novosty__item"><div class="novosty__item-block"><div class="novosty__item-date">19.12.22</div> <div class="novosty__item-content"><div class="novosty__item-title">Новогодний вечер в общежитии колледжа</div> <div class="novosty__item-text"></div></div></div> <div class="novosty__item-block"><div class="novosty__item-img"><img${add_attribute("src", News04, 0)} alt=""></div> <div class="novosty__item-arrow _icon-arrow"></div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
