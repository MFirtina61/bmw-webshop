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
const placeholder = document.querySelector(".search-placeholder");

// FUNCTIES
function setNavigatieOpengeklapt() {
  logo.setAttribute("src", "img/BMW_black.webp");
  cart.setAttribute("src", "img/cart-black.webp");
  searchIcon.setAttribute("src", "img/search-black.webp");
  navigatie.classList.add("opengeklapt");
  placeholder.style.opacity = "0";
}

function setNavigatieNietOpengeklapt() {
  logo.setAttribute("src", "img/bmw-logo-wit.webp");
  cart.setAttribute("src", "img/cart-white.webp");
  searchIcon.setAttribute("src", "img/search-wit.webp");
  navigatie.classList.remove("opengeklapt");
  placeholder.style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", function() {
  // ITEM 1
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
});




var showCartButton1 = document.getElementById("showCartButton1");
var showCartButton2 = document.getElementById("showCartButton2");
var shoppingShekout = document.getElementById("shoppingShekout");
var closeCartButton = document.getElementById("closeCartButton");

function toggleCartSection() {
  shoppingShekout.classList.toggle("hidden");
}

showCartButton1.addEventListener("click", toggleCartSection);
showCartButton2.addEventListener("click", toggleCartSection);
closeCartButton.addEventListener("click", toggleCartSection);





var hamburgerOpen = document.querySelector(".hamburger-openen");

function openHambugerMenu() {
  document.body.classList.add("menuOpen");
}
hamburgerOpen.addEventListener("click", openHambugerMenu);



document.addEventListener("DOMContentLoaded", function() {
  var hamburgerSluiten = document.querySelector(".hamburger-sluiten");
  var hamburgerSluiten2 = document.querySelector(".hamburger-sluiten-2");
  var hamburgerSluiten3 = document.querySelector(".hamburger-sluiten-3");
  var hamburgerSluiten4 = document.querySelector(".hamburger-sluiten-4");

  // Eerste menu
  function sluitHambugerMenu() {
    document.body.classList.remove("menuOpen");
  }
  if (hamburgerSluiten) {
    hamburgerSluiten.addEventListener("click", sluitHambugerMenu);
  }

  // Tweede menu - model
  var modellenOpenen = document.querySelector(".modellen-openen");

  function openModellen() {
    document.body.classList.add("modellenOpen");
  }
  if (modellenOpenen) {
    modellenOpenen.addEventListener("click", openModellen);
  }

  // Derde menu - elektrisch
  var elektrischOpenen = document.querySelector(".elektrisch-openen");


  document.addEventListener("DOMContentLoaded", function() {
  function openElektrisch() {
    document.body.classList.add("elektrischOpen");
  }
  if (elektrischOpenen) {
    elektrischOpenen.addEventListener("click", openElektrisch);
  }
  });
  // Vierde menu - Aanschaf
  var aanschafOpenen = document.querySelector(".aanschaf-openen");

  function openAanschaf() {
    document.body.classList.add("aanschafOpen");
  }
  if (aanschafOpenen) {
    aanschafOpenen.addEventListener("click", openAanschaf);
  }
});







document.addEventListener("DOMContentLoaded", function() {
  var hamburgerTerug1 = document.querySelector(".model-terug");
  var hamburgerTerug2 = document.querySelector(".elektrisch-terug");
  var hamburgerTerug3 = document.querySelector(".aanschaf-terug");

  // Terug naar hoofdmenu - model
  function terugHamburger1() {
    document.body.classList.remove("modellenOpen");
  }
  if (hamburgerTerug1) {
    hamburgerTerug1.addEventListener("click", terugHamburger1);
  }

  // Terug naar hoofdmenu - elektrisch
  function terugHamburger2() {
    document.body.classList.remove("elektrischOpen");
  }
  if (hamburgerTerug2) {
    hamburgerTerug2.addEventListener("click", terugHamburger2);
  }

  // Terug naar hoofdmenu - aanschaf
  function terugHamburger3() {
    document.body.classList.remove("aanschafOpen");
  }
  if (hamburgerTerug3) {
    hamburgerTerug3.addEventListener("click", terugHamburger3);
  }
});





// Alle menu's sluiten
function sluitHamburgerMenu2() {
  document.body.classList.remove("menuOpen");
  document.body.classList.remove("modellenOpen");
}

var hamburgerSluiten2 = document.querySelector(".hamburger-sluiten-2");
if (hamburgerSluiten2) {
  hamburgerSluiten2.addEventListener("click", sluitHamburgerMenu2);
}

function sluitHamburgerMenu3() {
  document.body.classList.remove("menuOpen");
  document.body.classList.remove("elektrischOpen");
}

var hamburgerSluiten3 = document.querySelector(".hamburger-sluiten-3");
if (hamburgerSluiten3) {
  hamburgerSluiten3.addEventListener("click", sluitHamburgerMenu3);
}

function sluitHamburgerMenu4() {
  document.body.classList.remove("menuOpen");
  document.body.classList.remove("aanschafOpen");
}

var hamburgerSluiten4 = document.querySelector(".hamburger-sluiten-4");
if (hamburgerSluiten4) {
  hamburgerSluiten4.addEventListener("click", sluitHamburgerMenu4);
}




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





document.addEventListener('DOMContentLoaded', function() {
  let productList1;
  const shoppingCartUL = document.querySelector('.shoppingShekout ul');
  let totalAmount = 0;
  let addedProducts = [];
  let maxPrice = Infinity; // Default maximum price

  // Retrieve saved cart data from local storage if available
  const savedCartData = localStorage.getItem('shoppingCart');
  if (savedCartData) {
    addedProducts = JSON.parse(savedCartData);
    updateShoppingCart();
  }

  fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
      productList1 = data.productLists[0];

      const addToCartButtons = document.getElementsByClassName('data');

      for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].onclick = function() {
          const clickedProduct = productList1.products[i];
          const productName = clickedProduct.name;
          const productPrice = clickedProduct.price;
          const productImgSrc = clickedProduct.image;

          // Check if the product is already added
          const isProductAdded = addedProducts.some(product => product.name === productName);
          if (isProductAdded) {
            alert('Product already added to the cart');
            return;
          }

          const newProduct = { name: productName, price: productPrice, image: productImgSrc };
          addedProducts.push(newProduct);
          updateShoppingCart();

          // Save updated cart data to local storage
          localStorage.setItem('shoppingCart', JSON.stringify(addedProducts));
        };
      }
    });

  function updateShoppingCart() {
    shoppingCartUL.innerHTML = '';
    totalAmount = 0;

    addedProducts.forEach((product, index) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const h5 = document.createElement('h5');
      const h4 = document.createElement('h4');
      const removeButton = document.createElement('button');
      const removeSpan = document.createElement('span');
      removeSpan.className = 'material-symbols-outlined';
      removeSpan.textContent = 'delete';

      img.src = product.image;
      img.alt = product.name;
      h5.textContent = product.name;
      h4.textContent = `€${product.price.toFixed(2)}`;
      removeButton.appendChild(removeSpan);
      removeButton.classList.add('remove-button');
      removeButton.addEventListener('click', () => removeProduct(index));

      li.appendChild(img);
      li.appendChild(h5);
      li.appendChild(h4);
      li.appendChild(removeButton);

      shoppingCartUL.appendChild(li);

      totalAmount += product.price;
    });

    document.querySelector('.totaalbedrag').textContent = `€${totalAmount.toFixed(2)}`;
  }

  function removeProduct(index) {
    const removedProduct = addedProducts.splice(index, 1)[0];
    totalAmount -= removedProduct.price;
    updateShoppingCart();
    updateLocalStorage();
  }

  function updateLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(addedProducts));
  }

  // Handle the price filter
  const applyFilterButton = document.getElementById('applyFilter');
  if (applyFilterButton) {
    applyFilterButton.addEventListener('click', applyPriceFilter);
  }
  
  const priceFilterInput = document.getElementById('priceFilter');
  if (priceFilterInput) {
    priceFilterInput.addEventListener('input', function() {
      maxPrice = parseInt(priceFilterInput.value) || Infinity;
    });
  }

  function applyPriceFilter() {
    const products = document.getElementsByClassName('productSchema__product');

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productPrice = parseFloat(product.querySelector('h4').textContent.slice(1));

      if (productPrice <= maxPrice) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  }

  initializeShoppingCart();
});


function updateLocalStorage() {
  const shoppingCartUL = document.querySelector('.shoppingShekout ul');
  const shoppingCart = Array.from(shoppingCartUL.querySelectorAll('li')).map(li => {
    return {
      name: li.querySelector('h5').textContent,
      price: parseFloat(li.querySelector('h4').textContent.slice(2)),
      image: li.querySelector('img').src
    };
  });
  setShoppingCartToLocalStorage(shoppingCart);
}

function addToCart(product) {
  const shoppingCartUL = document.querySelector('.shoppingShekout ul');
  const li = document.createElement('li');
  const img = document.createElement('img');
  const h5 = document.createElement('h5');
  const h4 = document.createElement('h4');

  img.src = product.image;
  img.alt = product.name;
  h5.textContent = product.name;
  h4.textContent = `€ ${product.price.toFixed(2)}`;

  li.appendChild(img);
  li.appendChild(h5);
  li.appendChild(h4);

  shoppingCartUL.appendChild(li);

  calculateTotalAmount();

  const shoppingCartSection = document.querySelector('.shoppingShekout');
  shoppingCartSection.classList.remove('hidden');

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
  removeButton.addEventListener('click', () => removeProduct(li));

  li.appendChild(removeButton);

  // Update shopping cart in local storage
  updateLocalStorage();
}

function addToCart(product) {
  const shoppingCartUL = document.querySelector('.shoppingShekout ul');
  const li = document.createElement('li');
  const img = document.createElement('img');
  const h5 = document.createElement('h5');
  const h4 = document.createElement('h4');

  img.src = product.image;
  img.alt = product.name;
  h5.textContent = product.name;
  h4.textContent = `€ ${product.price.toFixed(2)}`;

  li.appendChild(img);
  li.appendChild(h5);
  li.appendChild(h4);

  shoppingCartUL.appendChild(li);

  calculateTotalAmount();

  const shoppingCartSection = document.querySelector('.shoppingShekout');
  shoppingCartSection.classList.remove('hidden');

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
  removeButton.addEventListener('click', () => removeProduct(li));

  li.appendChild(removeButton);

  // Update shopping cart in local storage
  updateLocalStorage();
}

// Function to calculate the total amount
function calculateTotalAmount() {
  const shoppingCartUL = document.querySelector('.shoppingShekout ul');
  const totalAmountElement = document.querySelector('.totaalbedrag');
  let totalAmount = 0;

  shoppingCartUL.querySelectorAll('li').forEach(li => {
    const price = parseFloat(li.querySelector('h4').textContent.slice(2));
    totalAmount += price;
  });

  totalAmountElement.textContent = `€ ${totalAmount.toFixed(2)}`;
}

// Event listeners for buy buttons
const buyButtons = document.querySelectorAll('.button-style2');
buyButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const productElement = event.currentTarget.parentElement.parentElement;
    const product = {
      name: productElement.querySelector('h3').textContent,
      price: parseFloat(productElement.querySelector('h4').textContent.slice(2)),
      image: productElement.querySelector('img').src
    };
    addToCart(product);
  });
});


// Event listener for cart image
const cartImage = document.querySelector('.cart-img');
cartImage.addEventListener('click', () => {
  const shoppingCartSection = document.querySelector('.shoppingShekout');
  shoppingCartSection.classList.toggle('hidden');
});

// Function to remove product from the shopping cart
function removeProduct(li) {
  const shoppingCartUL = document.querySelector('.shoppingShekout ul');
  const removedProduct = li.querySelector('h5').textContent;

  shoppingCartUL.removeChild(li);
  calculateTotalAmount();

  // Remove the product from the shopping cart in local storage
  removeProductFromLocalStorage(removedProduct);
}

// Function to remove product from local storage
function removeProductFromLocalStorage(productName) {
  let shoppingCart = getShoppingCartFromLocalStorage();
  shoppingCart = shoppingCart.filter(product => product.name !== productName);
  setShoppingCartToLocalStorage(shoppingCart);
}

// Function to get shopping cart from local storage
function getShoppingCartFromLocalStorage() {
  const shoppingCart = localStorage.getItem('shoppingCart');
  return shoppingCart ? JSON.parse(shoppingCart) : [];
}

// Function to set shopping cart to local storage
function setShoppingCartToLocalStorage(shoppingCart) {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// Function to initialize shopping cart
function initializeShoppingCart() {
  const shoppingCart = getShoppingCartFromLocalStorage();
  shoppingCart.forEach(product => {
    addToCart(product);
  });
}

























