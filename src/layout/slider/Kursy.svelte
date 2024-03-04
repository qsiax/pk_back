<script>
  import Swiper from "swiper/bundle";
  import "swiper/css/bundle";

  import { onMount } from "svelte";

  onMount(() => {
    const swiper = new Swiper(".social__slide", {
      speed: 600,
      slidesPerView: 5,
      spaceBetween: 20,

      navigation: {
        nextEl: ".social__slide-arrow-next",
        prevEl: ".social__slide-arrow-prev",
      },
    });
    swiper.loopDestroy();
  });
</script>

<section class="social" id="social">
  <div class="social__container _container">
    <div class="social__body">
      <div class="social__title">Рабочие профессии</div>
      <div class="social__content">
        <div class="social__slide swiper">
          <div class="social__item-wrapper swiper-wrapper">
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Слесарь-сантехник</div>
              <div class="social__item-text">
                Сумма: <span>7 500 рб</span><br />
                Срок: <span>2 месяца</span>
              </div>
              <a href="#feedback" class="social__item-btn btn"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Токарь</div>
              <div class="social__item-text">
                Сумма: <span>18 000 рб</span><br />
                Срок: <span>5 месяцев</span>
              </div>
              <a href="#feedback" class="social__item-btn btn"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Стропальщик</div>
              <div class="social__item-text">
                Сумма: <span>4 500 рб</span><br />
                Срок: <span>108 часов</span>
              </div>
              <a href="#feedback" class="social__item-btn btn"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Портной</div>
              <div class="social__item-text">
                Сумма: <span>6 500 рб</span><br />
                Срок: <span>3 месяца</span>
              </div>
              <a href="#feedback" class="social__item-btn btn"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Швея</div>
              <div class="social__item-text">
                Сумма: <span>7 000 рб</span><br />
                Срок: <span>3 месяца</span>
              </div>
              <a href="#feedback" class="social__item-btn btn"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="social">
  <div class="social__container _container">
    <div class="social__body">
      <div class="social__title">Краткосрочные курсы</div>
      <div class="social__content">
        <div class="social__head">
          <div class="social__slide-num" />
          <div class="social__slide-arrow-wrapper">
            <div class="social__slide-arrow-prev _icon-arrow" />
            <div class="social__slide-arrow-next _icon-arrow" />
          </div>
        </div>
        <div class="social__slide swiper">
          <div class="social__slide-wrapper swiper-wrapper">
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Цифровая грамотность</div>
              <div class="social__item-text">
                Сумма: <span>1 500 рб</span><br />
                Срок: <span>16 часов</span>
              </div>
              <a href="#feedback" class="social__item-btn btn mt66"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">
                Информационная <br />
                безопасность
              </div>
              <div class="social__item-text">
                Сумма: <span>4 500 рб</span><br />
                Срок: <span>72 часов</span>
              </div>
              <a href="#feedback" class="social__item-btn btn mt66"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Создание сайтов</div>
              <div class="social__item-text">
                Сумма: <span>4 500 рб</span><br />
                Срок: <span>32 часов</span>
              </div>
              <a href="#feedback" class="social__item-btn btn"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">
                Основы компьютерной грамотности
              </div>
              <div class="social__item-text">
                Сумма: <span>4 300 рб</span><br />
                Срок: <span>16 часов</span>
              </div>
              <a href="#feedback" class="social__item-btn btn mt66"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Судоводитель</div>
              <div class="social__item-text">
                Сумма: <span>10 000 рб</span><br />
                Объем: <span>...</span>
              </div>
              <a href="#feedback" class="social__item-btn btn"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">Ускоренный курс "Портной"</div>
              <div class="social__item-text">
                Сумма: <span> 2 500 рб</span><br />
                Срок: <span>18 часов</span>
              </div>
              <a href="#feedback" class="social__item-btn btn mt66"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
            <div class="social__item swiper-slide">
              <div class="social__item-sub">Профессия</div>
              <div class="social__item-title">
                Оказание первой доврачебной помощи
              </div>
              <div class="social__item-text">
                Сумма: <span> 1 000 рб</span><br />
                Срок: <span>16 часов</span>
              </div>
              <a href="#feedback" class="social__item-btn btn mt66"
                >Записаться <div
                  class="social__item-btn-arrow _icon-arrow"
                /></a
              >
            </div>
          </div>
          <div class="social__item swiper-slide slide-hidden" />
          <div class="social__item swiper-slide slide-hidden" />
          <div class="social__item swiper-slide slide-hidden" />
          <div class="social__item swiper-slide slide-hidden" />
        </div>
      </div>
    </div>
  </div>
</section>
