<script>
    import Heading  from '../../layout/Heading.svelte';

    import Image from '$lib/images/pages/obshchezhitiye/01.jpg';

    let nameMap = 'Студенту -';
    let namePage = 'Общежитие';
    var heading = 'Проживание';
</script>

<svelte:head>
	<title>Общежитие</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="hostel-banner">
    <div class="hostel-banner__container _container">
        <div class="hostel-banner__body">
            <div class="hostel-banner__block">
                <div class="hostel-banner__title">Общежитие</div>
                <div class="hostel-banner__text">Для размещения иногородних обучающихся на период обучения колледж располагает 2 этажным благоустроенным общежитием, которое расположено <span>по адресу город Покровск Покровский тракт 83 км.</span></div>
                <div class="hostel-banner__num-wrapper">
                    <div class="hostel-banner__num-item">
                        <div class="hostel-banner__num">15</div>
                        <div class="hostel-banner__num-text">Количество комнат </div>
                    </div>
                    <div class="hostel-banner__num-item">
                        <div class="hostel-banner__num">50</div>
                        <div class="hostel-banner__num-text">Количество мест</div>
                    </div>
                </div>
            </div>
            <div class="hostel-banner__block">
                <div class="hostel-banner__img">
                    <img src="{Image}" alt="Image">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="hostel-place">
    <div class="hostel-place__container _container">
        <div class="hostel-place__body">
            <div class="hostel-place__title">Порядок очередности предоставления мест</div>
            <div class="hostel-place__content">
                <div class="hostel-place__item-wrapper">
                    <div class="hostel-place__item">
                        <div class="hostel-place__item-head">
                            <div class="hostel-place__item-num">01 /</div>
                            <div class="hostel-place__item-title">Правом первоочередного заселения пользуются следующие категории студентов:</div>
                        </div>
                        <div class="hostel-place__item-text">
                            — Студенты, зачисленные на 1 курс;<br>
                            — Студенты из малоимущих семей;<br>
                            — Студенты из многодетных семей (воспитывающих 3-х и более несовершеннолетних детей);<br>
                            — Студенты, имеющие одного родителя.<br>
                            — Студенты, успевающие в учебе (на основании соответствующего ходатайства);<br>
                            — Студенты, активно участвующие в жизни колледжа по различным направлениям (на основании соответствующего ходатайства).
                        </div>
                    </div>
                    <div class="hostel-place__item">
                        <div class="hostel-place__item-head">
                            <div class="hostel-place__item-num">02 /</div>
                            <div class="hostel-place__item-title">Места в общежитии предоставляются в первоочередном порядке следующим льготным категориям студентов:</div>
                        </div>
                        <div class="hostel-place__item-text">
                            — Студентам–сиротам и студентам, оставшимся без попечения родителей (на весь срок обучения);<br>
                            — Студентам – инвалидам.
                        </div>
                    </div>
                </div>
                <div class="hostel-place__item-wrapper">
                    <div class="hostel-place__item">
                        <div class="hostel-place__item-head">
                            <div class="hostel-place__item-num">03 /</div>
                            <div class="hostel-place__item-title">Студенты, проживающие и прописанные в населенных пунктах Хангаласского улуса <span>(за исключением льготных категорий студентов)</span> заселяются в общежитие при наличии свободных мест.</div>
                        </div>
                    </div>
                    <div class="hostel-place__item">
                        <div class="hostel-place__item-head">
                            <div class="hostel-place__item-num">04 /</div>
                            <div class="hostel-place__item-title">Студенты, которые имеют задолженности по дисциплинам на момент окончания летней сессии, студенты, к которым ранее неоднократно было применено дисциплинарное взыскание за нарушение правил внутреннего распорядка в общежитии, могут быть заселены в общежитие по ходатайству в последнюю очередь при наличии свободных мест.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="hostel-settle">
    <div class="hostel-settle__container _container">
        <div class="hostel-settle__body">
            <div class="hostel-settle__title">Порядок заселения в студенческое общежитие колледжа</div>
            <div class="hostel-settle__content">
                <div class="hostel-settle__item-wrapper">
                    <div class="hostel-settle__item">
                        <div class="hostel-settle__item-head">
                            <div class="hostel-settle__item-num">01 /</div>
                            <div class="hostel-settle__item-title">Основанием для принятия решения о заселении студентов в общежитие колледжа являются следующие документы</div>
                        </div>
                        <div class="hostel-settle__text">
                            — Личное заявление; <br>
                            — Документы, подтверждающие отнесение лица к льготной категории обучающихся; <br>
                            — ходатайство заведующего общежития о предоставлении места по итогам аттестации проживающего.
                        </div>
                    </div>
                </div>
                <div class="hostel-settle__item-wrapper">
                    <div class="hostel-settle__item">
                        <div class="hostel-settle__item-head">
                            <div class="hostel-settle__item-num">02 /</div>
                            <div class="hostel-settle__item-title">Студентам, зачисленным на 1 курс, предоставляются места для проживания в общежитии на основании приказа о вселении. <span>Приказ на вселение издается на основании заявлений студентов и приказа директора о зачислении в колледж.</span></div>
                        </div>
                    </div>
                    <div class="hostel-settle__item">
                        <div class="hostel-settle__item-head">
                            <div class="hostel-settle__item-num">03 /</div>
                            <div class="hostel-settle__item-title">Иногородние студенты из старших курсов имеют право на заселение при прохождении ежегодной аттестации и наличии свободных мест.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>