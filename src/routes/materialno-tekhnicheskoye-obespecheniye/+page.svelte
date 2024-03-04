<script>
    import Heading  from '../../layout/Heading.svelte';

	export let data

    let nameMap = '';
    let namePage = 'Материально-техническое обеспечение и оснащенность образовательного процесса';
    var heading = 'Материально-техническое \nобеспечение и оснащенность \nобразовательного процесса';

	import Image from '$lib/images/pages/materialno-tekhnicheskoye-obespecheniye/01.jpg';

	console.log(data?.records.page)
</script>

<svelte:head>
	<title>Руководство</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="logistics">
	<div class="logistics__container _container">
		<div class="logistics__body">
			<div class="logistics__block-cabinet"> 
				<div class="logistics__wrapper">
					<div class="logistics__title">
						<span>01 /</span>
						Сведения о наличии оборудованных учебных кабинетов, объектов для проведения практических занятий
					</div>
					<div class="logistics__text">
						В колледже есть: <br><br>
						—  7 кабинетов, <br><br>
						— 2 лаборатории, <br><br>
						— 4 компьютерных класса <span>(43 ПК)</span>,<br><br>
						— 1 мобильный компьютерный класс <span>(14 ноутбуков)</span>; <br><br>
						— актовый зал; <br><br>
						— библиотека на 26 мест; <br>
						— гараж; <br><br>
						— учебное хозяйство; <br><br>
						— буфет; <br><br>
						— бавтодром; <br><br>
						— 35 ПК с выходом в Интернет. <br><br>
						В Учебно-вычислительном центре <span>(УВЦ)</span> проводят практические занятия и лабораторные работы по компьютерным системам, защите информации, бухгалтерским системам, и информационно-правовым системам через Интернет для студентов разных специальностей. <br><br>
						Также, в УВЦ создаются комплекты для самоконтроля знаний и проведения текущего контроля. <br><br>
						Для занятий спортом и проведения учебных занятий по физической культуре есть договор аренды спортивного зала с МУ «Дворец Спорта», а для охраны здоровья обучающихся заключен договор о медобслуживании и аренды медицинского кабинета с МБОУ «ПСОШ №2».
					</div>
				</div>
				<div class="logistics__wrapper">
					<div class="logistics__image">
						<img src="{Image}" alt="Image">
					</div>
					<div class="logistics__text">
						В колледже имеется локальная сеть, медиатека, 4 интерактивные доски ActiveBoardPromethean, TraceBoard, SmartBoard, PanasonicOB-T580 ElitePanaBoard, 7 проекторов. <br><br>
						Закуплены электронные образовательные ресурсы для учебного процесса Бухгалтерский учет для малого и среднего бизнеса, Телекоммуникации и сети, Практикум «Основы алгоритмизации и программирования», Сетевые информационные технологии , Основы медицинских знаний и здорового образа жизни, Правила по охране труда, Типовые инструкции по охране труда, 1С: Бухгалтерия, 1С: Предприятие.
					</div>
				</div>
			</div>

			<div class="logistics__block-technique">
				<div class="logistics__wrapper">
					<div class="logistics__title">
						<span>02 /</span>
						Автотехника
					</div>
					<div class="logistics__text">
						— ПАЗ 3205-60: <span>1 ед.</span> <br>
						— ПАЗ 3205:  <span>1 ед.</span> <br>
						— УАЗ 22069:  <span>1 ед.</span> <br>
						— ЛАДА ГРАНТА: <span>2 ед.</span> <br>
						— MAZDA TRIBUTE:  <span>1 ед.</span>
					</div>
				</div>
				<div class="logistics__wrapper">
					<div class="logistics__text">
						Медико-социальные условия состояния учебных кабинетов и лабораторий соответствуют нормам СанПиН, требованиям охраны труда, техники безопасности и противопожарной безопасности. <br><br>
						Колледж ежегодно проходит процедуру проверки готовности учреждения к новому учебному году с составлением соответствующих актов органами надзора.
					</div>
				</div>
			</div>

			<div class="logistics__block-details">
				<div class="logistics__title block-heading">Подробнее об кабинетах</div>
				<div class="logistics__item-wrapper">
					<div class="logistics__item">
						<div class="logistics__item-icon icon-trending"></div>
						<div class="logistics__item-title">
							Индивидуальная траектория развития
						</div>
						<div class="logistics__item-text">
							Построение индивидуальной траектории развития карьеры
						</div>
					</div>
					<div class="logistics__item">
						<div class="logistics__item-icon icon-subject"></div>
						<div class="logistics__item-title">
							Резюме
						</div>
						<div class="logistics__item-text">
							Чек-лист по написанию сопроводительного письма <br><br>
							Проработка слабых сторон в резюме
						</div>
					</div>
					<div class="logistics__item">
						<div class="logistics__item-icon icon-search"></div>
						<div class="logistics__item-title">
							Вакансии
						</div>
						<div class="logistics__item-text">
							Актуальные платформы для поиска работы <br><br>
							Свежие вакансии в социальных сетях
						</div>
					</div>
					<div class="logistics__item">
						<div class="logistics__item-icon icon-work"></div>
						<div class="logistics__item-title">
							Перечень работодателей
						</div>
					</div>
					<div class="logistics__item">
						<div class="logistics__item-icon icon-article"></div>
						<div class="logistics__item-title">
							Полезные статьи
						</div>
					</div>
				</div>
				<div class="logistics__descriptions">
					*Никто не знает, что ждет нас в будущем, но важно понимать, что вы имеете силу и возможность формировать свою карьеру и жизнь. Не бойтесь экспериментировать, учиться на своих ошибках и стремиться к своим целям.
				</div>
			</div>

			<div class="logistics__block-documents">
				<div class="logistics__title block-heading">Сведения и договоры</div>
				<div class="logistics__documents-item-wrapper">
					{#each data?.records as record}
						{#if record.page === 'materialno'}
							<a href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank" class="logistics__documents-item">
								<div class="logistics__documents-item-title">{record.title}</div>
								<div class="logistics__documents-item-icon _icon-download"></div>
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>