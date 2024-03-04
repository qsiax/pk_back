import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
let nameMap = "Абитуриенту -";
let namePage = "Целевое обучение";
var heading = "Целевое обучение";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1klrqyd_START -->${$$result.title = `<title>Целевое обучение</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1klrqyd_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="targeted" data-svelte-h="svelte-1ha1qim"><div class="targeted__container _container"><div class="targeted__body"><div class="targeted__content"><div class="targeted__content-block"><div class="targeted__content-title">Описание целевого обучения</div> <div class="targeted__content-text"><span>Целевое обучение</span> - это вид образования, предназначенный для определенных категорий граждан (например, детей-сирот, инвалидов, детей, находящихся в трудной жизненной ситуации), которые имеют право на бесплатное обучение в колледже или техникуме на определенных специальностях.<br><br>
						Целевое обучение может также включать дополнительные преимущества, такие как предоставление стипендии, помощь в трудоустройстве и поддержку со стороны колледжа.<br><br>
						Для получения целевого обучения необходимо соответствовать определенным критериям и условиям, которые могут различаться в зависимости от региона и учебного заведения.</div></div> <div class="targeted__content-block"><div class="targeted__content-img"></div></div></div> <div class="targeted__block"><div class="targeted__title">Категории граждан</div> <div class="targeted__item-body"><div class="targeted__item-wrapper"><div class="targeted__item"><div class="targeted__item-num">01 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div> <div class="targeted__item"><div class="targeted__item-num">02 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div></div> <div class="targeted__item-wrapper"><div class="targeted__item"><div class="targeted__item-num">03 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div> <div class="targeted__item"><div class="targeted__item-num">04 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div></div></div></div> <div class="targeted__block"><div class="targeted__title">Виды целевого обучения</div> <div class="targeted__item-body"><div class="targeted__item-wrapper"><div class="targeted__item"><div class="targeted__item-num">01 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div> <div class="targeted__item"><div class="targeted__item-num">02 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div></div> <div class="targeted__item-wrapper"><div class="targeted__item"><div class="targeted__item-num">03 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div> <div class="targeted__item"><div class="targeted__item-num">04 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div></div></div></div> <div class="targeted__block"><div class="targeted__title">Условия получения целевого обучения</div> <div class="targeted__item-body"><div class="targeted__item-wrapper"><div class="targeted__item"><div class="targeted__item-num">01 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div> <div class="targeted__item"><div class="targeted__item-num">02 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div></div> <div class="targeted__item-wrapper"><div class="targeted__item"><div class="targeted__item-num">03 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div> <div class="targeted__item"><div class="targeted__item-num">04 /</div> <div class="targeted__item-title">Категория, виды, условия</div></div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
