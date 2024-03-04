<script>
	export let data
</script>

<svelte:head>
	<title>Правила приёма</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="rules">
	<div class="rules__container _container">
		<div class="rules__body">
			<div class="rules__head">
				<div class="rules__head-wrapper">
					<ul class="page-nav-content">
						<li><a href="/">Главная - </a></li>
						<li><a>Абитуриенту - </a></li>
						<li><a class="active">Правила приёма</a></li>
					</ul>
					<div class="rules__heading">Абитуриенту</div>
				</div>
				<div class="rules__head-wrapper">
					<div class="rules__info">
						Лицензия на право осуществления образовательной деятельности серия 14 Л01 № 0000756 от 19.11.2014г, рег.№0377. Выдана Министерством образования РС(Я). Срок действия бессрочно.<br><br>
						Свидетельство о государственной аккредитации серия 14А02 №0000242 от 10.06.2015г, рег.№0376. Выдано Министерством образования РС(Я). Срок действия до 10.06.2021г
					</div>
				</div>
			</div>
			<div class="rules__content">
				<div class="rules__block-document">
					<div class="rules__item-wrapper-document">
						{#each data?.records as record}
							{#if record.page === 'pravila_priyoma'}
								<a class="rules__item-document" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
									<div class="rules__item-title-document">{record.title}</div>
									<div class="rules__item-icon-document _icon-download"></div>
								</a>
							{/if}
						{/each}
					</div>
				</div>
				<div class="rules__block">
					<div class="rules__title">План приема на 2022—2023 учебный год</div>
					<div class="rules__text">Обучение за счет средств бюджета РС(Я) на базе 11 классов</div>
					<div class="rules__item-body f">
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">Код</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Наименование специальности</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Квалификация</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Уровень</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Форма обучения</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Нормативный срок освоения</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Кол-во мест</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Кол-во поданных заявлений </div>
							</div>
						</div>
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">09.02.07</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Информационные системы и программирование</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Программист</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Базовый</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Очная</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">2 год 10 мес</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">25</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">0</div>
							</div>
						</div>
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">09.02.01</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Компьютерные системы и комплексы</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Техник по компьютерным системам</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Базовый</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Очная</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">2 год 10 мес</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">25</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">0</div>
							</div>
						</div>
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">43.02.10</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Туризм</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Специалист по туризму</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Базовый</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Очная</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">1 год 10 мес</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">25</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">0</div>
							</div>
						</div>
					</div>

					<div class="rules__text">Обучение с полным возмещением затрат на обучение на базе 11 классов</div>
					<div class="rules__item-body">
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">Код</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Наименование специальности</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Квалификация</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Уровень</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Форма обучения</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Нормативный срок освоения</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Кол-во мест</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Кол-во поданных заявлений </div>
							</div>
						</div>
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">38.02.01</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Экономика и бухгалтерский учет (по отраслям) (заочно)</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Бухгалтер</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Базовый</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Заочная</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">2 год 10 мес</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">25</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">0</div>
							</div>
						</div>
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">10.02.01</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Организация и технология защиты информации</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Техник по защите информации</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Базовый</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Заочная</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">3 год 10 мес</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">25</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">0</div>
							</div>
						</div>
						<div class="rules__item-wrapper">
							<div class="rules__item">
								<div class="rules__item-title">43.02.10</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Туризм</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Специалист по туризму</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Базовый</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">Заочная</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">2 год 10 мес</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">25</div>
							</div>
							<div class="rules__item">
								<div class="rules__item-title">0</div>
							</div>
						</div>
					</div>
				</div>
				<div class="rules__block">
					<div class="rules__title-admission">
						Документы необходимые для поступления,
						предоставляются заявителем в электронной форме:
					</div>
					<div class="rules__item-body-admission">
						<div class="rules__item-admission">
							<div class="rules__item-num-admission">01 /</div>
							<div class="rules__item-title-admission">Заявление</div>
						</div>
						<div class="rules__item-admission">
							<div class="rules__item-num-admission">02 /</div>
							<div class="rules__item-title-admission">Паспорт</div>
						</div>
						<div class="rules__item-admission">
							<div class="rules__item-num-admission">03 /</div>
							<div class="rules__item-title-admission">Аттестат об образовании</div>
						</div>
						<div class="rules__item-admission">
							<div class="rules__item-num-admission">04 /</div>
							<div class="rules__item-title-admission">Фотографии 4 шт. (3×4)</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
