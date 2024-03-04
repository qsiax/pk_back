<script lang="ts">
  export let items: any[] = [];
  export let active = 'close';
  export let filter = 'all'

  async function deletePost(id: number) {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json();
      location.reload();
    });
  }
</script>

<section class="table">
  <div class="table__container _container">
    <div class="table__body bottom">
      <div class="table__content">
        <div class="table__content-head">
            <div class="table__content-head-item">ID</div>
            <div class="table__content-head-item">Дата</div>
            <div class="table__content-head-item">Заголовок</div>
            <div class="table__content-head-item">Содержание</div>
            <div class="table__content-head-item">Картинка</div>
        </div>
      {#each items as item (item.id)}
        {#if filter === 'all'}
            <div class="table__content-item">
                <div class="table__id">{item.id}</div>
                <div class="table__date">{item.date}</div>
                <div class="table__title">{item.title}</div>
                <div class="table__text">{item.content}</div>
                <div class="table__img">
                  <img src={item.url} alt="" />
                </div>
                <div class="table__content-block">
                  <a class="table__content-btn" href={`/post/${item.id}`}>Редактировать</a>
                  <button
                    on:click={() => deletePost(item.id)}
                    class="table__content-btn"
                  >Удалить</button>
                </div>
            </div>
          {:else if filter === item.category}
            <div class="table__content-item">
              <div class="table__id">{item.id}</div>
              <div class="table__date">{item.date}</div>
              <div class="table__title">{item.title}</div>
              <div class="table__text">{item.content}</div>
              <div class="table__img">
                <img src={item.url} alt="" />
              </div>
              <div class="table__content-block">
                <a class="table__content-btn" href={`/post/${item.id}`}>Редактировать</a>
                <button
                  on:click={() => deletePost(item.id)}
                  class="table__content-btn"
                >Удалить</button>
              </div>
          </div>
          {/if}
      {/each}
    </div>
    </div>
  </div>
</section>
