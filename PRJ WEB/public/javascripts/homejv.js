localStorage.clear();

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 5000); 
}

function produs1(){
  var nume= " Impact Whey Protein ";
  var paragraf = "Pudra de proteine nr. 1 din Marea Britanie pentru nutritia de zi cu zi.";
  var pret = "40.00 Lei";
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
  var pret = "75.00 Lei";
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