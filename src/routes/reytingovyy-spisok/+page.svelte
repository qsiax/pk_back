<script>
    import Heading  from '../../layout/Heading.svelte';


    let nameMap = 'Абитуриенту -';
    let namePage = 'Рейтинговый список абитуриентов';
    var heading = 'Рейтинговый список \nабитуриентов';
</script>

<svelte:head>
	<title>Рейтинговый список</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="rating">
	<div class="rating__container _container">
		<div class="rating__body">
			<a href="#" class="rating__button">Yandex диск - посмотреть список Абитуриентов 202# <div class="rating__button-icon _icon-arrow"></div></a>
		</div>
	</div>
</section>
