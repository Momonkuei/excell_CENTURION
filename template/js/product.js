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
	//滾動產品列表功能列
	$(window).on('scroll resize load', function () {
		const hdTop = $('header').outerHeight();

		if ($(window).scrollTop() > hdTop) {
			if ($('.product-lists-filters-bar').length) {
				$('.product-lists-filters-bar').addClass('scroll');
				$('.product-lists-filters-bar').css('top', `${hdTop}px`);
			}
		}
		if ($(window).scrollTop() === 0) {
			if ($('.product-lists-filters-bar').length) {
				$('.product-lists-filters-bar').removeClass('scroll');
				$('.product-lists-filters-bar').css('top', '');
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

	// 產品列表 產品添加動畫
	if ($('.product-lists-gallery-box').length) {
		$(window).on('scroll resize load', function () {
			let itemsPerRow; //每行項目數
			let start_quantity; //起始數量
			if ($(window).innerWidth() < 768) {
				itemsPerRow = 2; // 每行的項目數
				start_quantity = 4;
			} else {
				itemsPerRow = 4;
				start_quantity = 8;
			}

			// 依據行列添加 aos 效果
			$('.product-lists-gallery-box')
				.find('.product-lists-gallery-item')
				.each(function (idx) {
					const rowNumber = Math.floor(idx / itemsPerRow);

					if (rowNumber % 2 === 0) {
						$(this).attr('data-aos', 'fade-left');
					} else {
						$(this).attr('data-aos', 'fade-right');
					}
				});

			AOS.init({
				easing: 'ease-in-sine',
			});

			// 768以上前八個添加動畫
			$('.product-lists-gallery-box')
				.find('.product-lists-gallery-item')
				.each(function (idx) {
					const rowNumber = Math.floor(idx / itemsPerRow);

					if (rowNumber % 2 === 0 && idx < start_quantity) {
						$(this).addClass('start-left');
					} else if (rowNumber % 2 !== 0 && idx < start_quantity) {
						$(this).addClass('start-right');
					}
				});
		});
	}

	// 產品列表 產品展示
	if ($('.product-lists-gallery-item-imgBoxList').length) {
		$('.product-lists-gallery-item-imgBoxList-1').slick({
			prevArrow:
				'<button class="slick-prev slick-arrow"><i class="bi bi-chevron-left"></i></button>',
			nextArrow:
				'<button class="slick-next slick-arrow"><i class="bi bi-chevron-right"></i></button>',
		});

		// 阻止冒泡事件
		$('.product-lists-gallery-item .slick-arrow').click(function (event) {
			event.stopPropagation();
			event.preventDefault();
			console.log('123');
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
	}

	// 數量
	if ($('.page-product_detail .product-item-quantity').length) {
		const $product_item_num = $(
			'.page-product_detail .product-item-quantity .product-item-num'
		);
		let product_Num = parseInt($product_item_num.val());

		$product_item_num.blur(function () {
			const value = $(this).val();

			// 正則表達式是否大於0
			const isValid = /^\d+$/.test(value) && parseInt(value) > 0;

			// 判斷是否大於0
			if (!isValid) {
				Swal.fire({
					title: '輸入錯誤資訊',
					icon: 'error',
					text: '請輸入購買數量',
					confirmButtonText: '確認',
					buttonsStyling: false,
					customClass: {
						container: 'centurion-modal-style01',
						confirmButton: 'btn-style02',
					},

					showCloseButton: true, // 預設顯示在右上角的關閉按鈕
					showCancelButton: false, // 取消按鈕
				});
				$(this).val(product_Num);
			} else {
				product_Num = value;
			}
		});

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

		$('.related-products-gallery-item .slick-arrow').click(function (
			event
		) {
			event.stopPropagation();
			event.preventDefault();
		});
	}
});
