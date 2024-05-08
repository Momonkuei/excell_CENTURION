// 文章分類
$(function () {
	if ($('.article-category').length) {
		$('.article-category-item').on('click', 'a', function () {
			// 移除其他链接的 "active" 类
			$('.article-category-item a').removeClass('active');

			// 给被点击的链接添加 "active" 类
			$(this).addClass('active');
		});
	}
});

// 文章列表分頁
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
