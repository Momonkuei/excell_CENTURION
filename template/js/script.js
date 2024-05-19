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
		$('.fullMenu .navMenu li >a').click(function () {
			if ($('.fullMenu .navMenu li').has('.second-menu').length) {
				$(this).closest('li').toggleClass('open-secondMenu');
			}

			if (
				$(
					'.fullMenu .navMenu li .navMenu-second li.third-menu-box '
				).has('.third-menu').length
			) {
				$(this).closest('li').toggleClass('open-thirdMenu');
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

		// login表單 登入/忘記密碼更換
		if ($('.sectionblock-login').length) {
			$('.forgetPassword-box').css('display', 'none');

			$('.forgot-password-btn').click(function () {
				$('.sectionblock-login .login-box').css('display', 'none');
				$('.sectionblock-login .forgetPassword-box').fadeIn(300);
			});

			$('.return-login-btn').click(function () {
				$('.sectionblock-login .forgetPassword-box').css(
					'display',
					'none'
				);
				$('.sectionblock-login .login-box').fadeIn(300);
			});
		}
		// 會員選單關閉
		$('.login-menu .close-btn, header .fullMenu-mask').click(function () {
			if ($('body').hasClass('open-loginMenu')) {
				$('body').removeClass('open-loginMenu');
				$('.forgetPassword-box').css('display', 'none');
				$('.sectionblock-login .login-box').fadeIn();
			}
		});

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

// headerStyle02
$(function () {
	// 多層次選單
	if ($('.headerStyle02').length) {
		// hover時添加下拉選單
		$('header .navMenu .navMenu-link').on('mouseover', function () {
			$('header .navMenu > li').removeClass('active-wrap-box');
			$(this).parent().addClass('active-wrap-box');
			$('header').addClass('open-wrap-box');
			// 如果有wrap-box 增加遮罩
			if ($(this).parent().find('.wrap-box').length) {
				$('body').addClass('open-wrap-box');
			} else {
				return;
			}
			$(this)
				.parent()
				.find('.wrap-box-menu .item[data-sub-list-item="0"]')
				.addClass('active');
			$(this)
				.parent()
				.find('.wrap-box-detail [data-target-sub-list-item="0"]')
				.css('display', 'block');
		});

		// 取消下拉選單;
		$('header .navMenu >li').on('mouseleave', function () {
			$('header .navMenu > li').removeClass('active-wrap-box');
			$('header').removeClass('open-wrap-box');
			$('body').removeClass('open-wrap-box');
			$(this)
				.find('.wrap-box-detail [data-target-sub-list-item]')
				.css('display', 'none');
		});

		// 點擊側拉項目時，更換選單
		$('.wrap-box-menu .item-link').on('click', function () {
			var subListItemData = $(this).parent().data('sub-list-item');
			$('.wrap-box-menu .item').removeClass('active');
			$(this).parent().addClass('active');
			$(`.wrap-box-detail .info-wrap`).css('display', 'none');
			$(
				`.wrap-box-detail .info-wrap[data-target-sub-list-item='${subListItemData}']`
			).css('display', 'block');
		});
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
