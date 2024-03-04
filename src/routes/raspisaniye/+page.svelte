<script>
    import Heading  from '../../layout/Heading.svelte';
    import Raspisaniye from '../../layout/pages/Raspisaniye.svelte';

    let nameMap = 'Студенту -';
    let namePage = 'Расписание';
    var heading = 'Расписание групп';
</script>

<svelte:head>
	<title>Расписание групп</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="schedule">
    <div class="schedule__container _container">
        <div class="schedule__body">
            <Raspisaniye/>
        </div>
    </div>
</section>
