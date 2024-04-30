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
			.prop('required', true)
			.prop('readonly', true)
			.attr('placeholder', '郵遞區號');
		$(
			`.twzipcode-member select[name="county"],.twzipcode-member select[name="district"]`
		)
			.addClass('form-select')
			.prop('required', true);
	}
});

// 會員中心
$(function () {
	// 點擊修改密碼跳轉欄位
	if ($('.account-btn-groups').length) {
		$('.account-btn-groups .change-password-btn').click(function () {
			$('#old_password').val('').focus();
		});
	}
	if ($('.twzipcode-member-account').length) {
		$('.twzipcode-member-account').twzipcode({
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
		//設置值
		$('.twzipcode-member-account').twzipcode('set', 429);

		$(`.twzipcode-member-account input[name="zipcode"]`)
			.addClass('form-input')
			.prop('required', true)
			.prop('readonly', true)
			.attr('placeholder', '郵遞區號');
		$(
			`.twzipcode-member-account select[name="county"],.twzipcode-member-account select[name="district"]`
		)
			.addClass('form-select')
			.prop('required', true);
	}

	// goole綁定

	if ($('.goole-toggle-switch').length) {
		$('#google_account_switch').on('change', function () {
			if ($('#google_account_switch').prop('checked')) {
				console.log('綁定goole');
			} else {
				console.log('解除goole綁定');
			}
		});
	}

	// Line綁定

	if ($('.line-toggle-switch').length) {
		$('#line_account_switch').on('change', function () {
			if ($('#line_account_switch').prop('checked')) {
				console.log('綁定line');
			} else {
				console.log('解除line綁定');
			}
		});
	}
});

// 訂單列表

$(function () {
	if (typeof $.fn.DataTable === 'function') {
		var account_table = $('#account_table').DataTable({
			language: {
				url: '/template/node_modules/datatables/zh-HANT.json',
			},
			// scrollX: '100%',
			lengthChange: false,
			info: false,
			searching: false,
			fixedHeader: true,
			ordering: false,
			pageLength: 5,
		});
	}
});
