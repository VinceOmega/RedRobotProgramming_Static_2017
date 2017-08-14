var logoMove = anime({
	targets: '#landing .row-black .logo',
	top: '100px',
	duration: 3000,
	easing: 'easeInOutQuad'
});

var logo = anime({
	targets: '#landing .row-black .logo',
	rotateY: 360,
	direction: 'alternate',
	duration: 6000,
	loop: true
});

