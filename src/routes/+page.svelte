<script>
  import News from "../layout/News.svelte";
  import Contact from "../layout/Contact.svelte";
  import Partners from "../layout/pages/Partners.svelte";
  import Preloader from '../layout/Preloader.svelte';
  import Directions from "../layout/Directions.svelte";

  import Carousel01 from "$lib/images/home/carousel-01.jpg";
  import Carousel02 from "$lib/images/home/carousel-02.jpg";
  import Carousel03 from "$lib/images/home/carousel-03.jpg";
  import Carousel04 from "$lib/images/home/carousel-04.jpg";

  import Home from "$lib/images/home/home-bg.jpg";
</script>

<Preloader />

<section class="carousel">
  <div class="carousel__body">
    <div class="carousel__content">
      <div class="carousel__content-wrapper">
        <div class="carousel__item-wrapper">
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel01} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel02} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-title">Ваша реклама</div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel03} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel04} alt="Carousel" />
            </div>
          </div>
        </div>
        <div class="carousel__item-wrapper">
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel01} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel02} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-title">Ваша реклама</div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel03} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel04} alt="Carousel" />
            </div>
          </div>
        </div>
        <div class="carousel__item-wrapper">
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel01} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel02} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-title">Ваша реклама</div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel03} alt="Carousel" />
            </div>
          </div>
          <div class="carousel__item">
            <div class="carousel__item-img">
              <img src={Carousel04} alt="Carousel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home" id="home">
  <div class="home__container _container">
    <div class="home__body">
      <div class="home__content">
        <div class="home__block-title">
          <div class="home__title">КЦТ «Айтыын»</div>
          <div class="home__text">
            Государственное бюджетное профессиональное образовательное
            учреждение Республика Саха (Якутия) "Айтыын"
          </div>
        </div>
        <div class="home__block">
          <div class="home__btn-wrapper">
            <div class="home__btn">
              <a href="#directions" class="home__arrow _icon-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="home__img">
    <img src={Home} alt="Home" />
  </div>
</section>

<Directions />

<section class="about">
  <div class="about__container _container">
    <div class="about__body">
      <div class="about__sub">О нас</div>
      <div class="about__title">Наш колледж</div>
      <div class="about__text">
        Учебное заведение, призванное обеспечить студентам всестороннее и
        разностороннее образование. Наши опытные преподаватели и сотрудники
        стремятся создать динамичную и благоприятную учебную среду,
        способствующую академическому совершенству и личностному росту.
      </div>
    </div>
    <div class="about__decore">КЦТ «Айтыын» КЦТ «Айтыын»</div>
  </div>
</section>

<News />

<section class="partners">
  <div class="partners__container _container">
    <div class="partners__body">
      <div class="partners__title">Партнеры</div>
      <Partners />
    </div>
  </div>
</section>

<Contact />
