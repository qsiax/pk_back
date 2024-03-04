<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = 'Студенту -';
    let namePage = 'Студенческая жизнь';
    var heading = 'Студенческая жизнь';
</script>

<svelte:head>
	<title>Студенческая жизнь</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="student">
    <div class="student__container _container">
        <div class="student__body">
            <div class="student__content">
                <div class="student__block">
                    <div class="student__title">Кружки и секции</div>
                    <div class="student__item-body">
                        <div class="student__item">
                            <div class="student__item-heading">Волейбол</div>
                            <div class="student__item-title">Цели и задачи</div>
                            <div class="student__item-text">Текст</div>
                            <div class="student__item-title">Место проведения</div>
                            <div class="student__item-text">Текст</div>
                            <div class="student__item-title">Преподаватели</div>
                            <div class="student__item-text">Текст</div>
                            <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                        </div>
                        <div class="student__item">
                            <div class="student__item-heading">Кружок</div>
                            <div class="student__item-title">Цели и задачи</div>
                            <div class="student__item-text">Текст</div>
                            <div class="student__item-title">Место проведения</div>
                            <div class="student__item-text">Текст</div>
                            <div class="student__item-title">Преподаватели</div>
                            <div class="student__item-text">Текст</div>
                            <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                        </div>
                        <div class="student__item">
                            <div class="student__item-heading">Кружок</div>
                            <div class="student__item-title">Цели и задачи</div>
                            <div class="student__item-text">Текст</div>
                            <div class="student__item-title">Место проведения</div>
                            <div class="student__item-text">Текст</div>
                            <div class="student__item-title">Преподаватели</div>
                            <div class="student__item-text">Текст</div>
                            <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                        </div>
                    </div>
                </div>
                <div class="student__block">
                    <div class="student__title">Студенческие объединения</div>
                    <div class="student__item-body">
                        <div class="student__item-wrapper">
                            <div class="student__item">
                                <div class="student__item-heading">Студенческий совет</div>
                                <div class="student__item-title">Цели и задачи</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Место проведения</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Преподаватели</div>
                                <div class="student__item-text">Текст</div>
                                <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                            </div>
                            <div class="student__item">
                                <div class="student__item-heading">Волонтерский клуб “Твори добро”</div>
                                <div class="student__item-title">Цели и задачи</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Место проведения</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Преподаватели</div>
                                <div class="student__item-text">Текст</div>
                                <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                            </div>
                        </div>
                        <div class="student__item-wrapper">
                            <div class="student__item">
                                <div class="student__item-heading">ССК “ДАРХАН”</div>
                                <div class="student__item-title">Цели и задачи</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Место проведения</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Преподаватели</div>
                                <div class="student__item-text">Текст</div>
                                <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                            </div>
                            <div class="student__item">
                                <div class="student__item-heading">Медиа-студия “Наш ФОРМАТ”</div>
                                <div class="student__item-title">Цели и задачи</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Место проведения</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Преподаватели</div>
                                <div class="student__item-text">Текст</div>
                                <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                            </div>
                        </div>
                        <div class="student__item-wrapper">
                            <div class="student__item">
                                <div class="student__item-heading">ВПК “ОРИОН”</div>
                                <div class="student__item-title">Цели и задачи</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Место проведения</div>
                                <div class="student__item-text">Текст</div>
                                <div class="student__item-title">Преподаватели</div>
                                <div class="student__item-text">Текст</div>
                                <a href="" class="student__item-btn">Записаться <div class="student__item-btn-icon _icon-arrow"></div></a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
