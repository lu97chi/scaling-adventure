var navbar = $('.navbar');
$('.show-menu-bot').css('display', 'none')
$(window).scroll(function () {
	if ($(window).scrollTop() <= 0) {
		navbar.removeClass('navbar-scroll');
	} else {
		navbar.addClass('navbar-scroll');
	}
});

$('.product-items-container').on('click', '.option-list-us', function () {
	let i = $(this);
	i.parent().siblings().removeClass('active-item');
	i.parent().hasClass('active-item') ? i.parent().removeClass('active-item') : i.parent().addClass('active-item')
	$('.us-dynamic').collapse('hide')
});

$('.product-items-container').on('click', '.option-list-products', function () {
	let i = $(this);
	i.parent().siblings().removeClass('active-item');
	i.parent().hasClass('active-item') ? i.parent().removeClass('active-item') : i.parent().addClass('active-item')

	$('.products-dymamic').collapse('hide')
})
$('.product-items-container').on('click', '.option-list-culture', function () {
	let i = $(this);
	i.parent().siblings().removeClass('active-item');
	i.parent().hasClass('active-item') ? i.parent().removeClass('active-item') : i.parent().addClass('active-item')

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
$('.navigation').on('click', (e) => {
	let navigate = e.target.className.split(' ')[1];
	let dina;
	$(window).width() > 768 ? dina = $('#nav-d').outerHeight() : dina = Math.floor($('#nav-m').outerHeight());
	console.log(dina)

	$('.show-menu-bot').animate({
		height: 'toggle',
		display: 'none'
	}, 500, function () {
		$('html, body').animate({
			scrollTop: $(`#${navigate}`).offset().top - dina
		}, 500)
	})
})

$('.contact-button').on('click', () => {
	$('html, body').animate({
		scrollTop: $(`#contact-section`).offset().top - 100
	}, 500)
})
// despues averiguo que hace :D
$('#carouselIndicators2, #carouselIndicators1, #carouselControls').on("touchstart", function (event) {
	var xClick = event.originalEvent.touches[0].pageX;
	$(this).one("touchmove", function (event) {
		var xMove = event.originalEvent.touches[0].pageX;
		if (Math.floor(xClick - xMove) > 5) {
			$(this).carousel('next');
		}
		else if (Math.floor(xClick - xMove) < -5) {
			$(this).carousel('prev');
		}
	});
	$("#carouselIndicators2").on("touchend", function () {
		$(this).off("touchmove");
	});
});

// console.log($('#us-text-left').height())
// console.log($('.us-selected').height())
$('.product-items-container').on('click', () => {
	$('.us-selected').css("height", $("#us-text-left").height())
	$('.products-selected').css("height", $("#products-text-left").height())
	$('.culture-selected').css("height", $("#culture-text-left").height())

})






