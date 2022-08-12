
$(".menu-area ul li").hover(function(){
$(this).find("ul").stop().fadeToggle(800);
});