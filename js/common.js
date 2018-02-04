$(function() {

	$(window).resize(function(){
		heightAlignment(".discounts__content--wrap");
		heightAlignment(".carousel-item");
		$('.feedback__body').parally();
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

	$(".carousel-control-prev").click(function() {
		heightAlignment(".carousel-item");
		$('.feedback__body').parally();
	});
	$(".carousel-control-next").click(function() {
		heightAlignment(".carousel-item");
		$('.feedback__body').parally();
	});

	$('.feedback__body').parally();

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
