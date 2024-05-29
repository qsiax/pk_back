<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';

    export let data

    let swiper
    let showDiplomList = false
    let showDiplomAdd = false

    let showSessiaList = false
    let showSessiaAdd = false

    let headActive = 'diplom'

    let headPopupAdd = false
    let headPopupEdit = false

    let groupActive = ''

    let showPraktikaAdd = 'false'
    let showTemplateAdd = false
    let showGroupAdd = false

    let showGroupList = false
    let showTemplateList = false
    let showPraktikaList = false

    let groupListActive = 'all'

    let showSessiaEdit = false
    let showDiplomEdit = false
    let showTemplateEdit = false
    let showPraktikaEdit = false
    let showGroupEdit = false

    let sessiaEdit = ''
    let diplomEdit = ''
    let templateEdit = ''
    let praktikaEdit = ''
    let groupEdit = ''

    function checkHeadBtnAdd() {
        if (headPopupEdit === true) {
            headPopupEdit = false
            headPopupAdd = true
        }
    }

    function checkHeadBtnEdit() {
        if (headPopupAdd === true) {
            headPopupAdd = false
            headPopupEdit = true
        }
    }
</script>

<div class="admin-obucheniye">
    <div class="admin-obucheniye__container _container">
        <div class="admin-obucheniye__body">
            <div class="admin-obucheniye__heading">Админ панель</div>
            <div class="admin-obucheniye__head">
                <div class="admin-obucheniye__head-wrapper">
                    <div class={headActive === 'diplom' ? 'admin-obucheniye__head-item active' : 'admin-obucheniye__head-item'} on:click={() => (headActive = 'diplom')}>Диплом</div>
                    <div class={headActive === 'sessia' ? 'admin-obucheniye__head-item active' : 'admin-obucheniye__head-item'} on:click={() => (headActive = 'sessia')}>Сессия</div>
                    <div class={headActive === 'praktika' ? 'admin-obucheniye__head-item active' : 'admin-obucheniye__head-item'} on:click={() => (headActive = 'praktika')}>Практика</div>
                </div>
                {#if headActive === 'diplom'}
                    <div class="admin-obucheniye__head-wrapper">
                        <div class="admin-obucheniye__head-item" on:click={() => (showDiplomList = true)}>Редактировать</div>
                        <div class="admin-obucheniye__head-item" on:click={() => {showDiplomAdd = true}}>Добавить</div>
                    </div>
                {/if}
                {#if headActive === 'sessia'}
                <div class="admin-obucheniye__head-wrapper">
                    <div class="admin-obucheniye__head-item" on:click={() => (showSessiaList = true)}>Редактировать</div>
                    <div class="admin-obucheniye__head-item" on:click={() => {showSessiaAdd = true}}>Добавить</div>
                </div>
                {/if}
                {#if headActive === 'praktika'}
                    <div class="admin-obucheniye__head-wrapper">
                        <div class={headPopupEdit === true ? 'admin-obucheniye__head-item active' : 'admin-obucheniye__head-item'} on:click={() => {headPopupEdit === false ? headPopupEdit = true : headPopupEdit = false, checkHeadBtnEdit()}}>Редактировать</div>
                        <div class={headPopupAdd === true ? 'admin-obucheniye__head-item active' : 'admin-obucheniye__head-item'} on:click={() => {headPopupAdd === false ? headPopupAdd = true : headPopupAdd = false, checkHeadBtnAdd()}}>Добавить</div>
                    </div>
                    {#if headPopupEdit}
                    <div class="admin-obucheniye__head-popup edit">
                        <div class="admin-obucheniye__head-popup-item" on:click={() => {showTemplateList = true, headPopupEdit = false}}>Редактировать шаблоны прохождения практики</div>
                        <div class="admin-obucheniye__head-popup-item" on:click={() => {showGroupList = true, headPopupEdit = false}}>Редактировать группы</div>
                        <div class="admin-obucheniye__head-popup-item" on:click={() => {showPraktikaList = true, headPopupEdit = false}}>Редактировать документы группы</div>
                    </div>
                    {/if}
                    {#if headPopupAdd}
                        <div class="admin-obucheniye__head-popup">
                            <div class="admin-obucheniye__head-popup-item" on:click={() => {showTemplateAdd = true, headPopupAdd = false}}>Добавить шаблоны прохождения практики</div>
                            <div class="admin-obucheniye__head-popup-item" on:click={() => {showGroupAdd = true, headPopupAdd = false}}>Добавить группу</div>
                            <div class="admin-obucheniye__head-popup-item" on:click={() => {showPraktikaAdd = groupActive, headPopupAdd = false}}>Добавить документы группы</div>
                        </div>
                    {/if}
                {/if}
            </div>
            {#if headActive === 'diplom'}
            <div class="admin-obucheniye__diplom">
                <div class="admin-obucheniye__diplom-heading">Порядок выполнения диплома</div>
                <div class="admin-obucheniye__diplom-content">
                    {#each data?.diploms as diplom}
                        <a class="admin-obucheniye__diplom-item" href="http://127.0.0.1:8090/api/files/{diplom.collectionId}/{diplom.id}/{diplom.file}?token=" target="_blank">
                            <div class="admin-obucheniye__diplom-item-title">{diplom.title}</div>
                            <div class="admin-obucheniye__diplom-item-icon _icon-download"></div>
                        </a> 
                    {/each}
                </div>
            </div>
            {/if}
            {#if headActive === 'sessia'}
            <div class="admin-obucheniye__sessia">
                <div class="admin-obucheniye__sessia-heading">Графики сессий</div>
                <div class="admin-obucheniye__sessia-content">
                    {#each data?.sessias as sessia}
                        <a class="admin-obucheniye__sessia-item" href="http://127.0.0.1:8090/api/files/{sessia.collectionId}/{sessia.id}/{sessia.file}?token=" target="_blank">
                            <div class="admin-obucheniye__sessia-item-title">{sessia.title}</div>
                            <div class="admin-obucheniye__sessia-item-icon _icon-download"></div>
                        </a>
                    {/each}
                </div>
            </div>
            {/if}
            {#if headActive === 'praktika'}
            <div class="admin-obucheniye__praktika">
                <div class="admin-obucheniye__praktika-head">
                    <div class="admin-obucheniye__praktika-head-item">Документы для прохождения практики</div>
                    {#each data?.templatesp as templatep}
                        <a class="admin-obucheniye__praktika-head-item" href="http://127.0.0.1:8090/api/files/{templatep.collectionId}/{templatep.id}/{templatep.file}?token=" target="_blank">
                            <div class="admin-obucheniye__praktika-head-item-title">{templatep.title}</div>
                            <div class="admin-obucheniye__praktika-head-item-icon _icon-download"></div>
                        </a>
                    {/each}
                    {#if showTemplateAdd}
                    <div class="admin-obucheniye__praktika-group-doc-add">
                        <div class="admin-obucheniye__praktika-group-doc-add-content">
                            <div class="admin-obucheniye__praktika-group-doc-add-heading">Добавить шаблон прохождения практики</div>
                            <form action="?/addP" method="POST" enctype="multipart/form-data">
                                <input type="text" placeholder="Название документа" name="title">
                                <div class="admin-obucheniye__diplom-add-file-input">
                                    <input type="file" name="file" id="filep" accept=".pdf, .docx, .doc, .pptx, .ppt, .xlsx, .xls" value=""/>
                                    <label for="filep">
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
                                <div class="admin-obucheniye__praktika-group-doc-add-btn-wrapper">
                                    <button>Добавить<div class="admin-obucheniye__praktika-group-doc-add-btn-icon _icon-arrow"></div></button>
                                    <div class="admin-obucheniye__praktika-group-doc-add-close" on:click={() => {showTemplateAdd = false}}>
                                        <div class="admin-obucheniye__praktika-group-doc-add-close-icon icon-close"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/if}
                    {#if showTemplateList}
                    <div class="admin-obucheniye__sessia-list">
                        <div class="admin-obucheniye__sessia-list-content">
                            <div class="admin-obucheniye__sessia-list-heading">Редактировать шаблоны прохождения практики</div>
                            <div class="admin-obucheniye__sessia-list-wrapper">
                                {#each data?.templatesp as templatep}
                                <a class="admin-obucheniye__sessia-list-item" href="http://127.0.0.1:8090/api/files/{templatep.templatep}/{templatep.templatep}/{templatep.templatep}?token=" target="_blank">
                                    <div class="admin-obucheniye__sessia-list-title">{templatep.title}</div>
                                    <div class="admin-obucheniye__sessia-list-btn-wrapper">
                                        <form>
                                            <button class="admin-obucheniye__sessia-list-btn" on:click={() => (templateEdit = templatep.id, showTemplateList = false, showTemplateEdit = true)}>Редактировать</button>
                                        </form>
                                        <form action="?/deleteP" method="POST">
                                            <input type="text" value={templatep.id} name="id">
                                            <button class="admin-obucheniye__sessia-list-btn">Удалить</button>
                                        </form>
                                    </div>
                                </a>
                                {/each}
                            </div>
                            <div class="admin-obucheniye__sessia-list-close icon-close" on:click={() => (showTemplateList = false)}></div>
                        </div>
                    </div>
                    {/if}
                    {#if showTemplateEdit}
                    <div class="admin-obucheniye__edit">
                        <div class="admin-obucheniye__edit-content">
                            <div class="admin-obucheniye__edit-heading">Редактировать порядок выполнения диплома</div>
                            {#each data?.templatesp as templatep}
                                {#if templateEdit === templatep.id}
                                    <form action="?/updateP" method="POST">
                                        <input type="text" name="title" value={templatep.title}>
                                        <input type="text" name="id" value={templatep.id}>
                                        <div class="admin-obucheniye__edit-btn-wrapper">
                                            <button>Сохранить <div class="admin-obucheniye__edit-icon _icon-arrow"></div></button>
                                            <div class="admin-obucheniye__edit-close" on:click={() => {showTemplateEdit = false}}>
                                                <div class="admin-obucheniye__edit-close-icon icon-close"></div>
                                            </div>
                                        </div>
                                    </form>
                                {/if}
                            {/each}
                        </div>
                    </div>
                    {/if}
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    speed={700}
                    class="mb20"
                >
                    {#each data?.groups as group}
                        <SwiperSlide class={group.title === groupActive ? 'admin-obucheniye__praktika-group-item active' : 'admin-obucheniye__praktika-group-item'}>
                            <div class="admin-obucheniye__praktika-group-item-wrapper" on:click={() => (groupActive = group.title)}>
                                <div class="admin-obucheniye__praktika-group-item-title">{group.title}</div>
                                <div class="admin-obucheniye__praktika-group-item-arrow _icon-arrow"></div>
                            </div>
                        </SwiperSlide>
                    {/each}
                </Swiper>
                <div class="admin-obucheniye__praktika-group">
                    <div class="admin-obucheniye__praktika-group-content">
                        {#each data?.groups as group}
                            {#if groupActive === group.title}
                                {#each data?.groupdocs as groupdoc}
                                    {#if groupdoc.group === groupActive}
                                        <a class="admin-obucheniye__praktika-group-content-item" href="http://127.0.0.1:8090/api/files/{groupdoc.collectionId}/{groupdoc.id}/{groupdoc.file}?token=" target="_blank">
                                            <div class="admin-obucheniye__praktika-group-content-item-title">{groupdoc.title}</div>
                                            <div class="admin-obucheniye__praktika-group-content-item-icon _icon-download"></div>
                                        </a>
                                    {/if}
                                {/each}
                            {/if}
                            {#if showPraktikaAdd === group.title}
                                <div class="admin-obucheniye__praktika-group-doc-add">
                                    <div class="admin-obucheniye__praktika-group-doc-add-content">
                                        <div class="admin-obucheniye__praktika-group-doc-add-heading">Документы группы {group.title}</div>
                                        <form action="?/addGD" method="POST" enctype="multipart/form-data">
                                            <input type="text" placeholder="Название документа" name="title">
                                            <input type="text" name="group" value={group.title}>
                                            <div class="admin-obucheniye__diplom-add-file-input">
                                                <input type="file" name="file" id="fileGD" accept=".pdf, .docx, .doc, .pptx, .ppt, .xlsx, .xls" value=""/>
                                                <label for="fileGD">
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
                                            <div class="admin-obucheniye__praktika-group-doc-add-btn-wrapper">
                                                <button>Добавить<div class="admin-obucheniye__praktika-group-doc-add-btn-icon _icon-arrow"></div></button>
                                                <div class="admin-obucheniye__praktika-group-doc-add-close" on:click={() => {showPraktikaAdd = 'false'}}>
                                                    <div class="admin-obucheniye__praktika-group-doc-add-close-icon icon-close"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            {/if}
                        {/each}
                        {#if showPraktikaList}
                        <div class="admin-obucheniye__sessia-list">
                            <div class="admin-obucheniye__sessia-list-content">
                                <div class="admin-obucheniye__sessia-list-heading">Редактировать документ группы</div>
                                <div class="admin-obucheniye__sessia-list-wrapper">
                                    <div class="admin-obucheniye__list-head-wrapper">
                                        <div class={groupListActive === 'all' ? 'admin-obucheniye__list-head-btn active' : 'admin-obucheniye__list-head-btn'} on:click={() => (groupListActive = 'all')}>Все</div>
                                        {#each data?.groups as group}
                                            <div class={groupListActive === group.title ? 'admin-obucheniye__list-head-btn active' : 'admin-obucheniye__list-head-btn'} on:click={() => (groupListActive = group.title)}>{group.title}</div>
                                        {/each}
                                    </div>
                                    {#each data?.groupdocs as groupdoc}
                                        {#if groupListActive === groupdoc.group}
                                            <a class="admin-obucheniye__sessia-list-item" href="http://127.0.0.1:8090/api/files/{groupdoc.collectionId}/{groupdoc.id}/{groupdoc.file}?token=" target="_blank">
                                                <div class="admin-obucheniye__sessia-list-title">{groupdoc.title}</div>
                                                <div class="admin-obucheniye__sessia-list-btn-wrapper">
                                                    <form>
                                                        <button class="admin-obucheniye__sessia-list-btn" on:click={() => (praktikaEdit = groupdoc.id, showPraktikaList = false, showPraktikaEdit = true)}>Редактировать</button>
                                                    </form>
                                                    <form action="?/deleteGD" method="POST">
                                                        <input type="text" value={groupdoc.id} name="id">
                                                        <button class="admin-obucheniye__sessia-list-btn">Удалить</button>
                                                    </form>
                                                </div>
                                            </a>
                                        {:else if groupListActive === 'all'}
                                            <a class="admin-obucheniye__sessia-list-item" href="http://127.0.0.1:8090/api/files/{groupdoc.collectionId}/{groupdoc.id}/{groupdoc.file}?token=" target="_blank">
                                                <div class="admin-obucheniye__sessia-list-title">{groupdoc.title}</div>
                                                <div class="admin-obucheniye__sessia-list-btn-wrapper">
                                                    <form>
                                                        <button class="admin-obucheniye__sessia-list-btn" on:click={() => (praktikaEdit = groupdoc.id, showPraktikaList = false, showPraktikaEdit = true)}>Редактировать</button>
                                                    </form>
                                                    <form action="?/deleteGD" method="POST">
                                                        <input type="text" value={groupdoc.id} name="id">
                                                        <button class="admin-obucheniye__sessia-list-btn">Удалить</button>
                                                    </form>
                                                </div>
                                            </a>
                                        {/if}
                                    {/each}
                                </div>
                                <div class="admin-obucheniye__sessia-list-close icon-close" on:click={() => (showPraktikaList = false)}></div>
                            </div>
                        </div>
                        {/if}
                        {#if showPraktikaEdit}
                        <div class="admin-obucheniye__edit">
                            <div class="admin-obucheniye__edit-content">
                                <div class="admin-obucheniye__edit-heading">Редактировать документ группы</div>
                                {#each data?.groupdocs as groupdoc}
                                    {#if praktikaEdit === groupdoc.id}
                                        <form action="?/updateGD" method="POST">
                                            <input type="text" name="title" value={groupdoc.title}>
                                            <input type="text" name="id" value={groupdoc.id}>
                                            <div class="admin-obucheniye__edit-btn-wrapper">
                                                <button>Сохранить <div class="admin-obucheniye__edit-icon _icon-arrow"></div></button>
                                                <div class="admin-obucheniye__edit-close" on:click={() => {showPraktikaEdit = false}}>
                                                    <div class="admin-obucheniye__edit-close-icon icon-close"></div>
                                                </div>
                                            </div>
                                        </form>
                                    {/if}
                                {/each}
                            </div>
                        </div>
                        {/if}
                        {#if showGroupAdd}
                        <div class="admin-obucheniye__praktika-group-doc-add">
                            <div class="admin-obucheniye__praktika-group-doc-add-content">
                                <div class="admin-obucheniye__praktika-group-doc-add-heading">Добавить группу</div>
                                <form action="?/addG" method="POST" enctype="multipart/form-data">
                                    <input type="text" placeholder="Название группу" name="title">
                                    <div class="admin-obucheniye__praktika-group-doc-add-btn-wrapper">
                                        <button>Добавить<div class="admin-obucheniye__praktika-group-doc-add-btn-icon _icon-arrow"></div></button>
                                        <div class="admin-obucheniye__praktika-group-doc-add-close" on:click={() => {showGroupAdd = false}}>
                                            <div class="admin-obucheniye__praktika-group-doc-add-close-icon icon-close"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/if}
                        {#if showGroupList}
                        <div class="admin-obucheniye__sessia-list">
                            <div class="admin-obucheniye__sessia-list-content">
                                <div class="admin-obucheniye__sessia-list-heading">Редактировать группы</div>
                                <div class="admin-obucheniye__sessia-list-wrapper">
                                    {#each data?.groups as group}
                                    <a class="admin-obucheniye__sessia-list-item" href="http://127.0.0.1:8090/api/files/{group.collectionId}/{group.id}/{group.file}?token=" target="_blank">
                                        <div class="admin-obucheniye__sessia-list-title">{group.title}</div>
                                        <div class="admin-obucheniye__sessia-list-btn-wrapper">
                                            <form>
                                                <button class="admin-obucheniye__sessia-list-btn" on:click={() => (groupEdit = group.id, showGroupList = false, showGroupEdit = true)}>Редактировать</button>
                                            </form>
                                            <form action="?/deleteG" method="POST">
                                                <input type="text" value={group.id} name="id">
                                                <button class="admin-obucheniye__sessia-list-btn">Удалить</button>
                                            </form>
                                        </div>
                                    </a>
                                    {/each}
                                </div>
                                <div class="admin-obucheniye__sessia-list-close icon-close" on:click={() => (showGroupList = false)}></div>
                            </div>
                        </div>
                        {/if}
                        {#if showGroupEdit}
                        <div class="admin-obucheniye__edit">
                            <div class="admin-obucheniye__edit-content">
                                <div class="admin-obucheniye__edit-heading">Редактировать группу</div>
                                {#each data?.groups as group}
                                    {#if groupEdit === group.id}
                                        <form action="?/updateG" method="POST">
                                            <input type="text" name="title" value={group.title}>
                                            <input type="text" name="id" value={group.id}>
                                            <div class="admin-obucheniye__edit-btn-wrapper">
                                                <button>Сохранить <div class="admin-obucheniye__edit-icon _icon-arrow"></div></button>
                                                <div class="admin-obucheniye__edit-close" on:click={() => {showGroupEdit = false}}>
                                                    <div class="admin-obucheniye__edit-close-icon icon-close"></div>
                                                </div>
                                            </div>
                                        </form>
                                    {/if}
                                {/each}
                            </div>
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
            {/if}
            {#if showDiplomList}
            <div class="admin-obucheniye__diplom-list">
                <div class="admin-obucheniye__diplom-list-content">
                    <div class="admin-obucheniye__diplom-list-heading">Порядок выполнения диплома</div>
                        <div class="admin-obucheniye__diplom-list-wrapper">
                            {#each data?.diploms as diplom}
                            <a class="admin-obucheniye__diplom-list-item" href="http://127.0.0.1:8090/api/files/{diplom.collectionId}/{diplom.id}/{diplom.file}?token=" target="_blank">
                                <div class="admin-obucheniye__diplom-list-title">{diplom.title}</div>
                                <div class="admin-obucheniye__diplom-list-btn-wrapper">
                                    <form>
                                        <button class="admin-obucheniye__diplom-list-btn" on:click={() => (diplomEdit = diplom.id, showDiplomList = false, showDiplomEdit = true)}>Редактировать</button>
                                    </form>
                                    <form method="POST" action="?/deleteD">
                                        <input type="text" value={diplom.id} name="id">
                                        <button class="admin-obucheniye__diplom-list-btn">Удалить</button>
                                    </form>
                                </div>
                            </a>
                            {/each}
                        </div>
                    <div class="admin-obucheniye__diplom-list-close icon-close" on:click={() => (showDiplomList = false)}></div>
                </div>
            </div>
            {/if}
            {#if showDiplomEdit}
            <div class="admin-obucheniye__edit">
                <div class="admin-obucheniye__edit-content">
                    <div class="admin-obucheniye__edit-heading">Редактировать порядок выполнения диплома</div>
                    {#each data?.diploms as diplom}
                        {#if diplomEdit === diplom.id}
                            <form action="?/updateD" method="POST">
                                <input type="text" name="title" value={diplom.title}>
                                <input type="text" name="id" value={diplom.id}>
                                <div class="admin-obucheniye__edit-btn-wrapper">
                                    <button>Сохранить <div class="admin-obucheniye__edit-icon _icon-arrow"></div></button>
                                    <div class="admin-obucheniye__edit-close" on:click={() => {showDiplomEdit = false}}>
                                        <div class="admin-obucheniye__edit-close-icon icon-close"></div>
                                    </div>
                                </div>
                            </form>
                        {/if}
                    {/each}
                </div>
            </div>
            {/if}
            {#if showDiplomAdd}
            <div class="admin-obucheniye__diplom-add">
                <div class="admin-obucheniye__diplom-add-content">
                    <div class="admin-obucheniye__diplom-add-heading">Порядок выполнения диплома</div>
                    <form method="POST" enctype="multipart/form-data" action="?/addD" class="admin-obucheniye__diplom-form">
                        <input type="text" placeholder="Название документа" name="title">
                        <div class="admin-obucheniye__diplom-add-file-input">
                            <input type="file" name="file" id="filed" accept=".pdf, .docx, .doc, .pptx, .ppt, .xlsx, .xls" value=""/>
                            <label for="filed">
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

                        <div class="admin-obucheniye__diplom-add-btn-wrapper">
                            <button>Добавить <div class="admin-obucheniye__diplom-add-btn-icon _icon-arrow"></div></button>
                            <div class="admin-obucheniye__diplom-add-btn-close" on:click={() => {showDiplomAdd = false}}>
                                <div class="admin-obucheniye__diplom-add-btn-close-icon icon-close"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/if}
            {#if showSessiaList}
            <div class="admin-obucheniye__sessia-list">
                <div class="admin-obucheniye__sessia-list-content">
                    <div class="admin-obucheniye__sessia-list-heading">Графики сессий</div>
                    <div class="admin-obucheniye__sessia-list-wrapper">
                        {#each data?.sessias as sessia}
                        <a class="admin-obucheniye__sessia-list-item" href="http://127.0.0.1:8090/api/files/{sessia.collectionId}/{sessia.id}/{sessia.file}?token=" target="_blank">
                            <div class="admin-obucheniye__sessia-list-title">{sessia.title}</div>
                            <div class="admin-obucheniye__sessia-list-btn-wrapper">
                                <form>
                                    <button class="admin-obucheniye__sessia-list-btn" on:click={() => {showSessiaEdit = true, showSessiaList = false, sessiaEdit = sessia.id}}>Редактировать</button>
                                </form>
                                <form action="?/deleteS" method="POST">
                                    <input type="text" value={sessia.id} name="id">
                                    <button class="admin-obucheniye__sessia-list-btn">Удалить</button>
                                </form>
                            </div>
                        </a>
                        {/each}
                    </div>
                    <div class="admin-obucheniye__sessia-list-close icon-close" on:click={() => (showSessiaList = false)}></div>
                </div>
            </div>
            {/if}
            {#if showSessiaEdit}
            <div class="admin-obucheniye__edit">
                <div class="admin-obucheniye__edit-content">
                    <div class="admin-obucheniye__edit-heading">Редактировать сессию</div>
                    {#each data?.sessias as sessia}
                        {#if sessiaEdit === sessia.id}
                            <form action="?/updateS" method="POST">
                                <input type="text" name="title" value={sessia.title}>
                                <input type="text" name="id" value={sessia.id}>
                                <div class="admin-obucheniye__edit-btn-wrapper">
                                    <button>Сохранить <div class="admin-obucheniye__edit-icon _icon-arrow"></div></button>
                                    <div class="admin-obucheniye__edit-close" on:click={() => {showSessiaEdit = false}}>
                                        <div class="admin-obucheniye__edit-close-icon icon-close"></div>
                                    </div>
                                </div>
                            </form>
                        {/if}
                    {/each}
                </div>
            </div>
            {/if}
            {#if showSessiaAdd}
            <div class="admin-obucheniye__sessia-add">
                <div class="admin-obucheniye__sessia-add-content">
                    <div class="admin-obucheniye__sessia-add-heading">Графики сессий</div>
                    <form method="POST" enctype="multipart/form-data" action="?/addS">
                        <input type="text" name="title" placeholder="Название сессии">
                        <div class="admin-obucheniye__sessia-add-file-input">
                            <input type="file" name="file" id="fileS" accept=".pdf, .docx, .doc, .pptx, .ppt, .xlsx, .xls" value=""/>
                            <label for="fileS">
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
                        </div>
                        <div class="admin-obucheniye__sessia-add-btn-wrapper">
                            <button>Добавить <div class="admin-obucheniye__sessia-add-btn-icon _icon-arrow"></div></button>
                            <div class="admin-obucheniye__sessia-add-btn-close" on:click={() => {showSessiaAdd = false}}>
                                <div class="admin-obucheniye__sessia-add-btn-close-icon icon-close"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/if}
        </div>
    </div>
</div>