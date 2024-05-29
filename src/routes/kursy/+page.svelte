<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';

    import Heading  from '../../layout/Heading.svelte';
	import Feedback from '../../layout/pages/Feedback.svelte';

	export let data
 
    let nameMap = '';
    let namePage = 'Платные образовательные услуги';
    var heading = 'дополнительное \nпрофессиональное \nобразование';
</script>

<svelte:head>
	<title>Платные образовательные услуги</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

  <section class="social" id="social">
	<div class="social__container _container">
	  <div class="social__body">
		<div class="social__title">Рабочие профессии</div>
		<div class="social__content">
			<Swiper
				spaceBetween={20}
				slidesPerView={5}
				speed={700}
			>
				{#each data?.records as record}
					{#if record.type === '01'}
						<SwiperSlide class="social__item">
							<div class="social__item-sub">Профессия</div>
							<div class="social__item-title">{record.name}</div>
							<div class="social__item-text">
								Сумма: <span>{record.price}</span><br />
								Срок: <span>{record.deadline}</span>
							</div>
							<a href="#feedback" class="social__item-btn btn"
							>Записаться <div
								class="social__item-btn-arrow _icon-arrow"
							/></a
							>
						</SwiperSlide>
					{/if}
				{/each}
			</Swiper>
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
			<!-- <div class="social__slide-arrow-wrapper">
			  <div class="social__slide-arrow-prev _icon-arrow" />
			  <div class="social__slide-arrow-next _icon-arrow" />
			</div> -->
		  </div>
			<Swiper
				spaceBetween={20}
				slidesPerView={5}
				speed={700}
			>
				{#each data?.records as record}
					{#if record.type === '02'}
						<SwiperSlide class="social__item">
							<div class="social__item-sub">Профессия</div>
							<div class="social__item-title">{record.name}</div>
							<div class="social__item-text">
								Сумма: <span>{record.price}</span><br />
								Срок: <span>{record.deadline}</span>
							</div>
							<a href="#feedback" class="social__item-btn btn"
							>Записаться <div
								class="social__item-btn-arrow _icon-arrow"
							/></a
							>
						</SwiperSlide>
					{/if}
				{/each}
			</Swiper>
		</div>
	  </div>
	</div>
  </section>




  <Feedback/>