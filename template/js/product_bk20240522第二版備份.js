// 側邊攔
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

		const product_slider = new Swiper('.gallery-slider', {
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: '.gallery-slider-next',
				prevEl: '.gallery-slider-prev',
			},
			// pagination: {
			// 	el: '.swiper-pagination',
			// },
			breakpoints: {
				992: {
					slidesPerView: 2,
				},
			},

			on: {
				slideChangeTransitionStart: function (sw) {
					console.log(sw.activeIndex);
				},
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

// 產品內頁
$(function () {
	// 數量
	if ($('.sectionblock-product-detail .product-item-quantity').length) {
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
});
