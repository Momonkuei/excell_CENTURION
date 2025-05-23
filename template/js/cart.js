// cart
$(function () {
	if ($('.cart-item').length) {
		$('.cart-item').each(function () {
			let $item = $(this);
			let product_QTY = parseInt(
				$item.find('.QTY-selector-currentNum').val()
			);

			// 輸入input
			$item.find('.QTY-selector-currentNum').blur(function () {
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
					$(this).val(product_QTY);
				} else {
					product_QTY = value;
				}
			});

			$item.find('.QTY-reduce').click(function () {
				product_QTY--;
				if (product_QTY <= 0) {
					return (product_QTY = 1);
				}
				$item.find('.QTY-selector-currentNum').val(product_QTY);
			});

			$item.find('.QTY-plus').click(function () {
				product_QTY++;
				$item.find('.QTY-selector-currentNum').val(product_QTY);
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
			.prop('required', true)
			.prop('readonly', true)
			.attr('placeholder', '郵遞區號');
		$(
			`.twzipcode${num} select[name="county"],.twzipcode${num} select[name="district"]`
		)
			.addClass('form-select')
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

	// 發票類型
	if ($('#invoice_type').length) {
		$('#invoice_type').on('change', function () {
			$(
				'.invoice-area, .company-account-invoice-area,.mobileBarcode-area'
			).hide();

			// 去除 required
			$('.company-account-invoice-area input').each(function () {
				$(this).prop('required', false);
			});

			$('.mobileBarcode-area input').each(function () {
				$(this).prop('required', false);
			});

			const $invoiceType = $('#invoice_type option:selected').val();
			$(`.${$invoiceType}`).show();

			// 添加 required
			if ($invoiceType === 'company-account-invoice-area') {
				$(`.${$invoiceType} input`).each(function () {
					$(this).prop('required', true);
				});
			}

			// 個人發票 載具類型歸位
			if ($invoiceType === 'invoice-area') {
				$(`.${$invoiceType} select`).val(0);
			}
		});
	}

	// 載具類型
	if ($('#vehicle_type').length) {
		$('#vehicle_type').on('change', function () {
			$('.mobileBarcode-area').hide();
			// 去除 required

			$('.mobileBarcode-area input').each(function () {
				$(this).prop('required', false);
			});

			const $vehicleType = $('#vehicle_type option:selected').val();
			$(`.${$vehicleType}`).show();

			// 添加 required
			if ($vehicleType === 'mobileBarcode-area') {
				$('.mobileBarcode-area input').prop('required', true);
			}
		});
	}

	// 手機板收合訂單內容
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
