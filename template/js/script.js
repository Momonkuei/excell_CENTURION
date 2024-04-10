// bootstrap

document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
	new bootstrap.Popover(popover);
});

// header
$(function () {
	if ($('header').length) {
		$('.slide-menu-control').click(function () {
			$('body').addClass('open-menu');
		});

		// 首頁關閉按鈕
		$('.fullMenu .close-btn').click(function () {
			$('body').removeClass('open-menu');
		});

		// header 搜尋按鈕
		$('.searchToggle').click(function () {
			$('.searchBox').toggleClass('open');
		});
	}
});

// banner
$(function () {
	var mySwiper = new Swiper('.swiper', {
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});

// gotop

$(function () {
	if ($('.goTop').length) {
		$('.goTop').click(function () {
			jQuery('html,body').animate(
				{
					scrollTop: 0,
				},
				1000
			);
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.goTop').fadeIn('fast');
			} else {
				$('.goTop').stop().fadeOut('fast');
			}
		});
	}
});
