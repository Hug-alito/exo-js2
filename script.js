let nbClick = 0;

document.getElementsByTagName('footer')[0].addEventListener("click", function() {
  nbClick++;
  console.log("Nombre de clics : " + nbClick);
});

let navbarCollapse = true;
let navbar = document.getElementById('navbarHeader');
let navbarButton = document.getElementsByClassName('navbar-toggler')[0];

navbarButton.addEventListener("click", function() {
  if (navbarCollapse == true) {
    navbar.classList.remove("collapse");
    navbarCollapse = false;
  } 
  else if (navbarCollapse == false) {
    navbar.classList.add("collapse");
    navbarCollapse = true;
  }
});

let firstCardText = document.getElementsByClassName('card-text')[0];
let editButtonFirstCard = document.getElementsByClassName('btn-outline-secondary')[0];

editButtonFirstCard.addEventListener("click", function() {
  firstCardText.style.color = "red";
});

let secondCardText = document.getElementsByClassName('card-text')[1];
let editButtonSecondCard = document.getElementsByClassName('btn-outline-secondary')[1];
let editButtonSecondCardClick = false;

// Récupérer la feuille de style
var styleSheet = document.styleSheets[0];

// Créer une nouvelle règle CSS
var cssRuleGreenText = ".green-text { color: green; font-weight: bold; }";

// Insérer la règle dans la feuille de style
styleSheet.insertRule(cssRuleGreenText, styleSheet.cssRules.length);

editButtonSecondCard.addEventListener("click", function() {
  if (editButtonSecondCardClick == true) {
    secondCardText.classList.add("green-text");
    editButtonSecondCardClick = false;
  }
  else if (editButtonSecondCardClick == false) {
    secondCardText.classList.remove("green-text");
    editButtonSecondCardClick = true;
  }
});

let linkElement = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
let header = document.getElementsByTagName('header')[0];

header.addEventListener('dblclick', function() {
  if (linkElement.disabled) {
    linkElement.disabled = false; // Réactiver le fichier CSS
  } else {
    linkElement.disabled = true; // Désactiver le fichier CSS
  }
});
