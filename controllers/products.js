const Product = require('../models/botella');
const Dash = require('../models/dashboard');
const Pedidos = require('../models/pedidos')

const mongoose = require('mongoose');



const ObjectId = mongoose.ObjectId;

const stripe = require("stripe")("sk_test_51H7BbpLd4rOjJVAeiEM0imEwzkqYR5wQjZEkZkGUAUex0O4aV0WYwdSRo9X9gGbnWjn2Q3ze1t5KtBOqk9sHfrqh00jux3mGLp");

mongoose.connect("mongodb://localhost/Botella_db", { useNewUrlParser: true })
	.then(() => console.log('Connected!'))
	.catch(err => console.log(err));



exports.getProductID = (req, res, next) => {
	const prodId = req.params.id;
	Product
		.findById(prodId)
		.then(product => {
			res.render('ObjetoIndividual', {
				producto: product,
				pageTitle: 'Botellas',
				path: '/H2Flow/Producto/Detalle',
				baseDatos: Product
			});
			
		})
		.catch(err => {console.log(err)});
}

exports.getProducts = (req, res, next) => {
	const pag = req.params.num;
	Product.find()
		.then(products => {
			res.render('shop', {
				prods: products, 
				pageTitle: 'Shop', 
				path: '/H2Flow',
				pag: pag
			});
		})
		.catch(err => {
			console.log(err);
		});
}

exports.getFiltros = (req, res, next)=>{
	const pag = req.params.num;
	const nombre = req.params.botella;
	const medida = req.params.volumen;
	Product.find({"Botella": nombre, "Volumen": medida})
		.then(products => {
			res.render('shopArea', {
				prods: products, 
				pageTitle: 'Shop', 
				path: '/',
				pag: pag
			});
		})
		.catch(err => {
			console.log(err);
		});
}

exports.getFiltroBotella = (req, res, next)=>{
	const pag = req.params.num;
	const nombre = req.params.botella;
	Product.find({"Botella": nombre})
		.then(products => {
			res.render('shopNombre', {
				prods: products, 
				pageTitle: 'Shop', 
				path: '/H2Flow/',
				pag: pag
			});
		})
		.catch(err => {
			console.log(err);
		});
}

exports.getFiltroVolumen = (req, res, next)=>{
	const pag = req.params.num;
	const medida = req.params.volumen;
	Product.find({"Volumen": medida})
		.then(products => {
			res.render('shopVolumen', {
				prods: products, 
				pageTitle: 'Shop', 
				path: '/H2Flow/',
				pag: pag
			});
		})
		.catch(err => {
			console.log(err);
		});
}

exports.getCart = (req, res, next) => {
	console.log('heyBrotherino');
	var arrayPrueba= [];
	res.render('cart', {
        path: '/H2Flow/cart',
        pageTitle: 'Your Cart',
		baseDatos: Product,
		arrayProductos: arrayPrueba,
		arrayNuevito: [],
		Cantidades:[],
		contar: 0
    });
}

exports.postCarrito =(req, res, next) =>{
	console.log('heyPosterino');
	req.arrayProds = [];
	var array = req.body.arrayProductos.split(",");
	var contador = req.body.contador;
	var bandera= 0;
	var Carro='Minoreo';
	resuelveProblemas2(array,res,contador,Carro);
}

exports.getCarroMayoreo = (req, res, next) => {
	console.log('heyMayoreo');
	var arrayPrueba= [];
	res.render('carritoMayoreo', {
        path: '/H2Flow/CarroMayoreo',
        pageTitle: 'Carrito de mayoreo',
		baseDatos: Product,
		arrayProductos: arrayPrueba,
		arrayNuevito: [],
		Cantidades:[],
		contar: 0
    });
};

exports.postCarroMayoreo =(req, res, next) =>{
	//console.log('heyPostMayor');
	req.arrayProds = [];
	var array = req.body.arrayProductos.split(",");
	var array2= [];
	var i =0;
	
	do{
		array2[i]=array[i+1].split("/");
		if(i+1===array.length){break;}
		i++;
	}while(i+1<array.length);
	
	var contadorMayoreo = req.body.contadorMayoreo;
	var bandera= 0;
	var Carro='Mayoreo'
	console.log(array);
	for(var i=0;i<array2.length;i++){
		console.log("---------------");
		console.log(array2[i]);
		console.log("---------------");
	}
	resuelveProblemas2(array2,res,contadorMayoreo,Carro);
}

 function arreglaMiProblemaPorfavor(array2){
	var bandera=0;
	var chequeo=array2.length;
	var arrayRegreso = [];
	for(var i =0;i<array2.length;i++){
		Product.findById(array2[i])
		.then(productosEnc=>{
			arrayRegreso.push(productosEnc);
		})
	}
 	
	return new Promise(array => {
	setTimeout(() => {
      array(arrayRegreso);
    }, 500)
	})
}

function contarCarritos(arrayProductos){
	var arrayNuevito=[];  
	var band=0; 
	if(arrayProductos != undefined) {
		for (var i = 0; i < arrayProductos.length; i++){ 
			if(arrayProductos[i] != undefined){
				for (var j = 0; j < arrayProductos.length; j++){ 
				var string1 =String(arrayProductos[i]._id);
				var string2 =String(arrayProductos[j]._id);	
					if(string1===string2){
					  band++; 
					}  
				} 
			if(band == 1){
				 arrayNuevito.push(arrayProductos[i]); 
			} else if(band == 0){console.log("nada");}
			else{
				var band2=1;
				if(arrayNuevito != undefined){
					for (var z = 0; z < arrayNuevito.length; z++){
						var string1=String(arrayProductos[i]._id);
						var string2=String(arrayNuevito[z]._id);	
							if(string1===string2){
								console.log("repetido");
								band2=0;
							} 
					}
					if(band2==1){arrayNuevito.push(arrayProductos[i])}
				}else{arrayNuevito.push(arrayProductos[i]);}
			}
			band=0;
			}
		}
	}
	
	return new Promise(array => {
	setTimeout(() => {
		//console.log(arrayNuevito);
		array(arrayNuevito);
    }, 500)
	})
}
	

function contarCantidades(arrayProductos){
		console.log(arrayProductos);
		var arrayNuevito=[]; 
		var Cantidades=[]; 
		var band=0; 
		if(arrayProductos != undefined) {
		for (var i = 0; i < arrayProductos.length; i++){ 
		if(arrayProductos[i] != undefined){
			for (var j = 0; j < arrayProductos.length; j++){ 
			var string1 =String(arrayProductos[i]._id);
			var string2 =String(arrayProductos[j]._id);	
			if(string1===string2){
			  band++; 
			} 
		}
		if(band == 1){
			 Cantidades.push(1); arrayNuevito.push(arrayProductos[i]);

		} else if(band == 0){console.log("nada");}else{
			var band2=1;
			if(arrayNuevito != undefined){
				for (var z = 0; z < arrayNuevito.length; z++){
					var string1=String(arrayProductos[i]._id);
					var string2=String(arrayNuevito[z]._id);	
					if(string1===string2){
						console.log("repetido");
						band2=0;
					} 
				}
				if(band2==1){Cantidades.push(band); arrayNuevito.push(arrayProductos[i]);}
			}else{Cantidades.push(band); arrayNuevito.push(arrayProductos[i])
			}
		}band=0;}}}
	
	return new Promise(array => {
	setTimeout(() => {
    	console.log(Cantidades);
		array(Cantidades);
    }, 500)
	})
}

function yoteDoyStringsDameObjetos(array2){
	
var bandera=0;
	var chequeo=array2.length;
	var arrayRegreso = [];
	for(var i =0;i<array2.length;i++){
		Product.findById(array2[i][0])
		.then(productosEnc=>{
			arrayRegreso.push(productosEnc);
		})
	}
 	
	return new Promise(array => {
	setTimeout(() => {
      array(arrayRegreso);
    }, 500)
	})	
	
}

function yoteDoyStringsDameNumeros(array2){
	
var bandera=0;
	var chequeo=array2.length;
	var arrayRegreso = [];
	for(var i =0;i<array2.length;i++){
			arrayRegreso.push(array2[i][1]);
		}


 	
	return new Promise(array => {
	setTimeout(() => {
      array(arrayRegreso);
    }, 500)
	})	
	
}




async function resuelveProblemas2(arrayProds,respond,conta,Variante) { //sdfghjkl
  	
	
	if(Variante=='Mayoreo'){
		
	var arregloGanador= await yoteDoyStringsDameObjetos(arrayProds);
	var arrayFrend = await contarCarritos(arregloGanador);
	var cantidades = await yoteDoyStringsDameNumeros(arrayProds);
	
		
		//console.log('mayoreo');
		respond.render('carritoMayoreo', {
        path: '/H2Flow/CarroMayoreo',
        pageTitle: 'Carrito de mayoreo',
		baseDatos: Product,
		arrayProductos: arregloGanador,
		contar: conta,	
		arrayNuevito: arrayFrend,
		Cantidades:cantidades,
		
	});
	
	}else{
	var arregloGanador= await arreglaMiProblemaPorfavor(arrayProds);	
	var arrayFrend = await contarCarritos(arregloGanador);
	var cantidades = await contarCantidades(arregloGanador);	
		
	respond.render('cart', {
		path: '/H2Flow/cart',
		pageTitle: 'Your Cart',
		baseDatos: Product,
		arrayProductos: arregloGanador,
		contar: conta,
		arrayNuevito: arrayFrend,
		Cantidades:cantidades
	});
		}
}



async function checkoutRender(nombre, correo, direc, pedidoFinal, ciudad, estado, zip, respond){
	var d =  new Date();
	var fecha = d.toDateString();
	var listaPedido = await checkoutObjetos(pedidoFinal);
	var objeto	= await Pedidos.create({
		NombreCliente: nombre,
		Correo: correo,
		Direccion: direc,
		Ciudad: ciudad,
		Estado: estado,
		ZIP: zip,
		Pedido: listaPedido,
		PagoRealizado: false,	
		CostoFinal: 0,
		Fecha:fecha
		})
	//console.log("asdfasdsfasd"+objeto.NombreCliente);
	setTimeout(() => {
			respond.render("checkaoutpago2",{
			pageTitle: 'checkaoutpago2',
			path: '/H2Flow/checkaoutpago2',
			cliente: objeto	
	})
	},1500)	
}

function checkoutObjetos(array){
	var listaPedido = [];
	for(var i =0;i<array.length;i++){
		Product.findById(array[i])
		.then(productosEnc=>{
			listaPedido.push(productosEnc);
		})
	}
	return new Promise(array => {
		setTimeout(() => {
		 	array(listaPedido);
		}, 500)
	})
}

async function CalcularCobro(productos,impuesto,envio){
	var split=productos[0].id.split(",");
	var pedido = await presssio(split, 0);
	return f(pedido,impuesto,envio);    
}

function f(pedido,impuesto,envio){
	pedido += pedido*impuesto;
	pedido += envio;
	pedido = pedido*100;
	return pedido;
}

function presssio(pedido, precioFinal){
	var precio = precioFinal;
	for(var i=0;i<pedido.length-1;i++){
		Product.findById(pedido[i])
		.then(productosEnc=>{
			precio += productosEnc.Precio;
		})
	}
	return new Promise(Number => {
		setTimeout(() => {
			Number(precio);
	 	}, 500)
	})
}

exports.getCheckoutPago = (req, res, next)=>{
	res.render("checkaoutpago", {
		path:"/H2Flow/checkoutpago",
		pageTitle: "pagar"
	})
}

exports.getCheckoutPago2 = (req, res, next)=>{
	res.render("checkaoutpago2", {
		path:"/H2Flow/checkoutpago2",
		pageTitle: "pagar"
	})
}


exports.getCheckout = (req, res, next) => {
	res.render("checkout",{
		pageTitle: 'checkout',
		path: '/H2Flow/Checkout'
	});
}

exports.postCheckout =(req, res, next) =>{
	var listaPedido=[];
	var impuestoSIM=0.16;
	var envioSIM=123;
	var array = req.body.ProductosPorPedir.split(",");
	var nombre = req.body.nombreComp;
	var correo = req.body.email;
	var direccion = req.body.direccion;
	var ciudad = req.body.ciudad;
	var estado = req.body.estado;
	var zip = req.body.CP;
	checkoutRender(nombre, correo, direccion, array, ciudad, estado, zip, res);
	
}

exports.postCheckoutPago = async (req, res, next) =>{
	var d =  new Date();
	var fecha = d.toDateString();
	const { items } = req.body;
	//await console.log(items);
	//var Items = await checkoutObjetos(req.body.productos);
	await console.log("LaFechaEs:" + fecha);
	var cantidad = await CalcularCobro(items, 0.16, 30);
	const paymentIntent = await stripe.paymentIntents.create({
    	amount: cantidad,
	    currency: "mxn"
	});
	Pedidos.update({PagoRealizado:false, CostoFinal:0}  //Revisa si este .js esta conectado a la database o el mongoose esta de adorno
		,{$set:{PagoRealizado:true, CostoFinal:cantidad, Fecha:fecha}}
	);
  	res.send({
    	clientSecret: paymentIntent.client_secret
	});
	
	
}
