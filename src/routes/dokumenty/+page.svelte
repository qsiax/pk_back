<script>
    import { onMount } from "svelte";
    import Heading  from '../../layout/Heading.svelte';
    export let data

    let nameMap = '';
    let namePage = 'Документы';
    let heading = 'Планы, приказы и т.п.';

    let filter = 'all'
</script>

<svelte:head>
	<title>Документы</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="document">
    <div class="document__container _container">
        <div class="document__body">
            <div class="document__head">
                <div class="document__head-wrapper">
                    <div role="button" aria-pressed="false" class={filter === 'all' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(filter = 'all')}}>
                        <div class="document__head-item-title">Все</div>
                    </div>
                    <div role="button" aria-pressed="false" class={filter === 'plan' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(filter = 'plan')}}>
                        <div class="document__head-item-title">Планы</div>
                    </div>
                    <div role="button" aria-pressed="false" class={filter === 'program' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(filter = 'program')}}>
                        <div class="document__head-item-title">Программы</div>
                    </div>
                    <div role="button" aria-pressed="false" class={filter === 'order' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(filter = 'order')}}>
                        <div class="document__head-item-title">Приказы</div>
                    </div>
                    <div role="button" aria-pressed="false" class={filter === 'report' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(filter = 'report')}}>
                        <div class="document__head-item-title">Доклады</div>
                    </div>
                    <div role="button" aria-pressed="false" class={filter === 'provisions' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(filter = 'provisions')}}>
                        <div class="document__head-item-title">Положения</div>
                    </div>
                    <div role="button" aria-pressed="false" class={filter === 'agreement' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(filter = 'agreement')}}>
                        <div class="document__head-item-title">Договоры</div>
                    </div>
                </div>
            </div>
            <div class='document__content'>
                <div class="document__item-wrapper">
                    {#each data?.records as record}
                        {#if filter === 'all'}
                            <a class='document__item' href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
                                <div class="document__item-block">
                                    <div class="document__item-nav">Документы /</div>
                                    <div class="document__item-title" id="document-text">
                                        {record.title}
                                    </div>
                                </div>
                                <div class="document__item-icon _icon-download"></div>
                            </a>
                        {:else if filter === record.category}
                            <a class='document__item' href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
                                <div class="document__item-block">
                                    <div class="document__item-nav">Документы /</div>
                                    <div class="document__item-title" id="document-text">
                                        {record.title}
                                    </div>
                                </div>
                                <div class="document__item-icon _icon-download"></div>
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
