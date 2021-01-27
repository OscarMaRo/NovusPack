const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
	Correo: {
		type: String,
		required: true
	},
	Nombre: {
		type: String,
		required: true
	},
	Direccion: {
		type: String,
		required: true
	},
	Productos: {
		type:mongoose.Schema.Types.ObjectId,
		ref: "Carrito",
		required: true
	},
	Precio: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('pedido', pedidosSchema);