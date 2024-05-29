<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = 'Абитуриенту -';
    let namePage = 'Приказы о зачислении';
    var heading = 'Приказы о зачислении';
</script>

<svelte:head>
	<title>Приказы о зачислении</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="document">
    <div class="document__container _container">
        <div class="document__body">
        </div>
    </div>
</section>


<!-- <section class="document">
	<div class="document__container _container">
		<div class="document__body">
			<div class="document__head">
				<div class="document__head-wrapper">
					<div class="document__head-item active">
						<div class="document__head-item-title">Планы</div>
					</div>
					<div class="document__head-item">
						<div class="document__head-item-title">Приказы</div>
					</div>
					<div class="document__head-item">
						<div class="document__head-item-title">Положения</div>
					</div>
					<div class="document__head-item">
						<div class="document__head-item-title">Договоры</div>
					</div>
				</div>
				<div class="document__head-wrapper">
					<select>
						<option value="" hidden disabled selected>год публикации</option>
						<option>2023</option>
						<option>2022</option>
						<option>2021</option>
						<option>2020</option>
						<option>2019</option>
						<option>2018</option>
					</select>
				</div>
			</div>



			<div class="document__content active" id="documentBody01">
				<div class="document__item-wrapper">
					<a target="_blank" href="/source/document/сведения.pdf" class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</a>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
				<div class="document__item-wrapper">
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
			</div>

			<div class="document__content" id="documentBody02">
				<div class="document__item-wrapper">
					<a target="_blank" href="/source/document/сведения.pdf" class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</a>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
				<div class="document__item-wrapper">
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
			</div>
			
			<div class="document__content" id="documentBody03">
				<div class="document__item-wrapper">
					<a target="_blank" href="/source/document/сведения.pdf" class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</a>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
				<div class="document__item-wrapper">
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
			</div>

			<div class="document__content" id="documentBody04">
				<div class="document__item-wrapper">
					<a target="_blank" href="/source/document/сведения.pdf" class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</a>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
				<div class="document__item-wrapper">
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
					<div class="document__item">
						<div class="document__item-block">
							<div class="document__item-nav">Приказы /</div>
							<div class="document__item-title">
								О зачислении
							</div>
						</div>
						<div class="document__item-icon _icon-download"></div>
					</div>
				</div>
			</div>
			


			<div class="document__arrow-wrapper">
				<div class="document__arrow-prev _icon-arrow"></div>
				<div class="document__arrow-next _icon-arrow"></div>
			</div>
		</div>
	</div>
</section> -->
