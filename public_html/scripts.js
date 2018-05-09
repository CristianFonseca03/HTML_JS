function begin(){
    var x = parseInt(prompt("Digite algo"));
    var c= document.getElementById("content");
    c.innerHTML ="";
    var h1=document.createElement("h1");
    h1.appendChild(document.createTextNode("Hola mundo "+x));
    //c.appendChild(h1);
    var h2 = document.createElement("h2");
    if(! isNaN(x)){
        h2.setAttribute("style","color:red");
        h2.appendChild(document.createTextNode("El numero fue "+x));
    }else{
        h2.setAttribute("style","color:green");
        h2.appendChild(document.createTextNode("No fue un numero"));
    }
    c.appendChild(h2)
}
function menu(){
  var outPut=0;
  var aux="";
  var r = document.getElementById("result");
  var h3 = document.createElement("h3");
  var option=document.getElementById("option").selectedIndex;
  var nOne = parseInt(document.getElementById("nOne").value);
  var nTwo = parseInt(document.getElementById("nTwo").value);
  switch (option) {
    case 0:
      aux="La suma es igual a "+(nOne+nTwo);
      break;
    case 1:
      outPut=nOne>nTwo? nOne-nTwo:nTwo-nOne;
      aux="La resta es igual a "+outPut;
      break;
    case 2:
      aux="La multiplicacion es igual a "+(nOne*nTwo);
      break;
    case 3:
      outPut=nOne>nTwo? nOne/nTwo:nTwo/nOne;
      aux="La divicion es igual a "+outPut;
      break;
    case 4:
      cousins(r,nOne,nTwo);
      break;
    default:
  }
  h3.appendChild(document.createTextNode(aux));
  r.innerHTML="";
  r.appendChild(h3);
}
function validateNumber(e){
  var code = window.event ? e.which : e.keyCode;
  if (code >= 48 && code <=57) {
    return true;
  }
  return false;
}
