import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { N as News } from "../../../chunks/News.js";
import "swiper/bundle";
/* empty css                            */
const Gallery01 = "/_app/immutable/assets/01.1gPXs1wJ.png";
const Gallery02 = "/_app/immutable/assets/02.mdrUbrOL.png";
const Gallery03 = "/_app/immutable/assets/03.J_h62NdU.png";
const Gallery04 = "/_app/immutable/assets/04.2h06rHu5.png";
const Gallery05 = "/_app/immutable/assets/05.SqqrUhfn.png";
const Osnovnyye_svedeniya = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="basic__item-wrapper-gallery swiper" data-svelte-h="svelte-h137uv"><div class="basic__item-block-gallery swiper-wrapper"><div class="basic__item-gallery swiper-slide"><img${add_attribute("src", Gallery01, 0)} alt="Gallery"></div> <div class="basic__item-gallery swiper-slide"><img${add_attribute("src", Gallery02, 0)} alt="Gallery"></div> <div class="basic__item-gallery swiper-slide"><img${add_attribute("src", Gallery03, 0)} alt="Gallery"></div> <div class="basic__item-gallery swiper-slide"><img${add_attribute("src", Gallery04, 0)} alt="Gallery"></div> <div class="basic__item-gallery swiper-slide"><img${add_attribute("src", Gallery05, 0)} alt="Gallery"></div></div></div>`;
});
const Call = "data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_848_11756)'%3e%3cpath%20d='M26.68%2021.0067C25.04%2021.0067%2023.4533%2020.74%2021.9733%2020.26C21.5067%2020.1%2020.9867%2020.22%2020.6267%2020.58L18.5333%2023.2067C14.76%2021.4067%2011.2267%2018.0067%209.34667%2014.1L11.9467%2011.8867C12.3067%2011.5133%2012.4133%2010.9933%2012.2667%2010.5267C11.7733%209.04667%2011.52%207.46%2011.52%205.82C11.52%205.1%2010.92%204.5%2010.2%204.5H5.58667C4.86667%204.5%204%204.82%204%205.82C4%2018.2067%2014.3067%2028.5%2026.68%2028.5C27.6267%2028.5%2028%2027.66%2028%2026.9267V22.3267C28%2021.6067%2027.4%2021.0067%2026.68%2021.0067Z'%20fill='%23537EE7'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_848_11756'%3e%3crect%20width='32'%20height='32'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
let nameMap = "";
let namePage = "Основные сведения";
let heading = "Покровский колледж";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1lqeztj_START -->${$$result.title = `<title>Основные сведение</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1lqeztj_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="basic"><div class="basic__container _container"><div class="basic__body"><div class="basic__content"><div class="basic__block-information" data-svelte-h="svelte-17jc2ju"><div class="basic__block-wrapper"><div class="basic__title">Основные сведения</div> <div class="basic__text"><span>Полное наименование /</span> Государственное бюджетное профессиональное образовательное учреждение «Колледж цифровых технологий «АЙТЫЫН»</div> <div class="basic__text"><span>Дата создания /</span> 20 июня 2000года Распоряжением Первого Президента республики М.Е.Николаева № 178-РП</div> <div class="basic__text"><span>Учредитель /</span> 
                            МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РС(Я) <br>
                            ИНН 1435054525, КПП 143501001, ОГРН 1031402047170, ОКПО 00063087 <br>
                            МИНИСТЕРСТВО ИМУЩЕСТВЕННЫХ И ЗЕМЕЛЬНЫХ ОТНОШЕНИЙ РС(Я)
                            ИНН 1435027592, КПП 143501001
                            ОГРН 1021401067995</div> <div class="basic__text"><span>Место нахождения /</span> Республика Саха (Якутия), Хангаласский улус, город Покровск, улица Братьев Ксенофонтовых,31</div></div> <div class="basic__block-wrapper"><div class="basic__head">График работы</div> <div class="basic__box"><div class="basic__box-title">Понедельник - Пятница<br>
                                с 09:00ч до 18:00ч</div> <div class="basic__box-title">Обед<br>
                                с 13:00ч до 14:00ч</div> <div class="basic__box-title">Выходной<br>
                                Суббота и воскресенье</div></div></div></div> <div class="basic__block-contact" data-svelte-h="svelte-l6q25j"><div class="basic__title">Контактные данные</div> <div class="basic__item-body"><div class="basic__item-wrapper"><div class="basic__item"><div class="basic__item-title">Директор <br> (Сысолятин Сергей Иннокентьевич): <br> 8(41144)45-2-42, 43-8-67</div> <img${add_attribute("src", Call, 0)} class="basic__item-icon" alt="call"></div> <div class="basic__item"><div class="basic__item-title">Заместитель директора по УПР (Алексеева Мария Витальевна): 8(41144)45-2-42, 43-8-67</div> <img${add_attribute("src", Call, 0)} class="basic__item-icon" alt="call"></div> <div class="basic__item"><div class="basic__item-title">Заместитель директора по ВР <br> (Моисеева Мария Гаврильевна): 8(41144)45-2-42, 43-8-67</div> <img${add_attribute("src", Call, 0)} class="basic__item-icon" alt="call"></div></div> <div class="basic__item-wrapper"><div class="basic__item"><div class="basic__item-title">Заместитель директора по ОВ (Шахурдин Егор Дмитриевич): 8(41144)45-2-42, 43-8-67</div> <img${add_attribute("src", Call, 0)} class="basic__item-icon" alt="call"></div> <div class="basic__item"><div class="basic__item-title">Заведующая общежитием <br> (Припузова Анна Валерьевна): 8(41144)45-2-42, 43-8-67</div> <img${add_attribute("src", Call, 0)} class="basic__item-icon" alt="call"></div> <div class="basic__item"><div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div> <img${add_attribute("src", Call, 0)} class="basic__item-icon" alt="call"></div></div></div></div> <div class="basic__block-gallery"><div class="basic__title" data-svelte-h="svelte-1w8wt88">Галерея</div> ${validate_component(Osnovnyye_svedeniya, "OsnovnyyeSvedeniya").$$render($$result, {}, {}, {})}</div></div></div></div></section> ${validate_component(News, "News").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
