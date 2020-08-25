$(function () {

	$('.hamburger').on('click', function () {
		$('.header__menu-list').slideToggle();
	})

	$('.header__menu-item').on('click', function () {
		if (window.innerWidth <= 1100) {
			$('.header__menu-list').slideToggle();
			$('.checkbox1').prop("checked", false);
		}

	})
});