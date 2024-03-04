<script>
    import Heading  from '../../layout/Heading.svelte';
	import Kursy from '../../layout/pages/Kursy.svelte';

    let nameMap = '';
    let namePage = 'Платные образовательные услуги';
    var heading = 'дополнительное \nпрофессиональное \nобразование';
</script>

<svelte:head>
	<title>Платные образовательные услуги</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<Kursy/>

<section class="feedback" id="feedback">
	<div class="feedback__container _container">
		<div class="feedback__body">
			<div class="feedback__title">
				Заполните форму,
				чтобы записаться
			</div>
			<div class="feedback__content">
				<div class="feedback__block">
					<div class="feedback__item">
						<div class="feedback__item-num">01 /</div>
						<div class="feedback__item-title">Выберите курс</div>
					</div>
					<div class="feedback__item">
						<div class="feedback__item-num">02 /</div>
						<div class="feedback__item-title">Заполните заявку</div>
					</div>
					<div class="feedback__item">
						<div class="feedback__item-num">03 /</div>
						<div class="feedback__item-title">
							Ждите обратной связи <br>
							от представителя Покровского колледжа
						</div>
					</div>
				</div>
				<div class="feedback__block">
					<form action="" class="feedback__form">
						<select name="" id="">
							<option value="">Выберите профессию или курс</option>
							<option value="">Слесарь-сантехник</option>
							<option value="">Токарь</option>
							<option value="">Стропальщик</option>
							<option value="">Портной</option>
							<option value="">Швея</option>
							<option value="">Цифровая грамотность</option>
						</select>
						<div class="feedback__form-wrapper">
							<input type="text" placeholder="Ваше имя">
							<input type="text" placeholder="Номер">
						</div>
							<input type="text" placeholder="Почта">
						<div class="feedback__form-text">Отправляя заявку, я соглашаюсь на <span>обработку персональных данных.</span></div>
						<button class="feedback__btn btn">Отправить <div class="feedback__form-btn-arrow _icon-arrow"></div></button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
