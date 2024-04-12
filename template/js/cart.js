$(function () {
	if ($('.twzipcode').length) {
		$('.twzipcode').twzipcode({
			zipcodeIntoDistrict: false, // 郵遞區號自動顯示在區別選單中
			county: {
				value: '請選擇縣市',
				label: '郵遞區號',
			},

			district: {},
			zipcode: {
				css: 'townNum',
			},
			countyName: 'city', // 自訂城市 select 標籤的 name 值
			districtName: 'town', // 自訂區別 select 標籤的 name 值
		});
		$('input[name="zipcode"]').addClass('form-input');
		$('select[name="county"],select[name="district"]').addClass(
			'form-select'
		);
	}
});

// cart2

$(function () {
	if ($('.order-content-btn').length) {
		$('.order-content-btn').click(function () {
			if ($(this).hasClass('active')) {
				$('.right-box-area').slideUp();
				$('.order-content-btn').removeClass('active');
				$(this).find('.txt').text('顯示訂單內容');
			} else {
				$('.right-box-area').slideDown();
				$('.order-content-btn').addClass('active');
				$(this).find('.txt').text('隱藏訂單內容');
			}
		});
	}
});
