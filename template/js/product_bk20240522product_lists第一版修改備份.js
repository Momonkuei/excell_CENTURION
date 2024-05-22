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
