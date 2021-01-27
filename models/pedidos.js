const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
	NombreCliente: {
		type: String,
		required: true
	},
	Correo: {
		type: String,
		required: true
	},
	Direccion: {
		type: String,
		required: true
	},
	Ciudad: {
		type: String,
		required: true
	},
	Estado: {
		type: String,
		required: true
	},
	ZIP:{
		type: Number,
		required: true
	},
	Pedido: {
		type: [Object],
		required: true
	},
	PagoRealizado:{
		type: Boolean,
		required: true
	},
	CostoFinal:{
		type: Number,
		required: true
	},
	Fecha:{
		type: String,
		required: true
	}
});

module.exports = mongoose.model('pedidosLista', productSchema);