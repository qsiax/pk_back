<script>
    import Heading  from '../../layout/Heading.svelte';
    import News from '../../layout/News.svelte';
    import OsnovnyyeSvedeniya from '../../layout/pages/Osnovnyye-svedeniya.svelte';
    import Call from '$lib/images/icons/call.svg';


    let nameMap = '';
    let namePage = 'Основные сведения';
    let heading = 'Покровский колледж';
</script>

<svelte:head>
	<title>Основные сведение</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="basic">
    <div class="basic__container _container">
        <div class="basic__body">
            <div class="basic__content">
                <div class="basic__block-information">
                    <div class="basic__block-wrapper">
                        <div class="basic__title">Основные сведения</div>
                        <div class="basic__text"><span>Полное наименование /</span> Государственное бюджетное профессиональное образовательное учреждение «Колледж цифровых технологий «АЙТЫЫН»</div>
                        <div class="basic__text"><span>Дата создания /</span> 20 июня 2000года Распоряжением Первого Президента республики М.Е.Николаева № 178-РП </div>
                        <div class="basic__text"><span>Учредитель /</span> 
                            МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РС(Я) <br>
                            ИНН 1435054525, КПП 143501001, ОГРН 1031402047170, ОКПО 00063087 <br>
                            МИНИСТЕРСТВО ИМУЩЕСТВЕННЫХ И ЗЕМЕЛЬНЫХ ОТНОШЕНИЙ РС(Я)
                            ИНН 1435027592, КПП 143501001
                            ОГРН 1021401067995
                            </div>
                        <div class="basic__text"><span>Место нахождения /</span> Республика Саха (Якутия), Хангаласский улус, город Покровск, улица Братьев Ксенофонтовых,31</div>
                    </div>
                    <div class="basic__block-wrapper">
                        <div class="basic__head">График работы</div>
                        <div class="basic__box">
                            <div class="basic__box-title">
                                Понедельник - Пятница<br>
                                с 09:00ч до 18:00ч
                            </div>
                            <div class="basic__box-title">
                                Обед<br>
                                с 13:00ч до 14:00ч
                            </div>
                            <div class="basic__box-title">
                                Выходной<br>
                                Суббота и воскресенье
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basic__block-contact">
                    <div class="basic__title">Контактные данные</div>
                    <div class="basic__item-body">
                        <div class="basic__item-wrapper">
                            <div class="basic__item">
                                <div class="basic__item-title">Директор <br> (Сысолятин Сергей Иннокентьевич): <br> 8(41144)45-2-42, 43-8-67</div>
                                <img src="{Call}" class="basic__item-icon" alt="call">
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Заместитель директора по УПР (Алексеева Мария Витальевна): 8(41144)45-2-42, 43-8-67</div>
                                <img src="{Call}" class="basic__item-icon" alt="call">
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Заместитель директора по ВР <br> (Моисеева Мария Гаврильевна): 8(41144)45-2-42, 43-8-67</div>
                                <img src="{Call}" class="basic__item-icon" alt="call">
                            </div>
                        </div>
                        <div class="basic__item-wrapper">
                            <div class="basic__item">
                                <div class="basic__item-title">Заместитель директора по ОВ (Шахурдин Егор Дмитриевич): 8(41144)45-2-42, 43-8-67</div>
                                <img src="{Call}" class="basic__item-icon" alt="call">
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Заведующая общежитием <br> (Припузова Анна Валерьевна): 8(41144)45-2-42, 43-8-67</div>
                                <img src="{Call}" class="basic__item-icon" alt="call">
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div>
                                <img src="{Call}" class="basic__item-icon" alt="call">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basic__block-gallery">
                    <div class="basic__title">Галерея</div>
                    <OsnovnyyeSvedeniya/>
                </div>
            </div>
        </div>
    </div>
</section>

<News />