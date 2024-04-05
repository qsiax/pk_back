<script>
    export let data
    export let form

    let snowAdd = false
</script>

<section class="ras">
    <div class="ras__container _container">
        <div class="ras__body">
            <div class="ras__heading">Админ панель</div>
            <div class="ras__head">
                <div class={snowAdd === true ? 'ras__head-item active' : 'ras__head-item'} on:click={() => {snowAdd = true}}>Добавить</div>
            </div>
            <div class="ras__content">
                {#each data?.records as record}
                    <a class="ras__item" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
                        <div class="ras__item-title">{record.title}</div>
                        <div class="ras__item-icon _icon-download"></div>
                    </a>
                {/each}
            </div>
            {#if snowAdd}
                <div class="ras__add">
                    <form method="POST" enctype="multipart/form-data" action="?/add">
                        <div class="ras__add-heading">Добавить расписание</div>
                        {#if form?.message}
                            <div class="error">{form.message}</div>
                            <input type="text" name="title" value="{form.title}">
                        {:else}
                            <input type="text" name="title" placeholder="Заголовок">
                        {/if}    
                        <div class="ras__add-file">
                            <input type="file" name="file" id="file" accept=".pdf, .docx, .doc, .pptx, .ppt, .xlsx, .xls" value=""/>
                            <label for="file">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="upload"
                                    class="svg-inline--fa fa-upload fa-w-16"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                        >
                                    </path>
                                </svg>
                                <span>Выберите файл</span>
                            </label>
                        </div>
                        <div class="ras__button-wrapper">
                            <button>Сохранить <div class="ras__button-icon _icon-arrow"></div></button>
                            <div class="ras__button-close" on:click={() => {snowAdd = false}}>
                                <div class="ras__button-close-icon icon-close"></div>
                            </div>
                        </div>
                    </form>
                </div>
            {/if}
        </div>
    </div>
</section>