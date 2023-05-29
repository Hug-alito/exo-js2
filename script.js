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

let cards = document.getElementsByClassName('card');
let cardsLittle = false;

for (let i = 0; i < cards.length; i++) {
  let viewButton = cards[i].querySelector('.btn-success');
  let cardText = cards[i].querySelector('.card-text');
  let cardImage = cards[i].querySelector('.card-img-top');

  viewButton.addEventListener('mouseover', function() {
    if (cardsLittle === false) {
      cardText.style.display = 'none';
      cardImage.style.width = '20%';
      cardsLittle = true;
    } else if (cardsLittle === true) {      
      cardText.style.display = 'block';
      cardImage.style.width = '100%';
      cardsLittle = false;
    }
  });
}

// Fonctionnalités 7 et 8
document.addEventListener("DOMContentLoaded", function() {
  const nextButton = document.querySelector(".btn-secondary");
  const cardsContainer = document.querySelector(".album .row");

  nextButton.addEventListener("click", function() {
    const firstCard = cardsContainer.firstElementChild;
    cardsContainer.appendChild(firstCard);
  });

  const previousButton = document.querySelector(".btn-primary");

  previousButton.addEventListener("click", function(event) {
    event.preventDefault();
    const lastCard = cardsContainer.lastElementChild;
    cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild);
  });
});

// Fonctionnalité 9
document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector(".navbar-brand");
  logo.setAttribute("tabindex", "0");

  logo.addEventListener("keydown", function(event) {
    const body = document.querySelector("body");
    const key = event.key;

    body.classList.remove("col-4", "offset-md-4", "offset-md-8");

    if (key === "a") {
      body.classList.add("col-4");
      body.classList.add("offset-md-0");
    } else if (key === "y") {
      body.classList.add("col-4");
      body.classList.add("offset-md-4");
    } else if (key === "p") {
      body.classList.add("col-4");
      body.classList.add("offset-md-8");
    } else if (key === "b") {
      // Do nothing, keep the default layout
    }
  });
});
