// A reference to Stripe.js initialized with your real test publishable API key.
stripe = Stripe("pk_test_51H7BbpLd4rOjJVAexGhvwL8vYC0pdmTDgZFmu56dUAp4S3jsprGloZ7lLP1cbylF7viqGe9uD3HMztKiFVyNioIL00KYGvCNzN");


 async function submitArtificial(){
		var lleno = 0
		var postal = false;
		var x= document.forms[0];
		for (var i = 0; i < x.length; i++) {
			 if(x.elements[i].value === ""){
				 
				 await swal({
  title: "Error Checkout",
  text: "Por favor introduzca todos los datos antes de pagar",
  icon: "error",
  button: "reintentar",
	}).then((value) => {
  return 0;
				
});	
				 
		//		 alert("Por favor introduzca todos los datos antes de pagar");
				 
			 }else{
				 lleno++;
			 }
		 }
		 
		var zip = document.getElementById("zip");
		if(zip.value.length == 5 && zip.value > 0){
			postal = true;
		}else{
			await swal({
  title: "Error Checkout",
  text: "Asegurese de que el codugo postal sea de 5 digitos y puros numeros!",
  icon: "error",
  button: "reintentar",
	}).then((value) => {
  return 0;
				
});	
			//alert("Asegurese de que el codugo postal sea de 5 digitos y puros     				numeros");
			 
		}
		 
		if(lleno===x.length && postal === true){
		   var productosPorPedir = document.createElement("INPUT");
				productosPorPedir.setAttribute("type", "text");

			var arrayObjetos = [];
			for(var i=1;i<sessionStorage.length;i++){	//si tienes problemas con la cantidad de objetos cambia el .lenght por sessionStorage.getItem("numObjetos")
				arrayObjetos.push(sessionStorage.getItem("producto" + i));
			}

			productosPorPedir.value = arrayObjetos;
			productosPorPedir.name = "ProductosPorPedir";

			//Esta parte es la que lo hace jalar como input submit
			var SubButton = document.getElementById("forma");
			productosPorPedir.style.display = "none";
			SubButton.appendChild(productosPorPedir);

			 //por alguna razon el left no carga en monitores secundarios en chrome
			
			SubButton.submit();
			
			return 1;
			// window.open("/checkaoutpago","_self");
			// window.open("/checkaoutpago2","ventana1","width=600,height=400,scrollbars=NO,top=300,left=400");
		}
		
	}




// The items the customer wants to buy
var stringCarrito="";

var arrayObjetos = [];
	for(var i=1;i<sessionStorage.getItem("numObjetos");i++){	//si tienes problemas con la cantidad de objetos cambia el .lenght por sessionStorage.getItem("numObjetos")
		arrayObjetos.push(sessionStorage.getItem("producto" + i));
		stringCarrito = stringCarrito +  sessionStorage.getItem("producto" + i) + "," 
	}

var purchase = {
  items: [{ id: stringCarrito }]
};

// Disable the button until we have Stripe set up on the page
document.addEventListener("DOMContentLoaded", function(event) {
//document.getElementById("Button").disabled = true;
	document.querySelector("button").disabled = true;	
});
fetch("/checkaoutpago", {
// fetch("/Checkout", {
	method: "POST",
	headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(purchase)
})
  .then(function(result) {
    return result.json();
  })
  .then(function(data) {
	console.log("entre1");
    var elements = stripe.elements();
    var style = {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };
    var card = elements.create("card", { style: style });
    // Stripe injects an iframe into the DOM
    card.mount("#card-element");
    card.on("change", function (event) {
      // Disable the Pay button if there are no card details in the Element
      document.querySelector("button").disabled = event.empty;
      document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
    });
    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Complete payment when the submit button is clicked
		CargarPago(stripe, card, data.clientSecret);
		
    });
  });

// Calls stripe.confirmCardPayment
// If the card requires authentication Stripe shows a pop-up modal to
// prompt the user to enter authentication details without leaving your page.
async function CargarPago(stripe, card, secreto){
var datosCompletos= await submitArtificial();
     
	
	CargarPagoSegundaFase(datosCompletos,stripe, card, secreto);
}

async function CargarPagoSegundaFase(veredicto,stripe, card, secreto){

       
	 if(veredicto==1){
     payWithCard(stripe, card, secreto);
	 sessionStorage.clear();	
	}else{window.open("/checkout","_self");}	
	
}



var payWithCard = function(stripe, card, clientSecret) {
  	console.log("entre2");
	loading(true);
  stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card
      }
    })
    .then(function(result) {
      if (result.error) {
        // Show error to your customer
        showError(result.error.message);
      } else {
        // The payment succeeded!
        orderComplete(result.paymentIntent.id);
      }
    });
};

/* ------- UI helpers ------- */
// Shows a success message when the payment is complete
var orderComplete = function(paymentIntentId) {
  loading(false);
  document
    .querySelector(".result-message a")
    .setAttribute(
      "href",
      "https://dashboard.stripe.com/test/payments/" + paymentIntentId
    );
  document.querySelector(".result-message").classList.remove("hidden");
  document.querySelector("button").disabled = true;
};

// Show the customer the error from Stripe if their card fails to charge
var showError = function(errorMsgText) {
  loading(false);
  var errorMsg = document.querySelector("#card-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(function() {
    errorMsg.textContent = "";
  }, 4000);
};

// Show a spinner on payment submission
var loading = function(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};