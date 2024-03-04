import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
let nameMap = "Абитуриенту -";
let namePage = "Выбор профессии";
var heading = "Выберите свою профессию";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-w0ei7b_START -->${$$result.title = `<title>Выбор профессии</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-w0ei7b_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="profession" data-svelte-h="svelte-t3wl75"><div class="profession__container _container"><div class="profession__body"><div class="profession__content"><div class="profession__block-speciality"><div class="profession__title">Специальности СПО:</div> <div class="profession__item-body"><div class="profession__item-wrapper"><div class="profession__item"><div class="profession__item-title">Наименование специальности</div></div> <div class="profession__item"><div class="profession__item-title">Квалификация</div></div> <div class="profession__item"><div class="profession__item-title">Уровень<br> образования</div></div> <div class="profession__item"><div class="profession__item-title">Срок<br> обучения</div></div> <div class="profession__item"><div class="profession__item-title">Форма<br> обучения</div></div></div> <div class="profession__item-wrapper"><div class="profession__item"><div class="profession__item-title">Компьютерные<br> системы и комплексы</div></div> <div class="profession__item"><div class="profession__item-title">Специалист по<br> компьютерным<br> системам</div></div> <div class="profession__item"><div class="profession__item-title">Среднее<br> общее<br> образование</div></div> <div class="profession__item"><div class="profession__item-title">3 года 10 мес</div></div> <div class="profession__item"><div class="profession__item-title">Очная</div></div></div> <div class="profession__item-wrapper"><div class="profession__item"><div class="profession__item-title">Информационные<br>
									системы и программиро-<br>
									вание</div></div> <div class="profession__item"><div class="profession__item-title">Программист/<br>
									разработчик<br>
									веб приложений</div></div> <div class="profession__item"><div class="profession__item-title">Основное общее <br>
									образование /<br>
									среднее общее<br>
									образование</div></div> <div class="profession__item"><div class="profession__item-title">3 года 10мес /<br>
									2 года 10 мес</div></div> <div class="profession__item"><div class="profession__item-title">Очная</div></div></div> <div class="profession__item-wrapper"><div class="profession__item"><div class="profession__item-title">Организация и<br>
									технология защиты <br>
									информации</div></div> <div class="profession__item"><div class="profession__item-title">Техник по защите<br>
									информации</div></div> <div class="profession__item"><div class="profession__item-title">Основное общее<br>
									образование /<br>
									среднее общее<br>
									образование</div></div> <div class="profession__item"><div class="profession__item-title">3 года 10мес /<br>
									2 года 10 мес</div></div> <div class="profession__item"><div class="profession__item-title">Очная</div></div></div> <div class="profession__item-wrapper"><div class="profession__item"><div class="profession__item-title">Туризм</div></div> <div class="profession__item"><div class="profession__item-title">Специалист по туризму</div></div> <div class="profession__item"><div class="profession__item-title">Среднее<br>
									общее<br>
									образование</div></div> <div class="profession__item"><div class="profession__item-title">1 год 10 мес</div></div> <div class="profession__item"><div class="profession__item-title">Очная</div></div></div></div></div> <div class="profession__block-question"><div class="profession__title">Как выбрать профессию?</div> <div class="profession__item-body-question"><div class="profession__item-wrapper-question"><div class="profession__item-question"><div class="profession__item-num-question">01 /</div> <div class="profession__item-title-question">Изучите список профессий, предлагаемых в Покровском колледже, и выберите те, которые вам интересны.</div></div> <div class="profession__item-question"><div class="profession__item-num-question">02 /</div> <div class="profession__item-title-question">Изучите рынок труда, чтобы понимать, какие профессии будут востребованы в ближайшее время</div></div></div> <div class="profession__item-wrapper-question"><div class="profession__item-question"><div class="profession__item-num-question">03 /</div> <div class="profession__item-title-question">Посмотрите будни Покровского колледжа в соц.сетях, чтобы получить более подробную информацию о профессиях</div></div> <div class="profession__item-question"><div class="profession__item-num-question">04 /</div> <div class="profession__item-title-question">Обсудите свой выбор профессии с родителями, друзьями и учителями.</div></div></div></div> <div class="profession__descriptions">Надеемся, эти рекомендации помогут вам сделать правильный выбор профессии в Покровском колледже.</div></div> <div class="profession__block-advantages"><div class="profession__title">Преимущества учебы</div> <div class="profession__item-body-advantages"><div class="profession__item-wrapper-advantages"><div class="profession__item-advantages"><div class="profession__num-advantages">01 /</div> <div class="profession__title-advantages">Текст</div></div> <div class="profession__item-advantages"><div class="profession__num-advantages">02 /</div> <div class="profession__title-advantages">Текст</div></div></div> <div class="profession__item-wrapper-advantages"><div class="profession__item-advantages"><div class="profession__num-advantages">03 /</div> <div class="profession__title-advantages">Текст</div></div> <div class="profession__item-advantages"><div class="profession__num-advantages">04 /</div> <div class="profession__title-advantages">Текст</div></div></div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
