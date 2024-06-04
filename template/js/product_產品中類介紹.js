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
