import "./slider";

createProductCards();

const cart = document.getElementById("cart");
cart.addEventListener("click", () => {
  createCart();
});

function createCart() {
  const cartWrap = document.createElement("div");
  cartWrap.classList.add("cart-wrap");
  cartWrap.style.display = "block";
  document.body.appendChild(cartWrap);

  const cartHeader = document.createElement("div");
  cartHeader.classList.add("cartHeader");
  cartWrap.appendChild(cartHeader);

  const titleCart = document.createElement("span");
  titleCart.classList.add("titleCart");
  titleCart.textContent = "Корзина";
  cartHeader.appendChild(titleCart);

  const closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.innerText = "✖";
  cartHeader.appendChild(closeButton);

  const cartList = document.createElement("ul");
  cartWrap.appendChild(cartList);

  const cartItem = document.createElement("li");
  cartList.appendChild(cartItem);

  const total = document.createElement("span");
  total.innerText = "Итого: ";
  cartWrap.appendChild(total);

  closeButton.addEventListener("click", function () {
    cartWrap.style.display = "none";
  });
}

async function createProductCards() {
  const response = await fetch(
    "https://653b9efd2e42fd0d54d56a5c.mockapi.io/cards"
  );
  const data = await response.json();

  const productsWrap = document.querySelector(".products-wrap");

  data.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("product__item");

    const imageElement = document.createElement("div");
    imageElement.classList.add("product-img");
    cardElement.appendChild(imageElement);
    const img = document.createElement("img");
    img.src = card.img;
    imageElement.appendChild(img);
    const productDescr = document.createElement("div");
    productDescr.classList.add("product-descr");
    cardElement.appendChild(productDescr);

    const price = document.createElement("div");
    price.classList.add("price");
    productDescr.appendChild(price);

    const priceNew = document.createElement("span");
    priceNew.classList.add("price_new");
    price.appendChild(priceNew);
    priceNew.textContent = `${card.price} BYN`;

    const priceOld = document.createElement("span");
    priceOld.classList.add("price_old");
    price.appendChild(priceOld);
    priceOld.textContent = `${card.oldPrice} BYN`;

    const productName = document.createElement("div");
    productName.classList.add("product-name");
    productDescr.appendChild(productName);
    const nameElement = document.createElement("span");
    nameElement.className = "product-name-span";
    nameElement.textContent = card.name;
    productName.appendChild(nameElement);

    const firm = document.createElement("div");
    firm.classList.add("firm");
    productDescr.appendChild(firm);
    const firmElement = document.createElement("p");
    firmElement.className = "firm-name";
    firmElement.textContent = `${card.firm}`;
    firm.appendChild(firmElement);

    const addButton = document.createElement("button");
    addButton.textContent = "В корзину";
    addButton.addEventListener("click", () => {
      console.log("hello");

      //   setLS(nameProd, description, priceProd, imgSrc);
      // showCartFromLocalStorage();
    });

    cardElement.appendChild(addButton);

    productsWrap.appendChild(cardElement);
  });

  // return {
  //   firm,
  //   name,
  //   price
  // }
}

// function setLS (name, price, firm){
//   const card = {
//       'title': name ,
//       'price': price,
//       'firm': firm
//     };

//   let cards = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : [];
//   cards.push(card);

//   localStorage.setItem('cards', JSON.stringify(cards));
//   }
//   setLS()

// function fastView(){
//   const viewWindow = document.createElement('div');
//   document.body.appendChild(viewWindow);
//   viewWindow.classList.add('viewWindow')

//   const prodImg = document.createElement('div');
//   prodImg.classList.add('prodImg');

//   const image = document.createElement('img');
//   viewWindow.appendChild('prodImg');

// image.setAttribute('src', './');
// image.setAttribute('alt');

// }
// fastView()

const inputSearch = document.querySelector("input");
inputSearch.addEventListener("input", search);

function search() {
  const input = inputSearch.value.toLowerCase();
  const products = document.querySelectorAll(".product__item");

  products.forEach((product) => {
    const searchTitle = product.querySelector(".product-name-span").textContent.toLowerCase();
    console.log(searchTitle);
    const searchFirm = product.querySelector(".firm-name").textContent.toLowerCase();

    if (searchTitle.includes(input) || searchFirm.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });
}
