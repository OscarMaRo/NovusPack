
//alert("shalallalalalaala");
var w = document.getElementById("uno");
var a = document.getElementById("dos");
var s = document.getElementById("tres");
var d = document.getElementById("cuatro");
var i=0;
var k=1;
var j=2;
var l=3;

var arrayImagenes=[];
arrayImagenes.push('url(https://proxy-us-west2.goorm.io//service/5f1b0d205bb26c2583bc3702_d9lMpT9MzvHX9Xo3Z0p.run-us-west2.goorm.io/9080//file/load/imagen3.jpg?path=d29ya3NwYWNlJTJGUmVzdGF1cmFudGVfcHJpbWElMkZpbWFnZW5jaXRhc19zaGFsYWwlMkZpbWFnZW4zLmpwZw==&docker_id=d9lMpT9MzvHX9Xo3Z0p&secure_session_id=nHZY2JZRXMs8ZpsbM_LKHvkd9Bbxm6Oc)');
arrayImagenes.push("url(https://proxy-us-west2.goorm.io//service/5f1b0d205bb26c2583bc3702_d9lMpT9MzvHX9Xo3Z0p.run-us-west2.goorm.io/9080//file/load/imagen1.jpg?path=d29ya3NwYWNlJTJGUmVzdGF1cmFudGVfcHJpbWElMkZpbWFnZW5jaXRhc19zaGFsYWwlMkZpbWFnZW4xLmpwZw==&docker_id=d9lMpT9MzvHX9Xo3Z0p&secure_session_id=nHZY2JZRXMs8ZpsbM_LKHvkd9Bbxm6Oc)");

arrayImagenes.push("url(https://proxy-us-west2.goorm.io//service/5f1b0d205bb26c2583bc3702_d9lMpT9MzvHX9Xo3Z0p.run-us-west2.goorm.io/9080//file/load/imagen2.jpg?path=d29ya3NwYWNlJTJGUmVzdGF1cmFudGVfcHJpbWElMkZpbWFnZW5jaXRhc19zaGFsYWwlMkZpbWFnZW4yLmpwZw==&docker_id=d9lMpT9MzvHX9Xo3Z0p&secure_session_id=nHZY2JZRXMs8ZpsbM_LKHvkd9Bbxm6Oc)");
arrayImagenes.push("url(https://proxy-us-west2.goorm.io//service/5f1b0d205bb26c2583bc3702_d9lMpT9MzvHX9Xo3Z0p.run-us-west2.goorm.io/9080//file/load/imagen4.jpg?path=d29ya3NwYWNlJTJGUmVzdGF1cmFudGVfcHJpbWElMkZpbWFnZW5jaXRhc19zaGFsYWwlMkZpbWFnZW40LmpwZw==&docker_id=d9lMpT9MzvHX9Xo3Z0p&secure_session_id=nHZY2JZRXMs8ZpsbM_LKHvkd9Bbxm6Oc)");
//alert(w.innerHTML");
fadeOut(w,a,s,d);
setInterval(function(){
	
	w.style.backgroundImage = arrayImagenes[i]; a.style.backgroundImage = arrayImagenes[k];s.style.backgroundImage = arrayImagenes[j];d.style.backgroundImage = arrayImagenes[l];
	//fadeIn(w,a,s,d);	
					   	i++;k++;j++;l++;
						if(i===4){i=0}
						if(j===4){j=0}
						if(k===4){k=0}
						if(l===4){l=0}
	fadeOut(w,a,s,d);				   
	
					    }, 8000);

function fadeOut(a,w,s,d){
	var tiempo =8000;
	a.animate([ 
  { // from
    opacity: 0,
    color: "#fff"
  }, 
  { // to
    opacity: 0.3,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#fff"
  },
	{ // to
    opacity: 0.3,
	  color: "#fff"
  },
	{ // to
    opacity: 0,
	  color: "#fff"
  }	
		
], tiempo);
	
	w.animate([ 
{ // from
    opacity: 0,
    color: "#fff"
  }, 
  { // to
    opacity: 0.3,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#fff"
  },
	{ // to
    opacity: 0.3,
	  color: "#fff"
  },
		{ // to
    opacity: 0,
	  color: "#fff"
  }

], tiempo);
	
s.animate([ 
  { // from
    opacity: 0,
    color: "#fff"
  }, 
  { // to
    opacity: 0.3,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#fff"
  },
	{ // to
    opacity: 0.3,
	  color: "#fff"
  },{ // to
    opacity: 0,
	  color: "#fff"
  }

], tiempo);
	
d.animate([ 
  { // from
    opacity: 0,
    color: "#fff"
  }, 
  { // to
    opacity: 0.3,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 1,
	  color: "#000"
  },
	{ // to
    opacity: 0.5,
	  color: "#fff"
  },
	{ // to
    opacity: 0.3,
	  color: "#fff"
  },
	{ // to
    opacity: 0,
	  color: "#fff"
  }

], tiempo);
	
	
}

function fadeIn(a,w,s,d){
	var tiempo =4000;
	a.animate([ 
  { // from
    opacity: 1,
	  color: "#000"
	  
  }, 
  { // to
    opacity: 0,
    color: "#fff"
  }
], tiempo);
	
	w.animate([ 
  { // from
    opacity: 1,
	  color: "#000"
  }, 
  { // to
    
	  
  }
], tiempo);
	
s.animate([ 
  { // from
    opacity: 1,
	  color: "#000"
  }, 
  { // to
    opacity: 0,
    color: "#fff"
  }
], tiempo);
	
d.animate([ 
  { // from
    opacity: 1,
	  color: "#000"
  }, 
  { // to
   opacity: 0,
    color: "#fff"
  }
], tiempo);
}