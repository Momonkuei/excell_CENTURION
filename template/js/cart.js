// cart
$(function () {
	if ($('.cart-item').length) {
		$('.cart-item').each(function () {
			let product_QTY = $(this).find('.QTY-selector-currentNum').val();
			console.log(product_QTY);
			$(this)
				.find('.QTY-reduce')
				.click(function () {
					product_QTY--;
					if (product_QTY <= 0) {
						return (product_QTY = 1);
					}
					$('.QTY-selector-currentNum').val(product_QTY);
				});

			$(this)
				.find('.QTY-plus')
				.click(function () {
					product_QTY++;
					$('.QTY-selector-currentNum').val(product_QTY);
				});
		});
	}
});

// cart2

$(function () {
	// 添加必填以及placeholder
	const addtwzipcode = function (num) {
		$(`.twzipcode${num} input[name="zipcode"]`)
			.addClass('form-input')
			.attr('required', true)
			.prop('required', true)
			.attr('placeholder', '郵遞區號');
		$(
			`.twzipcode${num} select[name="county"],.twzipcode${num} select[name="district"]`
		)
			.addClass('form-select')
			.attr('required', true)
			.prop('required', true);
	};

	// 聯絡資訊

	if ($('.twzipcode1').length) {
		$('.twzipcode1').twzipcode({
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
		addtwzipcode(1);
	}

	// 運送
	if ($('.twzipcode2').length) {
		$('.twzipcode2').twzipcode({
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
		addtwzipcode(2);
	}

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
