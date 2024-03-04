import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const logo = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2030V60H30H60V30V0H30H0V30ZM25%203.267C25%203.414%2020.05%208.469%2014%2014.5L3%2025.466V14.233V3H14C20.05%203%2025%203.12%2025%203.267ZM30%2013.5C18.725%2019.216%209.058%2023.917%208.518%2023.947C7.978%2023.976%2012.245%2019.275%2018%2013.5L28.464%203L39.482%203.053L50.5%203.107L30%2013.5ZM56.68%2028.654C56.47%2028.864%2045.093%2028.915%2031.399%2028.768L6.5%2028.5L31.5%2015.869L56.5%203.239L56.781%2015.755C56.935%2022.639%2056.89%2028.443%2056.68%2028.654ZM57%2044.004V57.008L32%2044.5C18.25%2037.621%207%2031.769%207%2031.496C7%2031.223%2018.25%2031%2032%2031H57V44.004ZM14.5%2046L25.466%2057H14.233H3V46C3%2039.95%203.12%2035%203.267%2035C3.414%2035%208.469%2039.95%2014.5%2046ZM30%2046.5L50.5%2056.893L39.482%2056.947L28.464%2057L18%2046.5C12.245%2040.725%207.978%2036.024%208.518%2036.053C9.058%2036.083%2018.725%2040.784%2030%2046.5Z'%20fill='%23537EE7'/%3e%3c/svg%3e";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<header class="header" id="header"><div class="header__container _container"><div class="header__body"><a href="/" data-svelte-h="svelte-1s5nz3h"><div class="header__logo-wrapper"><div class="header__logo"><img${add_attribute("src", logo, 0)} alt="Logo"></div> <div class="header__logo-text">ПОКРОВСКИЙ
                        КОЛЛЕДЖ</div></div></a> <ul class="${["header__navigation", ""].join(" ").trim()}"><li class="${["header__navigation-el", ""].join(" ").trim()}"><a role="button" aria-pressed="false" tabindex="0" class="${["header__navigation-btn", ""].join(" ").trim()}" data-svelte-h="svelte-4sgb5u">Колледж <div class="header__navigation-arrow _icon-btn-arrow"></div> <div class="header__navigation-under-block"></div></a> <div class="${["header__navigation-block", ""].join(" ").trim()}"><div class="header__navigation-block-wrapper"><div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/osnovnyye-svedeniya" ? "page" : void 0,
    0
  )}><a href="/osnovnyye-svedeniya" class="header__navigation-block-item" data-svelte-h="svelte-g8uihu">Основные сведения</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/struktura-i-organy" ? "page" : void 0,
    0
  )}><a href="/struktura-i-organy" class="header__navigation-block-item" data-svelte-h="svelte-ceq6p4">Структура и органы управления<br> образовательной организацией</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute("aria-current", $page.url.pathname === "/dokumenty" ? "page" : void 0, 0)}><a href="/dokumenty" class="header__navigation-block-item" data-svelte-h="svelte-b8g17t">Документы</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/obrazovaniye" ? "page" : void 0,
    0
  )}><a href="/obrazovaniye" class="header__navigation-block-item" data-svelte-h="svelte-i4c1ua">Образование</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/rukovodstvo" ? "page" : void 0,
    0
  )}><a href="/rukovodstvo" class="header__navigation-block-item" data-svelte-h="svelte-4nr6jk">Руководство. Педагогически<br> (научно-педагогический) состав</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/materialno-tekhnicheskoye-obespecheniye" ? "page" : void 0,
    0
  )}><a href="/materialno-tekhnicheskoye-obespecheniye" class="header__navigation-block-item" data-svelte-h="svelte-1qsrqx7">Материально-техническое обеспечение и <br> оснащенность образовательного процесса</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/stipendiya" ? "page" : void 0,
    0
  )}><a href="/stipendiya" class="header__navigation-block-item" data-svelte-h="svelte-x13vq8">Стипендии и меры поддержки<br> обучающихся</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/kursy" ? "page" : void 0, 0)}><a href="/kursy" class="header__navigation-block-item" data-svelte-h="svelte-155pwao">Платные образовательные услуги</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/finansovo-khozyaystvennaya" ? "page" : void 0,
    0
  )}><a href="/finansovo-khozyaystvennaya" class="header__navigation-block-item" data-svelte-h="svelte-1x38qno">Финансово-хозяйственная деятельность</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/mesta-dlya-priyema" ? "page" : void 0,
    0
  )}><a href="/mesta-dlya-priyema" class="header__navigation-block-item" data-svelte-h="svelte-i7chg1">Вакантные места для приема (перевода)<br> обучающихся</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/dostupnaya-sreda" ? "page" : void 0,
    0
  )}><a href="/dostupnaya-sreda" class="header__navigation-block-item" data-svelte-h="svelte-1ymgxzu">Доступная среда</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/mezhdunarodnoye-sotrudnichestvo" ? "page" : void 0,
    0
  )}><a href="/mezhdunarodnoye-sotrudnichestvo" class="header__navigation-block-item" data-svelte-h="svelte-11l6wj5">Международное сотрудничество</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/obrazovatelnyye-programmy" ? "page" : void 0,
    0
  )}><a href="/obrazovatelnyye-programmy" class="header__navigation-block-item" data-svelte-h="svelte-yli508">Образовательные программы</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/pitaniya" ? "page" : void 0, 0)}><a href="/pitaniya" class="header__navigation-block-item" data-svelte-h="svelte-jv0fso">Организация питания в образовательной<br> организации</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/obrazovatelnaya-sreda" ? "page" : void 0,
    0
  )}><a href="/obrazovatelnaya-sreda" class="header__navigation-block-item" data-svelte-h="svelte-72elzw">Цифровая образовательная среда</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/partnerstvo" ? "page" : void 0,
    0
  )}><a href="/partnerstvo" class="header__navigation-block-item" data-svelte-h="svelte-ztqzg7">Социальное партнерство</a></li></div></div></div></li> <li class="${["header__navigation-el", ""].join(" ").trim()}"><a role="button" aria-pressed="false" tabindex="0" class="${["header__navigation-btn", ""].join(" ").trim()}" data-svelte-h="svelte-yzo1yw">Абитуриенту <div class="header__navigation-arrow _icon-btn-arrow"></div> <div class="header__navigation-under-block"></div></a> <div class="${["header__navigation-block", ""].join(" ").trim()}"><div class="header__navigation-under-block"></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/pravila-priyoma" ? "page" : void 0,
    0
  )}><a href="/pravila-priyoma" class="header__navigation-block-item" data-svelte-h="svelte-18ixclu">Правила приёма</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/professiya" ? "page" : void 0,
    0
  )}><a href="/professiya" class="header__navigation-block-item" data-svelte-h="svelte-1xf81p0">Выбрать профессию</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/prikazy-o-zachislenii" ? "page" : void 0,
    0
  )}><a href="/prikazy-o-zachislenii" class="header__navigation-block-item" data-svelte-h="svelte-2k8w42">Приказы о зачислении</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/tselevoye-obucheniye" ? "page" : void 0,
    0
  )}><a href="/tselevoye-obucheniye" class="header__navigation-block-item" data-svelte-h="svelte-14nilv5">Целевое обучение</a></li></div> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/reytingovyy-spisok" ? "page" : void 0,
    0
  )}><a href="/reytingovyy-spisok" class="header__navigation-block-item" data-svelte-h="svelte-28k2fn">Рейтинговый список абитуриентов</a></li></div></li> <li class="${["header__navigation-el", ""].join(" ").trim()}"><a role="button" aria-pressed="false" tabindex="0" class="${["header__navigation-btn", ""].join(" ").trim()}" data-svelte-h="svelte-3v6hjm">Студенту<div class="header__navigation-arrow _icon-btn-arrow"></div> <div class="header__navigation-under-block"></div></a> <div class="${["header__navigation-block", ""].join(" ").trim()}"><div class="header__navigation-under-block"></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/obucheniye" ? "page" : void 0,
    0
  )}><a href="/obucheniye" class="header__navigation-block-item" data-svelte-h="svelte-6dmc74">Обучение</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/raspisaniye" ? "page" : void 0,
    0
  )}><a href="/raspisaniye" class="header__navigation-block-item" data-svelte-h="svelte-1e9k4bi">Расписание</a></li></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/obshchezhitiye" ? "page" : void 0,
    0
  )}><a href="/obshchezhitiye" class="header__navigation-block-item" data-svelte-h="svelte-aa5cw7">Общежитие</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/studencheskaya-zhizn" ? "page" : void 0,
    0
  )}><a href="/studencheskaya-zhizn" class="header__navigation-block-item" data-svelte-h="svelte-1vebh7t">Студенческая жизнь</a></li></div> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/sotsialnoye-obespecheniye" ? "page" : void 0,
    0
  )}><a href="/sotsialnoye-obespecheniye" class="header__navigation-block-item" data-svelte-h="svelte-1um0iq8">Социальное обеспечение</a></li></div></li> <li class="${["header__navigation-el", ""].join(" ").trim()}"><a role="button" aria-pressed="false" tabindex="0" class="${["header__navigation-btn", ""].join(" ").trim()}" data-svelte-h="svelte-168j82z">Выпускнику <div class="header__navigation-arrow _icon-btn-arrow"></div></a> <div class="${["header__navigation-block", ""].join(" ").trim()}"><div class="header__navigation-under-block"></div> <div class="header__navigation-item-wrapper"><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/trudoustroystvo" ? "page" : void 0,
    0
  )}><a href="/trudoustroystvo" class="header__navigation-block-item" data-svelte-h="svelte-11vyzkc">Трудоустройство</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/proforiyentatsiya" ? "page" : void 0,
    0
  )}><a href="/proforiyentatsiya" class="header__navigation-block-item" data-svelte-h="svelte-1s2efqn">Профориентация</a></li></div></div></li> <li${add_attribute("aria-current", $page.url.pathname === "/kursy" ? "page" : void 0, 0)}><a href="/kursy" class="header__navigation-btn" data-svelte-h="svelte-hcee5g">образовательные курсы</a></li></ul> <div class="${["header__block", ""].join(" ").trim()}" data-svelte-h="svelte-nm2vdj"><input type="text"> <div class="header__search"><div class="header__search-icon _icon-search"></div></div> <div class="header__btn"><div class="header__btn-icon _icon-eye"></div></div></div> <div role="button" aria-pressed="false" tabindex="0" class="header__menu" data-svelte-h="svelte-m840bg"><div class="header__menu-icon icon-menu"></div></div></div></div></header>`;
});
const footer01 = "/_app/immutable/assets/footer-01.eFhtYdPP.png";
const footer02 = "/_app/immutable/assets/footer-02.mvwEXkvw.png";
const footer03 = "data:image/png;base64,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";
const footer04 = "/_app/immutable/assets/footer-04.aLCq4X8Y.png";
const footer05 = "/_app/immutable/assets/footer-05.34265gyd.png";
const footer06 = "/_app/immutable/assets/footer-06.2_Mk7Qhk.png";
const footer07 = "/_app/immutable/assets/footer-07.tz_Xmsnr.png";
const footer08 = "/_app/immutable/assets/footer-08.olvpPeE0.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer" data-svelte-h="svelte-1tdl8nz"><div class="footer__container _container"><div class="footer__body"><div class="footer__content"><div class="footer__block"><div class="footer__sub">Спонсоры и деятельность</div> <div class="footer__item-block"><div class="footer__item-wrapper"><div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer01, 0)} alt="Partner"></div></div> <div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer02, 0)} alt="Partner"></div></div> <div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer03, 0)} alt="Partner"></div></div> <div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer04, 0)} alt="Partner"></div></div> <div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer05, 0)} alt="Partner"></div></div> <div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer06, 0)} alt="Partner"></div></div> <div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer07, 0)} alt="Partner"></div></div> <div class="footer__item"><div class="footer__item-img"><img${add_attribute("src", footer08, 0)} alt="Partner"></div></div></div></div></div> <div class="footer__block"><div class="footer__info-wrapper"><div class="footer__info"><div class="footer__sub">Адрес</div> <div class="footer__text">678000, РС(Я) Хангаласский улус, г.Покровск, ул.Братьев Ксенофонтовых, д.31</div></div> <div class="footer__info"><div class="footer__sub">Почта</div> <div class="footer__text">pk_pokrovsk@gov14.ru</div></div></div> <div class="footer__info-wrapper"><div class="footer__info"><div class="footer__sub">Номер</div> <div class="footer__text">Факс 8 (41144) 45242, 45046, <span>43867</span></div></div> <div class="footer__info"><div class="footer__sub">Соц. сети</div> <div class="footer__social-wrapper"><a href="https://vk.com/pokrcollege" target="_blank" class="footer__social _icon-vk"></a> <a href="https://t.me/pokr_college" target="_blank" class="footer__social _icon-telegram"></a> <a href="" target="_blank" class="footer__social _icon-ok"></a> <a href="https://discord.gg/gGrgZ6pucT" target="_blank" class="footer__social _icon-ds"></a> <a href="" target="_blank" class="footer__social _icon-rutube"></a></div></div></div></div></div> <div class="footer__bottom"><div class="footer__copyright">© 2000-2023 ГБПОУ РС(Я) &quot;Покровский колледж&quot;</div> <a href="#header"><div class="footer__arrow-wrapper"><div class="footer__arrow _icon-arrow"></div></div></a></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
