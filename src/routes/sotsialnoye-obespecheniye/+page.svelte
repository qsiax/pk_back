<script>
    import Heading  from '../../layout/Heading.svelte';


    let nameMap = 'Студенту -';
    let namePage = 'Социальное обеспечение';
    var heading = 'Социальное обеспечение';
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

<section class="welfare">
    <div class="welfare__container _container">
        <div class="welfare__body">
            <div class="welfare__content">
                <div class="welfare__block">
                    <div class="welfare__title">Стипендия</div>
                    <div class="welfare__item-wrapper">
                        <div class="welfare__item">
                            <div class="welfare__item-title">
                                Академическая стипендия:<br>
                                Хорошист — <span>2 511 рб.</span>, Отличник — <span>3 348 рб.</span>
                            </div>
                        </div>
                        <div class="welfare__item">
                            <div class="welfare__item-title">Социальная стипендия: <span> 2 511 рб.</span></div>
                        </div>
                        <div class="welfare__item">
                            <div class="welfare__item-title">Льготное питание: <span>99,40 рб.</span> <span>(в день)</span></div>
                        </div>
                    </div>
                </div>
                <div class="welfare__block">
                    <div class="welfare__title">Меры поддержки детям-сиротам и детям, оставшимся без попечения родителей</div>
                    <div class="welfare__item-wrapper">
                        <div class="welfare__item">
                            <div class="welfare__item-title">Текст</div>
                        </div>
                        <div class="welfare__item">
                            <div class="welfare__item-title">Текст</div>
                        </div>
                        <div class="welfare__item">
                            <div class="welfare__item-title">Текст</div>
                        </div>
                    </div>
                </div>
                <div class="welfare__block">
                    <div class="welfare__title">Меры поддержки детям из малоимущих семей</div>
                    <div class="welfare__item-wrapper">
                        <div class="welfare__item">
                            <div class="welfare__item-title">Текст</div>
                        </div>
                        <div class="welfare__item">
                            <div class="welfare__item-title">Текст</div>
                        </div>
                        <div class="welfare__item">
                            <div class="welfare__item-title">Текст</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>