$(document).ready(function(){
	var emoji = $('#emoji');
	function moveEmoji (e) {
		console.log("moveEmoji working, pageX = " + e.pageX + ", pageY = " + e.pageY);
		emoji.css("left", e.pageX).css("top", e.pageY);
	}
	$(window).on('mousemove', moveEmoji);
  $('html').mousemove(function(e){
    $('emoji').css('top','e.pageY').css('left','e.pageX');
  });
}); 
