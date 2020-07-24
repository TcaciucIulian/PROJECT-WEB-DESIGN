function sortAsc() {
  var i, switching, shouldSwitch;
  switching = true;

  var iteme = document.getElementsByClassName("Galerie")
  while (switching) {
    switching = false;
    preturi = document.getElementsByClassName("pret");
    console.log(preturi)
    for (i = 0; i < (preturi.length - 1); i++) {
      var x = parseFloat(preturi[i].innerHTML)
      var y = parseFloat(preturi[i+1].innerHTML)
      shouldSwitch = false;
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      iteme[i].parentNode.insertBefore(iteme[i + 1], iteme[i]);
      switching = true;
    }
  }
}

function sortDesc() {
  var i, switching, shouldSwitch;
  switching = true;

  var iteme = document.getElementsByClassName("Galerie")
  while (switching) {
    switching = false;
    preturi = document.getElementsByClassName("pret");
    console.log(preturi)
    for (i = 0; i < (preturi.length - 1); i++) {
      var x = parseFloat(preturi[i].innerHTML)
      var y = parseFloat(preturi[i+1].innerHTML)
      shouldSwitch = false;
      if (x < y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      iteme[i].parentNode.insertBefore(iteme[i + 1], iteme[i]);
      switching = true;
    }
  }
}

function produs1(){
  var nume= " Impact Whey Protein ";
  var paragraf = "Pudra de proteine nr. 1 din Marea Britanie pentru nutritia de zi cu zi.";
  var pret = "36.00 Lei";
  var prezentare = " Zer premium cu 21 g de proteine per portie, pentru proteinele de care ai nevoie dintr-o sursa de calitate. ";
  var beneficiu1 = " 21 g de proteine per portie. ";
  var beneficiu2 = " 4,5 g BCAA-uri. ";
  var beneficiu3 = " Continut redus de zahar. ";
  var utilizare = "Iti recomandam sa adaugi o cupa mare (25 g) in apa sau lapte la 30-60 minute dupa antrenament - dar este ideala oricand.";
  var alegere = " Este o proteina convenabila, de inalta calitate, care ajuta la cresterea si mentinerea musculaturii importante.";
  localStorage.setItem("nume1",nume);
  localStorage.setItem("paragraf1",paragraf);
  localStorage.setItem("pret1",pret);
  localStorage.setItem("prezentare1",prezentare);
  localStorage.setItem("beneficiu4",beneficiu1);
  localStorage.setItem("beneficiu5",beneficiu2);
  localStorage.setItem("beneficiu6",beneficiu3);
  localStorage.setItem("utilizare1",utilizare);
  localStorage.setItem("alegere1",alegere);

  var imgName = "images/1.jpg";
  localStorage.setItem("numeImg",imgName);
  return false;
}

function produs2(){
  var nume= " Impact Whey Isolate ";
  var paragraf = "Unul dintre cele mai pure suplimente de zer disponibile, cu continut de proteine de 90%";
  var pret = "67.00 Lei";
  var prezentare = " Cu 23 g de proteine per portie, acest amestec de calitate superioara iti ofera proteinele de care ai nevoie. ";
  var beneficiu1 = " 90% continut de proteine ";
  var beneficiu2 = " 23 g de proteine per portie ";
  var beneficiu3 = " Zero grasimi, zero zahar si mai putin de 1 g de carbohidrati ";
  var utilizare = "Iti recomandam sa adaugi o cupa mare (25 g) in apa sau lapte la 30-60 minute dupa antrenament - dar este ideala oricand.";
  var alegere = " Este o proteina convenabila, de inalta calitate, care ajuta la cresterea si mentinerea musculaturii importante.";
  localStorage.setItem("nume1",nume);
  localStorage.setItem("paragraf1",paragraf);
  localStorage.setItem("pret1",pret);
  localStorage.setItem("prezentare1",prezentare);
  localStorage.setItem("beneficiu4",beneficiu1);
  localStorage.setItem("beneficiu5",beneficiu2);
  localStorage.setItem("beneficiu6",beneficiu3);
  localStorage.setItem("utilizare1",utilizare);
  localStorage.setItem("alegere1",alegere);

  var imgName = "images/2.jpg";
  localStorage.setItem("numeImg",imgName);

  return false;
}
function produs3(){
  var nume= " Impact Diet Whey";
  var paragraf = "Conceput pentru pierderea in greutate - acum cu cele mai bune substante nutritive pentru diete.";
  var pret = "100.00 Lei";
  var prezentare = " Special dezvoltat pentru a elimina carbohidratii inutili, acest shake delicios ofera 39 g de proteine per portie, impreuna cu alte ingrediente specifice de dieta, menite sa te asiste in eforturile tale de a slabi. ";
  var beneficiu1 = " 39 g de proteine per portie ";
  var beneficiu2 = " Continut redus de carbohidrati ";
  var beneficiu3 = " Peste 1 g de glutamina ";
  var utilizare = "Iti recomandam sa adaugi o cupa mare (25 g) in apa sau lapte la 30-60 minute dupa antrenament - dar este ideala oricand.";
  var alegere = " Este o proteina convenabila, de inalta calitate, care ajuta la cresterea si mentinerea musculaturii importante.";
  localStorage.setItem("nume1",nume);
  localStorage.setItem("paragraf1",paragraf);
  localStorage.setItem("pret1",pret);
  localStorage.setItem("prezentare1",prezentare);
  localStorage.setItem("beneficiu4",beneficiu1);
  localStorage.setItem("beneficiu5",beneficiu2);
  localStorage.setItem("beneficiu6",beneficiu3);
  localStorage.setItem("utilizare1",utilizare);
  localStorage.setItem("alegere1",alegere);
  
  var imgName = "images/3.jpg";
  localStorage.setItem("numeImg",imgName);

  return false;
}
function produs4(){
  var nume= " Weight Gainer Blend";
  var paragraf = "Modul perfect de a-ti creste forta si greutatea";
  var pret = "170.00 Lei";
  var prezentare = " Acest supliment-bomba contine 31 g de proteine, o cantitate uluitoare de 50 g de carbohidrati si un total de 388 calorii per portie cu ajutorul carora poti obtine acele kilograme de masa musculara pe care ti le doresti ";
  var beneficiu1 = " 31 g de proteine per portie ";
  var beneficiu2 = " Continut ridicat de carbohidrati ";
  var beneficiu3 = " 388 de calorii per portie ";
  var utilizare = "Iti recomandam sa adaugi 3 * 1/3 cupa mare (100 g) in apa sau lapte la 30-60 minute dupa antrenament - dar este ideala oricand.";
  var alegere = " Este o proteina convenabila, de inalta calitate, care ajuta la cresterea si mentinerea musculaturii importante.";
  localStorage.setItem("nume1",nume);
  localStorage.setItem("paragraf1",paragraf);
  localStorage.setItem("pret1",pret);
  localStorage.setItem("prezentare1",prezentare);
  localStorage.setItem("beneficiu4",beneficiu1);
  localStorage.setItem("beneficiu5",beneficiu2);
  localStorage.setItem("beneficiu6",beneficiu3);
  localStorage.setItem("utilizare1",utilizare);
  localStorage.setItem("alegere1",alegere);

  var imgName = "images/4.jpg";
  localStorage.setItem("numeImg",imgName);

  return false;
}

function produs5(){
  var nume= " Creatina Monohidrata ";
  var paragraf = "Perfect pentru cei care doresc sa-si îmbunatateasca performanta fizica";
  var pret = "25.00 Lei";
  var prezentare = " Comprimatele noastre monohidrat de creatina sunt o modalitate foarte convenabila de a obtine beneficiile dovedite stiintific ale creatinei, ajutandu-te sa iti imbunatatesti performanta de la un antrenament la altul. ";
  var beneficiu1 = " S-a dovedit stiintific ca sporeste performanta fizica ";
  var beneficiu2 = " Sustine toate exercitiile de intensitate ridicata ";
  var beneficiu3 = " Supliment convenabil sub forma de comprimate ";
  var utilizare = "Iti recomandam sa adaugi o cupa mica (5 g) in apa sau lapte la 30-60 minute dupa antrenament - dar este ideala oricand.";
  var alegere = " Este o creatina convenabila, de inalta calitate, care ajuta la cresterea si mentinerea musculaturii importante.";
  localStorage.setItem("nume1",nume);
  localStorage.setItem("paragraf1",paragraf);
  localStorage.setItem("pret1",pret);
  localStorage.setItem("prezentare1",prezentare);
  localStorage.setItem("beneficiu4",beneficiu1);
  localStorage.setItem("beneficiu5",beneficiu2);
  localStorage.setItem("beneficiu6",beneficiu3);
  localStorage.setItem("utilizare1",utilizare);
  localStorage.setItem("alegere1",alegere);

  var imgName = "images/5.jpg";
  localStorage.setItem("numeImg",imgName);


  return false;
}