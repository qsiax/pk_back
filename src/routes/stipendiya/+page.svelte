<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = '';
    let namePage = 'Стипендии и меры поддержки обучающихся';
    var heading = 'Стипендия';

	export let data
</script>

<svelte:head>
	<title>Стипендия</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="scholarship">
	<div class="scholarship__container _container">
		<div class="scholarship__body">
			<div class="scholarship__content">
				<div class="scholarship__item-title">Что получают</div>
				<div class="scholarship__item-wrapper">
					<div class="scholarship__item">
						<div class="scholarship__item-text">
							Академическая стипендия: <br>
							Хорошист — <span>1 940 рб.</span>, Отличник — <span>5 607 рб.</span>
						</div>
					</div>
					<div class="scholarship__item">
						<div class="scholarship__item-text">
							Социальная стипендия: <span>2 910 рб.</span>
						</div>
					</div>
					<div class="scholarship__item">
						<div class="scholarship__item-text">
							Льготное питание: <span>112,80 рб.</span> <p>(в день)</p>
						</div>
					</div>
				</div>
				<div class="scholarship__item-title">Сироты</div>
				<div class="scholarship__item-wrapper">
					<div class="scholarship__item-block">
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Питание в день: <span>500 рб.</span>
							</div>
						</div>
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Литература 1 раз в год: <span>7 533 рб.</span>
							</div>
						</div>
					</div>
					<div class="scholarship__item-block">
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Мягкий инвентарь: Юноши — <span>5 879 рб.</span>, Девушки — <span>6 613 рб.</span>
							</div>
						</div>
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Пособие при выпуске: <span>500 рб.</span>
							</div>
						</div>
					</div>
					<div class="scholarship__item-block">
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Моющие средства: <span>417 рб.</span>
							</div>
						</div>
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Обмундирование при выпуске: Юноши — <span>130 611 рб.</span>, Девушки — <span>139 892 рб.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="scholarship__item-title">Приказы, положение и трудоустройство</div>
				<div class="scholarship__document-wrapper">
					{#each data?.records as record}
						{#if record.page === 'stipendiya'}
							<a class="scholarship__document-item" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
								<div class="scholarship__document-item-text">{record.title}</div>
								<div class="scholarship__document-item-icon _icon-download"></div>
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>