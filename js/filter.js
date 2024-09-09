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


var hamburgerOpen = document.querySelector(".hamburger-openen");

function openHambugerMenu() {
  document.body.classList.add("menuOpen");
}
hamburgerOpen.addEventListener("click", openHambugerMenu);



var hamburgerSluiten = document.querySelector(".hamburger-sluiten");
var hamburgerSluiten2 = document.querySelector(".hamburger-sluiten-2");
var hamburgerSluiten3 = document.querySelector(".hamburger-sluiten-3");
var hamburgerSluiten4 = document.querySelector(".hamburger-sluiten-4");

// Eerste menu
function sluitHambugerMenu() {
  document.body.classList.remove("menuOpen");
}
hamburgerSluiten.addEventListener("click", sluitHambugerMenu);

// Tweede menu - model
var modellenOpenen = document.querySelector(".modellen-openen");

function openModellen() {
  document.body.classList.add("modellenOpen");
}
modellenOpenen.addEventListener("click", openModellen);

// Derde menu - elektrisch
var elektrischOpenen = document.querySelector(".elektrisch-openen");

function openElektrisch() {
  document.body.classList.add("elektrischOpen");
}
elektrischOpenen.addEventListener("click", openElektrisch);

// vierde menu - Aanschaf
var aanschafOpenen = document.querySelector(".aanschaf-openen");

function openAanschaf() {
  document.body.classList.add("aanschafOpen");
}
aanschafOpenen.addEventListener("click", openAanschaf);






var hamburgerTerug1 = document.querySelector(".model-terug");
var hamburgerTerug2 = document.querySelector(".elektrisch-terug");
var hamburgerTerug3 = document.querySelector(".aanschaf-terug");

// Terug naar hoofd menu - model
function terugHamburger1() {
  document.body.classList.remove("modellenOpen");
}
hamburgerTerug1.addEventListener("click", terugHamburger1);

// Terug naar hoofd menu - elektrisch
function terugHamburger2() {
  document.body.classList.remove("elektrischOpen");
}
hamburgerTerug2.addEventListener("click", terugHamburger2);

// Terug naar hoofd menu - elektrisch
function terugHamburger3() {
  document.body.classList.remove("aanschafOpen");
}
hamburgerTerug3.addEventListener("click", terugHamburger3);







// Alle menu's Sluiten
function sluitHambugerMenu2() {
  document.body.classList.remove("menuOpen");
  document.body.classList.remove("modellenOpen");
}
hamburgerSluiten2.addEventListener("click", sluitHambugerMenu3);

function sluitHambugerMenu3() {
  document.body.classList.remove("menuOpen");
  document.body.classList.remove("elektrischOpen");
}
hamburgerSluiten3.addEventListener("click", sluitHambugerMenu3);

function sluitHambugerMenu4() {
  document.body.classList.remove("menuOpen");
  document.body.classList.remove("aanschafOpen");
}
hamburgerSluiten4.addEventListener("click", sluitHambugerMenu4);


function veranderKleur(element, afbeelding) {
  const autoAfbeelding = document.getElementById('autoAfbeelding');
  autoAfbeelding.src = afbeelding;

  // Optioneel: Stel de geselecteerde kleur visueel in als actief
  const kleurAfbeeldingen = document.querySelectorAll('.colors1 img');
  kleurAfbeeldingen.forEach(img => img.classList.remove('active'));
  element.classList.add('active');
}

fetch('json/data.json')
  .then(response => response.json())
  .then(data => {
    const products = data.jsonData[0].products;
    let currentFilter = null;
    let priceFilter = null;

    const filterButtons = document.querySelectorAll('#filters .filter-button');
    filterButtons.forEach(button => {
      button.addEventListener('click', applyFilter);
    });

    
    const filterButton = document.querySelector('#filter-button');
    filterButton.addEventListener('click', applyPriceFilter);

    function applyFilter(event) {
      const selectedFilter = event.target.getAttribute('data-filter');

      if (selectedFilter === currentFilter) {
        displayProducts(products, priceFilter);
        currentFilter = null;
      } else {
        const filteredProducts = products.filter(product => product.soort === selectedFilter);
        displayProducts(filteredProducts, priceFilter);
        currentFilter = selectedFilter;
      }
    }

    const priceSelect = document.getElementById('price-filter');
    priceSelect.addEventListener('change', applyPriceFilter);
    
    function applyPriceFilter() {
      const selectedPrice = priceSelect.value;
    
      if (selectedPrice) {
        priceFilter = parseInt(selectedPrice);
        const filteredProducts = products.filter(product => product.price < priceFilter);
        displayProducts(filteredProducts, priceFilter);
      } else {
        priceFilter = null;
        displayProducts(products, priceFilter);
      }
    }
    
    

    function displayProducts(products, priceFilter) {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';

      products.forEach(product => {
        if (!priceFilter || product.price < priceFilter) {
          const li = document.createElement('li');
          li.setAttribute('data-product', JSON.stringify(product));

          const htmlContent = `
            <img src="${product.image}" alt="">
            <div>
              <h3>${product.name}</h3>
              <h4>€ ${product.price}</h4>
            </div>`;

          li.innerHTML = htmlContent;

      const buyButton = document.createElement('button');
      buyButton.classList.add('button-style2');
      buyButton.innerHTML = '<span>Koop nu</span>';
      buyButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const product = JSON.parse(event.currentTarget.parentElement.getAttribute('data-product'));
        addToCart(product);
      });

      const productInfoDiv = document.createElement('div');
      productInfoDiv.appendChild(buyButton);
      productInfoDiv.innerHTML += `<p>${product.pk}PK</p>`;

      li.appendChild(productInfoDiv);

      productList.appendChild(li);
    }
  });

  addProductListeners();
}

    function addProductListeners() {
      const productItems = document.querySelectorAll('#product-list li');
      productItems.forEach(item => {
        item.addEventListener('click', () => {
          const product = JSON.parse(item.getAttribute('data-product'));
          addToCart(product);
        });
      });
    }

    displayProducts(products, priceFilter);
  })
  .catch(error => {
    console.log('Er is een fout opgetreden bij het laden van de JSON-gegevens:', error);
  });

// Rest van de code voor de winkelwagen functionaliteit blijft hetzelfde











//schoppigcart



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

   // Functie om een product aan de winkelwagen toe te voegen
function addToCart(product) {
  const shoppingCartUL = document.querySelector('.shoppingCheckout ul');
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

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
  removeButton.addEventListener('click', () => removeProduct(li));

  li.appendChild(removeButton);

  shoppingCartUL.appendChild(li);

  calculateTotalAmount();

  const shoppingCartSection = document.querySelector('.shoppingCheckout');
  shoppingCartSection.classList.remove('hidden');

  updateLocalStorage();
}

// Functie om het totaalbedrag te berekenen
function calculateTotalAmount() {
  const shoppingCartUL = document.querySelector('.shoppingCheckout ul');
  const totalAmountElement = document.querySelector('.totaalbedrag');
  let totalAmount = 0;

  shoppingCartUL.querySelectorAll('li').forEach(li => {
    const price = parseFloat(li.querySelector('h4').textContent.slice(2));
    totalAmount += price;
  });

  totalAmountElement.textContent = `€ ${totalAmount.toFixed(2)}`;
}


// Functie om een product uit de winkelwagen te verwijderen
function removeProduct(li) {
  const shoppingCartUL = document.querySelector('.shoppingCheckout ul');
  shoppingCartUL.removeChild(li);
  calculateTotalAmount();

  const productName = li.querySelector('h5').textContent;
  removeProductFromLocalStorage(productName);
}

// Functie om een product uit de localStorage te verwijderen
function removeProductFromLocalStorage(productName) {
  let shoppingCart = getShoppingCartFromLocalStorage();
  shoppingCart = shoppingCart.filter(product => product.name !== productName);
  setShoppingCartToLocalStorage(shoppingCart);
}

// Functie om de winkelwagen op te halen uit de localStorage
function getShoppingCartFromLocalStorage() {
  const savedCart = localStorage.getItem('shoppingCart');
  return savedCart ? JSON.parse(savedCart) : [];
}

// Functie om de winkelwagen naar de localStorage te schrijven
function setShoppingCartToLocalStorage(shoppingCart) {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// Functie om de winkelwagen te initialiseren
function initializeShoppingCart() {
  const shoppingCart = getShoppingCartFromLocalStorage();
  shoppingCart.forEach(product => addToCart(product));
}

// Voer de initialisatie van de winkelwagen uit wanneer het DOM is geladen
document.addEventListener('DOMContentLoaded', initializeShoppingCart);


// Functie om de winkelwageninformatie uit de localStorage op te halen
function getShoppingCartFromLocalStorage() {
  const shoppingCart = localStorage.getItem('shoppingCart');
  return shoppingCart ? JSON.parse(shoppingCart) : [];
}

// Functie om de winkelwageninformatie naar de localStorage te schrijven
function setShoppingCartToLocalStorage(shoppingCart) {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// Functie om de winkelwageninformatie bij te werken in de localStorage
function updateLocalStorage() {
  const shoppingCartUL = document.querySelector('.shoppingCheckout ul');
  const products = Array.from(shoppingCartUL.querySelectorAll('li')).map(li => {
    return {
      name: li.querySelector('h5').textContent,
      price: parseFloat(li.querySelector('h4').textContent.slice(2)),
      image: li.querySelector('img').src
    };
  });

  setShoppingCartToLocalStorage(products);
}

function restoreShoppingCart() {
  const shoppingCartUL = document.querySelector('.shoppingCheckout ul');

  if (!shoppingCartUL) {
    console.error('Element with class "shoppingCheckout" not found.');
    return;
  }

  const shoppingCart = getShoppingCartFromLocalStorage();

  shoppingCart.forEach(product => {
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

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    removeButton.addEventListener('click', () => removeProduct(li));

    li.appendChild(removeButton);

    shoppingCartUL.appendChild(li);
  });

  calculateTotalAmount();
}

document.addEventListener('DOMContentLoaded', () => {
  // Winkelwagen herstellen bij het laden van de pagina
  restoreShoppingCart();
});







// ...

function removeProduct(li) {
  const product = li.dataset.productId;
  const removedProductIndex = addedProducts.findIndex(item => item.name === product);

  if (removedProductIndex > -1) {
    const removedProduct = addedProducts.splice(removedProductIndex, 1)[0];
    totalAmount -= removedProduct.price;
    updateShoppingCart();
    updateLocalStorage();
  }
}

// ...

function updateShoppingCart() {
  shoppingCartUL.innerHTML = '';
  totalAmount = 0;

  addedProducts.forEach((product) => {
    const li = document.createElement('li');
    li.dataset.productId = product.name;

    // ...

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    removeButton.addEventListener('click', function() {
      const li = this.parentNode;
      removeProduct(li);
    });

    li.appendChild(removeButton);

    // ...

    shoppingCartUL.appendChild(li);

    totalAmount += product.price;
  });

  document.querySelector('.totaalbedrag').textContent = `€${totalAmount.toFixed(2)}`;
}





// Rest van de code...

// Wacht tot het DOM is geladen voordat je de code uitvoert
document.addEventListener('DOMContentLoaded', function() {
  shoppingCartUL = document.getElementById('shoppingCartUL');
  if (!shoppingCartUL) return; // Controleer opnieuw of shoppingCartUL null is voordat je verdergaat

  var applyFilterButton = document.getElementById('applyFilter');
  if (applyFilterButton) {
    applyFilterButton.addEventListener('click', applyPriceFilter);
  }

  var priceFilterInput = document.getElementById('priceFilter');
  if (priceFilterInput) {
    priceFilterInput.addEventListener('input', function() {
      var maxPrice = parseInt(priceFilterInput.value) || Infinity;
    });
  }

  initializeShoppingCart();

  var buyNowButton = document.getElementById('buy-now-button');
  if (buyNowButton) {
    buyNowButton.addEventListener('click', function() {
      const product = {
        name: "M3 Competition",
        price: 78165,
        image: "img/m2.webp",
        soort: "M-model",
        pk: "450"
      };
      addToCart(product);
    });
  }
});



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







