const mongoose = require('mongoose');
const Pedidos = require('../models/pedidosdb');

var datos = [
	{
		Correo: "",
		Nombre: "",
		Direccion: "",
		Productos: [],
		Precion: 2
	}
]

exports.createPedido = (req, datos, next)=>{
	Pedidos.create({
		
	})
	.catch(err => {console.log(err)});s
}