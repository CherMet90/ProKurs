// alert ('jQuery подключен и отлично работает!');
$(function() {

	// heightAlignment(".discounts__content--wrap");

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
		};
		heightAlignment(".discounts__content--wrap");
	});

	$(".top-line__address .tab").click(function() {
		$(".top-line__address .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".address__phone .tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".discounts__tab-titles--item").click(function() {
		$(".discounts__content--wrap").css("display", "flex");
		heightAlignment(".discounts__content--wrap");
		$(".discounts__tab-titles--item").removeClass("active").eq($(this).index()).addClass("active");
		$(".discounts__content--wrap").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	function heightAlignment (elemsName) {
		$(elemsName).css('height', '');
		var max = $(elemsName).eq(0).height();
		$(elemsName).each(function() {
			if ($(this).height() > max) {
				max = $(this).height();
			};
		});
		$(elemsName).each(function() {
			$(this).css('height', max);
		});
	};

});
