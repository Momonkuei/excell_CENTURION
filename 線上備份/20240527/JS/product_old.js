// 篩選攔
$(function () {
	if ($('.product-sidebar').length) {
		$('.product-sidebar .product-sidebar-item .second-menu-btn').click(
			function () {
				$(this).parent('.product-sidebar-item').toggleClass('open');
			}
		);

		// 找尋是否有active 並且打開 product-sidebar-item
		var activeLink = $('.product-sidebar-item a.active');

		if (activeLink.length > 0) {
			activeLink.each(function () {
				$(this).closest('.product-sidebar-item').addClass('open');
			});
		}
	}
});

// 產品中類介紹
$(function () {
	if ($('.product-introduction-swiper').length) {
		const sectionblock_product_swiper = new Swiper(
			'.product-introduction-swiper',
			{
				slidesPerView: 1,
				// spaceBetween: 20,
				pagination: {
					el: '.product-introduction-swiper-pagination',
				},

				breakpoints: {
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
						grid: {
							fill: 'row',
							rows: 2,
						},
					},

					1200: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				},
			}
		);
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
	//滾動
	const hdTop = $('header').outerHeight();
	const product_lists_filters_bar = $(
		'.product-lists-filters-bar'
	).outerHeight();

	$(window).scroll(function () {
		if ($(window).scrollTop() > hdTop + product_lists_filters_bar) {
			if ($('.product-lists-filters-bar').length) {
				$('.product-lists-filters-bar').addClass('scroll');
			}
		}
		if ($(window).scrollTop() === 0) {
			if ($('.product-lists-filters-bar').length) {
				$('.product-lists-filters-bar').removeClass('scroll');
			}
		}
	});

	// 打開產品篩選
	if ($('.filters-button-box-btn').length) {
		$('.filters-button-box-btn').click(function () {
			$('body').addClass('open-filters-menu');
		});
	}

	// 關閉產品篩選
	if ($('.filters-menu').length) {
		$('.filters-menu .close-btn').click(function () {
			$('body').removeClass('open-filters-menu');
		});
	}

	// 產品列表
	if ($('.product-lists-gallery-item-imgBoxList').length) {
		$('.product-lists-gallery-item-imgBoxList-1').slick({
			prevArrow:
				'<button class="slick-prev slick-arrow"><i class="bi bi-chevron-left"></i></button>',
			nextArrow:
				'<button class="slick-next slick-arrow"><i class="bi bi-chevron-right"></i></button>',
		});
	}
	// 頁數點擊
	if ($('.pagination-box .pagination-page').length) {
		$('.pagination-box .pagination-page .pageLink').click(function (idx) {
			$('.pagination-box .pagination-page .pageLink').each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		});
	}
});

// 產品內頁
$(function () {
	//  產品介紹滑塊
	if ($('.product-gallery').length) {
		function productgallery_initializeSlick() {
			if ($(window).innerWidth() < 992) {
				if (
					!$('.product-gallery-lists').hasClass('slick-initialized')
				) {
					$('.product-gallery-lists').slick({
						prevArrow:
							'<button class="slick-prev slick-arrow"><i class="bi bi-chevron-left"></i></button>',
						nextArrow:
							'<button class="slick-next slick-arrow"><i class="bi bi-chevron-right"></i></button>',
					});
				}
			} else {
				if ($('.product-gallery-lists').hasClass('slick-initialized')) {
					$('.product-gallery-lists').slick('unslick');
				}
			}
		}

		productgallery_initializeSlick();
		$(window).on('resize load', productgallery_initializeSlick);
	}

	// 數量
	if ($('.page-product_detail .product-item-quantity').length) {
		let product_Num = parseInt(
			$('.product-item-quantity .product-item-num').val()
		);
		$('.product-item-quantity .quantity-reduce').click(function () {
			product_Num--;
			if (product_Num <= 0) {
				return (product_Num = 1);
			}
			$('.product-item-quantity .product-item-num').val(product_Num);
		});

		$('.product-item-quantity .quantity-plus').click(function () {
			product_Num++;
			$('.product-item-quantity .product-item-num').val(product_Num);
		});
	}

	//  產品介紹
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

	// 相關產品
	if ($('.related-products-gallery-item-imgBoxList').length) {
		$('.related-products-gallery-item-imgBoxList-1').slick({
			prevArrow:
				'<button class="slick-prev slick-arrow"><i class="bi bi-chevron-left"></i></button>',
			nextArrow:
				'<button class="slick-next slick-arrow"><i class="bi bi-chevron-right"></i></button>',
		});
	}
});
