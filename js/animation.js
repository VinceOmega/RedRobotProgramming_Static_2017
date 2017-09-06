window.onload = function(){
	//animation for logo
	var logoMove = anime({
		targets: '#landing .trans-black-white .logo',
		top: '300px',
		duration: 6000,
		easing: 'easeInOutQuad'
	});

	var logo = anime({
		targets: '#landing .trans-black-white .logo',
		rotateY: 360,
		direction: 'alternate',
		duration: 6000,
		loop: true
	});

}

$(window).addEvent('domready', function(){

	var fadeFx = $("arrow-section-one");
	fadeFx.set('tween',{
		duration: 12000
	});
	fadeFx.tween('opacity', 0, 1);

	$$('.arrow-link').addEvent('click', function(el){
		el.stop();
		var scrollTo 	= el.target.href.split("#")[1];
		var arrowPos	= $(scrollTo).getPosition();
		var doc 		= $(document.body);
		var scrollFX 	= new Fx.Scroll(doc).set(arrowPos.x, arrowPos.y - ( document.body.offsetHeight / 1.1 ) );
	});

});
