$(document).ready(function(){
	$('.categories a img').hover(
		function(){$(this).stop().animate({opacity: 0.7}, 150);},
		function(){$(this).delay(50).animate({opacity: 1}, 50);}
	);


	$("#foo1").owlCarousel({
		items : 3,
		dots : false,
		nav : true,
		navText: ["", ""]
	});

	$('#foo2').owlCarousel({
		items : 4,
		dots : false,
		nav : true,
		navText: ["", ""]
	});	

	hs.graphicsDir = '/images/graphics/';
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.outlineType = 'rounded-white';
	hs.fadeInOut = true;
	hs.creditsText = '';
});

// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE
