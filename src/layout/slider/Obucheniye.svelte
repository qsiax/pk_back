<script>
  import Swiper from "swiper/bundle";
  import "swiper/css/bundle";

  import { onMount } from "svelte";

  onMount(() => {
    const swiper = new Swiper(".study__item-content-wrapper", {
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
    swiper.loopDestroy();
  });

          // SELECT
        //   const selectSingle = document.querySelector('.__select');
        // const selectSingle_title = selectSingle.querySelector('.__select__title');
        // const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

        // const archiveBtn = document.querySelector('.__archive');

        // selectSingle_title.addEventListener('click', () => {
        // if ('active' === selectSingle.getAttribute('data-state')) {
        //     selectSingle.setAttribute('data-state', '');
        // } else {
        //     selectSingle.setAttribute('data-state', 'active');
        // }
        // });

        // for (let i = 0; i < selectSingle_labels.length; i++) {
        // selectSingle_labels[i].addEventListener('click', (evt) => {
        //     selectSingle_title.textContent = evt.target.textContent;
        //     selectSingle.setAttribute('data-state', '');
        // });
        // }

        // HEAD
        // onMount(() => {
        //   let element01 = document.querySelector("#study-01"),
        //     element02 = document.querySelector("#study-02"),
        //     element03 = document.querySelector("#study-03"),
        //     element04 = document.querySelector("#study-04"),
        //     element05 = document.querySelector("#study-05");

        // let elementBody01 = document.querySelector('#study-content-01'),
        //     elementBody02 = document.querySelector('#study-content-02'),
        //     elementBody03 = document.querySelector('#study-content-03'),
        //     elementBody04 = document.querySelector('#study-content-04'),
        //     elementBody05 = document.querySelector('#study-content-05');

        // function studyClick01() {
        //         element01.classList.add('active')
        //         elementBody01.classList.add('active')
        //         selectSingle.classList.remove('include')
        //         archiveBtn.classList.remove('active')

        //         element02.classList.remove('active')
        //         element03.classList.remove('active')
        //         element04.classList.remove('active')
        //         element05.classList.remove('active')

        //         elementBody02.classList.remove('active')
        //         elementBody03.classList.remove('active')
        //         elementBody04.classList.remove('active')
        //         elementBody05.classList.remove('active')

        // }

        // function studyClick02() {
        //         element02.classList.add('active')
        //         elementBody02.classList.add('active')
        //         selectSingle.classList.remove('include')

        //         element01.classList.remove('active')
        //         element03.classList.remove('active')
        //         element04.classList.remove('active')
        //         element05.classList.remove('active')

        //         elementBody01.classList.remove('active')
        //         elementBody03.classList.remove('active')
        //         elementBody04.classList.remove('active')
        //         elementBody05.classList.remove('active')

        // }

        // function studyClick03() {
        //         element03.classList.add('active')
        //         elementBody03.classList.add('active')
        //         selectSingle.classList.add('include')
        //         archiveBtn.classList.remove('active')

        //         element02.classList.remove('active')
        //         element01.classList.remove('active')
        //         element04.classList.remove('active')
        //         element05.classList.remove('active')

        //         elementBody02.classList.remove('active')
        //         elementBody01.classList.remove('active')
        //         elementBody04.classList.remove('active')
        //         elementBody05.classList.remove('active')

        // }

        // function studyClick04() {
        //         element04.classList.add('active')
        //         elementBody04.classList.add('active')
        //         selectSingle.classList.remove('include')
        //         archiveBtn.classList.add('active')

        //         element02.classList.remove('active')
        //         element03.classList.remove('active')
        //         element01.classList.remove('active')
        //         element05.classList.remove('active')

        //         elementBody02.classList.remove('active')
        //         elementBody03.classList.remove('active')
        //         elementBody01.classList.remove('active')
        //         elementBody05.classList.remove('active')
        // }

        // function studyClick05() {
        //         element05.classList.add('active')
        //         elementBody05.classList.add('active')
        //         selectSingle.classList.remove('include')
        //         archiveBtn.classList.remove('active')

        //         element02.classList.remove('active')
        //         element03.classList.remove('active')
        //         element04.classList.remove('active')
        //         element01.classList.remove('active')

        //         elementBody02.classList.remove('active')
        //         elementBody03.classList.remove('active')
        //         elementBody04.classList.remove('active')
        //         elementBody01.classList.remove('active')
        // }
        
        // GROUP
        // const groupElementBody01 = document.querySelector('#group-body01'),
        //     groupElementBody02 = document.querySelector('#group-body02'),
        //     groupElementBody03 = document.querySelector('#group-body03'),
        //     groupElementBody04 = document.querySelector('#group-body04'),
        //     groupElementBody05 = document.querySelector('#group-body05'),
        //     groupElementBody06 = document.querySelector('#group-body06'),
        //     groupElementBody07 = document.querySelector('#group-body07'),
        //     groupElementBody08 = document.querySelector('#group-body08'),
        //     groupElementBody09 = document.querySelector('#group-body09'),
        //     groupElementBody010 = document.querySelector('#group-body010');


        // let groupTrigger = document.getElementsByClassName("study__item-group");
        // for (let i = 0; i < groupTrigger.length; i++) {
        // groupTrigger[i].addEventListener('click', function() { 

        //     for (let i = 0; i < groupTrigger.length; i++) {
        //     groupTrigger[i].classList.remove('active');
        //     }
        //     this.classList.add('active');

        //     if(groupTrigger[0].classList.contains('active')) {
        //         groupElementBody01.classList.add('active')
        //     } else {
        //         groupElementBody01.classList.remove('active')
        //     }

        //     if(groupTrigger[1].classList.contains('active')) {
        //         groupElementBody02.classList.add('active')
        //     } else {
        //         groupElementBody02.classList.remove('active')
        //     }

        //     if(groupTrigger[2].classList.contains('active')) {
        //         groupElementBody03.classList.add('active')
        //     } else {
        //         groupElementBody03.classList.remove('active')
        //     }

        //     if(groupTrigger[3].classList.contains('active')) {
        //         groupElementBody04.classList.add('active')
        //     } else {
        //         groupElementBody04.classList.remove('active')
        //     }

        //     if(groupTrigger[4].classList.contains('active')) {
        //         groupElementBody05.classList.add('active')
        //     } else {
        //         groupElementBody05.classList.remove('active')
        //     }

        //     if(groupTrigger[5].classList.contains('active')) {
        //         groupElementBody06.classList.add('active')
        //     } else {
        //         groupElementBody06.classList.remove('active')
        //     }

        //     if(groupTrigger[6].classList.contains('active')) {
        //         groupElementBody07.classList.add('active')
        //     } else {
        //         groupElementBody07.classList.remove('active')
        //     }

        //     if(groupTrigger[7].classList.contains('active')) {
        //         groupElementBody08.classList.add('active')
        //     } else {
        //         groupElementBody08.classList.remove('active')
        //     }

        //     if(groupTrigger[8].classList.contains('active')) {
        //         groupElementBody09.classList.add('active')
        //     } else {
        //         groupElementBody09.classList.remove('active')
        //     }

        //     if(groupTrigger[9].classList.contains('active')) {
        //         groupElementBody010.classList.add('active')
        //     } else {
        //         groupElementBody010.classList.remove('active')
        //     }

        // })
        // }
        // }
</script>

<div class="study__head">
  <div class="study__head-block">
    <div class="study__head-item active" id="study-01" on:click={() => studyClick01()}>
      Диплом
    </div>
    <div class="study__head-item" id="study-02" on:click={() => studyClick02()}>
      ССК
    </div>
    <div class="study__head-item" id="study-03" on:click={() => studyClick03()}>
      Сессия
    </div>
    <div class="study__head-item" id="study-04" on:click={() => studyClick04()}>
      Практика
    </div>
    <div class="study__head-item" id="study-05" on:click={() => studyClick05()}>
      Занятия
    </div>
  </div>
  <div class="__select" data-state="">
    <div class="__select__title" data-default="Option 0">год публикации</div>
    <div class="__select__content">
      <div class="__select_content-wrapper">
        <input
          id="singleSelect0"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect0" class="__select__label">2023</label>
        <input
          id="singleSelect1"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect1" class="__select__label">2022</label>
        <input
          id="singleSelect2"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect2" class="__select__label">2021</label>
        <input
          id="singleSelect3"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect3" class="__select__label">2020</label>
        <input
          id="singleSelect4"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect4" class="__select__label">2019</label>
        <input
          id="singleSelect5"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect5" class="__select__label">2018</label>
        <input
          id="singleSelect6"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect6" class="__select__label">2017</label>
        <input
          id="singleSelect7"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect7" class="__select__label">2016</label>
        <input
          id="singleSelect8"
          class="__select__input"
          type="radio"
          name="singleSelect"
        />
        <label for="singleSelect8" class="__select__label">2015</label>
      </div>
    </div>
  </div>

  <a href="/archive.html" class="__archive">Архив</a>
</div>

<div class="study__content-wrapper">
  <div class="study__content active" id="study-content-01">
    <div class="study__title">Порядок выполнения диплома</div>
    <div class="study__item-wrapper">
      <div class="study__item-block">
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

  <div class="study__content" id="study-content-02">
    <div class="study__title">Студенческий спортивный клуб (ССК)</div>
    <div class="study__item-wrapper">
      <div class="study__item-block">
        <div class="study__item-long">
          <div class="study__item-title">
            Годовой план спортивно-оздоровительной работы ГБПОУ «Покровский
            колледж» на 2022—2023 учебный год)
          </div>
          <div class="study__item-prepods">
            Руководитель физического воспитания: <span
              >Борисов Руслан Афанасьевич</span
            ><br />
            Преподаватель физической культуры: <span>Иванов Илья Иванович</span>
          </div>
          <div class="study__item-icon _icon-download" />
        </div>
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
      <div class="study__item-block">
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
        <div class="study__item-next">
          <div class="study__item-title">ПОДРОБНЕЕ</div>
        </div>
      </div>
    </div>
  </div>

  <div class="study__content" id="study-content-03">
    <div class="study__title">Графики сессий</div>
    <div class="study__item-content-wrapper swiper">
      <div class="study__item-content swiper-wrapper">
        <div class="study__item-wrapper swiper-slide">
          <div class="study__item-block">
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
          </div>
          <div class="study__item-block">
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
        <div class="study__item-wrapper swiper-slide">
          <div class="study__item-block">
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
          </div>
          <div class="study__item-block">
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

  <div class="study__content" id="study-content-04">
    <div class="study__title">Практика 2022-23</div>
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
          <div class="study__item-group swiper-slide active">
            <div class="study__item-title-group" id="group-01">
              Т-21 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-02">
              Т-22 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-03">
              ОиТЗИ-20 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-04">
              ОиТЗИ-21 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-05">
              ИСиП-22 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-06">
              ИСиП-21 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-07">
              ИСиП-20 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-08">
              КСиК-22 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-09">
              ИСиП-19 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
          <div class="study__item-group swiper-slide">
            <div class="study__item-title-group" id="group-010">
              ОиТЗИ-19 <div class="study__item-title-group-icon _icon-arrow" />
            </div>
          </div>
        </div>
      </div>

      <div class="study__item-content-group active" id="group-body01">
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

      <div class="study__item-content-group" id="group-body02">
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

      <div class="study__item-content-group" id="group-body03">
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

      <div class="study__item-content-group" id="group-body04">
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

      <div class="study__item-content-group" id="group-body05">
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

      <div class="study__item-content-group" id="group-body06">
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

      <div class="study__item-content-group" id="group-body07">
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

      <div class="study__item-content-group" id="group-body08">
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

      <div class="study__item-content-group" id="group-body09">
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

      <div class="study__item-content-group" id="group-body010">
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

  <div class="study__content" id="study-content-05">
    <div class="study__title">Занятия</div>
  </div>
</div>
