// 登入頁面
// $(function () {
// 	if ($('.login-box').length) {
// 		$('.login-form ').show();
// 		$('.forgot-password-form').hide();

// 		// 忘記密碼
// 		$('.forgot-password-btn').click(function () {
// 			$('.login-form ').hide();
// 			$('.forgot-password-form').fadeIn(500);
// 		});

// 		// 返回會員登入
// 		$('.return-login-btn').click(function () {
// 			$('.login-form ').fadeIn(500);
// 			$('.forgot-password-form').hide();
// 		});
// 	}
// });

// 註冊畫面
$(function () {
	if ($('.twzipcode-member').length) {
		$('.twzipcode-member').twzipcode({
			zipcodeIntoDistrict: false, // 郵遞區號自動顯示在區別選單中
			county: {
				value: '請選擇縣市*',
				label: '郵遞區號',
			},

			district: {},
			zipcode: {
				css: 'townNum',
			},
			countyName: 'city', // 自訂城市 select 標籤的 name 值
			districtName: 'town', // 自訂區別 select 標籤的 name 值
		});
		$(`.twzipcode-member input[name="zipcode"]`)
			.addClass('form-input')
			.attr('required', true)
			.prop('required', true)
			.attr('placeholder', '郵遞區號');
		$(
			`.twzipcode-member select[name="county"],.twzipcode-member select[name="district"]`
		)
			.addClass('form-select')
			.attr('required', true)
			.prop('required', true);
	}
});

// 會員中心

$(function () {
	if (typeof $.fn.DataTable === 'function') {
		var account_table = $('#account_table').DataTable({
			language: {
				url: '/template/node_modules/datatables/zh-HANT.json',
			},
			// scrollX: '100%',
			info: false,
			// searching: false,
			fixedHeader: true,
		});
	}
});
