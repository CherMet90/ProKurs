// alert ('jQuery подключен и отлично работает!');
$(function() {

	if ($(window).width()<369) {
		$(".discounts__tab-titles--item").css('font-size', '4vw');
	};

	$(window).resize(function(){
		switch (true) {
			case ($(window).width()<369):
				$(".discounts__tab-titles--item").css('font-size', '4vw');
				break;
			case ($(window).width()>=369):
				$(".discounts__tab-titles--item").css('font-size', '16px');
				break;
		}
	});

	$(".top-line__address .tab").click(function() {
		$(".top-line__address .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".address__phone .tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
});
