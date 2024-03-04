<script>
  import Swiper from "swiper/bundle";
  import "swiper/css/bundle";

  import { onMount } from "svelte";

  onMount(() => {
    const session = new Swiper(".study__item-content-wrapper", {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".study__session-arrow-next",
        prevEl: ".study__session-arrow-prev",
      },
      pagination: {
        el: ".study__session-pagination",
        clickable: true,
      },
    });
    session.loopDestroy();

    const group = new Swiper(".study__item-block-wrapper-group", {
      speed: 700,
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: ".study__item-group-arrow-next",
        prevEl: ".study__item-group-arrow-prev",
      },
      pagination: {
        el: ".study__item-group-pagination",
        clickable: true,
      },
    });
    group.loopDestroy();
  });

  let selectInclude = '';

  function selectIncludeCheck() {
    if(currentHead == 'head-03') {
      selectInclude = 'include'
    } else {
      selectInclude = ''
    }
  };

  let currentSelect = "";
  let selectTitle = "год публикации";

  let currentHead = "head-01";
  let currentGroup = "group-01";

  const praktikaDate = "22-23";
</script>

<div class="study__head">
  <div class="study__head-block">
    <button
      class={currentHead === "head-01"
        ? "study__head-item active"
        : "study__head-item"}
      on:click={() => (currentHead = "head-01", selectIncludeCheck())}
    >
      Диплом
    </button>
    <button
      class={currentHead === "head-02"
        ? "study__head-item active"
        : "study__head-item"}
      on:click={() => (currentHead = "head-02", selectIncludeCheck())}
    >
      ССК
    </button>
    <button
      class={currentHead === "head-03"
        ? "study__head-item active"
        : "study__head-item"}
      on:click={() => (currentHead = "head-03", selectIncludeCheck())}
    >
      Сессия
    </button>
    <button
      class={currentHead === "head-04"
        ? "study__head-item active"
        : "study__head-item"}
      on:click={() => (currentHead = "head-04", selectIncludeCheck())}
    >
      Практика
    </button>
    <button
      class={currentHead === "head-05"
        ? "study__head-item active"
        : "study__head-item"}
      on:click={() => (currentHead = "head-05", selectIncludeCheck())}
    >
      Занятия
    </button>
  </div>
  <div class="study__head-buttons-wrapper">
    <div
    class={currentSelect === "active" ? `__select ${selectInclude} active` : `__select ${selectInclude}`}
    on:click={() => {
      currentSelect === "active"
        ? (currentSelect = "")
        : (currentSelect = "active");
    }}
  >
    <div class="__select__title" data-default="Option 0">{selectTitle}</div>
    <div class="__select__content">
      <div class="__select_content-wrapper">
        <input
          class="__select__input"
          id="singleSelect0"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2023"), (currentSelect = "");
          }}
        />
        <label for="singleSelect0" class="__select__label">2023</label>
        <input
          id="singleSelect1"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2022"), (currentSelect = "");
          }}
        />
        <label for="singleSelect1" class="__select__label">2022</label>
        <input
          id="singleSelect2"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2021"), (currentSelect = "");
          }}
        />
        <label for="singleSelect2" class="__select__label">2021</label>
        <input
          id="singleSelect3"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2020"), (currentSelect = "");
          }}
        />
        <label for="singleSelect3" class="__select__label">2020</label>
        <input
          id="singleSelect4"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2019"), (currentSelect = "");
          }}
        />
        <label for="singleSelect4" class="__select__label">2019</label>
        <input
          id="singleSelect5"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2018"), (currentSelect = "");
          }}
        />
        <label for="singleSelect5" class="__select__label">2018</label>
        <input
          id="singleSelect6"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2017"), (currentSelect = "");
          }}
        />
        <label for="singleSelect6" class="__select__label">2017</label>
        <input
          id="singleSelect7"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2016"), (currentSelect = "");
          }}
        />
        <label for="singleSelect7" class="__select__label">2016</label>
        <input
          id="singleSelect8"
          class="__select__input"
          type="radio"
          name="singleSelect"
          on:click={() => {
            (selectTitle = "2015"), (currentSelect = "");
          }}
        />
        <label for="singleSelect8" class="__select__label">2015</label>
      </div>
    </div>
  </div>

  <a href="/archive" class={currentHead === 'head-04' ? '__archive active' : '__archive'}>Архив</a>
  </div>
</div>

<div class="study__content-wrapper">
  <div
    class={currentHead === "head-01"
      ? "study__content active"
      : "study__content"}
  >
    <div class="study__title">Порядок выполнения диплома</div>
    <div class="study__item-wrapper">
      <div class="study__item-block">

          <div class="study__item-mb-block">
            <div class="study__item">
              <div class="study__item-title">Рекомендации выполнения диплома</div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                Рекомендации по оформлению презентации
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
          </div>
          <div class="study__item-mb-block">
            <div class="study__item">
              <div class="study__item-title">Нормконтроль</div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item-hidden" />
            <div class="study__item">
              <div class="study__item-title">Титульный лист шаблон</div>
              <div class="study__item-icon _icon-download" />
            </div>
          </div>
      </div>
      <div class="study__item-block">
        <div class="study__item">
          <div class="study__item-title">Рецензия диплома образец</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item">
          <div class="study__item-title">
            Сводный график итоговой государственной аттестации выпускников 2022
            года
          </div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
    </div>
  </div>

  <div
    class={currentHead === "head-02"
      ? "study__content active"
      : "study__content"}
  >
    <div class="study__title">Студенческий спортивный клуб (ССК)</div>
    <div class="study__item-wrapper">
      <div class="study__item-block">
        <div class="study__item-long">
          <div class="study__item-title">
            Годовой план спортивно-оздоровительной работы ГБПОУ «Покровский
            колледж» на 2022—2023 учебный год
          </div>
          <div class="study__item-prepods">
            Руководитель физического воспитания: <span
              >Борисов Руслан Афанасьевич</span
            ><br />
            Преподаватель физической культуры: <span>Иванов Илья Иванович</span>
          </div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-mb-block">
          <div class="study__item">
            <div class="study__item-title">
              Протокол №5 педагогического собрания
            </div>
            <div class="study__item-icon _icon-download" />
          </div>
          <div class="study__item">
            <div class="study__item-title">
              Лицензия Серия 14Л 01 №0000756, рег. № 0377 от 19.11. 2014 г.
            </div>
            <div class="study__item-icon _icon-download" />
          </div>
        </div>
      </div>
      <div class="study__item-block">
        <div class="study__item-mb-block">
          <div class="study__item">
            <div class="study__item-title">
              План работы студенческого спортивного клуба «Дархан» на 2022-23
            </div>
            <div class="study__item-icon _icon-download" />
          </div>
          <div class="study__item">
            <div class="study__item-title">
              Расписание работы спортивных секций в МУ «Дворец спорта» на 2022–23
            </div>
            <div class="study__item-icon _icon-download" />
          </div>
        </div>
        <div class="study__item-mb-block">
          <div class="study__item">
            <div class="study__item-title">
              Приказ № 104-п о создании ССК «Дархан» от 08 июня 2022 г.
            </div>
            <div class="study__item-icon _icon-download" />
          </div>
          <div class="study__item">
            <div class="study__item-title">
              Положение о спортивном клубе «Дархан» ГБПОУ РС (Я) «Покровский
              колледж»
            </div>
            <div class="study__item-icon _icon-download" />
          </div>
        </div>
        <div class="study__item-next">
          <div class="study__item-title">ПОДРОБНЕЕ</div>
        </div>
      </div>
    </div>
  </div>

  <div
    class={currentHead === "head-03"
      ? "study__content active"
      : "study__content"}
  >
    <div class="study__title">Графики сессий</div>
    <div class="study__item-content-wrapper swiper">
      <div class="study__item-content swiper-wrapper">
        <div class="study__item-wrapper swiper-slide">
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2022-23 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2021-22 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2020-21 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График летней сессии 2018—2019 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2020-21 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2020-21 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
        </div>
        <div class="study__item-wrapper swiper-slide">
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2019-20 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2018-19 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2017-19 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График летней сессии 2018—2019 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2020-21 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
            <div class="study__item">
              <div class="study__item-title">
                График зимней сессии 2020-21 учебного года
              </div>
              <div class="study__item-icon _icon-download" />
            </div>
        </div>
      </div>
    </div>
    <div class="study__session-bottom">
      <div class="study__session-pagination-wrapper">
        <div class="study__session-pagination swiper-pagination" />
      </div>
      <div class="study__session-arrow-wrapper">
        <div class="study__session-arrow-prev _icon-arrow" />
        <div class="study__session-arrow-next _icon-arrow" />
      </div>
    </div>
  </div>

  <div
    class={currentHead === "head-04"
      ? "study__content active"
      : "study__content"}
  >
    <div class="study__title">Практика 20{praktikaDate}</div>
    <div class="study__item-wrapper">
      <div class="study__item-block-praktika">
        <div class="study__item-praktika-text">
          Документы для прохождения практики
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">
            Рекомендации по написанию отчета по практике
          </div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Дневник практики</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Отчет</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Отзыв</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div class="study__item-block-wrapper-group swiper">
        <div class="study__item-block-group swiper-wrapper">
          <div
            class={currentGroup === "group-01"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-01")}
          >
            <div class="study__item-title-group" id="group-01">
              Т-21 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-02"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-02")}
          >
            <div class="study__item-title-group" id="group-02">
              Т-22 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-03"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-03")}
          >
            <div class="study__item-title-group" id="group-03">
              ОиТЗИ-20 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-04"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-04")}
          >
            <div class="study__item-title-group" id="group-04">
              ОиТЗИ-21 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-05"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-05")}
          >
            <div class="study__item-title-group" id="group-05">
              ИСиП-22 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-06"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-06")}
          >
            <div class="study__item-title-group" id="group-06">
              ИСиП-21 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-07"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-07")}
          >
            <div class="study__item-title-group" id="group-07">
              ИСиП-20 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-08"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-08")}
          >
            <div class="study__item-title-group" id="group-08">
              КСиК-22 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-09"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-09")}
          >
            <div class="study__item-title-group" id="group-09">
              ИСиП-19 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div
            class={currentGroup === "group-10"
              ? "study__item-group swiper-slide active"
              : "study__item-group swiper-slide"}
            on:click={() => (currentGroup = "group-10")}
          >
            <div class="study__item-title-group" id="group-010">
              ОиТЗИ-19 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
        </div>
      </div>

      <div
        class={currentGroup === "group-01"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-02"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-03"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-04"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-05"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-06"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-07"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-08"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-09"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>
      <div
        class={currentGroup === "group-10"
          ? "study__item-content-group active"
          : "study__item-content-group"}
      >
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание по практике</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">УП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">ПП МДК 03.01</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание УП МДК 03.03</div>
          <div class="study__item-icon _icon-download" />
        </div>
        <div class="study__item-praktika">
          <div class="study__item-title-praktika">Задание ПП МДК 03.03.</div>
          <div class="study__item-icon _icon-download" />
        </div>
      </div>

      <div class="study__item-group-bottom">
        <div class="study__item-group-pagination-wrapper">
          <div class="study__item-group-pagination swiper-pagination" />
        </div>
        <div class="study__item-group-arrow-wrapper">
          <div class="study__item-group-arrow-prev _icon-arrow" />
          <div class="study__item-group-arrow-next _icon-arrow" />
        </div>
      </div>
    </div>
  </div>

  <div
    class={currentHead === "head-05"
      ? "study__content active"
      : "study__content"}
  >
    <div class="study__title">Занятия</div>
  </div>
</div>
