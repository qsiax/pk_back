<script>
    export let data

    let showAddForm = false
    let showListForm = false
    let showEditForm = false

    let type = 'all'

    let courseId = ''
</script>

<section class="kursy-admin">
    <div class="kursy-admin__container _container">
        <div class="kursy-admin__body">
            <div class="kursy-admin__heading">Админ панель</div>
            <div class="kursy-admin__head">
                <div class="kursy-admin__head-wrapper">
                    <div class={type === 'all' ? 'kursy-admin__head-item active' : 'kursy-admin__head-item'} on:click={() => (type = 'all')}>Все</div>
                    <div class={type === '01' ? 'kursy-admin__head-item active' : 'kursy-admin__head-item'} on:click={() => (type = '01')}>Рабочие профессии</div>
                    <div class={type === '02' ? 'kursy-admin__head-item active' : 'kursy-admin__head-item'} on:click={() => (type = '02')}>Краткосрочные курсы</div>
                </div>
                <div class="kursy-admin__head-wrapper">
                    <div class={showListForm === true ? 'kursy-admin__head-item active' : 'kursy-admin__head-item' ? showEditForm === true ? 'kursy-admin__head-item active' : 'kursy-admin__head-item' : 'kursy-admin__head-item'} on:click={() => {showListForm = true}}>Редактировать</div>
                    <div class={showAddForm === true ? 'kursy-admin__head-item active' : 'kursy-admin__head-item'} on:click={() => {showAddForm = true}}>Добавить</div>
                </div>
            </div>
            <div class="kursy-admin__content">
                {#each data?.records as record}
                    {#if type === 'all'}
                        <div class="kursy-admin__item">
                            <div class="kursy-admin__item-sub-title">Профессия</div>
                            <div class="kursy-admin__item-title">{record.name}</div>
                            <div class="kursy-admin__text">Сумма: <span>{record.price}</span></div>
                            <div class="kursy-admin__text">Срок: <span>{record.deadline}</span></div>
                            <div class="kursy-admin__button">Записаться <div class="kursy-admin__button-arrow _icon-arrow"></div></div>
                        </div>
                    {/if}
                    {#if type === record.type}
                        <div class="kursy-admin__item">
                            <div class="kursy-admin__item-sub-title">Профессия</div>
                            <div class="kursy-admin__item-title">{record.name}</div>
                            <div class="kursy-admin__text">Сумма: <span>{record.price}</span></div>
                            <div class="kursy-admin__text">Срок: <span>{record.deadline}</span></div>
                            <div class="kursy-admin__button">Записаться <div class="kursy-admin__button-arrow _icon-arrow"></div></div>
                        </div>
                    {/if}
                {/each}
            </div>
            {#if showAddForm}
                <div class="kursy-admin__form">
                    <form action="?/add" method="POST">
                        <div class="kursy-admin__form-heading">Добавить курс</div>
                        <input type="text" placeholder="Названия курса" name="name">
                        <input type="text" placeholder="Стоимость" name="price">
                        <input type="text" placeholder="Срок" name="deadline">
                        <select name="type">
                            <option value="none" selected>Выберите тип курса</option>
                            <option value="01">Рабочая профессия</option>
                            <option value="02">Краткосрочный курс</option>
                        </select>
                        <div class="kursy-admin__form-button-wrapper">
                            <button>Добавить <div class="_icon-arrow"></div></button>
                            <div class="kursy-admin__form-button-close" on:click={() => (showAddForm = false)}>
                                <div class="kursy-admin__form-button-close-icon icon-close"></div>
                            </div>
                        </div>
                    </form>
                </div>
            {/if}
            {#if showListForm}
                <div class="kursy-admin__list">
                    <div class="kursy-admin__list-content">
                        <div class="kursy-admin__list-heading">Редактировать курсы</div>
                        <div class="kursy-admin__list-wrapper">
                            {#each data?.records as record}
                                <div class="kursy-admin__list-item">
                                    <div class="kursy-admin__list-item-title">{record.name}</div>
                                    <div class="kursy-admin__list-button-wrapper">
                                        <form>
                                            <div class="kursy-admin__list-button" on:click={() => (courseId = record.id, showEditForm = true, showListForm = false)}>Редактировать</div>
                                        </form>
                                        <form action="?/delete" method="POST">
                                            <input type="text" value={record.id} name="id">
                                            <button class="kursy-admin__list-button">Удалить</button>
                                        </form>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <div class="kursy-admin__list-close icon-close" on:click={() => (showListForm = false)}></div>
                    </div>
                </div>
            {/if}
            {#if showEditForm}
                <div class="kursy-admin__form">
                    {#each data?.records as record}
                        {#if courseId === record.id}
                            <form action="?/update" method="POST">
                                <div class="kursy-admin__form-heading">Добавить курс</div>
                                <input type="text" name="id" value={record.id}>
                                <input type="text" placeholder="Названия курса" name="name" value={record.name}>
                                <input type="text" placeholder="Стоимость" name="price" value={record.price}>
                                <input type="text" placeholder="Срок" name="deadline" value={record.deadline}>
                                <div class="kursy-admin__form-button-wrapper">
                                    <button>Сохранить <div class="_icon-arrow"></div></button>
                                    <div class="kursy-admin__form-button-close" on:click={() => (showEditForm = false)}>
                                        <div class="kursy-admin__form-button-close-icon icon-close"></div>
                                    </div>
                                </div>
                            </form>
                        {/if}
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</section>