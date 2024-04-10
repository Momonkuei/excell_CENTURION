$(function () {
	if ($('#twzipcode').length) {
		$('#twzipcode').twzipcode({
			zipcodeIntoDistrict: false, // 郵遞區號自動顯示在區別選單中
			county: {
				value: '請選擇縣市',
			},
			css: [
				'city form-control col-md-4',
				'town form-control col-md-4',
				'townNum form-control col-md-4',
			], // 自訂 "城市"、"地別" class 名稱
			countyName: 'city', // 自訂城市 select 標籤的 name 值
			districtName: 'town', // 自訂區別 select 標籤的 name 值
		});
	}

	if ($('#cart_table').length) {
		// $('#cart_table').DataTable({
		// 	searching: false,
		// 	paging: false,
		// 	columns: [
		// 		{ title: '圖片' },
		// 		{ title: '品名' },
		// 		{ title: '編號' },
		// 		{ title: '數量' },
		// 		{ title: '單價' },
		// 		{ title: '總價' },
		// 		{ title: '刪除' },
		// 	],
		// });
		// $('#cart_table thead').addClass('table-dark');
	}
});
