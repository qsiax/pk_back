<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = 'Абитируенту - Обучение - ';
    let namePage = 'Архив';
    let heading = 'Архив практики';

    let spoilerActive = '';

    function spoiler() {
        spoilerActive = !spoilerActive;
    }
</script>

<svelte:head>
	<title>Архив</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="archive">
    <div class="archive__container _container">
        <div class="archive__body">
            <div class="archive__head">
                <div class="archive__heading">Практика 2021-22</div>
            </div>
            <div class="archive__content">
                <div class="archive__content-title">1 семестр</div>
                <div class="archive__item-body">
                    <div class="archive__item-wrapper">
                        <div class="archive__item" on:click={() => {spoiler()}}>
                            <div class="archive__item-title">Т-20</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__spoiler" class:spoilerActive>
                            <div class="archive__spoiler-item">
                                <div class="archive__spoiler-item-title">Задание по учебной практике, гр ОиТЗИ-19</div>
                                <div class="archive__spoiler-item-download _icon-download"></div>
                            </div>
                            <div class="archive__spoiler-item">
                                <div class="archive__spoiler-item-title">График</div>
                                <div class="archive__spoiler-item-download _icon-download"></div>
                            </div>
                            <div class="archive__spoiler-item">
                                <div class="archive__spoiler-item-title">Отчет по практике</div>
                                <div class="archive__spoiler-item-download _icon-download"></div>
                            </div>
                            <div class="archive__spoiler-item">
                                <div class="archive__spoiler-item-title">Рекомендации по написанию отчета</div>
                                <div class="archive__spoiler-item-download _icon-download"></div>
                            </div>
                            <div class="archive__spoiler-item">
                                <div class="archive__spoiler-item-title">Учебно-производственная практика ОиТЗИ-19</div>
                                <div class="archive__spoiler-item-download _icon-download"></div>
                            </div>
                            <div class="archive__spoiler-item">
                                <div class="archive__spoiler-item-title">Аттестационный лист</div>
                                <div class="archive__spoiler-item-download _icon-download"></div>
                            </div>
                            <div class="archive__spoiler-item">
                                <div class="archive__spoiler-item-title">Договор о практической подготовке</div>
                                <div class="archive__spoiler-item-download _icon-download"></div>
                            </div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ОиТЗИ-19</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ИСиП-19</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                    </div>
                    <div class="archive__item-wrapper">
                        <div class="archive__item">
                            <div class="archive__item-title">Т-21</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ОиТЗИ-20</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ОиТЗИ-21</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="archive__content">
                <div class="archive__content-title">2 семестр</div>
                <div class="archive__item-body">
                    <div class="archive__item-wrapper">
                        <div class="archive__item">
                            <div class="archive__item-title">Т-20</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ОиТЗИ-19</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ИСиП-19</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                    </div>
                    <div class="archive__item-wrapper">
                        <div class="archive__item">
                            <div class="archive__item-title">Т-21</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ОиТЗИ-20</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                        <div class="archive__item">
                            <div class="archive__item-title">ОиТЗИ-21</div>
                            <div class="archive__item-arrow _icon-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>