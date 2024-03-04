<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = '';
    let namePage = 'Образовательные программы';
    var heading = 'основные профессиональные образовательные программы';

	export let data
</script>

<svelte:head>
	<title>Образовательные программы</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="educational">
	<div class="educational__container _container">
		<div class="educational__body">
			<div class="educational__content">
				<div class="educational__content-title">Специальности СПО:</div>
					<div class="educational__item-content">
						<div class="educational__item-wrapper">
							<div class="educational__item">
								<div class="educational__item-title">Код специальности</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Наименование специальности</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Квалификация</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Уровень образования</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Срок <br> обучения</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Форма <br> обучения</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Кол-во <br> групп</div>
							</div>
						</div>
						<div class="educational__item-wrapper">
							<div class="educational__item">
								<div class="educational__item-title">09.02.01</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Компьютерные
									системы и
									комплексы
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Специалист по
									компьютерным
									системам
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Среднее
									общее
									образование
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">3 года 10 мес</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Очная</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">1</div>
							</div>
						</div>
						<div class="educational__item-wrapper">
							<div class="educational__item">
								<div class="educational__item-title">09.02.07</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Информационные
									системы и
									программиро-
									вание
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Программист/
									разработчик
									веб приложений
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Основное
									общее
									образование/
									среднее
									общее
									образование
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									3 года 10мес/ <br>
									2 года 10 мес
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Очная</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">3</div>
							</div>
						</div>
						<div class="educational__item-wrapper">
							<div class="educational__item">
								<div class="educational__item-title">10.02.01</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Организация и
									технология 
									защиты 
									информации
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Техник по защите
									информации
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Основное
									общее
									образование/
									среднее
									общее
									образование
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									3 года 10мес/ <br>
									2 года 10 мес
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Очная</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">3</div>
							</div>
						</div>
						<div class="educational__item-wrapper">
							<div class="educational__item">
								<div class="educational__item-title">42.02.10</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Туризм
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Специалист по
									туризму
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">
									Среднее
									общее
									образование
								</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">1 год 10 мес</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">Очная</div>
							</div>
							<div class="educational__item">
								<div class="educational__item-title">2</div>
							</div>
						</div>
					</div>
					<div class="educational__item-wrapper document">
						{#each data?.records as record}
							{#if record.page === 'obr_programmy'}
							<a class="educational__item" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
								<div class="educational__item-title">{record.title}</div>
								<div class="educational__item-icon _icon-download"></div>
							</a>
							{/if}
						{/each}
					</div>
			</div>
		</div>
	</div>
</section>