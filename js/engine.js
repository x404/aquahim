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


	$('.header .btn').click(function(){
		var target = $('#products');
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 1000);
		return false;
	});

	// VALIDATE
	// форма входа

	$('#order_form .btn').click(function(){
		$('#order_form').submit();
	});

	$('#order_form').validate({
		submitHandler: function(form){
			// при прохождении валидации, дальнейший код тут (ajax)
			console.log("Валидация пройдена");
		}
	});

});

$(document).on('click', 'label.error', function(e){
	e.preventDefault();
	$(this).hide();
});

$(document).on('click', '.thank .close', function(e){
	e.preventDefault();

	$('.thank').fadeOut('normal', function(){
		this.remove();
	})
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


/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU
 */
jQuery.extend(jQuery.validator.messages, {
	required: "",
	remote: "Пожалуйста, введите правильное значение.",
	email: "",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	accept: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: jQuery.validator.format("Пожалуйста, введите не больше {0} символов."),
	minlength: jQuery.validator.format("Пожалуйста, введите не меньше {0} символов."),
	rangelength: jQuery.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
	range: jQuery.validator.format("Пожалуйста, введите число от {0} до {1}."),
	max: jQuery.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
	min: jQuery.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});