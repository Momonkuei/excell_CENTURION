// 側邊攔
$(function () {
	if ($('.product-sidebar').length) {
		$('.product-sidebar .product-sidebar-item').each(function () {
			$(this).click(() => $(this).toggleClass('open'));
		});
	}
});
