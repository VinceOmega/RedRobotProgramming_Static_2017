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
