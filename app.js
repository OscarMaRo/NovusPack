const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const stripe = require("stripe")("sk_test_51H7BbpLd4rOjJVAeiEM0imEwzkqYR5wQjZEkZkGUAUex0O4aV0WYwdSRo9X9gGbnWjn2Q3ze1t5KtBOqk9sHfrqh00jux3mGLp");

const Product = require('./models/botella');
const Dash = require('./models/dashboard');

const app = express();

app.use(express.static("."));

app.use(express.json());
// var cookieParser = require("cookie-parser");
// app.use(cookieParser());

var mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/Botella_db", { useNewUrlParser: true })
	.then(() => console.log('Connected!'))
	.catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/images',express.static('images'));
app.use('/static',express.static('public'));
// App
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
	console.log('server listening on port 3000');
});
