const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop')
const prodsController = require('../controllers/products')

router.get('/', shopController.getIndex);

router.get('/Servicios', shopController.getServicios);
router.get('/Servicios/Fabricacion', shopController.getFabricacion);
router.get('/Servicios/Impresion', shopController.getImpresion);

router.get('/H2Flow/Productos:num', prodsController.getProducts);
//router.post('/Productos', shopController.getMayoreoCrack);
router.get('/H2Flow/Productos/:id', prodsController.getProductID);
router.get('/H2Flow/Productos:num/:botella', prodsController.getFiltroBotella);
router.get('/H2Flow/Productos:num/:volumen/ml', prodsController.getFiltroVolumen);
router.get('/H2Flow/Productos:num/:botella/:volumen', prodsController.getFiltros);

router.get('/H2Flow/Carrito', prodsController.getCart);
router.post('/H2Flow/Carrito', prodsController.postCarrito);

router.get('/H2Flow/CarroMayoreo',prodsController.getCarroMayoreo);
router.post('/H2Flow/CarroMayoreo',prodsController.postCarroMayoreo);

router.get('/Contacto', shopController.getContacto);
router.post('/Contacto', shopController.postContacto);

router.get('/H2Flow/Mayoreo/:id', shopController.getMayoreo);
// router.post('/mayoreo-crack', shopController.postMayoreoCrack);
// router.get('/mayoreo-spartan', shopController.getMayoreoSpartan);
// router.post('/mayoreo-spartan', shopController.postMayoreoSpartan);

router.get('/H2Flow/pagoProcesado',shopController.getPagoProcesado);
router.get('/H2Flow/correoCotizacion',shopController.getCotizacion);
router.post('/H2Flow/correoCotizacion',shopController.postCotizacion);

router.get('/H2Flow/Checkout', prodsController.getCheckout);
router.post('/H2Flow/Checkout', prodsController.postCheckout);

router.get('/H2Flow/checkaoutpago', prodsController.getCheckoutPago);
router.post('/H2Flow/checkaoutpago', prodsController.postCheckoutPago);
router.get('/H2Flow/checkaoutpago2', prodsController.getCheckoutPago2);

router.get('/correoEnviado', shopController.getCorreoEnviado);
module.exports = router;