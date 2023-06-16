console.log(":)");


// VARIABELEN
const navigatie = document.querySelector("nav");

const megaMenu1 = document.querySelector("nav .mega-menu1");
const item1 = document.querySelector(".item1");

const megaMenu2 = document.querySelector("nav .mega-menu2");
const item2 = document.querySelector(".item2");

const megaMenu3 = document.querySelector("nav .mega-menu3");
const item3 = document.querySelector(".item3");

const logo = document.querySelector(".logo");
const cart = document.querySelector(".cart-img");
const searchIcon = document.querySelector(".search-icon");
const zoek = document.getElementById("search-bar");
const placeholder = document.querySelectorAll(".search-placeholder");

function setNavigatieOpengeklapt() {
  logo.setAttribute("src", "img/BMW_black.png");
  cart.setAttribute("src", "img/cart-black.png");
  searchIcon.setAttribute("src", "img/search-black.png");
  navigatie.classList.add("opengeklapt");
  placeholder.style.opacity = "0";
}

function setNavigatieNietOpengeklapt() {
  logo.setAttribute("src", "img/BMW_logo.svg");
  cart.setAttribute("src", "img/cart-white.png");
  searchIcon.setAttribute("src", "img/search-wit.png");
  navigatie.classList.remove("opengeklapt");
  placeholder.style.opacity = "1";
}


// ITEM 
item1.onmouseover = function () {
  megaMenu1.classList.remove("hidden");
  megaMenu1.classList.add("show");
  navigatie.classList.add("opengeklapt");
  setNavigatieOpengeklapt();
};

item1.onmouseout = function () {
  megaMenu1.classList.remove("show");
  megaMenu1.classList.add("hidden");
  navigatie.classList.remove("opengeklapt");
  setNavigatieNietOpengeklapt();
};

// ITEM 2
item2.onmouseover = function () {
  megaMenu2.classList.remove("hidden");
  megaMenu2.classList.add("show");
  navigatie.classList.add("opengeklapt");
  setNavigatieOpengeklapt();
};

item2.onmouseout = function () {
  megaMenu2.classList.remove("show");
  megaMenu2.classList.add("hidden");
  navigatie.classList.remove("opengeklapt");
  setNavigatieNietOpengeklapt();
};

// ITEM 3
item3.onmouseover = function () {
  megaMenu3.classList.remove("hidden");
  megaMenu3.classList.add("show");
  navigatie.classList.add("opengeklapt");
  setNavigatieOpengeklapt();
};

item3.onmouseout = function () {
  megaMenu3.classList.remove("show");
  megaMenu3.classList.add("hidden");
  navigatie.classList.remove("opengeklapt");
  setNavigatieNietOpengeklapt();
};




const auto4 = document.querySelectorAll(".bmw-autos li:nth-child(4)");
const auto3 = document.querySelectorAll(".bmw-autos li:nth-child(3)");
const auto2 = document.querySelectorAll(".bmw-autos li:nth-child(2)");
const auto1 = document.querySelectorAll(".bmw-autos li:nth-child(1)");

const autoDetails4 = document.querySelectorAll(".auto-info-bmw4");
const autoDetails3 = document.querySelectorAll(".auto-info-bmw3");
const autoDetails2 = document.querySelectorAll(".auto-info-bmw2");
const autoDetails1 = document.querySelectorAll(".auto-info-bmw1");

function autoDetailShow4() {
  autoDetails2.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails3.forEach((detail) => {
    detail.style.display = "none";
  });

  
}

function autoDetailShow3() {
  autoDetails2.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails3.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = "none";
  });
}

function autoDetailShow2() {
  autoDetails3.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails2.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = "none";
  });
}

function autoDetailShow1() {
  autoDetails3.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails2.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = "none";
  });
}


auto4.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow4);
});

auto3.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow3);
});

auto2.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow2);
});

auto1.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow1);
});


const popupButton = document.getElementById('popupButton');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector(".popup2 div:nth-child(1) img");

popupButton.addEventListener('click', () => {
  popup.classList.toggle('visible');
  
  if (popup.classList.contains('visible')) {
    popupImg.style.transform = "rotate(270deg)";
  } else {
    popupImg.style.transform = "rotate(90deg)";
  }
});


const reviewsContainer = document.querySelector('.reviews');
const reviews = document.querySelectorAll('.reviews li');
const arrows = document.querySelectorAll('.arrow');
const moreInfoTriggers = document.querySelectorAll('.more-info-trigger');

const reviewWidth = reviews[0].offsetWidth;
const numVisibleReviews = 3;
const maxIndex = Math.max(0, reviews.length - numVisibleReviews + 0.5);

let currentIndex = 0.5;

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const previousIndex = currentIndex;

    if (arrow.classList.contains('arrow-left')) {
      currentIndex = Math.max(0, currentIndex - 1);
    } else if (arrow.classList.contains('arrow-right')) {
      currentIndex = Math.min(currentIndex + 1, maxIndex);
    }

    showReviews(previousIndex, currentIndex);
  });
});

reviews.forEach((review) => {
  const textReview = review.querySelector('.text-review');
  const moreInfoTrigger = review.querySelector('.more-info-trigger');
  let timeoutId;

  moreInfoTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    textReview.classList.toggle('hide');
  });

  review.addEventListener('click', () => {
    clearTimeout(timeoutId);
    review.classList.toggle('active');
    moreInfoTrigger.style.display = review.classList.contains('active') ? 'none' : 'block';
    if (!review.classList.contains('active')) {
      timeoutId = setTimeout(() => {
        textReview.classList.remove('hide');
        moreInfoTrigger.style.display = 'block';
      }, 300);
    }
  });
});



function showReviews(previousIndex, currentIndex) {
  const translateValue = -currentIndex * reviewWidth;
  reviewsContainer.style.transform = `translateX(${translateValue}px)`;
}

showReviews(0, currentIndex);








function veranderKleur(element, nieuweAfbeelding) {
  var autoAfbeelding = document.getElementById('autoAfbeelding');

  var kleurAfbeeldingen = document.getElementsByClassName('colors1')[0].getElementsByTagName('img');
  for (var i = 0; i < kleurAfbeeldingen.length; i++) {
    kleurAfbeeldingen[i].classList.remove('kleurGeselecteerd');
  }

  element.classList.add('kleurGeselecteerd');

  autoAfbeelding.src = nieuweAfbeelding;
}


























