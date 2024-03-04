<script>
    import { onMount } from "svelte";
    /** @type {import('./$types').PageData} */
    export let data;
    import { goto } from '$app/navigation';
    let valueA = data.title;
    let valueB = data.content;
    let value = data.url;

    async function editPost() {
        const res = await fetch(`http://localhost:3001/posts/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: valueA,
                url: value,
                content: valueB
            })
        }).then((res) => {
            res.json();
            goto('/admin/novosty');
        });
    }

    onMount(() => {
        const textarea = document.querySelector('textarea')
        textarea?.addEventListener('keyup', e => {
        // textarea.style.height = "87px"
            let scHeight = e.target.scrollHeight;
            textarea.style.height = `${scHeight}px`
        })
    });
</script>

<section class="edit">
    <div class="edit__container _container">
        <div class="edit__body">
            <div class="edit__preview">
                <div class="edit__preview-img">
                    <img src={data.url} alt="">
                </div>
                <div class="edit__preview-title">{data.title}</div>
                <div class="edit__preview-content">{data.content}</div>
                <div class="edit__preview-date">{data.date}</div>
            </div>
            <div class="edit__form">
                <div class="edit__form-heading">Редактировать</div>
                <input class="edit__form-input" placeholder="Заголовок" bind:value={valueA}>
                <input class="edit__form-input" placeholder="URL Картинки" bind:value>
                <textarea class="edit__form-message" required maxlength="2500" placeholder="Содеражние" bind:value={valueB}></textarea>
                <button class="edit__form-btn" on:click={editPost}>Сохранить <div class="edit__form-btn-arrow _icon-arrow"></div></button>
            </div>
        </div>
    </div>
</section>