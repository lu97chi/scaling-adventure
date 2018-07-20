$(function () {
	var navbar = $('.navbar');
	$('.show-menu-bot').css('display', 'none')
	var activeUs = $('.option-list-us:visible:first').attr('id');
	var activeProduct = $('.option-list-products:visible:first').attr('id');
	var activeCulture = $('.option-list-culture:visible:first').attr('id');
	$('.option-list-us:visible:first').addClass('active-item')
	$('.option-list-products:visible:first').addClass('active-item')
	$('.option-list-culture:visible:first').addClass('active-item')
	$(window).scroll(function () {
		if ($(window).scrollTop() <= 20) {
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
	$('.option-list-us').click((e) => {
		$('.option-list-us').removeClass('active-item')
		if (activeUs === e.target.id) {
			e.stopPropagation();

		} else {
			activeUs = e.target.id;
			$('.us-dynamic').collapse('hide')

		}
		$(`#${activeUs}`).addClass('active-item')

	})
	$('.option-list-products').click((e) => {
		$('.option-list-products').removeClass('active-item')
		if (activeProduct === e.target.id) {
			e.stopPropagation();

		} else {
			activeProduct = e.target.id;
			$('.products-dymamic').collapse('hide')
		}
		$(`#${activeProduct}`).addClass('active-item')
	})
	$('.option-list-culture').click((e) => {
		$('.option-list-culture').removeClass('active-item')
		if (activeCulture === e.target.id) {

			e.stopPropagation();

		} else {
			activeCulture = e.target.id;
			$('.culture-dynamic').collapse('hide')

		}
		$(`#${activeCulture}`).addClass('active-item')

	})
	let menu = false;
	$('.menu-drop').on('click', () => {
		menu ? menu = false : menu = true;
		menu ? $('.show-menu-bot').animate({
			height: 'toggle',
			display: 'none'
		})
			: $('.show-menu-bot').animate({
				height: "toggle",
				display: 'none'
			});
	})
	$('.navigation').on('click', (e)=>{
		let navigate = e.target.className.split(' ')[1];
		$('html, body').animate({
			scrollTop: $(`#${navigate}`).offset().top - 120
		},500)
	})
});
