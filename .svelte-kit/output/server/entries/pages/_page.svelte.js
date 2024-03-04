import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { N as News } from "../../chunks/News.js";
import { C as Contact } from "../../chunks/Contact.js";
import "swiper/bundle";
/* empty css                         */
const Partners01 = "/_app/immutable/assets/partners-01.OBRUvOot.jpg";
const Partners02 = "/_app/immutable/assets/partners-02.KxEi8YOG.jpg";
const Partners03 = "/_app/immutable/assets/partners-03.PkZKrf9W.jpg";
const Partners04 = "/_app/immutable/assets/partners-04.Vp_r_Vfg.jpg";
const Partners05 = "/_app/immutable/assets/partners-05.XLsaNIC4.jpg";
const Partners06 = "/_app/immutable/assets/partners-06.jZdm5YfF.jpg";
const Partners07 = "/_app/immutable/assets/partners-07.P99fyYYy.jpg";
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="partners__content-wrapper swiper" data-svelte-h="svelte-q6ed3a"><div class="partners__item-wrapper swiper-wrapper"><div class="partners__item swiper-slide"><div class="partners__item-img"><img${add_attribute("src", Partners01, 0)} alt="Partners"></div></div> <div class="partners__item swiper-slide"><div class="partners__item-img"><img${add_attribute("src", Partners02, 0)} alt="Partners"></div></div> <div class="partners__item swiper-slide"><div class="partners__item-img"><img${add_attribute("src", Partners03, 0)} alt="Partners"></div></div> <div class="partners__item swiper-slide"><div class="partners__item-img"><img${add_attribute("src", Partners04, 0)} alt="Partners"></div></div> <div class="partners__item swiper-slide"><div class="partners__item-img"><img${add_attribute("src", Partners05, 0)} alt="Partners"></div></div> <div class="partners__item swiper-slide"><div class="partners__item-img"><img${add_attribute("src", Partners06, 0)} alt="Partners"></div></div> <div class="partners__item swiper-slide"><div class="partners__item-img"><img${add_attribute("src", Partners07, 0)} alt="Partners"></div></div></div> <div class="partners__item-pagination-wrapper"><div class="partners__item-pagination swiper-pagination"></div></div></div>`;
});
const Preloader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="overlay-preloader" data-svelte-h="svelte-1omrrx7"><div class="overlay-preloader-text-wrapper"><div class="overlay-preloader-logo">КОЛЛЕДЖ ЦИФРОВЫХ ТЕХНОЛОГИЙ <br>
                АЙТЫЫН</div></div> <div class="overlay-preloader-el01"></div></div>`;
});
const Directions = "/_app/immutable/assets/directions.NBzuSL8J.jpg";
const Directions_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="directions" id="directions" data-svelte-h="svelte-1vcywhi"><div class="directions__container _container"><div class="directions__body"><div class="directions__sub sub">Направления</div> <div class="directions__content"><div class="directions__block"><div class="directions__title">Специальности</div> <div class="directions__text">Осуществляем подготовку специалистов в разных профессиональных
              областях: Информационные системы, программирование, разработка игр,
              разработка виртуальной и дополненной реальности, туризма,
              кибербезопасности...</div> <div class="directions__img"><img${add_attribute("src", Directions, 0)} alt="Directions"></div></div> <div class="directions__block-slide"><div class="directions__item-wrapper"><div class="directions__item active" id="item-01"><p>Программист<i class="directions__item-arrow _icon-arrow"></i></p></div> <div class="directions__item-block active" id="item-block-01"><div class="directions__item-title">Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br><br>
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br> <span>Бесплатное обучение</span></div> <div class="directions__item-btn">Подробнее <div class="directions__item-btn-arrow _icon-arrow"></div></div></div></div> <div class="directions__item-wrapper"><div class="directions__item" id="item-02"><p>Техник по ИЗ<i class="directions__item-arrow _icon-arrow"></i></p></div> <div class="directions__item-block" id="item-block-02"><div class="directions__item-title">Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br><br>
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br> <span>Бесплатное обучение</span></div> <div class="directions__item-btn">Подробнее <div class="directions__item-btn-arrow _icon-arrow"></div></div></div></div> <div class="directions__item-wrapper"><div class="directions__item" id="item-03"><p>Специалист по туризму<i class="directions__item-arrow _icon-arrow"></i></p></div> <div class="directions__item-block" id="item-block-03"><div class="directions__item-title">Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br><br>
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br> <span>Бесплатное обучение</span></div> <div class="directions__item-btn">Подробнее <div class="directions__item-btn-arrow _icon-arrow"></div></div></div></div> <div class="directions__item-wrapper"><div class="directions__item" id="item-04"><p>Специалист по КС<i class="directions__item-arrow _icon-arrow"></i></p></div> <div class="directions__item-block" id="item-block-04"><div class="directions__item-title">Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br><br>
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br> <span>Бесплатное обучение</span></div> <div class="directions__item-btn">Подробнее <div class="directions__item-btn-arrow _icon-arrow"></div></div></div></div></div></div></div></div></section>`;
});
const Carousel01 = "/_app/immutable/assets/carousel-01.TlH667fa.jpg";
const Carousel02 = "/_app/immutable/assets/carousel-02.ZqA7lqwH.jpg";
const Carousel03 = "/_app/immutable/assets/carousel-03.GX3lZMEw.jpg";
const Carousel04 = "/_app/immutable/assets/carousel-04.h-lF8Ptd.jpg";
const Home = "/_app/immutable/assets/home-bg.8PsWE86n.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Preloader, "Preloader").$$render($$result, {}, {}, {})} <section class="carousel" data-svelte-h="svelte-1q12xzb"><div class="carousel__body"><div class="carousel__content"><div class="carousel__content-wrapper"><div class="carousel__item-wrapper"><div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel01, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel02, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-title">Ваша реклама</div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel03, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel04, 0)} alt="Carousel"></div></div></div> <div class="carousel__item-wrapper"><div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel01, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel02, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-title">Ваша реклама</div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel03, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel04, 0)} alt="Carousel"></div></div></div> <div class="carousel__item-wrapper"><div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel01, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel02, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-title">Ваша реклама</div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel03, 0)} alt="Carousel"></div></div> <div class="carousel__item"><div class="carousel__item-img"><img${add_attribute("src", Carousel04, 0)} alt="Carousel"></div></div></div></div></div></div></section> <section class="home" id="home" data-svelte-h="svelte-1if0y4f"><div class="home__container _container"><div class="home__body"><div class="home__content"><div class="home__block-title"><div class="home__title">Покровский колледж</div> <div class="home__text">Государственное бюджетное профессиональное образовательное
            учреждение Республика Саха (Якутия) &quot;Покровский колледж&quot;</div></div> <div class="home__block"><div class="home__btn-wrapper"><div class="home__btn"><a href="#directions" class="home__arrow _icon-arrow"></a></div></div></div></div></div></div> <div class="home__img"><img${add_attribute("src", Home, 0)} alt="Home"></div></section> ${validate_component(Directions_1, "Directions").$$render($$result, {}, {}, {})} <section class="about" data-svelte-h="svelte-1ps96os"><div class="about__container _container"><div class="about__body"><div class="about__sub">О нас</div> <div class="about__title">Наш колледж</div> <div class="about__text">Учебное заведение, призванное обеспечить студентам всестороннее и
        разностороннее образование. Наши опытные преподаватели и сотрудники
        стремятся создать динамичную и благоприятную учебную среду,
        способствующую академическому совершенству и личностному росту.</div></div> <div class="about__decore">Покровский колледж Покровский колледж</div></div></section> ${validate_component(News, "News").$$render($$result, {}, {}, {})} <section class="partners"><div class="partners__container _container"><div class="partners__body"><div class="partners__title" data-svelte-h="svelte-wq24xk">Партнеры</div> ${validate_component(Partners, "Partners").$$render($$result, {}, {}, {})}</div></div></section> ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
