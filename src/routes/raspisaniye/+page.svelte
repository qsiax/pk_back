<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = 'Студенту -';
    let namePage = 'Расписание';
    var heading = 'Расписание групп';

    export let data
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
                    <!-- <div class="schedule__item-main">
                      <a href="/">
                        <div class="schedule__item">
                          <div class="schedule__item-title">06 февраля — 11 февраля 2023</div>
                          <div class="schedule__icon _icon-download" />
                        </div>
                      </a>
                    </div> -->
            <div class="schedule__item-wrapper">
                {#each data?.records as record}
                    <a class="schedule__item" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
                        <div class="schedule__item-title">{record.title}</div>
                        <div class="schedule__icon _icon-download" />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>
