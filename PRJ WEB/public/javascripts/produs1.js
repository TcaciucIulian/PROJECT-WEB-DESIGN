function produs(){
    var element = document.getElementById("nume");
    element.innerHTML = localStorage.getItem("nume1");
    element = document.getElementById("paragraf");
    element.innerHTML = localStorage.getItem("paragraf1");
    element = document.getElementById("pret");
    element.innerHTML = localStorage.getItem("pret1");
    element = document.getElementById("prezentare");
    element.innerHTML = localStorage.getItem("prezentare1");
    element = document.getElementById("beneficiu1");
    element.innerHTML = localStorage.getItem("beneficiu4");
    element = document.getElementById("beneficiu2");
    element.innerHTML = localStorage.getItem("beneficiu5");
    element = document.getElementById("beneficiu3");
    element.innerHTML = localStorage.getItem("beneficiu6");
    element = document.getElementById("utilizare");
    element.innerHTML = localStorage.getItem("utilizare1");
    element = document.getElementById("alegere");
    element.innerHTML = localStorage.getItem("alegere1");

    image = document.getElementById("img");
    image.src = localStorage.getItem("numeImg")
}
produs();

cart = [];

function Item(nume,pret) {
    this.nume = nume;
    this.pret = pret;
}

function adaugareCos() {
    var pret = document.getElementById("pret").innerText;
    localStorage.setItem("pret1",pret);

    var nume = document.getElementById("nume").innerText;
    localStorage.setItem("nume1",nume)

    if(localStorage.getItem('shoppingCart') !=null)
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
    var item = new Item(nume,pret);
    cart.push(item);
    localStorage.setItem('shoppingCart',JSON.stringify(cart));

}
