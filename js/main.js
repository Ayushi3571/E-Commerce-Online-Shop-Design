// Variables
const prodContProd = document.querySelector("#products");
const prodContIndex = document.querySelector("#prod-index");
const prodContCart = document.querySelector("#prod-cart");

// Array to map image sources to product names
const productImages = {
  "Nikon D3200": "nayris-aquino-Lidm0GHUL-0-unsplash.jpg",
  "Pentax MZ-50": "mikedelta-zUnc4-eHw6E-unsplash.jpg",
  "Canon EOS": "rohit-jawalkar-bZvX1kozeRg-unsplash.jpg"
};

// Fetch JSON data
fetch('connect.php')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      // Get values
      let imgSrc = productImages[product.name];
      let name = product.name;
      let price = product.price;
      let description = product.description;

      // Call the createProd function (Assuming it creates and appends the product element to the DOM)
      createProd(imgSrc, name, price, description, 'prod');
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to create elements
const createProd = (imgSrc, name, price, description, check) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let buttonProd = document.createElement("button");
  let divOverlay = document.createElement("div");
  let prodDesc = document.createElement("p");
  let buttonMore = document.createElement("button");

  // Set values on elements
  imgProd.src = imgSrc;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  buttonProd.innerText = "Add to cart";
  prodDesc.innerText = description;
  buttonMore.innerText = "More info";

  // Add classes on elements
  priceProd.className = "price";
  buttonProd.className = "atc-btn";
  buttonMore.className = "rm-btn";
  divOverlay.className = "overlay";
  prodDesc.className = "description";
  divProd.className = "img-products";

  // Add hover event to show details
  divProd.addEventListener("mouseenter", () => {
    divOverlay.style.display = "block";
  });
  divProd.addEventListener("mouseleave", () => {
    divOverlay.style.display = "none";
  });

  // Add elements to div
  divOverlay.appendChild(prodDesc);
  divOverlay.appendChild(buttonMore);
  divOverlay.appendChild(buttonProd);
  divProd.appendChild(imgProd);
  divProd.appendChild(nameProd);
  divProd.appendChild(priceProd);
  divProd.appendChild(divOverlay);
  if (check === "prod") {
    prodContProd.appendChild(divProd);
  } else if (check === "index") {
    prodContIndex.appendChild(divProd);
  }
};

// Function to display products on index.html
const displayProdIndex = () => {
  for (let i = 0; i < 3; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    const check = "index";
    createProd(imgSrc, name, price, check);
  }
};

const displayProdCart = () => {
  for (let i = 0; i < 2; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    createCartProd(imgSrc, name, price);
  }
};

// Function to create cart elements
const createCartProd = (imgSrc, name, price) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let descProd = document.createElement("div");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let amountDiv = document.createElement("div");
  let plusIcon = document.createElement("i");
  let minusIcon = document.createElement("i");
  let amount = document.createElement("p");
  let icons = document.createElement("div");
  let closeIcon = document.createElement("p");
  let favoriteIcon = document.createElement("i");

  // Set values on elements
  imgProd.src = imgSrc;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  amount.innerText = " 1 ";

  divProd.className = "cart-prod";
  descProd.className = "desc-prod";
  amountDiv.className = "amount-div";
  plusIcon.className = "fa-regular fa-square-plus";
  minusIcon.className = "fa-regular fa-square-minus";
  icons.className = "cart-icons";
  closeIcon.className = "fa-regular fa-rectangle-xmark";
  favoriteIcon.className = "fa-solid fa-heart";

  // Add elements to div
  divProd.appendChild(imgProd);
  descProd.appendChild(nameProd);
  descProd.appendChild(priceProd);
  amountDiv.appendChild(minusIcon);
  amountDiv.appendChild(amount);
  amountDiv.appendChild(plusIcon);
  descProd.appendChild(amountDiv);
  divProd.appendChild(descProd);
  icons.appendChild(closeIcon);
  icons.appendChild(favoriteIcon);
  divProd.appendChild(icons);
  prodContCart.appendChild(divProd);
};

// Function for mobile menu
const hamburgerMenu = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
