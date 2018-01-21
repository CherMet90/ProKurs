// alert ('jQuery подключен и отлично работает!');
$(function() {
	$(".top-line__address .tab").click(function() {
		$(".top-line__address .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".address__phone .tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
});
