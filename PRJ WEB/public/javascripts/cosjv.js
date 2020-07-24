shopping = JSON.parse(localStorage.getItem('shoppingCart'));
console.log(shopping);

function stergereDuplicate() {
    var i = 0;
    for(i = 0 ; i < shopping.length-1; i++)
        {
            var j ;
            for(j = i + 1; j < shopping.length; j++ )
                if(shopping[i].nume == shopping[j].nume)
                   { shopping.splice(j,1);
                     j--;
                   }
     
        }
}
stergereDuplicate();


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
    }
 else {
     ready();
    }

function ready() {
    adauga();

    updateTotal();

    var stergereItem = document.getElementsByClassName('remove');
    for( var i = 0; i < stergereItem.length; i++ )
        {
        var buton = stergereItem[i];
        buton.addEventListener('click', stergereProdus)
        }

    var cantitateInput = document.getElementsByClassName('input-cantitate')
    for(var i = 0; i < cantitateInput.length; i++)
        {
        var input = cantitateInput[i];
        input.addEventListener('change', schimbareCantitate)
        }
}

function stergereProdus(event) {
    var butonApasat = event.target;
    butonApasat.parentElement.parentElement.remove();
    updateTotal();
}

function schimbareCantitate(event){
    var input = event.target;
    if( isNaN(input.value) == true || input.value <= 0)
        input.value = 1;
    updateTotal();
}


function adaugareProdus(nume, pret, i) {
    
    var element = document.createElement("div"); 
    element.classList.add("iteme-linie");
    var cos = document.getElementsByClassName("cos")[0];
    
    var informatii = '<div class="item item-coloana"><span class="item-nume"> Nume </span></div><span class="item-pret item-coloana"> Pret </span><div class="item-cantitate item-coloana"><input class="input-cantitate" type="number" id="numarCantitate" value="1"><button class="remove" type="button"> Remove </button></div>'
    element.innerHTML = informatii;
    cos.append(element);
    
    document.getElementsByClassName("item-nume")[i].innerHTML = String(nume);
    document.getElementsByClassName("item-pret")[i].innerHTML = String(pret);

}

function adauga() {
    var i = 0;
    for(i=0 ; i < shopping.length; i++)
        {
         var nume = shopping[i].nume;
         var pret = shopping[i].pret;
         adaugareProdus(nume, pret, i);
        }
}

function updateTotal() {
    var produse = document.getElementsByClassName("iteme-linie");
    var total = 0;
    for(var i = 0 ; i < produse.length; i++)
        {
        var prod = produse[i]

        var pretProdus = prod.getElementsByClassName('item-pret')[0];
        var cantitateProdus = prod.getElementsByClassName('input-cantitate')[0];

        var pret = parseFloat(pretProdus.innerText);
        var cantitate = cantitateProdus.value;
        
        var total = total + (pret * cantitate);
        
        }
    var costLivrare = document.getElementById('livrare');
    var costLivrare = parseFloat(costLivrare.innerText);
    total = Math.round(total * 100)/ 100 + costLivrare;
    document.getElementsByClassName('cos-pret')[0].innerText = total + ' LEI';
}


function stergereLocalStorage() {
    localStorage.removeItem('shoppingCart');
}
