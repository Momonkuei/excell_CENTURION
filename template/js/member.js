$(function () {
	// 登入頁面
	if ($('.login-box').length) {
		$('.login-form ').show();
		$('.forgot-password-form').hide();

		// 忘記密碼
		$('.forgot-password-btn').click(function () {
			$('.login-form ').hide();
			$('.forgot-password-form').fadeIn(500);
		});

		// 返回會員登入
		$('.return-login-btn').click(function () {
			$('.login-form ').fadeIn(500);
			$('.forgot-password-form').hide();
		});
	}
});
