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

// header 手機板menu
$(function () {
	if ($('header').length) {
		$('.slide-menu-control').click(function () {
			$('body').addClass('open-menu');
			$('.searchBox').remove('open');
		});

		// 選單關閉按鈕
		$('.fullMenu .close-btn, header .fullMenu-mask').click(function () {
			if ($('body').hasClass('open-menu')) {
				$('body').removeClass('open-menu');
				$('.fullMenu')
					.find('.open-secondMenu')
					.removeClass('open-secondMenu');
				$('.fullMenu')
					.find('.open-thirdMenu')
					.removeClass('open-thirdMenu');
				$('.fullMenu')
					.find('.open-fourthMenu')
					.removeClass('open-fourthMenu');
				$('.fullMenu').find('.navMenu').attr('style', '');

				// 取消 second-menu 的設定
				$('.fullMenu').find('.second-menu').attr('style', '');
			}
		});

		// 次選單
		$('.fullMenu .navMenu >li >a').click(function () {
			$('.fullMenu .navMenu').addClass('open-secondMenu');

			if ($('.fullMenu .navMenu li').has('.second-menu').length) {
				$(this).closest('li').addClass('open-secondMenu');
			}
			$(this).closest('.fullMenu').animate(
				{
					scrollTop: 0,
				},
				200
			);
		});

		// 次選單 返回
		$('.second-menu .second-menu-content >.return-box a').click(
			function () {
				$('.fullMenu .navMenu').removeClass('open-secondMenu');

				if ($('.fullMenu .navMenu li').has('.second-menu').length) {
					$(this).closest('li').removeClass('open-secondMenu');
				}
			}
		);

		// 第三層選單
		$('.second-menu .navMenu-second >li >a').click(function () {
			if ($(this).closest('li').has('.third-menu').length) {
				// $(this).closest('.second-menu').addClass('open-thirdMenu');
				$(this).closest('li').addClass('open-thirdMenu');
			}
			const $second_menu = $(this).closest('.second-menu').outerHeight();
			const $third_menu = $(this).next('.third-menu').outerHeight();
			// 如果第三層選單比第二層 還高  css處理
			if ($second_menu < $third_menu) {
				$(this).closest('.second-menu').css('overflow', 'visible');
			}

			// 如果第二層選單比第三層 還高  css處理
			if ($second_menu > $third_menu) {
				$(this)
					.closest('.second-menu')
					.css('height', `${$third_menu}px`);
			}

			$(this)
				.closest('.navMenu')
				.css('height', `${$third_menu}px`)
				.css('overflow', 'hidden');

			$(this).closest('.fullMenu').animate(
				{
					scrollTop: 0,
				},
				200
			);
		});

		// 第三選單返回
		$('.third-menu .return-box a').click(function () {
			$(this).closest('.second-menu').removeClass('open-thirdMenu');
			$(this).closest('li').removeClass('open-thirdMenu');
			// CSS修正
			$(this)
				.closest('.second-menu')
				.css('overflow', '')
				.css('height', '');

			$(this).closest('.navMenu').css('height', '').css('overflow', '');
		});

		// 第四層選單
		$('.third-menu .navMenu-third >li >a').click(function () {
			if ($(this).closest('li').has('.fourth-menu').length) {
				$(this).closest('.third-menu').addClass('open-fourthMenu');
				$(this).closest('li').addClass('open-fourthMenu');
			}

			const $fourth_menu = $(this).next('.fourth-menu').outerHeight();

			// 第三層比第四層還高
			$(this)
				.closest('.third-menu ,.second-menu ')
				.css('height', `${$fourth_menu}px`)
				.css('overflow', 'hidden');

			$(this)
				.closest('.navMenu ')
				.css('height', `${$fourth_menu}px`)
				.css('overflow', 'hidden');

			$(this).closest('.fullMenu').animate(
				{
					scrollTop: 0,
				},
				200
			);
		});

		// 第四選單返回
		$('.fourth-menu .return-box a').click(function () {
			const $third_menu = $(this)
				.closest('.third-menu-content')
				.outerHeight();
			$(this).closest('.third-menu').removeClass('open-fourthMenu');
			$(this).closest('li').removeClass('open-fourthMenu');
			// CSS修正
			$(this)
				.delay(300)
				.closest('.third-menu')
				.css('overflow', '')
				.css('height', `${$third_menu}px`);

			$(this)
				.closest('.navMenu')
				.delay(300)
				.css('height', `${$third_menu}px`)
				.css('overflow', 'hidden');
		});

		// 會員選單
		if ($('.member-function-box').length) {
			$('.member-function-box-btn').click(function () {
				// 有登入狀態功能視窗
				if ($(this).hasClass('login')) {
					$('body').addClass('open-loginMenu');
					$('.searchBox').remove('open');
					$('.login-box').addClass('login-status');
				} else {
					$('body').addClass('open-loginMenu');
					$('.searchBox').remove('open');
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
	}
});

// 判斷滾動高度 在header 中添加 scroll
$(function () {
	if ($('header').length) {
		// 滾動
		// 取得header 高度
		const hdTop = $('header').outerHeight();

		const bannerTop = $('.pic-box').outerHeight();

		// 判斷是否在首頁
		if ($('body').hasClass('index')) {
			$(window).scroll(function () {
				if ($(window).scrollTop() > hdTop) {
					if ($('header').length) {
						$('header').addClass('scroll-index-banner');
					}
				}
				if ($(window).scrollTop() === 0) {
					if ($('header').length) {
						$('header').removeClass('scroll-index-banner');
					}
				}

				// 滾動超過 banner 高度時
				if ($(window).scrollTop() > bannerTop - hdTop) {
					if ($('header').length) {
						$('header').removeClass('scroll-index-banner');
						$('header').addClass('scroll');
					}
				} else {
					if ($('header').length) {
						$('header').addClass('scroll-index-banner');
						$('header').removeClass('scroll');
					}
				}
			});
		} else {
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
		}
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
			// 取消側邊選取欄位
			$(this).find('.wrap-box-menu .item.active').removeClass('active');

			// 取消側邊欄位
			$(this)
				.find('.wrap-box-detail [data-target-sub-list-item]')
				.css('display', 'none');

			// 取消選取的項目
			$(this)
				.find('.wrap-box-detail .info-wrap-block-box li.active')
				.removeClass('active');

			// 取消第三欄選單
			$(this).find('.info-sub-wrap').css('display', 'none');
		});

		// 點擊側拉項目時，更換選單
		$('.wrap-box-menu .item-link').on('click', function () {
			var subListItemData = $(this).parent().data('sub-list-item');
			$('.wrap-box-menu .item').removeClass('active');
			$(this).parent().addClass('active');
			$(`.wrap-box-detail .info-wrap`).css('display', 'none');
			$(`.wrap-box-sub-detail .info-sub-wrap`).css('display', 'none');
			$('.wrap-box-detail .info-wrap-block-box')
				.find('li.active')
				.removeClass('active');
			$(
				`.wrap-box-detail .info-wrap[data-target-sub-list-item='${subListItemData}']`
			).css('display', 'block');
		});

		// 點擊出現第三項選單
		$('.wrap-box-detail .info-wrap-link').on('mouseover', function () {
			var third_list_item_data = $(this).parent().data('third-list-item');
			$(this).closest('ul').find('li').removeClass('active');
			$(this).parent().addClass('active');
			$(`.wrap-box-sub-detail .info-sub-wrap`).css('display', 'none');
			$(
				`.wrap-box-sub-detail .info-sub-wrap[data-target-sub-list-item='${third_list_item_data}']`
			).css('display', 'block');
		});
	}

	// 控制側邊選單內容中層的選項 寬度
	if ($('.headerStyle02 .wrap-box-detail').length) {
		$('.wrap-box-detail')
			.find('.info-wrap-block-box ul')
			.each(function () {
				const item_nums = $(this).children().length;
				if (item_nums <= 10) {
					$(this).css(
						'grid-template-columns',
						'repeat(2, calc((100% - 2.2rem) / 2))'
					);
				} else {
					const row_Num = Math.ceil(item_nums / 5);
					$(this).css(
						'grid-template-columns',
						`repeat(${row_Num}, calc((100% - 2.2rem) / 2))`
					);
				}
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

// banner02

$(function () {
	// 初始化 AOS
	if (typeof AOS === 'object') {
		AOS.init({
			easing: 'ease-in-sine',
		});
	}

	if ($('.bannerStyle02').length) {
		var $slider = $('.bannerStyle02-banner-wrapper');

		$slider.slick({
			vertical: true,
			verticalSwiping: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
		});

		var lastScrollTop = 0;
		var isAtLastSlide = false;

		// 使用 addEventListener 添加非被动的 wheel 事件监听器

		window.addEventListener(
			'wheel',
			(function () {
				let isThrottled = false;
				let interval = 200; // 设置时间间隔，单位为毫秒

				return function (e) {
					if (!isThrottled) {
						// 处理事件的代码
						var currentSlide = $slider.slick('slickCurrentSlide');
						var slideCount = $slider.slick('getSlick').slideCount;

						if (e.deltaY > 0) {
							// 向下滾動
							if (currentSlide < slideCount - 1) {
								$slider.slick('slickNext');
								e.preventDefault();
							} else {
								isAtLastSlide = true;
							}

							if (currentSlide === slideCount - 1) {
								$('.bannerBlock').addClass('moveUp-banner');
								setTimeout(function () {
									$('body').css('overflow', 'inherit');
								}, 500);
							}
						} else {
							// 向上滾動
							if (currentSlide > 0) {
								$slider.slick('slickPrev');
								e.preventDefault();
							}

							if (window.scrollY === 0 && e.deltaY < 0) {
								console.log('往上滾觸發事件');
								$('.bannerBlock').removeClass('moveUp-banner');
								$('body').css('overflow', '');
							}
						}

						// 标记为节流中
						isThrottled = true;

						// 在指定的时间间隔后解锁
						setTimeout(function () {
							isThrottled = false;
						}, interval);
					}
				};
			})(),
			{ passive: false }
		);

		// 在 Slick 切换后重新计算 AOS
		$slider.on('afterChange', function (event, slick, currentSlide) {
			AOS.refresh();
			if (currentSlide === slick.slideCount - 1) {
				isAtLastSlide = true;
			} else {
				isAtLastSlide = false;
			}
		});
	}
});

// 產品介紹區塊
// 小於 992時，移除 aos 動畫效果
$(function () {
	if ($('.homepage-product-sectionBlock').length) {
		function updateAOS() {
			if ($(window).innerWidth() < 992) {
				$('.product-lists')
					.find('.product-lists-item')
					.each(function () {
						$(this).attr('data-aos', '');
					});
			}
		}

		// 初始執行一次
		updateAOS();

		$(window).on('resize', function () {
			updateAOS();
		});
	}
});

//熱銷推薦
$(function () {
	if ($('.products-recommended-swiper').length) {
		const products_recommended_swiper = new Swiper(
			'.products-recommended-swiper',
			{
				slidesPerView: 2,
				spaceBetween: 10,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					768: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 6,
					},
				},
			}
		);
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
