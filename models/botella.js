const mongoose = require('mongoose');

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

module.exports = mongoose.model('tipoBotella', productSchema);

