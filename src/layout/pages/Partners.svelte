<script>
  import Swiper from "swiper/bundle";
  import "swiper/css/bundle";

  import { onMount } from "svelte";

  import Partners01 from "$lib/images/home/partners-01.jpg";
  import Partners02 from "$lib/images/home/partners-02.jpg";
  import Partners03 from "$lib/images/home/partners-03.jpg";
  import Partners04 from "$lib/images/home/partners-04.jpg";
  import Partners05 from "$lib/images/home/partners-05.jpg";
  import Partners06 from "$lib/images/home/partners-06.jpg";
  import Partners07 from "$lib/images/home/partners-07.jpg";

  onMount(() => {
    const swiper = new Swiper(".partners__content-wrapper", {
      speed: 700,
      slidesPerView: 5.1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".schedule__arrow-next",
        prevEl: ".schedule__arrow-prev",
      },
      pagination: {
        el: ".partners__item-pagination",
        clickable: true,
      },
    });
    swiper.loopDestroy();
  });
</script>

<div class="partners__content-wrapper swiper">
  <div class="partners__item-wrapper swiper-wrapper">
    <div class="partners__item swiper-slide">
      <div class="partners__item-img">
        <img src={Partners01} alt="Partners" />
      </div>
    </div>
    <div class="partners__item swiper-slide">
      <div class="partners__item-img">
        <img src={Partners02} alt="Partners" />
      </div>
    </div>
    <div class="partners__item swiper-slide">
      <div class="partners__item-img">
        <img src={Partners03} alt="Partners" />
      </div>
    </div>
    <div class="partners__item swiper-slide">
      <div class="partners__item-img">
        <img src={Partners04} alt="Partners" />
      </div>
    </div>
    <div class="partners__item swiper-slide">
      <div class="partners__item-img">
        <img src={Partners05} alt="Partners" />
      </div>
    </div>
    <div class="partners__item swiper-slide">
      <div class="partners__item-img">
        <img src={Partners06} alt="Partners" />
      </div>
    </div>
    <div class="partners__item swiper-slide">
      <div class="partners__item-img">
        <img src={Partners07} alt="Partners" />
      </div>
    </div>
  </div>
  <div class="partners__item-pagination-wrapper">
    <div class="partners__item-pagination swiper-pagination" />
  </div>
</div>
