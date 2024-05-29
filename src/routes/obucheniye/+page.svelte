<script>
    import {Swiper, SwiperSlide} from "swiper/svelte";
    import 'swiper/css';
              
    import Heading  from '../../layout/Heading.svelte';

    export let data

    let nameMap = 'Студенту -';
    let namePage = 'Обучение';
    var heading = 'Все для студента';

    let headActive = 'diplom'

    let groupActive = ''
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
            <div class="study__head">
                <div class="study__head-wrapper">
                    <div class={headActive === 'diplom' ? 'study__head-item active' : 'study__head-item'} on:click={() => {headActive = 'diplom'}}>Диплом</div>
                    <div class={headActive === 'sessia' ? 'study__head-item active' : 'study__head-item'} on:click={() => {headActive = 'sessia'}}>Сессия</div>
                    <div class={headActive === 'praktika' ? 'study__head-item active' : 'study__head-item'} on:click={() => {headActive = 'praktika'}}>Практика</div>
                </div>
                <div class="study__head-wrapper">
                    <!-- {#if headActive === 'sessia'}
                        <div class="study__head-item">Год публикации</div>
                    {/if} -->
                    {#if headActive === 'praktika'}
                        <div class="study__head-item">Архив</div>
                    {/if}
                </div>
            </div>
            {#if headActive === 'diplom'}
                <div class="study__diplom">
                    <div class="study__heading">Порядок выполнения диплома</div>
                    <div class="study__diplom-wrapper">
                        {#each data?.diploms as diplom}
                            <a href="http://127.0.0.1:8090/api/files/{diplom.collectionId}/{diplom.id}/{diplom.file}?token=" target="_blank" class="study__diplom-item">
                                <div class="study__diplom-item-title">{diplom.title}</div>
                                <div class="study__diplom-item-icon _icon-download"></div>
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if headActive === 'sessia'}
                <div class="study__sessia">
                    <div class="study__heading">Графики сессий</div>
                    <div class="study__sessia-wrapper">
                      {#each data?.sessias as sessia}
                        <a href="http://127.0.0.1:8090/api/files/{sessia.collectionId}/{sessia.id}/{sessia.file}?token=" target="_blank" class="study__sessia-item">
                            <div class="study__sessia-item-title">{sessia.title}</div>
                            <div class="study__sessia-item-icon _icon-download"></div>
                        </a>
                      {/each}
                    </div>
                </div>
            {/if}
            {#if headActive === 'praktika'}
                <div class="study__praktika">
                    <div class="study__praktika-wrapper">
                        <div class="admin-obucheniye__praktika-head-item">Документы для прохождения практики</div>
                        {#each data?.templates as template}
                            <a href="http://127.0.0.1:8090/api/files/{template.collectionId}/{template.id}/{template.file}?token=" target="_blank" class="study__praktika-item-template">
                                <div class="study__praktika-text">{template.title}</div>
                                <div class="study__praktika-icon _icon-download"></div>
                            </a>
                        {/each}
                    </div>
                    <div class="study__praktika-wrapper">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={5}
                            speed={700}
                        >
                        {#each data?.groups as group}
                            <SwiperSlide class={groupActive === group.title ? 'study__praktika-item-group active' : 'study__praktika-item-group'}>
                                <div class="study__praktika-item-content" on:click={() => {groupActive = group.title}}>
                                    <div class="study__praktika-group-item-title">{group.title}</div>
                                    <div class="study__praktika-group-item-icon _icon-arrow"></div>
                                </div>
                            </SwiperSlide>
                        {/each}
                        </Swiper>
                    </div>
                    <div class="study__praktika-wrapper">
                        {#each data?.group_docs as group_doc}
                            {#if groupActive === group_doc.group}
                                <a href="http://127.0.0.1:8090/api/files/{group_doc.collectionId}/{group_doc.id}/{group_doc.file}?token=" target="_blank" class="study__praktika-item-group-doc">
                                    <div class="study__praktika-text">{group_doc.title}</div>
                                    <div class="study__praktika-icon _icon-download"></div>
                                </a>
                            {/if}
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>