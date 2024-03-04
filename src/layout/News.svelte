<script lang="ts">
    import { page } from '$app/stores';
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
    let i = 0

    function numCheck() {
        if (i > 2)
        {
            i = 2
        } else if (i < 0) {
            i = 0
        }
    }

    function filterCheck() {
        if (i === 0) {
            filter = 'all'
        } else if (i === 1) {
            filter = 'college'
        } else if (i === 2) {
            filter = 'technology'
        }
    }

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

<section class="news">
    <div class="news__container _container">
        <div class="news__body">
            <div class="news__title">Новости</div>
            <div class="news__head">
                <div class="news__head-block">
                    <div class={filter === 'all' ? 'news__head-item active' : 'news__head-item'} on:click={() => {(filter = 'all', i = 0)}}>ВСе</div>
                    <div class={filter === 'college' ? 'news__head-item active' : 'news__head-item'} on:click={() => {(filter = 'college', i = 1)}}>Колледж</div>
                    <div class={filter === 'technology' ? 'news__head-item active' : 'news__head-item'} on:click={() => {(filter = 'technology', i = 2)}}>Технологии</div>
                </div>
                <div class="news__arrow-wrapper">
                    <div class={i === 0 ? "news__arrow-prev disable _icon-arrow" : "news__arrow-prev _icon-arrow"} on:click={() => {(i--, filterCheck(), numCheck())}}></div>
                    <div class={i === 2 ? "news__arrow-next disable _icon-arrow" : "news__arrow-next _icon-arrow"} on:click={() => {(i++, filterCheck(), numCheck())}}></div>
                </div>
            </div>
            <div class="news__content-wrapper">
                <div class="news__content">
                    <div class="news__item-wrapper active" id="news-item-01">
                        {#each items.slice(0, 4) as item (item.id)}
                            {#if filter === 'all'}
                            <div class="news__item">
                                <div class="news__item-block">
                                    <div class="news__item-date">{item.date}</div>
                                    <div class="news__item-title">{item.title}</div>
                                </div>
                                <div class="news__item-block">
                                    <div class="news__item-img">
                                        <img src="{item.url}" alt="News">
                                    </div>
                                    <div class="news__item-arrow _icon-arrow"></div>
                                </div>
                            </div>
                            {:else if item.category === filter}
                            <div class="news__item">
                                <div class="news__item-block">
                                    <div class="news__item-date">{item.date}</div>
                                    <div class="news__item-title">{item.title}</div>
                                </div>
                                <div class="news__item-block">
                                    <div class="news__item-img">
                                        <img src="{item.url}" alt="News">
                                    </div>
                                    <div class="news__item-arrow _icon-arrow"></div>
                                </div>
                            </div>
                            {/if}
                        {/each}
                    </div>
                </div>
            </div>
            <li aria-current={$page.url.pathname === '/materialno-tekhnicheskoye-obespecheniye' ? 'page' : undefined}>
                <a href="/novosty" class="news__btn">Все новости <div class="news__btn-icon _icon-arrow"></div></a>
            </li>
        </div>
    </div>
</section>