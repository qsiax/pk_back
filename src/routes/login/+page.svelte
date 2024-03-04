<script>
    export let form
</script>

<section class="login">
    <div class="login__container _container">
        <div class="login__body">
            <form method="POST" class="login__form">
                <div class="login__heading">вход в админ панель</div>
                {#if form?.message}
                    <div class="login__error">{form.message}</div>
                {/if}
                {#if form?.email}
                    <input name="email" type="email" placeholder="Почта" class="login__input" value="{form.email}">
                {:else}
                    <input name="email" type="email" placeholder="Почта" class="login__input">
                {/if}
                <input name="password" type="password" placeholder="Пароль" class="login__input">
                <button class="login__btn">Войти <div class="login__btn-arrow _icon-arrow"></div></button>
            </form>
        </div>
    </div>
</section>
