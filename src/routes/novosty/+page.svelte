<script lang="ts">
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = '';
    let namePage = 'Новости';
    var heading = 'Недавние новости';

    import { onMount } from 'svelte';

    type Post = {
      createdAt: Date;
      image: any;
      content: string;
      title: string;
      id: number;
      url: string;
      date: string;
      category: string;
     };
  
    let items: Post[] = [];
    let filter = 'all'

    onMount(() => loadThings(false))

    function loadThings(wait: boolean) {
              if (typeof fetch !== 'undefined') {
  
                  fetch('http://localhost:3001/posts')
                      .then((response) => response.json())
                      .then((json) =>
                          setTimeout(
                              () => {
                                  items = json;
                              },
                              wait ? 2000 : 0
                          )
                      );
              }
      }

</script>

<svelte:head>
	<title>Новости</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="novosty">
    <div class="novosty__container _container">
        <div class="novosty__body">
            <div class="novosty__head">
                <div class={filter === 'all' ? 'novosty__head-item active' : 'novosty__head-item'} on:click={() => {(filter = 'all')}}>
                    <div class="novosty__head-item-title">ВСе</div>
                </div>
                <div class={filter === 'college' ? 'novosty__head-item active' : 'novosty__head-item'} on:click={() => {(filter = 'college')}}>
                    <div class="novosty__head-item-title">Колледж</div>
                </div>
                <div class={filter === 'technology' ? 'novosty__head-item active' : 'novosty__head-item'} on:click={() => {(filter = 'technology')}}>
                    <div class="novosty__head-item-title">Технологии</div>
                </div>
            </div>
            <div class="novosty__item-wrapper">
            {#each items as item (item.id)}
                {#if filter === 'all'}
                <div class="novosty__item">
                    <div class="novosty__item-block">
                        <div class="novosty__item-date">{item.date}</div>
                        <div class="novosty__item-content">
                            <div class="novosty__item-title">{item.title}</div>
                            <div class="novosty__item-text">{item.content}</div>
                        </div>
                    </div>
                    <div class="novosty__item-block">
                        <div class="novosty__item-img">
                            <img src="{item.url}" alt="">
                        </div>
                        <div class="novosty__item-arrow _icon-arrow"></div>
                    </div>
                </div>
                {:else if item.category === filter}
                <div class="novosty__item">
                    <div class="novosty__item-block">
                        <div class="novosty__item-date">{item.date}</div>
                        <div class="novosty__item-content">
                            <div class="novosty__item-title">{item.title}</div>
                            <div class="novosty__item-text">{item.content}</div>
                        </div>
                    </div>
                    <div class="novosty__item-block">
                        <div class="novosty__item-img">
                            <img src="{item.url}" alt="">
                        </div>
                        <div class="novosty__item-arrow _icon-arrow"></div>
                    </div>
                </div>
                {/if}
            {/each}
            </div>
        </div>
    </div>
</section>