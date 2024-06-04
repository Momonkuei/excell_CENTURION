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

	//  產品介紹 ,點選時移動到適合位置

	if ($('.product-item-collapsible-lists').length) {
		$('.product-item-collapsible-btn').click(function (idx) {
			const $activecollapsible = $(this).parent(
				'.product-item-collapsible'
			);
			if ($activecollapsible.hasClass('active')) {
				$activecollapsible.removeClass('active');
				return;
			} else {
				if ($(window).innerWidth() > 992) {
					$('.product-item-collapsible').each(function () {
						$(this).removeClass('active');
					});
				}
				$activecollapsible.addClass('active');
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

	// 相關產品添加AOS
	if ($('.related-products-gallery-box').length) {
		let itemsPerRow; //每行項目數
		if ($(window).innerWidth() < 768) {
			itemsPerRow = 2; // 每行的項目數
		} else {
			itemsPerRow = 4;
		}

		$('.related-products-gallery-box')
			.find('.related-products-gallery-item')
			.each(function (idx) {
				const columnNumber = idx % itemsPerRow; // 計算列數
				$(this)
					.attr('data-aos', 'fade-left')
					.attr('data-aos-once', 'true');

				if (columnNumber !== 0) {
					// 第一行第一個不添加
					const delay = columnNumber * 100;
					$(this).attr('data-aos-delay', delay);
				}
			});

		AOS.init({
			easing: 'ease-in-sine',
			duration: 200,
		});
	}
});
