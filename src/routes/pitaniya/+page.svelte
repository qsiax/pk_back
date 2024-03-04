<script>
    import Heading  from '../../layout/Heading.svelte';
	import Contact from '../../layout/Contact.svelte';

	import Image from '$lib/images/pages/pitaniya/bg.png';

    let nameMap = '';
    let namePage = 'Организация питания в образовательной организации';
    var heading = 'Организация питания \nв образовательной \nорганизации';

	export let data
</script>

<svelte:head>
	<title>Организация питания в образовательной организации</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="catering">
	<div class="catering__container _container">
		<div class="catering__body">
			<div class="catering__content">
				<div class="catering__img">
					<img src="{Image}" alt="Image">
				</div>
				<div class="catering__item-body">
					<div class="catering__item-wrapper">
						{#each data?.records as record}
							{#if record.page === 'pitaniya'}
								<div class="catering__item">
									<div class="catering__item-title">{record.title}</div>
									<div class="catering__item-icon _icon-download"></div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Contact />