// bootstrap

document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
	new bootstrap.Popover(popover);
});

// header
$(function () {
	// 取得header 高度
	const hdTop = $('header').outerHeight();

	// 移除 header 搜尋按鈕
	const removeMbHeaderSearch = function () {
		$('body').removeClass('open-search');
	};

	if ($('header').length) {
		$('.slide-menu-control').click(function () {
			$('body').addClass('open-menu');
			$('.searchBox').remove('open');
			removeMbHeaderSearch();
		});

		// 首頁關閉按鈕
		$('.fullMenu .close-btn, header .fullMenu-mask').click(function () {
			$('body').removeClass('open-menu');
		});

		// header 搜尋按鈕
		$('.searchToggle').click(function () {
			if ($(window).innerWidth() > 1200) {
				$('.searchBox').toggleClass('open');
			} else {
				if (!$('body').hasClass('open-search')) {
					$('body').addClass('open-search');
				} else {
					removeMbHeaderSearch();
				}
			}
		});

		$('.header-fullMenu-mask').click(function () {
			removeMbHeaderSearch();
		});

		// 次選單
		$('.fullMenu .navMenu li').click(function () {
			if ($('.fullMenu .navMenu li').has('.second-menu').length) {
				$(this).toggleClass('open-secondMenu');
			}
		});

		// 滾動

		// 針對購物車頁面進行撐篙，不然會造成header 浮動後，高度不夠又移除 scroll

		// $(window).scroll(function () {
		// 	if ($(window).scrollTop() > hdTop) {
		// 		if ($('body.cart').length) {
		// 			$('body.cart').addClass('fake-title');
		// 		}
		// 	}
		// 	if ($(window).scrollTop() === 0) {
		// 		if ($('body.cart').length) {
		// 			$('body.cart').removeClass('fake-title');
		// 		}
		// 	}
		// });

		// // scroll超過 header 高度就添加 'scroll'
		// $(window).scroll(function () {
		// 	if ($(window).scrollTop() > hdTop) {
		// 		$('header').addClass('scroll');
		// 	} else {
		// 		$('header').removeClass('scroll');
		// 	}
		// });
	}
});

// banner
$(function () {
	var mySwiper = new Swiper('.swiper', {
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});

// gotop

$(function () {
	if ($('.goTop').length) {
		$('.goTop').click(function () {
			jQuery('html,body').animate(
				{
					scrollTop: 0,
				},
				1000
			);
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.goTop').fadeIn('fast');
			} else {
				$('.goTop').stop().fadeOut('fast');
			}
		});
	}
});
