fghjk
mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/Botella_db", { useNewUrlParser: true })
	.then(() => console.log('Connected!'))
	.catch(err => console.log(err));



const Schema = mongoose.Schema;

const productSchema = new Schema({
	Botella: {
		type: String,
		required: true
	},
	Precio: {
		type: Number,
		required: true
	},
	LinksImagenes: {
		type:[String],
		required: true
	},
	Caracteristicas: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	existencia: {
		type: Number,
		required: true
	},
	Volumen:{
   	type: Number,
	required:true	
	 
}
});



var tipoBotella = mongoose.model('tipoBotella', productSchema);


var botellaNegra= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 100,
	LinksImagenes: "/images/productos/crackNegro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Negro",
	existencia:90,
	Volumen: 1000	
	
	
	
});

botellaNegra.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella negra")}
	

});


var botellaAzul= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 100,
	LinksImagenes: "/images/productos/crackAzul.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Azul",
	existencia:20,
	Volumen: 1000	
	
	
	
});



botellaAzul.save(function (err,cat){
	if(err){
		console.log('error al guardar botella azul');
	}else{console.log("Se agrego correctamente la botella azul")}
	

});

var botellaRosa= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 100,
	LinksImagenes: "/images/productos/crackRosa.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Rosa",
	existencia:20,
	Volumen: 1000	
	
	
	
});



botellaRosa.save(function (err,cat){
	if(err){
		console.log('error al guardar botella rosa');
	}else{console.log("Se agrego correctamente la botella rosa")}
	

});


///////////////////////////////////////////////////////////////////////////////////////////



var botellaVerde= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 100,
	LinksImagenes: "/images/productos/crackVerde.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Verde",
	existencia:90,
	Volumen: 1000	
	
	
	
});

botellaVerde.save(function (err,cat){
	if(err){
	console.log('error al guardar botella verde');
	}else{console.log("Se agrego correctamente la botellaVerde")}
	

});


var botellaAzulClaro= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 100,
	LinksImagenes: "/images/productos/crackAzulClaro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "AzulClaro",
	existencia:40,
	Volumen: 1000	
	
	
	
});



botellaAzulClaro.save(function (err,cat){
	if(err){
		console.log('error al guardar botella azulita');
	}else{console.log("Se agrego correctamente la botellaAzulClaro")}
	

});

var botellaNegra1= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 80,
	LinksImagenes: "/images/productos/crackNegro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Negro",
	existencia:90,
	Volumen: 750	
	
	
	
});

botellaNegra1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella negra")}
	

});


var botellaAzul1= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 80,
	LinksImagenes: "/images/productos/crackAzul.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Azul",
	existencia:20,
	Volumen: 750	
	
	
	
});



botellaAzul1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella azul');
	}else{console.log("Se agrego correctamente la botella azul")}
	

});

var botellaRosa1= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 80,
	LinksImagenes: "/images/productos/crackRosa.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Rosa",
	existencia:20,
	Volumen: 750	
	
	
	
});



botellaRosa1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella rosa');
	}else{console.log("Se agrego correctamente la botella rosa")}
	

});


///////////////////////////////////////////////////////////////////////////////////////////



var botellaVerde1= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 80,
	LinksImagenes: "/images/productos/crackVerde.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Verde",
	existencia:90,
	Volumen: 750	
	
	
	
});

botellaVerde1.save(function (err,cat){
	if(err){
	console.log('error al guardar botella verde');
	}else{console.log("Se agrego correctamente la botellaVerde")}
	

});


var botellaAzulClaro1= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 80,
	LinksImagenes: "/images/productos/crackAzulClaro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "AzulClaro",
	existencia:40,
	Volumen: 750	
	
	
	
});



botellaAzulClaro1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella azulita');
	}else{console.log("Se agrego correctamente la botellaAzulClaro")}
	

});


var botellaNegra2= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 60,
	LinksImagenes: "/images/productos/crackNegro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Negro",
	existencia:90,
	Volumen: 500	
	
	
	
});

botellaNegra2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella negra")}
	

});


var botellaAzul2= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 60,
	LinksImagenes: "/images/productos/crackAzul.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Azul",
	existencia:20,
	Volumen: 500	
	
	
	
});



botellaAzul2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella azul');
	}else{console.log("Se agrego correctamente la botella azul")}
	

});

var botellaRosa2= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 60,
	LinksImagenes: "/images/productos/crackRosa.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Rosa",
	existencia:20,
	Volumen: 500	
	
	
	
});

botellaRosa2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella rosa');
	}else{console.log("Se agrego correctamente la botella rosa")}
	
});


///////////////////////////////////////////////////////////////////////////////////////////



var botellaVerde2= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 60,
	LinksImagenes: "/images/productos/crackVerde.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Verde",
	existencia:90,
	Volumen: 500	
	
	
	
});

botellaVerde2.save(function (err,cat){
	if(err){
	console.log('error al guardar botella verde');
	}else{console.log("Se agrego correctamente la botellaVerde")}
	

});


var botellaAzulClaro2= new tipoBotella({
	
	
	Botella:"Crack",
	Precio: 60,
	LinksImagenes: "/images/productos/crackAzulClaro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "AzulClaro",
	existencia:40,
	Volumen: 500	
	
	
	
});



botellaAzulClaro2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella azulita');
	}else{console.log("Se agrego correctamente la botellaAzulClaro")}
	

});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////despues va spartan
	
	
var SpartanbotellaNegra= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 100,
	LinksImagenes: "/images/productos/spartanNegro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Negro",
	existencia:90,
	Volumen: 1000	
	
	
	
});

SpartanbotellaNegra.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella negra")}
	

});


var SpartanbotellaNaranja= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 100,
	LinksImagenes: "/images/productos/spartanNaranja.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Najaranja",
	existencia:20,
	Volumen: 1000	
	
});

SpartanbotellaNaranja.save(function (err,cat){
	if(err){
		console.log('error al guardar botella naranja');
	}else{console.log("Se agrego correctamente la botella naranja")}
	

});

var SpartanbotellaRosa= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 100,
	LinksImagenes: "/images/productos/spartanRosa.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Rosa",
	existencia:20,
	Volumen: 1000	
		
});



SpartanbotellaRosa.save(function (err,cat){
	if(err){
		console.log('error al guardar botella rosa');
	}else{console.log("Se agrego correctamente la botella rosa")}
	

});


///////////////////////////////////////////////////////////////////////////////////////////



var SpartanbotellaVerde= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 100,
	LinksImagenes: "/images/productos/spartanVerde.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Verde",
	existencia:90,
	Volumen: 1000	
	
	
	
});

SpartanbotellaVerde.save(function (err,cat){
	if(err){
	console.log('error al guardar botella verde');
	}else{console.log("Se agrego correctamente la botellaVerde")}
	

});


var SpartanbotellaMorado= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 100,
	LinksImagenes: "/images/productos/spartanMorado.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "AzulClaro",
	existencia:40,
	Volumen: 1000	
	
	
	
});



SpartanbotellaMorado.save(function (err,cat){
	if(err){
		console.log('error al guardar botella morado');
	}else{console.log("Se agrego correctamente la botellaMorado")}
	

});

///////////////////////////////750
var SpartanbotellaNegra1= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 80,
	LinksImagenes: "/images/productos/spartanNegro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Negro",
	existencia:90,
	Volumen: 750
	
	
	
});

SpartanbotellaNegra1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella negra")}
	

});


var SpartanbotellaNaranja1= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 80,
	LinksImagenes: "/images/productos/spartanNaranja.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Najaranja",
	existencia:20,
	Volumen: 750	
	
});

SpartanbotellaNaranja1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella azul")}
	

});

var SpartanbotellaRosa1= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 80,
	LinksImagenes: "/images/productos/spartanRosa.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Rosa",
	existencia:20,
	Volumen: 750	
		
});



SpartanbotellaRosa1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella azul")}
	

});


///////////////////////////////////////////////////////////////////////////////////////////



var SpartanbotellaVerde1= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 80,
	LinksImagenes: "/images/productos/spartanVerde.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Verde",
	existencia:90,
	Volumen: 750	
	
	
	
});

SpartanbotellaVerde1.save(function (err,cat){
	if(err){
	console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botellaVerde")}
	

});


var SpartanbotellaMorado1= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 100,
	LinksImagenes: "/images/productos/spartanMorado.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "AzulClaro",
	existencia:40,
	Volumen: 750	
	
	
	
});



SpartanbotellaMorado1.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botellaAzulClaro")}
	

});



//////////////////////////////////5000




var SpartanbotellaNegra2= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 60,
	LinksImagenes: "/images/productos/spartanNegro.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Negro",
	existencia:90,
	Volumen: 500
	
	
	
});

SpartanbotellaNegra2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella negra")}
	

});


var SpartanbotellaNaranja2= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 60,
	LinksImagenes: "/images/productos/spartanNaranja.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Najaranja",
	existencia:20,
	Volumen: 500	
	
});

SpartanbotellaNaranja2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella azul")}
	

});

var SpartanbotellaRosa2= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 60,
	LinksImagenes: "/images/productos/spartanRosa.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Rosa",
	existencia:20,
	Volumen: 500	
		
});



SpartanbotellaRosa2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botella azul")}
	

});


///////////////////////////////////////////////////////////////////////////////////////////



var SpartanbotellaVerde2= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 60,
	LinksImagenes: "/images/productos/spartanVerde.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "Verde",
	existencia:90,
	Volumen: 500	
	
	
	
});

SpartanbotellaVerde2.save(function (err,cat){
	if(err){
	console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botellaVerde")}
	

});


var SpartanbotellaMorado2= new tipoBotella({
	
	
	Botella:"Spartan",
	Precio: 60,
	LinksImagenes: "/images/productos/spartanVerde.png",
	Caracteristicas:"Aqui puede ir cualquier informacion de producto que usted le quiera otorgar, resistencia?, usos?, cualquier cosa que quiera que su cliente vea con respecto al mismo puede ir aqui!!",
	color: "AzulClaro",
	existencia:40,
	Volumen: 500	
	
	
	
});



SpartanbotellaMorado2.save(function (err,cat){
	if(err){
		console.log('error al guardar botella negra');
	}else{console.log("Se agrego correctamente la botellaAzulClaro")}
	

});









	
	
	
	
	

	
	
	