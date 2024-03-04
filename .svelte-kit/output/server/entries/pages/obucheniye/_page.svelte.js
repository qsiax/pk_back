import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import "swiper/bundle";
/* empty css                            */
const praktikaDate = "22-23";
const Obucheniye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectInclude = "";
  let selectTitle = "год публикации";
  return `<div class="study__head"><div class="study__head-block"><button${add_attribute(
    "class",
    "study__head-item active",
    0
  )}>Диплом</button> <button${add_attribute(
    "class",
    "study__head-item",
    0
  )}>ССК</button> <button${add_attribute(
    "class",
    "study__head-item",
    0
  )}>Сессия</button> <button${add_attribute(
    "class",
    "study__head-item",
    0
  )}>Практика</button> <button${add_attribute(
    "class",
    "study__head-item",
    0
  )}>Занятия</button></div> <div class="study__head-buttons-wrapper"><div${add_attribute(
    "class",
    `__select ${selectInclude}`,
    0
  )}><div class="__select__title" data-default="Option 0">${escape(selectTitle)}</div> <div class="__select__content"><div class="__select_content-wrapper"><input class="__select__input" id="singleSelect0" type="radio" name="singleSelect"> <label for="singleSelect0" class="__select__label" data-svelte-h="svelte-7wabqq">2023</label> <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect1" class="__select__label" data-svelte-h="svelte-h9a3ya">2022</label> <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect2" class="__select__label" data-svelte-h="svelte-k5gpva">2021</label> <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect3" class="__select__label" data-svelte-h="svelte-1yqe57y">2020</label> <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect4" class="__select__label" data-svelte-h="svelte-1sw4syx">2019</label> <input id="singleSelect5" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect5" class="__select__label" data-svelte-h="svelte-1a29rmh">2018</label> <input id="singleSelect6" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect6" class="__select__label" data-svelte-h="svelte-raffp">2017</label> <input id="singleSelect7" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect7" class="__select__label" data-svelte-h="svelte-1k0r8qd">2016</label> <input id="singleSelect8" class="__select__input" type="radio" name="singleSelect"> <label for="singleSelect8" class="__select__label" data-svelte-h="svelte-1ve5fi1">2015</label></div></div></div> <a href="/archive"${add_attribute(
    "class",
    "__archive",
    0
  )}>Архив</a></div></div> <div class="study__content-wrapper"><div${add_attribute(
    "class",
    "study__content active",
    0
  )}><div class="study__title" data-svelte-h="svelte-1t0gmzh">Порядок выполнения диплома</div> <div class="study__item-wrapper" data-svelte-h="svelte-3tq2kj"><div class="study__item-block"><div class="study__item-mb-block"><div class="study__item"><div class="study__item-title">Рекомендации выполнения диплома</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">Рекомендации по оформлению презентации</div> <div class="study__item-icon _icon-download"></div></div></div> <div class="study__item-mb-block"><div class="study__item"><div class="study__item-title">Нормконтроль</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-hidden"></div> <div class="study__item"><div class="study__item-title">Титульный лист шаблон</div> <div class="study__item-icon _icon-download"></div></div></div></div> <div class="study__item-block"><div class="study__item"><div class="study__item-title">Рецензия диплома образец</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">Сводный график итоговой государственной аттестации выпускников 2022
            года</div> <div class="study__item-icon _icon-download"></div></div></div></div></div> <div${add_attribute(
    "class",
    "study__content",
    0
  )}><div class="study__title" data-svelte-h="svelte-hs5u2p">Студенческий спортивный клуб (ССК)</div> <div class="study__item-wrapper" data-svelte-h="svelte-1p10tah"><div class="study__item-block"><div class="study__item-long"><div class="study__item-title">Годовой план спортивно-оздоровительной работы ГБПОУ «Покровский
            колледж» на 2022—2023 учебный год</div> <div class="study__item-prepods">Руководитель физического воспитания: <span>Борисов Руслан Афанасьевич</span><br>
            Преподаватель физической культуры: <span>Иванов Илья Иванович</span></div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-mb-block"><div class="study__item"><div class="study__item-title">Протокол №5 педагогического собрания</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">Лицензия Серия 14Л 01 №0000756, рег. № 0377 от 19.11. 2014 г.</div> <div class="study__item-icon _icon-download"></div></div></div></div> <div class="study__item-block"><div class="study__item-mb-block"><div class="study__item"><div class="study__item-title">План работы студенческого спортивного клуба «Дархан» на 2022-23</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">Расписание работы спортивных секций в МУ «Дворец спорта» на 2022–23</div> <div class="study__item-icon _icon-download"></div></div></div> <div class="study__item-mb-block"><div class="study__item"><div class="study__item-title">Приказ № 104-п о создании ССК «Дархан» от 08 июня 2022 г.</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">Положение о спортивном клубе «Дархан» ГБПОУ РС (Я) «Покровский
              колледж»</div> <div class="study__item-icon _icon-download"></div></div></div> <div class="study__item-next"><div class="study__item-title">ПОДРОБНЕЕ</div></div></div></div></div> <div${add_attribute(
    "class",
    "study__content",
    0
  )}><div class="study__title" data-svelte-h="svelte-8nijum">Графики сессий</div> <div class="study__item-content-wrapper swiper" data-svelte-h="svelte-1licv81"><div class="study__item-content swiper-wrapper"><div class="study__item-wrapper swiper-slide"><div class="study__item"><div class="study__item-title">График зимней сессии 2022-23 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2021-22 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2020-21 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График летней сессии 2018—2019 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2020-21 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2020-21 учебного года</div> <div class="study__item-icon _icon-download"></div></div></div> <div class="study__item-wrapper swiper-slide"><div class="study__item"><div class="study__item-title">График зимней сессии 2019-20 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2018-19 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2017-19 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График летней сессии 2018—2019 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2020-21 учебного года</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item"><div class="study__item-title">График зимней сессии 2020-21 учебного года</div> <div class="study__item-icon _icon-download"></div></div></div></div></div> <div class="study__session-bottom" data-svelte-h="svelte-te8sqv"><div class="study__session-pagination-wrapper"><div class="study__session-pagination swiper-pagination"></div></div> <div class="study__session-arrow-wrapper"><div class="study__session-arrow-prev _icon-arrow"></div> <div class="study__session-arrow-next _icon-arrow"></div></div></div></div> <div${add_attribute(
    "class",
    "study__content",
    0
  )}><div class="study__title">Практика 20${escape(praktikaDate)}</div> <div class="study__item-wrapper"><div class="study__item-block-praktika" data-svelte-h="svelte-h0g4ay"><div class="study__item-praktika-text">Документы для прохождения практики</div> <div class="study__item-praktika"><div class="study__item-title-praktika">Рекомендации по написанию отчета по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika"><div class="study__item-title-praktika">Дневник практики</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika"><div class="study__item-title-praktika">Отчет</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika"><div class="study__item-title-praktika">Отзыв</div> <div class="study__item-icon _icon-download"></div></div></div> <div class="study__item-block-wrapper-group swiper"><div class="study__item-block-group swiper-wrapper"><div${add_attribute(
    "class",
    "study__item-group swiper-slide active",
    0
  )}><div class="study__item-title-group" id="group-01" data-svelte-h="svelte-1me4fad">Т-21 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-02" data-svelte-h="svelte-kwsuhr">Т-22 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-03" data-svelte-h="svelte-10mx6sr">ОиТЗИ-20 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-04" data-svelte-h="svelte-1or735z">ОиТЗИ-21 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-05" data-svelte-h="svelte-srxjys">ИСиП-22 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-06" data-svelte-h="svelte-1alevrg">ИСиП-21 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-07" data-svelte-h="svelte-7zsfh0">ИСиП-20 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-08" data-svelte-h="svelte-fiefvw">КСиК-22 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-09" data-svelte-h="svelte-pi2ufi">ИСиП-19 <div class="study__item-title-group-icon _icon-arrow"></div></div></div> <div${add_attribute(
    "class",
    "study__item-group swiper-slide",
    0
  )}><div class="study__item-title-group" id="group-010" data-svelte-h="svelte-z6votn">ОиТЗИ-19 <div class="study__item-title-group-icon _icon-arrow"></div></div></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group active",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div${add_attribute(
    "class",
    "study__item-content-group",
    0
  )}><div class="study__item-praktika" data-svelte-h="svelte-1xcmj4c"><div class="study__item-title-praktika">Задание по практике</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1ncts3o"><div class="study__item-title-praktika">УП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1oropug"><div class="study__item-title-praktika">ПП МДК 03.01</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1exafpv"><div class="study__item-title-praktika">Задание УП МДК 03.03</div> <div class="study__item-icon _icon-download"></div></div> <div class="study__item-praktika" data-svelte-h="svelte-1gi8elz"><div class="study__item-title-praktika">Задание ПП МДК 03.03.</div> <div class="study__item-icon _icon-download"></div></div></div> <div class="study__item-group-bottom" data-svelte-h="svelte-1ro1pwl"><div class="study__item-group-pagination-wrapper"><div class="study__item-group-pagination swiper-pagination"></div></div> <div class="study__item-group-arrow-wrapper"><div class="study__item-group-arrow-prev _icon-arrow"></div> <div class="study__item-group-arrow-next _icon-arrow"></div></div></div></div></div> <div${add_attribute(
    "class",
    "study__content",
    0
  )}><div class="study__title" data-svelte-h="svelte-daftro">Занятия</div></div></div>`;
});
let nameMap = "Студенту -";
let namePage = "Обучение";
var heading = "Все для студента";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-pckv2p_START -->${$$result.title = `<title>Все для студента</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-pckv2p_END -->`, ""} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      pageMapName: nameMap,
      pageName: namePage,
      pageHeading: heading
    },
    {},
    {}
  )} <section class="study"><div class="study__container _container"><div class="study__body">${validate_component(Obucheniye, "Obucheniye").$$render($$result, {}, {}, {})}</div></div></section>`;
});
export {
  Page as default
};
