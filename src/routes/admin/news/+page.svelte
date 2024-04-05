<script lang="ts">
    import { onMount } from 'svelte';
    import Table from "../../components/Table.svelte";
    import Dialog from '../../components/Dialog.svelte';
    import Calendar from '../../components/calendar.svelte';
  
    type Post = {
      createdAt: Date;
      image: any;
      content: string;
      title: string;
      id: number;
     };
  
    let items: Post[] = [];
    let open = 'close';
    export let filter = 'all'

    function checkOpen() {
        if (open = 'close') {
            open = 'open'
        } else {
            open = 'close'
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
                              // Simulate a long load time.
                              wait ? 2000 : 0
                          )
                      );
              }
      }
  </script>

    <div class="table">
        <div class="table__container _container">
            <div class="table__body top">
                <div class="heading">Админ панель</div>
                <div class="table__head">
                  <div class="table__head-wrapper">
                    <div class={filter === 'all' ? 'table__head-item active' : 'table__head-item'} on:click={() => {filter = 'all'}}>Вcе</div>
                    <div class={filter === 'college' ? 'table__head-item active' : 'table__head-item'} on:click={() => {filter = 'college'}}>Колледж</div>
                    <div class={filter === 'technology' ? 'table__head-item active' : 'table__head-item'} on:click={() => {filter = 'technology'}}>Технологии</div>
                  </div>
                  <div class="table__head-item" on:click={() => {checkOpen()}}>добавить</div>
                </div>
            </div>
        </div>
    </div>

    <Table {items} {filter}/>

    <Dialog {open}/>