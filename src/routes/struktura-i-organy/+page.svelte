<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = '';
    let namePage = 'Структура и органы управления образовательной организацией';
    var heading = 'Структура и органы управления образовательной организацией';
</script>

<svelte:head>
	<title>Структура и органы управления</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>
