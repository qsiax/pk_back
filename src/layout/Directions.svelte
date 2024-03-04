<script>
      import Directions from "$lib/images/home/directions.jpg";
      import { onMount } from "svelte";
      onMount(() => {
        function spoiler() {
            const item01 = document.querySelector('#item-01');
            const item02 = document.querySelector('#item-02');
            const item03 = document.querySelector('#item-03');
            const item04 = document.querySelector('#item-04');

            const itemBlock01 = document.querySelector('#item-block-01')
            const itemBlock02 = document.querySelector('#item-block-02')
            const itemBlock03 = document.querySelector('#item-block-03')
            const itemBlock04 = document.querySelector('#item-block-04')

            item01.addEventListener('click', () => { 
                item01.classList.toggle('active');
                itemBlock01.classList.toggle('active');

                item02.classList.remove('active');
                itemBlock02.classList.remove('active');

                item03.classList.remove('active');
                itemBlock03.classList.remove('active');

                item04.classList.remove('active');
                itemBlock04.classList.remove('active');
            })

            item02.addEventListener('click', () => {
                item02.classList.toggle('active');
                itemBlock02.classList.toggle('active');

                item01.classList.remove('active');
                itemBlock01.classList.remove('active');

                item03.classList.remove('active');
                itemBlock03.classList.remove('active');

                item04.classList.remove('active');
                itemBlock04.classList.remove('active');
            })

            item03.addEventListener('click', () => {
                item03.classList.toggle('active');
                itemBlock03.classList.toggle('active');

                item02.classList.remove('active');
                itemBlock02.classList.remove('active');

                item01.classList.remove('active');
                itemBlock01.classList.remove('active');

                item04.classList.remove('active');
                itemBlock04.classList.remove('active');
            })

            item04.addEventListener('click', () => {
                item04.classList.toggle('active');
                itemBlock04.classList.toggle('active');

                item02.classList.remove('active');
                itemBlock02.classList.remove('active');

                item03.classList.remove('active');
                itemBlock03.classList.remove('active');

                item01.classList.remove('active');
                itemBlock01.classList.remove('active');
            })


        }
        spoiler();
      })
</script>

<section class="directions" id="directions">
    <div class="directions__container _container">
      <div class="directions__body">
        <div class="directions__sub sub">Направления</div>
        <div class="directions__content">
          <div class="directions__block">
            <div class="directions__title">Специальности</div>
            <div class="directions__text">
              Осуществляем подготовку специалистов в разных профессиональных
              областях: Информационные системы, программирование, разработка игр,
              разработка виртуальной и дополненной реальности, туризма,
              кибербезопасности...
            </div>
            <div class="directions__img">
              <img src={Directions} alt="Directions" />
            </div>
          </div>
          <div class="directions__block-slide">
            <div class="directions__item-wrapper">
              <div class="directions__item active" id="item-01">
                <p>Программист<i class="directions__item-arrow _icon-arrow" /></p>
              </div>
              <div class="directions__item-block active" id="item-block-01">
                <div class="directions__item-title">
                  Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br
                  /><br />
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br />
                  <span>Бесплатное обучение</span>
                </div>
                <div class="directions__item-btn">
                  Подробнее <div class="directions__item-btn-arrow _icon-arrow" />
                </div>
              </div>
            </div>
            <div class="directions__item-wrapper">
              <div class="directions__item" id="item-02">
                <p>
                  Техник по ИЗ<i class="directions__item-arrow _icon-arrow" />
                </p>
              </div>
              <div class="directions__item-block" id="item-block-02">
                <div class="directions__item-title">
                  Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br
                  /><br />
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br />
                  <span>Бесплатное обучение</span>
                </div>
                <div class="directions__item-btn">
                  Подробнее <div class="directions__item-btn-arrow _icon-arrow" />
                </div>
              </div>
            </div>
            <div class="directions__item-wrapper">
              <div class="directions__item" id="item-03">
                <p>
                  Специалист по туризму<i
                    class="directions__item-arrow _icon-arrow"
                  />
                </p>
              </div>
              <div class="directions__item-block" id="item-block-03">
                <div class="directions__item-title">
                  Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br
                  /><br />
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br />
                  <span>Бесплатное обучение</span>
                </div>
                <div class="directions__item-btn">
                  Подробнее <div class="directions__item-btn-arrow _icon-arrow" />
                </div>
              </div>
            </div>
            <div class="directions__item-wrapper">
              <div class="directions__item" id="item-04">
                <p>
                  Специалист по КС<i class="directions__item-arrow _icon-arrow" />
                </p>
              </div>
              <div class="directions__item-block" id="item-block-04">
                <div class="directions__item-title">
                  Информационные системы и программирование — квалификация
                  «Программист/ Разработчик веб приложений» - 3 года 10мес. <br
                  /><br />
                  Выпускники данной специальности владеют навыками разработки, отладки
                  и тестирования программных продуктов и модулей для настольных, мобильных
                  и платформ. <br />
                  <span>Бесплатное обучение</span>
                </div>
                <div class="directions__item-btn">
                  Подробнее <div class="directions__item-btn-arrow _icon-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>