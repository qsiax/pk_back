<script>
  import Swiper from "swiper/bundle";
  import "swiper/css/bundle";

  import { onMount } from "svelte";

  import Gallery01 from "$lib/images/pages/osnovnyye-svedeniya/01.png";
  import Gallery02 from "$lib/images/pages/osnovnyye-svedeniya/02.png";
  import Gallery03 from "$lib/images/pages/osnovnyye-svedeniya/03.png";
  import Gallery04 from "$lib/images/pages/osnovnyye-svedeniya/04.png";
  import Gallery05 from "$lib/images/pages/osnovnyye-svedeniya/05.png";

  onMount(() => {
    const swiper = new Swiper(".basic__item-wrapper-gallery", {
      speed: 700,
      slidesPerView: 2.5,
      spaceBetween: 20,
    });
    swiper.loopDestroy();
  });
</script>

<div class="basic__item-wrapper-gallery swiper">
  <div class="basic__item-block-gallery swiper-wrapper">
    <div class="basic__item-gallery swiper-slide">
      <img src={Gallery01} alt="Gallery" />
    </div>
    <div class="basic__item-gallery swiper-slide">
      <img src={Gallery02} alt="Gallery" />
    </div>
    <div class="basic__item-gallery swiper-slide">
      <img src={Gallery03} alt="Gallery" />
    </div>
    <div class="basic__item-gallery swiper-slide">
      <img src={Gallery04} alt="Gallery" />
    </div>
    <div class="basic__item-gallery swiper-slide">
      <img src={Gallery05} alt="Gallery" />
    </div>
  </div>
</div>
