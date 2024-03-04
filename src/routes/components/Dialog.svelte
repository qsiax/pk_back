<script lang="ts">
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import CharacterCounter from "@smui/textfield/character-counter";
  import Card from "@smui/card";
  import Button from "@smui/button";

  let title = "";
  let content = "";
  let url = "";
  let category = "";

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "-" + mm + "-" + yyyy;

  export let open = 'close';

  async function createPost() {
    const res = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        date: formattedToday,
        url,
        category,
      }),
    }).then((res) => {
      res.json();
      location.reload();
    });
  }
</script>

<div class={open === "open" ? "dialog active" : "dialog"}>
  <div class="dialog__content">
    <div class="dialog__heading">добавить новый пост</div>
    <input
      type="text"
      class="dialog__input"
      placeholder="Заголовок"
      bind:value={title}
    />
    <input
      type="text"
      class="dialog__input"
      placeholder="URL Картинки"
      bind:value={url}
    />
    <select class="dialog__input" bind:value={category}>
      <option value="none" selected>Выберите категорию</option>
      <option value="technology">Технологии</option>
      <option value="college">Колледж</option>
    </select>
    <textarea
      class="dialog__message"
      placeholder="Содержание"
      bind:value={content}
    ></textarea>
    <div class="dialog__btn-wrapper">
      <button on:click={createPost} class="dialog__btn"
        >добавить <div class="dialog__btn-arrow _icon-arrow"></div></button
      >
      <div class="dialog__btn-close" on:click={() => {(open = 'close')}}>
        <div class="dialog__btn-close-icon icon-close"></div>
      </div>
    </div>
  </div>
</div>
