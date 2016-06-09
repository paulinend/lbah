var canvas = document.getElementById('myCanvasGauche');
var context = canvas.getContext('2d');

	context.beginPath();
	context.moveTo(100, 400);
	context.lineTo(350, 10);
	context.lineWidth = 3;
	context.stroke();
	// set line color
	context.strokeStyle = '#99FF99';
	context.stroke();


var canvas = document.getElementById('myCanvasDroite');
var context = canvas.getContext('2d');

		context.beginPath();
		context.moveTo(100, 400);
		context.lineTo(350, 10);
		context.lineWidth = 3;
		context.stroke();
		// set line color
		context.strokeStyle = '#99FF99';
		context.stroke();


var canvas = document.getElementById('myCanvasHaut');
var context = canvas.getContext('2d');

		context.beginPath();
		context.moveTo(200, 100);
		context.lineTo(200, 300);
		context.lineWidth = 3;

	     // set line color
	    context.strokeStyle = '#99FF99';
	    context.stroke();

var canvas = document.getElementById('myCanvasBas');
var context = canvas.getContext('2d');

		context.beginPath();
		context.moveTo(200, 000);
		context.lineTo(200, 200);
		context.lineWidth = 3;

	     // set line color
	    context.strokeStyle = '#99FF99';
	    context.stroke();
