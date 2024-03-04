<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = '';
    let namePage = 'Финансово-хозяйственная деятельность';
    var heading = 'Финансово-хозяйственная деятельность';

	export let data
</script>

<svelte:head>
	<title>Финансово-хозяйственная деятельность</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="economic">
	<div class="economic__container _container">
		<div class="economic__body">
			<div class="economic__block-info">
				<div class="economic__title">
					Сведения о поступлении финансовых и материальных средств и об их расходовании
				</div>
				<div class="economic__item-body">
					<div class="economic__item-wrapper">
						<div class="economic__item">
							<div class="economic__item-title">Год</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">2019</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">2020</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">2021</div>
						</div>
					</div>
					<div class="economic__item-wrapper">
						<div class="economic__item">
							<div class="economic__item-title">Поступившие финансовые и материальные средства</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">8 450 396,90 ₽</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">8 450 396,90 ₽</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">8 450 396,90 ₽</div>
						</div>
					</div>
					<div class="economic__item-wrapper">
						<div class="economic__item">
							<div class="economic__item-title">Расходованные финансовые и материальные средств</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">8 450 396,90 ₽</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">8 450 396,90 ₽</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">8 450 396,90 ₽</div>
						</div>
					</div>
				</div>
			</div>
			<div class="economic__block-volume">
				<div class="economic__title">
					Объем образовательной деятельности, финансовое обеспечение которой осуществляется:
				</div>
				<div class="economic__item-body">
					<div class="economic__item-wrapper">
						<div class="economic__item">
							<div class="economic__item-title">
								за счет бюджетных ассигнований
								федерального бюджета (тыс. руб.)
							</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">0,0 ₽</div>
						</div>
					</div>
					<div class="economic__item-wrapper">
						<div class="economic__item">
							<div class="economic__item-title">
								за счет бюджетов субъектов Российской Федерации (тыс. руб.)
							</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">0,0 ₽</div>
						</div>
					</div>
					<div class="economic__item-wrapper">
						<div class="economic__item">
							<div class="economic__item-title">
								за счет местных бюджетов (тыс. руб.)
							</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">0,0 ₽</div>
						</div>
					</div>
					<div class="economic__item-wrapper">
						<div class="economic__item">
							<div class="economic__item-title">
								по договорам об образовании за счет средств физических и (или) юридических лиц (тыс. руб.)
							</div>
						</div>
						<div class="economic__item">
							<div class="economic__item-title">0,0 ₽</div>
						</div>
					</div>
				</div>
			</div>
			<div class="economic__block-document">
				<div class="economic__title">Документы</div>
				<div class="economic__item-body-document">
					{#each data?.records as record}
						{#if record.page === 'finansovo'}
							<a class="economic__item-document" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
								<div class="economic__item-title-document">{record.title}</div>
								<div class="economic__item-icon-document _icon-download"></div>
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>