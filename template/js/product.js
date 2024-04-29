// 側邊攔
$(function () {
	if ($('.product-sidebar').length) {
		$('.product-sidebar .product-sidebar-item').each(function () {
			$(this).click(() => $(this).toggleClass('open'));
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
	if ($('.product-item-collapsible-lists').length) {
	}
});
