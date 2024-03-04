<script>
	import { page } from '$app/stores';
    import logo from '$lib/images/header/logo.svg';
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
            <ul class="header__navigation admin">
                <li aria-current={$page.url.pathname === '/admin' ? 'page' : undefined}>
                    <a href="/admin" class="header__navigation-btn">Новости</a>
                </li>
                <li aria-current={$page.url.pathname === '/doc' ? 'page' : undefined}>
                    <a href="/doc" class="header__navigation-btn">Документы</a>
                </li>
                <li aria-current={$page.url.pathname === '/ras' ? 'page' : undefined}>
                    <a href="/ras" class="header__navigation-btn">Расписание</a>
                </li>
                <li aria-current={$page.url.pathname === '/group' ? 'page' : undefined}>
                    <a href="/group" class="header__navigation-btn">Обучение</a>
                </li>
            </ul>
            <div class="header__block">
                <input type="text">
                <div class="header__search">
                    <div class="header__search-icon _icon-search"></div>
                </div>
                <div class="header__btn">
                    <div class="header__btn-icon _icon-eye"></div>
                </div>
            </div>
            <div role="button" aria-pressed="false" tabindex="0" class="header__menu">
                <div class="header__menu-icon icon-menu"></div>
            </div>
        </div>
    </div>
</header>