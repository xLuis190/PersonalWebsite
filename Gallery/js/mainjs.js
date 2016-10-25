$(function(){
	// Initialize the gallery
	$('.thumbs a').touchTouch();
});
for(var x = 1;x<10;x++){
	$(".thumbs").append('<a href="img/imgpack/www.dmzwarez.info_Natures_ 000'+x+'.jpg" ><img src="img/imgpack/www.dmzwarez.info_Natures_ 000'+x+'.jpg" class="img-responsive thumbnail"></a>');
}
for(var x = 10;x<45;x++){
	$(".thumbs").append('<a href="img/imgpack/www.dmzwarez.info_Natures_ 00'+x+'.jpg" ><img src="img/imgpack/www.dmzwarez.info_Natures_ 00'+x+'.jpg" class="img-responsive thumbnail"></a>');
}
