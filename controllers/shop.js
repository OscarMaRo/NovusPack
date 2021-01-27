const Botella = require('../models/botella');
const Product = require('../models/product');

var nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

exports.getServicios = (req,res,next)=>{
	res.render('servicios', {
		pageTitle:'Servicios',
		path:'/Servicios'
	});
}
exports.getFabricacion=(req,res,next)=>{
	res.render('fabricacion',{
		pageTitle:'Fabricacion',
		path:'/Servicios/Fabricacion'
	});
}
exports.getImpresion=(req,res,next)=>{
	res.render('impresion',{
		pageTitle:'Impresion',
		path:'/Servicios/Impresion'
	});
}

exports.getProducts = (req, res, next) => {
    Botella.fetchAll(products => {
        res.render('shop', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });    
};

exports.getIndex = (req, res, next) => {
	res.render('homePage',{
		pageTitle: 'home',
		path: '/'
	 });
}

exports.getPagoProcesado = (req,res,next)=>{
	res.render('pagoProcesado',{
		pageTitle: 'Listo',
		path: ' ',
	})
}

exports.getContacto = (req, res, next) => {
	res.render("contacto",{
		pageTitle: 'contacto',
		path: '/Contacto'
	});
}

exports.getCotizacion=(req,res,next) => {
	res.render("correoCotizacion",{
		pageTitle: 'Cotizacion',
		path: '/H2Flow/correoCotizacion',
		baseDatos: Product,
		arrayNuevito: []
	});
}

exports.postCotizacion = (req, res, next)=>{
	const froms = req.body.from;
	const message = req.body.message;
	console.log(message);

	var transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'fredogodofredonachos69@gmail.com',
			pass: 'megustanlosnachos'
		}
	});

	var mailOptions = {
		from: 'fredogodofredonachos69@gmail.com',
		to: 'alandc1400@gmail.com',
		subject: 'Cotizacion de mayoreo',
		text: froms + ": "+message
	};

	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			console.log(err);
		} else {
			alert('Mail sent');
			console.log('Email sent: ' + info.response);
		}
	});
	
	// alert("Mail enviado");
	res.redirect('/correoEnviado');
}
exports.getCorreoEnviado=(req,res,next)=>{
	res.render("correoEnviado",{
		pageTitle: 'correoEnviado',
		path: '/correoEnviado'
	});
}

exports.postContacto = (req, res, next)=>{
	const from = req.body.from;
	const message = req.body.message;
	console.log(message);

	var transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'fredogodofredonachos69@gmail.com',
			pass: 'megustanlosnachos'
		}
	});

	var mailOptions = {
		from: 'fredogodofredonachos69@gmail.com',
		to: 'alandc1400@gmail.com',
		subject: 'ME GUSTAN LOS NACHOOOOOOOOOOS',
		text: message
	};

	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			console.log(err);
		} else {
			alert('Mail sent');
			console.log('Email sent: ' + info.response);
		}
	});
	
	// alert("Mail enviado");
	res.redirect('/Contacto');
}


exports.getMayoreo = (req, res, next) => {
	const prodId = req.params.id;
	Botella
		.findById(prodId)
		.then(product => {
			res.render('mayoreo', {
				producto: product,
				pageTitle: 'Mayoreo',
				path: '/Mayoreo/Detalle',
				baseDatos: Product
			});
			
		})
		.catch(err => {console.log(err)});
	// duplicados = [];
	// Botella
	// 	.find()
	// 	.then(products => {
			
	// 		const p = products.filter(i => {
	// 			if (i.Botella == 'Crack') {		
	// 				return i;
	// 			} 
	// 		});			
			
	// 		res.render('mayoreo-crack', {
	// 			pageTitle: 'Mayoreo',
	// 			path: '/Mayoreo-crack',
	// 			prods: p.slice(0,5)
	// 		});		
		
	// 	})	
	// 	.catch(err => console.log(err));
}

// exports.postMayoreoCrack = (req, res, next) => {
// 	const from = req.body.from;
// 	const name = req.body.name;
// 	const message = req.body.message;
// 	console.log(message);

// 	var transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 465,
// 		secure: true,
// 		auth: {
// 			user: 'fredogodofredonachos69@gmail.com',
// 			pass: 'megustanlosnachos'
// 		}
// 	});

// 	var mailOptions = {
// 		from: 'pablognunez88@gmail.com',
// 		to: name,
// 		subject: 'Sending mail using Node.js',
// 		text: message
// 	};

// 	transporter.sendMail(mailOptions, function(err, info) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			alert('Mail sent');
// 			console.log('Email sent: ' + info.response);
// 		}
// 	});
	
// 	console.log('done');
// 	res.redirect('/mayoreo-crack');	 
// }

exports.contact = (req, res, next) => {
	console.log(req.body);
	console.log('done');
}

// exports.getMayoreoSpartan = (req, res, next) => {
// 	Botella
// 		.find()
// 		.then(products => {
			
// 			const p = products.filter(i => {
// 				if (i.Botella == 'Spartan') {		
// 					return i;
// 				} 
// 			});
			
// 			res.render('mayoreo-spartan', {
// 				pageTitle: 'Mayoreo',
// 				path: '/Mayoreo-spartan',
// 				prods: p.slice(0,5)
// 			});		
		
// 		})
			
// 		.catch(err => console.log(err));
// }

// exports.postMayoreoSpartan = (req, res, next) => {
// 	const from = req.body.from;
// 	const name = req.body.name;
// 	const message = req.body.message;
// 	console.log(message);

// 	var transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 465,
// 		secure: true,
// 		auth: {
// 			user: 'fredogodofredonachos69@gmail.com',
// 			pass: 'megustanlosnachos'
// 		}
// 	});

// 	var mailOptions = {
// 		from: 'pablognunez88@gmail.com',
// 		to: name,
// 		subject: 'Sending mail using Node.js',
// 		text: message
// 	};

// 	transporter.sendMail(mailOptions, function(err, info) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			alert('Mail sent');
// 			console.log('Email sent: ' + info.response);
// 		}
// 	});
	
// 	console.log('done');
// 	res.redirect('/mayoreo-spartan');
// }




