var nodemailer = require('nodemailer');

var btnAdd = document.querySelector('#add');
var btnSubtract = document.querySelector('#subtract');
var input = document.querySelector('input');
var message = document.querySelector('message');


btnAdd.addEventListener('click', () => {
	input.value = parseInt(input.value) + 100;
	message.value = input.value;
});

btnSubtract.addEventListener('click', () => {
	if (input.value > 0) {
		input.value = parseInt(input.value) - 100;
	}
});

function sendEmail() {
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'pablognunez88@gmail.com',
		Password: 'gnPablo88',
		To: 'pablognunez88@gmail.com',
		From: 'pablognunez88@gmail.com',
		Subject: 'Test',
		Body: 'Hello there'		
	}).then( message => {
		alert('mail sent successfully')
	}
	).catch(err => console.log(err));
}

var transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'pablognunez88@gmail.com',
		pass: 'gnPablo88'
	}
});

var mailOptions = {
	from: 'pablognunez88@gmail.com',
	to: 'alandc1400@gmail.com',
	// to: 'contacto@novuspack.com',
	subject: 'Sending mail using Node.js',
	text: message.value
};

function send() {
	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			console.log(err);
		} else {
			alert('Mail sent');
			console.log('Email sent: ' + info.response);
		}
	});
} 
