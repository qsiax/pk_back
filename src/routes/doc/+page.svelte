<script>
    export let data
    export let form

    let uploadMenu = false

    if (form?.uploadMenu === true) {
        uploadMenu = true
    }
  
    function snowUploadMenu() {
        uploadMenu = true
    }

    function closeUploadMenu() {
        uploadMenu = false
    }

    let filter = 'all'
    let updateMenu = ''
</script>

<section class="view">
    <div class="view__container _container">
        <div class="view__body">
            <div class="view__heading">Админ панель</div>
            <div class="view__head">
                <div class="view__head-wrapper">
                    <div class={filter === 'all' ? 'view__head-item active' : 'view__head-item'} on:click={() => {(filter = 'all')}}>Все</div>
                    <div class={filter === 'plan' ? 'view__head-item active' : 'view__head-item'} on:click={() => {(filter = 'plan')}}>Планы</div>
                    <div class={filter === 'program' ? 'view__head-item active' : 'view__head-item'} on:click={() => {(filter = 'program')}}>Программы</div>
                    <div class={filter === 'order' ? 'view__head-item active' : 'view__head-item'} on:click={() => {(filter = 'order')}}>Приказы</div>
                    <div class={filter === 'report' ? 'view__head-item active' : 'view__head-item'} on:click={() => {(filter = 'report')}}>Доклады</div>
                    <div class={filter === 'provisions' ? 'view__head-item active' : 'view__head-item'} on:click={() => {(filter = 'provisions')}}>Положения</div>
                    <div class={filter === 'agreement' ? 'view__head-item active' : 'view__head-item'} on:click={() => {(filter = 'agreement')}}>Договоры</div>
                </div>
                <div class="view__head-item" on:click={() => {snowUploadMenu()}}>Добавить</div>
            </div>
            <div class="view__item-content">
                {#each data?.records as record}
                    {#if filter === 'all'}
                    <div class="view__item-wrapper">
                        <a class="view__item" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
                            <div class="view__item-title">{record.title}</div>
                            <div class="view__item-icon _icon-download"></div>
                        </a>
                        <div class="view__buttons-wrapper">
                            <div class="view__button" on:click={() => {{updateMenu = record.id}}}>Редактировать</div>
                            <form method="POST" action="?/delete" class="view__form">
                                <input type="text" name="id" value={record.id} />
                                <button class="view__button">Удалить</button>
                            </form>
                        </div>
                    </div>
                        {#if updateMenu === record.id}
                            <div class="view__update">
                                <form method="POST" enctype="multipart/form-data" action="?/update">
                                    <div class="view__update-title">Редактировать документ</div>
                                    <input type="text" name="id" value={record.id} class="hide"/>
                                    <input type="text" name="title" placeholder="Названия документа" value={record.title}/>
                                   <select placeholder="Категория" name="category" value={record.category}>
                                        <option value="0" selected>Тип документа</option>
                                        <option value="plan">План</option>
                                        <option value="program">Программа</option>
                                        <option value="order">Приказ</option>
                                        <option value="report">Доклад</option>
                                        <option value="provisions">Положения</option>
                                        <option value="agreement">Договор</option>
                                    </select>
                                    <div class="view__update-buttons-wrapper">
                                        <button>Сохранить <div class="view__update-button-icon _icon-arrow"></div></button>
                                        <div class="view__update-button-close" on:click={() => {updateMenu = ''}}>
                                            <div class="view__update-button-close-icon icon-close"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        {/if}
                    {:else if record.category === filter}
                        <div class="view__item-wrapper">
                            <a class="view__item" href="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.file}?token=" target="_blank">
                                <div class="view__item-title">{record.title}</div>
                                <div class="view__item-icon _icon-download"></div>
                            </a>
                            <div class="view__buttons-wrapper">
                                <div class="view__button" on:click={() => {{updateMenu = record.id}}}>Редактировать</div>
                                <form method="POST" action="?/delete" class="view__form">
                                    <input type="text" name="id" value={record.id} />
                                    <button class="view__button">Удалить</button>
                                </form>
                            </div>
                        </div>
                        {#if updateMenu === record.id}
                            <div class="view__update">
                                <form method="POST" enctype="multipart/form-data" action="?/update">
                                    <div class="view__update-title">Редактировать документ</div>
                                    <input type="text" name="id" value={record.id} class="hide"/>
                                    <input type="text" name="title" placeholder="Названия документа" value={record.title}/>
                                   <select name="category" value={record.category}>
                                        <option value="0" selected>Тип документа</option>
                                        <option value="plan">План</option>
                                        <option value="program">Программа</option>
                                        <option value="order">Приказ</option>
                                        <option value="report">Доклад</option>
                                        <option value="provisions">Положения</option>
                                        <option value="agreement">Договор</option>
                                    </select>
                                    <div class="view__update-buttons-wrapper">
                                        <button>Сохранить <div class="view__update-button-icon _icon-arrow"></div></button>
                                        <div class="view__update-button-close" on:click={() => {updateMenu = ''}}>
                                            <div class="view__update-button-close-icon icon-close"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        {/if}
                    {/if}
                {/each}
            </div>
            {#if uploadMenu}
            <div class="view__form-add">
                <div class="view__form-add-close"></div>
                <form method="POST" enctype="multipart/form-data" action="?/add">
                    <div class="view__form-add-title">добавить документ</div>
                    {#if form?.message}
                        <div class="error">{form.message}</div>
                    {/if}    
                    <input type="text" name="title" placeholder="Названия документа">
                    <select placeholder="Категория" name="category">
                        <option value="0" selected>Тип документа</option>
                        <option value="plan">План</option>
                        <option value="program">Программа</option>
                        <option value="order">Приказ</option>
                        <option value="report">Доклад</option>
                        <option value="provisions">Положения</option>
                        <option value="agreement">Договор</option>
                    </select>
                    <select placeholder="Категория" name="page">
                        <option value="0" selected>Выбрать страницу</option>
                        <option value="materialno">МАТЕРИАЛЬНО-ТЕХНИЧЕСКОЕ ОБЕСПЕЧЕНИЕ</option>
                        <option value="stipendiya">СТИПЕНДИЯ</option>
                        <option value="finansovo">ФИНАНСОВО-ХОЗЯЙСТВЕННАЯ ДЕЯТЕЛЬНОСТЬ</option>
                        <option value="obr_programmy">ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ</option>
                        <option value="pitaniya">ОРГАНИЗАЦИЯ ПИТАНИЯ</option>
                        <option value="obr_sreda">ЦИФРОВАЯ ОБРАЗОВАТЕЛЬНАЯ СРЕДА</option>
                        <option value="pravila_priyoma">ПРАВИЛА ПРИЕМА</option>
                        <option value="trudoustroystvo">ТРУДОУСТРОЙСТВО</option>
                      </select>
                    <div class="view__form-add-file-input">
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
                    <div class="view__form-add-button-wrapper">
                        <button>Добавить <div class="view__form-add-button-icon _icon-arrow"></div></button>
                        <div class="view__form-add-button-close" on:click={() => {closeUploadMenu()}}>
                            <div class="view__form-add-button-close-icon icon-close"></div>
                        </div>
                    </div>
                </form>
            </div>
            {/if}
        </div>
    </div>
</section>
