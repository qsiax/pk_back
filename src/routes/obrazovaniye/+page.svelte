<script>
    import Heading  from '../../layout/Heading.svelte';
    import Document from '../../layout/pages/Document.svelte';

    let nameMap = '';
    let namePage = 'Образование';
    let heading = 'Планы и аннотации';
</script>

<svelte:head>
	<title>Образование</title>
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
            <Document />
        </div>
    </div>
</section>


<!-- <section class="document">
    <div class="document__container _container">
        <div class="document__body">
            <div class="document__head">
                <div class="document__head-wrapper">
                    <div class="document__head-item active">
                        <div class="document__head-item-title">Планы</div>
                    </div>
                    <div class="document__head-item">
                        <div class="document__head-item-title">Программы</div>
                    </div>
                    <div class="document__head-item">
                        <div class="document__head-item-title">Приказы</div>
                    </div>
                    <div class="document__head-item">
                        <div class="document__head-item-title">Доклады</div>
                    </div>
                    <div class="document__head-item">
                        <div class="document__head-item-title">Положения</div>
                    </div>
                    <div class="document__head-item">
                        <div class="document__head-item-title">Договоры</div>
                    </div>
                </div>
                <div class="document__head-wrapper">
                    <div class="__reset">
                        <div class="__reset_icon"></div>
                    </div>
                    <div class="__select include" data-state="">
                        <div class="__select__title" data-default="Option 0">год публикации</div>
                        <div class="__select__content">
                            <div class="__select_content-wrapper">
                                <input id="singleSelect0" class="__select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect0" class="__select__label" data-date="2023" id="2023">2023</label>
                                <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect1" class="__select__label" data-date="2022" id="2022">2022</label>
                                <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect2" class="__select__label" data-date="2021" id="2021">2021</label>
                                <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect3" class="__select__label" data-date="2020" id="2020">2020</label>
                                <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect4" class="__select__label" data-date="2019" id="2019">2019</label>
                                <input id="singleSelect5" class="__select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect5" class="__select__label" data-date="2018" id="2018">2018</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="document__content active" id="documentBody01">
                <div class="document__item-wrapper">
                    <div class="document__item" data-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2019">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2019
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2018">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2018
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
            </div>

            <div class="document__content" id="documentBody02">
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2018">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2018
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2022">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2022
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2022">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2022
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
            </div>

            <div class="document__content" id="documentBody03">
                <div class="document__item-wrapper">
                    <div class="document__item" data-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2019">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2019
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2018">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2018
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
            </div>

            <div class="document__content" id="documentBody04">
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2018">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2018
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2022">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2022
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2022">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2022
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
            </div>

            <div class="document__content" id="documentBody05">
                <div class="document__item-wrapper">
                    <div class="document__item" data-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2019">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2019
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2018">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2018
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                Свидетельство о внесении записи в ЕГРЮЛ
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
            </div>

            <div class="document__content" id="documentBody06">
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2018">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2018
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2022">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2022
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
                <div class="document__item-wrapper">
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2020">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2020
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2021">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2021
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2022">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2022
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                    <div class="document__item" date-frame="" data-date="2023">
                        <div class="document__item-block">
                            <div class="document__item-nav">Документы /</div>
                            <div class="document__item-title">
                                2023
                            </div>
                        </div>
                        <div class="document__item-icon _icon-download"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->
