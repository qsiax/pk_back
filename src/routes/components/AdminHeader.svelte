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
                <li aria-current={$page.url.pathname === '/admin/news' ? 'page' : undefined}>
                    <a href="/admin/news" class="header__navigation-btn">Новости</a>
                </li>
                <li aria-current={$page.url.pathname === '/admin/document' ? 'page' : undefined}>
                    <a href="/admin/document" class="header__navigation-btn">Документы</a>
                </li>
                <li aria-current={$page.url.pathname === '/admin/raspisaniye' ? 'page' : undefined}>
                    <a href="/admin/raspisaniye" class="header__navigation-btn">Расписание</a>
                </li>
                <li aria-current={$page.url.pathname === '/admin/obucheniye' ? 'page' : undefined}>
                    <a href="/admin/obucheniye" class="header__navigation-btn">Обучение</a>
                </li>
                <li aria-current={$page.url.pathname === '/admin/kursy' ? 'page' : undefined}>
                    <a href="/admin/kursy" class="header__navigation-btn">образовательные курсы</a>
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