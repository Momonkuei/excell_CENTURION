// 側邊攔
$(function () {
	if ($('.product-sidebar').length) {
		// open 開關收合
		$('.product-sidebar .product-sidebar-item').each(function () {
			$(this).click(() => $(this).toggleClass('open'));
		});

		// 找尋是否有active 並且打開 product-sidebar-item
		var activeLink = $('.product-sidebar-item a.active');

		if (activeLink.length > 0) {
			activeLink.each(function () {
				$(this).closest('.product-sidebar-item').addClass('open');
			});
		}
	}
});

// 產品大類 product_category
$(function () {
	if ($('.product-category-banner-box').length) {
		const categoryBanner_swiper = new Swiper('.categoryBanner-swiper');
	}

	if ($('.sectionBlock-category-carousel').length) {
		const category_swiper = new Swiper('.category-carousel-swiper', {
			loop: true,
			slidesPerView: 1,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.swiper-button-next-custom',
				prevEl: '.swiper-button-prev-custom',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 'auto',
				},
				1200: {
					slidesPerView: 4,
				},
				1500: {
					loop: false,
					slidesPerView: 5,
				},
			},
		});
	}
});

// 產品列表分頁
$(function () {
	if ($('.pagination-box .pagination-page').length) {
		$('.pagination-box .pagination-page .pageLink').click(function (idx) {
			$('.pagination-box .pagination-page .pageLink').each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		});
	}
});

// 產品介紹滑塊
$(function () {
	if ($('.product-gallery').length) {
		// 縮圖
		const product_thumbs = new Swiper('.gallery-thumbs', {
			// slidesPerView: 'auto',
			slidesPerView: 6,
			spaceBetween: 10,
			loop: true,
			slideToClickedSlide: true,
			centeredSlides: true,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});

		const product_slider = new Swiper('.gallery-slider', {
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: '.gallery-slider-next',
				prevEl: '.gallery-slider-prev',
			},
			thumbs: {
				swiper: product_thumbs,
				autoScrollOffset: 1,
			},
		});

		// 與swiper 的按鈕綁定
		if ($('.product-gallery-btn-prev').length) {
			$('.product-gallery-btn-prev').click(() =>
				$('.gallery-slider-prev').click()
			);
		}

		if ($('.product-gallery-btn-next').length) {
			$('.product-gallery-btn-next').click(() =>
				$('.gallery-slider-next').click()
			);
		}
	}
});

// 產品介紹
$(function () {
	const $body = window.opera
		? document.compatMode == 'CSS1Compat'
			? $('html')
			: $('body')
		: $('html,body');
	if ($('.product-item-collapsible-lists').length) {
		$('.product-item-collapsible-btn').click(function (idx) {
			const $activecollapsible = $(this).parent(
				'.product-item-collapsible'
			);
			if ($activecollapsible.hasClass('active')) {
				$activecollapsible.removeClass('active');
			} else {
				$('.product-item-collapsible').each(function () {
					$(this).removeClass('active');
				});
				$activecollapsible.addClass('active');

				// 抓取動畫時間
				var transitionDuration = $(
					'.product-item-collapsible-inner'
				).css('transition-duration');

				const durationInSeconds = parseFloat(transitionDuration) + 0.1;

				// 抓取header高度
				const hdTop = $('header').outerHeight();

				setTimeout(function () {
					const target_top = $activecollapsible.offset().top;
					$body.animate(
						{
							scrollTop: target_top - hdTop - 10,
						},
						200
					);
				}, durationInSeconds * 1000);
			}
		});
	}
});
