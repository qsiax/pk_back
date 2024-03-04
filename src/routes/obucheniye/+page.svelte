<script>
    import Heading  from '../../layout/Heading.svelte';
    import Obucheniye from '../../layout/pages/Obucheniye.svelte';

    let nameMap = 'Студенту -';
    let namePage = 'Обучение';
    var heading = 'Все для студента';
</script>

<svelte:head>
	<title>Все для студента</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="study">
    <div class="study__container _container">
        <div class="study__body">
            <Obucheniye />
        </div>
    </div>
</section>