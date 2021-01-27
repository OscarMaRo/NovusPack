const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dashSchema = new Schema({
	Titulo: {
		type: String,
		required: true
	},
	ImagenUrl: {
		type: String,
		required: true
	},
	Descripcion: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('dashboard', dashSchema);

