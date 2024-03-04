<script>
    import Heading  from '../../layout/Heading.svelte';

	import Image from '$lib/images/pages/obrazovatelnaya-sreda/bg.png';

    let nameMap = '';
    let namePage = 'Цифровая образовательная среда';
    var heading = 'Цифровая образовательная среда';

	export let data
</script>

<svelte:head>
	<title>Цифровая образовательная среда</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="digital">
	<div class="digital__container _container">
		<div class="digital__body">
			<div class="digital__img">
				<img src="{Image}" alt="Image">
			</div>
			<div class="digital__content">
				<div class="digital__item-wrapper">
					{#each data?.records as record}
						{#if record.page === 'obr_sreda'}
							<a class="digital__item" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
								<div class="digital__title">{record.title}</div>
								<div class="digital__icon _icon-download"></div>
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>