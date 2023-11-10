function like(toto) {
    console.log(toto);
    toto.classList.toggle('changeToRed');
}

function remove(params) {
    params 
    var variable=params.parentElement.parentElement
    variable.remove()

}


function checknumber(indice) {
    const nombre = + indice.value
    console.log(nombre);
    var prix=indice.parentElement.parentElement.children[1]
    var price=+prix.innerText.split(' ')[0]
    console.log(price);
    var total = indice.parentElement.parentElement.children[3]
    total.innerText=price*nombre 
    tt1 = document.getElementById('total1')
    t1=+tt1.innerText
    console.log(t1);
     tt2 = document.getElementById('total2')
    t2=+tt2.innerText.split(' ')[0]
     tt3 = document.getElementById('total3')
    t3=+tt3.innerText.split(' ')[0]
    const ttl = indice.parentElement.parentElement.parentElement.parentElement.children[3].children[1]
    console.log(ttl);
    ttl.innerText=t1+ t2+t3

}























/*var toget = document.querySelector('i');
toget.addEventListener('click', () => {
    toget.classList.toggle('changeToRed');
}

)*/
