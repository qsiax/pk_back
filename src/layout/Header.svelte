<script>
	import { page } from '$app/stores';
    import logo from '$lib/images/header/logo.svg';
    import { onMount } from "svelte";

    let menu_active
    let search_active
    let menuBtn01
    let menuBtn02
    let menuBtn03
    let menuBtn04
    let menu_el_01
    let menu_el_02
    let menu_el_03
    let menu_el_04
    let menuitem_active_01
    let menuitem_active_02
    let menuitem_active_03 
    let menuitem_active_04

    function menuActive() {
        menu_active = !menu_active
        search_active = !search_active
    }

    function menuitemActive01() {
        menuitem_active_01 = !menuitem_active_01
        menu_el_01 = !menu_el_01
        menuBtn01 = !menuBtn01

        menuitem_active_02 = false
        menu_el_02 = false
        menuBtn02 = false

        menuitem_active_03 = false
        menu_el_03 = false
        menuBtn03 = false

        menuitem_active_04 = false
        menu_el_04 = false
        menuBtn04 = false
    }

    function menuitemActive02() {
        menuitem_active_02 = !menuitem_active_02
        menu_el_02 = !menu_el_02
        menuBtn02 = !menuBtn02

        menuitem_active_01 = false
        menu_el_01 = false
        menuBtn01 = false

        menuitem_active_03 = false
        menu_el_03 = false
        menuBtn03 = false

        menuitem_active_04 = false
        menu_el_04 = false
        menuBtn04 = false
    }

    function menuitemActive03() {
        menuitem_active_03 = !menuitem_active_03
        menu_el_03 = !menu_el_03
        menuBtn03 = !menuBtn03

        menuitem_active_01 = false
        menu_el_01 = false
        menuBtn01 = false

        menuitem_active_02 = false
        menu_el_02 = false
        menuBtn02 = false

        menuitem_active_04 = false
        menu_el_04 = false
        menuBtn04 = false
    }

    function menuitemActive04() {
        menuitem_active_04 = !menuitem_active_04
        menu_el_04 = !menu_el_04
        menuBtn04 = !menuBtn04

        menuitem_active_01 = false
        menu_el_01 = false
        menuBtn01 = false

        menuitem_active_02 = false
        menu_el_02 = false
        menuBtn02 = false

        menuitem_active_03 = false
        menu_el_03 = false
        menuBtn03 = false
    }

    onMount(() => {
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth < 1000) {
        }
            const headerBtn = document.querySelectorAll('.header__navigation-block-item')
            const headerBody = document.querySelector('.header__navigation')
            const headerSearch = document.querySelector('.header__block')

            for (let i = 0; i < headerBtn.length; i++) {
                headerBtn[i].addEventListener('click', () => {
                    if (headerBody?.classList.contains('menu_active')) {
                        headerBody?.classList.remove('menu_active')
                        headerSearch?.classList.remove('search_active')
                    }
                })
            }
    
    })
</script>

<header class="header" id="header">
    <div class="header__container _container">
        <div class="header__body">
            <a href="/">
                <div class="header__logo-wrapper">
                    <div class="header__logo">
                        <img src="{logo}" alt="Logo">
                    </div>
                </div>
            </a>
            <ul class="header__navigation" class:menu_active>
                <li class="header__navigation-el" class:menu_el_01>
                    <a role="button" aria-pressed="false" tabindex="0" class="header__navigation-btn" on:click={menuitemActive01} class:menuBtn01>Колледж <div class="header__navigation-arrow _icon-btn-arrow"></div>
                        <div class="header__navigation-under-block"></div>
                    </a>

                <div class="header__navigation-block" class:menuitem_active_01>
                    <div class="header__navigation-block-wrapper">
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/osnovnyye-svedeniya' ? 'page' : undefined}>
                                <a href="/osnovnyye-svedeniya" class="header__navigation-block-item">Основные сведения</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/struktura-i-organy' ? 'page' : undefined}>
                                <a href="/struktura-i-organy" class="header__navigation-block-item">Структура и органы управления<br> образовательной организацией</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/dokumenty' ? 'page' : undefined}>
                                <a href="/dokumenty" class="header__navigation-block-item">Документы</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/obrazovaniye' ? 'page' : undefined}>
                                <a href="/obrazovaniye" class="header__navigation-block-item">Образование</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/rukovodstvo' ? 'page' : undefined}>
                                <a href="/rukovodstvo" class="header__navigation-block-item">Руководство. Педагогически<br> (научно-педагогический) состав</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/materialno-tekhnicheskoye-obespecheniye' ? 'page' : undefined}>
                                <a href="/materialno-tekhnicheskoye-obespecheniye" class="header__navigation-block-item">Материально-техническое обеспечение и <br> оснащенность образовательного процесса</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/stipendiya' ? 'page' : undefined}>
                                <a href="/stipendiya" class="header__navigation-block-item">Стипендии и меры поддержки<br> обучающихся</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/kursy' ? 'page' : undefined}>
                                <a href="/kursy" class="header__navigation-block-item">Платные образовательные услуги</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/finansovo-khozyaystvennaya' ? 'page' : undefined}>
                                <a href="/finansovo-khozyaystvennaya" class="header__navigation-block-item">Финансово-хозяйственная деятельность</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/mesta-dlya-priyema' ? 'page' : undefined}>
                                <a href="/mesta-dlya-priyema" class="header__navigation-block-item">Вакантные места для приема (перевода)<br> обучающихся</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/dostupnaya-sreda' ? 'page' : undefined}>
                                <a href="/dostupnaya-sreda" class="header__navigation-block-item">Доступная среда</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/mezhdunarodnoye-sotrudnichestvo' ? 'page' : undefined}>
                                <a href="/mezhdunarodnoye-sotrudnichestvo" class="header__navigation-block-item">Международное сотрудничество</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/obrazovatelnyye-programmy' ? 'page' : undefined}>
                                <a href="/obrazovatelnyye-programmy" class="header__navigation-block-item">Образовательные программы</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/pitaniya' ? 'page' : undefined}>
                                <a href="/pitaniya" class="header__navigation-block-item">Организация питания в образовательной<br> организации</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/obrazovatelnaya-sreda' ? 'page' : undefined}>
                                <a href="/obrazovatelnaya-sreda" class="header__navigation-block-item">Цифровая образовательная среда</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/partnerstvo' ? 'page' : undefined}>
                                <a href="/partnerstvo" class="header__navigation-block-item">Социальное партнерство</a>
                            </li>
                        </div>
                    </div>
                </div>   
                </li>
                <li class="header__navigation-el" class:menu_el_02>
                    <a role="button" aria-pressed="false" tabindex="0" class="header__navigation-btn" on:click={menuitemActive02} class:menuBtn02>Абитуриенту <div class="header__navigation-arrow _icon-btn-arrow"></div>
                        <div class="header__navigation-under-block"></div>
                    </a>

                    <div class="header__navigation-block" class:menuitem_active_02>
                        <div class="header__navigation-under-block"></div>

                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/pravila-priyoma' ? 'page' : undefined}>
                                <a href="/pravila-priyoma" class="header__navigation-block-item">Правила приёма</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/professiya' ? 'page' : undefined}>
                                <a href="/professiya" class="header__navigation-block-item">Выбрать профессию</a>
                            </li>
                        </div>
                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/prikazy-o-zachislenii' ? 'page' : undefined}>
                                <a href="/prikazy-o-zachislenii" class="header__navigation-block-item">Приказы о зачислении</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/tselevoye-obucheniye' ? 'page' : undefined}>
                                <a href="/tselevoye-obucheniye" class="header__navigation-block-item">Целевое обучение</a>
                            </li>
                        </div>
                            <li aria-current={$page.url.pathname === '/reytingovyy-spisok' ? 'page' : undefined}>
                                <a href="/reytingovyy-spisok" class="header__navigation-block-item">Рейтинговый список абитуриентов</a>
                            </li>
                    </div>
                </li>
                <li class="header__navigation-el" class:menu_el_03>
                        <a role="button" aria-pressed="false" tabindex="0" class="header__navigation-btn" on:click={menuitemActive03} class:menuBtn03>Студенту<div class="header__navigation-arrow _icon-btn-arrow"></div>
                            <div class="header__navigation-under-block"></div>
                        </a>

                        <div class="header__navigation-block" class:menuitem_active_03>
                            <div class="header__navigation-under-block"></div>
    
                            <div class="header__navigation-item-wrapper">
                                <li aria-current={$page.url.pathname === '/obucheniye' ? 'page' : undefined}>
                                    <a href="/obucheniye" class="header__navigation-block-item">Обучение</a>
                                </li>
                                <li aria-current={$page.url.pathname === '/raspisaniye' ? 'page' : undefined}>
                                    <a href="/raspisaniye" class="header__navigation-block-item">Расписание</a>
                                </li>
                                </div>
                            <div class="header__navigation-item-wrapper">
                                <li aria-current={$page.url.pathname === '/obshchezhitiye' ? 'page' : undefined}>
                                    <a href="/obshchezhitiye" class="header__navigation-block-item">Общежитие</a>
                                </li>
                                <li aria-current={$page.url.pathname === '/studencheskaya-zhizn' ? 'page' : undefined}>
                                    <a href="/studencheskaya-zhizn" class="header__navigation-block-item">Студенческая жизнь</a>
                                </li>
                            </div>
                                <li aria-current={$page.url.pathname === '/sotsialnoye-obespecheniye' ? 'page' : undefined}>
                                    <a href="/sotsialnoye-obespecheniye" class="header__navigation-block-item">Социальное обеспечение</a>
                                </li>
                        </div>
                </li>
                <li class="header__navigation-el" class:menu_el_04>
                    <a role="button" aria-pressed="false" tabindex="0" class="header__navigation-btn" on:click={menuitemActive04} class:menuBtn04>Выпускнику <div class="header__navigation-arrow _icon-btn-arrow"></div></a>

                    <div class="header__navigation-block" class:menuitem_active_04>
                        <div class="header__navigation-under-block"></div>

                        <div class="header__navigation-item-wrapper">
                            <li aria-current={$page.url.pathname === '/trudoustroystvo' ? 'page' : undefined}>
                                <a href="/trudoustroystvo" class="header__navigation-block-item">Трудоустройство</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/proforiyentatsiya' ? 'page' : undefined}>
                                <a href="/proforiyentatsiya" class="header__navigation-block-item">Профориентация</a>
                            </li>
                        </div>
                    </div>
                
                </li>
                <li aria-current={$page.url.pathname === '/kursy' ? 'page' : undefined}>
                    <a href="/kursy" class="header__navigation-btn">образовательные курсы</a>
                </li>
            </ul>
            <div class="header__block" class:search_active>
                <input type="text">
                <div class="header__search">
                    <div class="header__search-icon _icon-search"></div>
                </div>
                <div class="header__btn">
                    <div class="header__btn-icon _icon-eye"></div>
                </div>
            </div>
            <div role="button" aria-pressed="false" tabindex="0" class="header__menu" on:click={menuActive}>
                <div class="header__menu-icon icon-menu"></div>
            </div>
        </div>
    </div>
</header>