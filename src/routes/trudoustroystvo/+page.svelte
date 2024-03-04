<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = 'Выпускнику -';
    let namePage = 'Трудоустройство';
    var heading = 'Старт в карьеру';

    export let data
</script>

<svelte:head>
	<title>Трудоустройство</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="employment">
    <div class="employment__container _container">
        <div class="employment__body">
            <div class="employment__content">
                <div class="employment__block">
                    <div class="employment__title">Определим вектор карьерного развития</div>
                    <div class="employment__item-wrapper">
                        <div class="employment__item">
                            <div class="employment__item-icon icon-trending"></div>
                            <div class="employment__item-title">Индивидуальная траектория развития</div>
                            <div class="employment__item-text">Построение индивидуальной траектории развития карьеры</div>
                        </div>
                        <div class="employment__item">
                            <div class="employment__item-icon icon-subject"></div>
                            <div class="employment__item-title">Резюме</div>
                            <div class="employment__item-text">
                                Чек-лист по написанию сопроводительного письма<br><br>
                                Проработка слабых сторон в резюме
                            </div>
                        </div>
                        <div class="employment__item">
                            <div class="employment__item-icon icon-search"></div>
                            <div class="employment__item-title">Вакансии</div>
                            <div class="employment__item-text">
                                Актуальные платформы для поиска работы<br><br>
                                Свежие вакансии в социальных сетях
                            </div>
                        </div>
                        <div class="employment__item">
                            <div class="employment__item-icon icon-work"></div>
                            <div class="employment__item-title">Перечень работодателей</div>
                            <div class="employment__item-text"></div>
                        </div>
                        <div class="employment__item">
                            <div class="employment__item-icon icon-article"></div>
                            <div class="employment__item-title">Полезные статьи</div>
                            <div class="employment__item-text"></div>
                        </div>
                    </div>
                    <div class="employment__descriptions">
                        *Никто не знает, что ждет нас в будущем, но важно понимать, что вы имеете силу и возможность формировать свою карьеру и жизнь. Не бойтесь экспериментировать, учиться на своих ошибках и стремиться к своим целям.
                    </div>
                </div>
                <div class="employment__block-document">
                    <div class="employment__title">Документы</div>
                    <div class="employment__item-body-document">
                        <div class="employment__item-wrapper-document">
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Методы поиска работы или советы</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Информационная работа для колледжа</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Соглашение о сотрудничестве ПК с ЦЗН</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                        </div>
                        <div class="employment__item-wrapper-document">
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">План мероприятий содействия трудоустройству выпускников</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Работа с социальными партнерами</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Как успешно пройти собеседование с работодателем</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                        </div>
                        <div class="employment__item-wrapper-document">
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Положение о Центре содействия занятости</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Банк вакансий для выпускников начинающих<br> карьеру</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Как искать и находить работу</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                        </div>
                        <div class="employment__item-wrapper-document">
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Информация о проделанной работе  выпускников</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Туризм банк вакансий</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Как составить резюме</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                        </div>
                        <div class="employment__item-wrapper-document">
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Проект Плана по трудоустройству</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-title-document">Подборка вакансий</div>
                                <div class="employment__item-icon-document _icon-download"></div>
                            </div>
                            <div class="employment__item-document">
                                <div class="employment__item-dots-wrapper">
                                    <div class="employment__item-dot"></div>
                                    <div class="employment__item-dot"></div>
                                    <div class="employment__item-dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="employment__block-orders">
                    <div class="employment__title">Приказы и положения</div>
                    <div class="employment__item-body-orders">
                        <div class="employment__item-wrapper-orders">
                            {#each data?.records as record}
                                {#if record.page === 'trudoustroystvo'}
                                    <a class="employment__item-orders" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
                                        <div class="employment__item-title-orders">{record.title}</div>
                                        <div class="employment__item-icon-orders _icon-download"></div>
                                    </a>
                                {/if}
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
