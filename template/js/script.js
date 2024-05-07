// bootstrap

document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
	new bootstrap.Popover(popover);
});

// AOS
if (typeof AOS === 'object') {
	AOS.init({
		easing: 'ease-in-sine',
	});
}

// header
$(function () {
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

		// 選單關閉按鈕
		$('.fullMenu .close-btn, header .fullMenu-mask').click(function () {
			if ($('body').hasClass('open-menu')) {
				$('body').removeClass('open-menu');
			}
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

		// 會員選單
		if ($('.member-function-box').length) {
			$('.member-function-box-btn').click(function () {
				// 有登入狀態功能視窗
				if ($(this).hasClass('login')) {
					console.log('登入狀態');
					$('body').addClass('open-loginMenu');
					$('.searchBox').remove('open');
					removeMbHeaderSearch();
					$('.login-box').addClass('login-status');
				} else {
					$('body').addClass('open-loginMenu');
					$('.searchBox').remove('open');
					removeMbHeaderSearch();
					$('.login-box').remove('login-status');
				}
			});
		}

		// 會員選單關閉
		$('.login-menu .close-btn, header .fullMenu-mask').click(function () {
			if ($('body').hasClass('open-loginMenu')) {
				$('body').removeClass('open-loginMenu');
			}
		});

		// 多層次選單
		$('body').on(
			'mouseover',
			'.navMenu .moreMenu:not(.multiMenu)',
			function () {
				var $subMenu = $(this).children('ul');
				var subMenuWidth = $subMenu.width();

				var menuPosL = $subMenu.offset().left + subMenuWidth;
				var menuPosL2 = $subMenu.offset().left + subMenuWidth * 2;
				var menuPosL3 = $subMenu.offset().left + subMenuWidth * 3;

				if (menuPosL > $(window).width()) {
					$subMenu.css({
						transition: 'none',
						left: 'auto',
						right: '0',
					});
				}
				if (menuPosL2 > $(window).width()) {
					$('.moreMenu > ul ul').css({
						transition: 'none',
						left: 'auto',
						right: '100%',
					});
				}
				if (menuPosL3 > $(window).width()) {
					$('.moreMenu > ul ul').css({
						transition: 'none',
						left: 'auto',
						right: '100%',
					});
				} else {
					$('.moreMenu > ul ul').css({ left: '100%', right: 'auto' });
				}
			}
		);

		// 滾動

		// 針對購物車頁面進行撐篙，不然會造成header 浮動後，高度不夠又移除 scroll

		// 取得header 高度
		const hdTop = $('header').outerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > hdTop) {
				if ($('header').length) {
					$('header').addClass('scroll');
				}
			}
			if ($(window).scrollTop() === 0) {
				if ($('header').length) {
					$('header').removeClass('scroll');
				}
			}
		});

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
	if ($('.bannerBlock').length) {
		var BannerSwiper = new Swiper('.index-swiper', {
			loop: true, // 循环模式选项
			autoplay: {
				delay: 5000, //多久切换一次
			},
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
	}
});

// gotop

$(function () {
	$('.goTop').fadeOut('fast');
	if ($('.goTop').length) {
		$('.goTop').click(function () {
			jQuery('html,body').animate(
				{
					scrollTop: 0,
				},
				200
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
