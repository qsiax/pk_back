<script>
  import Swiper from "swiper/bundle";
  import "swiper/css/bundle";

  import { onMount } from "svelte";

  onMount(() => {
    const swiper = new Swiper(".schedule__slider", {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        nextEl: ".schedule__arrow-next",
        prevEl: ".schedule__arrow-prev",
      },
      pagination: {
        el: ".schedule__pagination",
        clickable: true,
      },
    });
    swiper.loopDestroy();
  });
</script>

<div class="schedule__slider swiper">
  <div class="schedule__slider-wrapper swiper-wrapper">
    <div class="schedule__slide swiper-slide">
      <div class="schedule__item-main">
        <a href="/source/schedule/6.02-11.02.23.xlsx">
          <div class="schedule__item">
            <div class="schedule__item-title">06 февраля — 11 февраля 2023</div>
            <div class="schedule__icon _icon-download" />
          </div>
        </a>
      </div>
      <div class="schedule__item-content">
        <div class="schedule__item-wrapper">
          <a href="/source/schedule/6.02-11.02.23.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">
                06 февраля — 11 февраля 2023
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/30.01-4.02.23.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">30 января — 4 февраля 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/23.01-28.01.2023.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">23 января — 28 января 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/16.01-21.01.23.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">16 января — 21 января 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">09 января — 14 января 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
        </div>
        <div class="schedule__item-wrapper">
          <a href="/source/schedule/19.12 по 24.12.22.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">
                19 декабря — 24 декабря 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/12.12-17.12.22.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">
                12 декабря — 17 декабря 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">
                05 февраля — 10 февраля 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">
                28 февраля — 03 февраля 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">
                21 февраля — 26 февраля 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="schedule__slide swiper-slide">
      <div class="schedule__item-main">
        <a href="/source/schedule/6.02-11.02.23.xlsx">
          <div class="schedule__item">
            <div class="schedule__item-title">06 февраля — 11 февраля 2023</div>
            <div class="schedule__icon _icon-download" />
          </div>
        </a>
      </div>
      <div class="schedule__item-content">
        <div class="schedule__item-wrapper">
          <a href="/source/schedule/6.02-11.02.23.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">
                06 февраля — 11 февраля 2023
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/30.01-4.02.23.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">30 января — 4 февраля 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/23.01-28.01.2023.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">23 января — 28 января 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/16.01-21.01.23.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">16 января — 21 января 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">09 января — 14 января 2023</div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
        </div>
        <div class="schedule__item-wrapper">
          <a href="/source/schedule/19.12 по 24.12.22.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">
                19 декабря — 24 декабря 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="/source/schedule/12.12-17.12.22.xlsx">
            <div class="schedule__item">
              <div class="schedule__item-title">
                12 декабря — 17 декабря 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">
                05 февраля — 10 февраля 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">
                28 февраля — 03 февраля 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
          <a href="#">
            <div class="schedule__item">
              <div class="schedule__item-title">
                21 февраля — 26 февраля 2022
              </div>
              <div class="schedule__icon _icon-download" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="schedule__arrow-wrapper">
    <div class="schedule__arrow-prev _icon-arrow" />
    <div class="schedule__arrow-next _icon-arrow" />
  </div>
  <div class="schedule__slide-bottom">
    <div class="schedule__pagination swiper-pagination" />
  </div>
</div>
