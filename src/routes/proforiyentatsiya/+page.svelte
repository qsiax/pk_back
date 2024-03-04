<script>
    import Heading  from '../../layout/Heading.svelte';


    let nameMap = 'Выпускнику -';
    let namePage = 'Профориентация';
    var heading = 'Профориентация';
</script>

<svelte:head>
	<title>Профориентация</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="prof">
    <div class="prof__container _container">
        <div class="prof__body">
            <div class="prof__content">
                <div class="prof__block-special">
                    <div class="prof__title">Наши специальности</div>
                    <div class="prof__item-wrapper-special">
                        <div class="prof__item-special">
                            <div class="prof__item-icon-special icon-trending"></div>
                            <div class="prof__item-title-special">Специальность</div>
                            <div class="prof__item-text-special">Построение индивидуальной траектории развития<br> карьеры</div>
                        </div>
                        <div class="prof__item-special">
                            <div class="prof__item-icon-special icon-work"></div>
                            <div class="prof__item-title-special">Специальность</div>
                            <div class="prof__item-text-special">Построение индивидуальной траектории развития<br> карьеры</div>
                        </div>
                        <div class="prof__item-special">
                            <div class="prof__item-icon-special icon-subject"></div>
                            <div class="prof__item-title-special">Специальность</div>
                            <div class="prof__item-text-special">Построение индивидуальной траектории развития<br> карьеры</div>
                        </div>
                        <div class="prof__item-special">
                            <div class="prof__item-icon-special icon-article"></div>
                            <div class="prof__item-title-special">Специальность</div>
                            <div class="prof__item-text-special">Построение индивидуальной траектории развития<br> карьеры</div>
                        </div>
                    </div>
                </div>
                <div class="prof__block-news">
                    <div class="prof__title">Дни открытых дверей</div>
                    <div class="prof__item-body">
                        <div class="prof__item-wrapper-news">
                            <div class="prof__item-news">
                                <div class="prof__item-block">
                                    <div class="prof__item-title-news">Название мероприятия</div>
                                    <div class="prof__item-text-news">Текст</div>
                                </div>
                                <div class="prof__item-img-news"></div>
                            </div>
                            <div class="prof__item-news">
                                <div class="prof__item-block">
                                    <div class="prof__item-title-news">Название мероприятия</div>
                                    <div class="prof__item-text-news">Текст</div>
                                </div>
                                <div class="prof__item-img-news"></div>
                            </div>
                            <div class="prof__item-news">
                                <div class="prof__item-block">
                                    <div class="prof__item-title-news">Название мероприятия</div>
                                    <div class="prof__item-text-news">Текст</div>
                                </div>
                                <div class="prof__item-img-news"></div>
                            </div>
                        </div>
                        <div class="prof__item-wrapper-news">
                            <div class="prof__item-news">
                                <div class="prof__item-block">
                                    <div class="prof__item-title-news">Название мероприятия</div>
                                    <div class="prof__item-text-news">Текст</div>
                                </div>
                                <div class="prof__item-img-news"></div>
                            </div>
                            <div class="prof__item-news">
                                <div class="prof__item-block">
                                    <div class="prof__item-title-news">Название мероприятия</div>
                                    <div class="prof__item-text-news">Текст</div>
                                </div>
                                <div class="prof__item-img-news"></div>
                            </div>
                            <div class="prof__item-news">
                                <div class="prof__item-block">
                                    <div class="prof__item-title-news">Название мероприятия</div>
                                    <div class="prof__item-text-news">Текст</div>
                                </div>
                                <div class="prof__item-img-news"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prof__block-document">
                    <div class="prof__title">Документы необходимые для поступления</div>
                    <div class="prof__item-wrapper-document">
                        <div class="prof__descriptions-document">Предоставляются заявителем в электронной форме:</div>
                        <div class="prof__item-document">
                            <div class="prof__item-num-document">01 /</div>
                            <div class="prof__item-title-document">Заявление</div>
                        </div>
                        <div class="prof__item-document">
                            <div class="prof__item-num-document">02 /</div>
                            <div class="prof__item-title-document">Паспорт</div>
                        </div>
                        <div class="prof__item-document">
                            <div class="prof__item-num-document">03 /</div>
                            <div class="prof__item-title-document">Аттестат об образовании</div>
                        </div>
                        <div class="prof__item-document">
                            <div class="prof__item-num-document">04 /</div>
                            <div class="prof__item-title-document">Фотографии 4 шт. (3×4)</div>
                        </div>
                    </div>
                </div>
                <div class="prof__block-advice">
                    <div class="prof__title">Советы по выбору профессии</div>
                    <div class="prof__item-body-advice">
                        <div class="prof__item-wrapper-advice">
                            <div class="prof__item-advice">
                                <div class="prof__item-num-advice">01 /</div>
                                <div class="prof__item-title-advice">Изучите список профессий, предлагаемых в Покровском колледже, и выберите те, которые вам интересны.</div>
                            </div>
                            <div class="prof__item-advice">
                                <div class="prof__item-num-advice">02 /</div>
                                <div class="prof__item-title-advice">Изучите рынок труда, чтобы понимать, какие профессии будут востребованы в ближайшее время</div>
                            </div>
                        </div>
                        <div class="prof__item-wrapper-advice">
                            <div class="prof__item-advice">
                                <div class="prof__item-num-advice">03 /</div>
                                <div class="prof__item-title-advice">Посмотрите будни Покровского колледжа в соц.сетях, чтобы получить более подробную информацию о профессиях</div>
                            </div>
                            <div class="prof__item-advice">
                                <div class="prof__item-num-advice">04 /</div>
                                <div class="prof__item-title-advice">Обсудите свой выбор профессии с родителями, друзьями и учителями.</div>
                            </div>
                        </div>
                    </div>
                    <div class="prof__descriptions-advice">Надеемся, эти рекомендации помогут вам сделать правильный выбор профессии в Покровском колледже.</div>
                </div>
                <div class="prof__block-job">
                    <div class="prof__title">
                        Возможности трудоустройства<br>
                        <span>(Алгоритм поиска работы)</span>
                    </div>
                    <div class="prof__item-wrapper-job">
                        <div class="prof__item-job">
                            <div class="prof__item-head-job">
                                <div class="prof__item-num-job">01 /</div>
                                <div class="prof__item-title-job">Работа в ГБПОУ “Покровском колледже”</div>
                            </div>
                            <div class="prof__item-text-job">
                                Карьерный центр колледжа.<br><br>
                                Карьерный центр может предлагать студентам и выпускникам колледжа услуги по поиску работы, включая оценку профессиональных навыков, подготовку резюме и сопроводительных писем, тренинги по собеседованию, а также информацию о вакансиях.<br><br>
                                Это может помочь студентам наладить контакты с работодателями, узнать о доступных вакансиях и получить необходимые навыки и знания для успешной карьеры в своей отрасли.<br><br>
                                <span>Где искать вакансии?</span>
                            </div>
                            <div class="prof__item-btn-job">Вакансии <div class="prof__item-btn-icon _icon-arrow"></div></div>
                        </div>
                        <div class="prof__item-job">
                            <div class="prof__item-head-job">
                                <div class="prof__item-num-job">02 /</div>
                                <div class="prof__item-title-job">Работа во внешних организациях</div>
                            </div>
                            <div class="prof__item-text-job">
                                Сотрудничество с работодателями.<br><br>
                                Колледж может иметь соглашения и партнерства с работодателями в регионе, которые могут предоставлять возможности для стажировок, практики и трудоустройства после окончания учебы.<br><br>
                                Такое сотрудничество может помочь студентам получить ценный опыт работы в своей области, а также установить связи с работодателями в своей отрасли.<br><br>
                                <span>Где искать вакансии?</span>
                            </div>
                            <div class="prof__item-btn-job">Вакансии <div class="prof__item-btn-icon _icon-arrow"></div></div>
                        </div>
                    </div>
                </div>
                    <div class="prof__block-question">
                        <div class="prof__title">Часто задаваемые вопросы</div>
                        <div class="prof__item-wrapper-question">
                            <div class="prof__item-question">
                                <div class="prof__item-block-question">
                                    <div class="prof__item-num-question">01 /</div>
                                    <div class="prof__item-title-question">Какие профессии и специальности доступны для изучения в колледже?</div>
                                </div>
                                <div class="prof__item-arrow _icon-arrow"></div>
                            </div>
                            <div class="prof__item-question">
                                <div class="prof__item-block-question">
                                    <div class="prof__item-num-question">02 /</div>
                                    <div class="prof__item-title-question">Какие требования необходимо выполнить для поступления в колледж?</div>
                                </div>
                                <div class="prof__item-arrow _icon-arrow"></div>
                            </div>
                            <div class="prof__item-question">
                                <div class="prof__item-block-question">
                                    <div class="prof__item-num-question">03 /</div>
                                    <div class="prof__item-title-question">Какие формы обучения доступны в колледже?</div>
                                </div>
                                <div class="prof__item-arrow _icon-arrow"></div>
                            </div>
                            <div class="prof__item-question">
                                <div class="prof__item-block-question">
                                    <div class="prof__item-num-question">04 /</div>
                                    <div class="prof__item-title-question">Какие перспективы трудоустройства имеют студенты после окончания колледжа?</div>
                                </div>
                                <div class="prof__item-arrow _icon-arrow"></div>
                            </div>
                            <div class="prof__item-question">
                                <div class="prof__item-block-question">
                                    <div class="prof__item-num-question">05 /</div>
                                    <div class="prof__item-title-question">Как получить дополнительную информацию о колледже и профессиях, которые он предлагает?</div>
                                </div>
                                <div class="prof__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>