let URL = "https://gpa.madbob.org/query.php?stop=";

function aggiungiPassaggio(linea, orario, realtime){
    let div = document.createElement("div");
    let cerchio = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    cerchio.classList.add("cerchio");
    cerchio.innerHTML = linea;

    p2.innerHTML = orario + (realtime ? " *" : "");

    div.appendChild(cerchio);
    div.appendChild(p2);
    div.classList.add("col");
    document.getElementById("lista").appendChild(div);    
}

function mostra(array){
    let lista = document.getElementById("lista");
    while (lista.children.length > 1) {
        lista.removeChild(lista.lastChild);
    }

    array.forEach(element => {
        aggiungiPassaggio(element.line, element.hour, element.realtime);
    });

    let text = document.getElementById("num").value;
    if (isNaN(text))
    {
        alert("Inserire un numero valido");
    }
    else if (array.length == 0)
    {
        alert("Fermata non trovata");
    }
}

function cercaFermata(){
fetch(URL + document.getElementById("num").value)
.then(x => x.json())
.then(y => mostra(y));
}