	$(function(){
	var navbar = $('.navbar');
	$('.show-menu-bot').css('display', 'none')
	$(window).scroll(function () {
		if ($(window).scrollTop() <= 0) {
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});

	$('.product-items-container').on('click', '.option-list-us',function (e)  {
		// debugger;
		let i = $(this);
		i.parent().siblings().removeClass('active-item');
		i.parent().addClass('active-item');
		$('.us-dynamic').collapse('hide')	
	});

	$('.product-items-container').on('click', '.option-list-products', function(){
		let i = $(this);
		i.parent().siblings().removeClass('active-item');
		i.parent().addClass('active-item');
		$('.products-dymamic').collapse('hide')	
	})
	$('.product-items-container').on('click', '.option-list-culture', function(){
		let i = $(this);
		i.parent().siblings().removeClass('active-item');
		i.parent().addClass('active-item');
		$('.culture-dynamic').collapse('hide')	
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
		let dina;
		$(window).width() > 768? dina = $('#nav-d').outerHeight() : dina = Math.floor($('#nav-m').outerHeight());
		// debugger;
		console.log(dina)
		$('html, body').animate({
			scrollTop: $(`#${navigate}`).offset().top - dina
		},500)
	})

	$('.contact-button').on('click', ()=>{
		$('html, body').animate({
			scrollTop: $(`#contact-section`).offset().top - 100
		},500)
	})
})