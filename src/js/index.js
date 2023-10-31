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

    const more = document.createElement("button");
    more.classList.add("btn-more");
    more.innerHTML = "Быстрый просмотр";
    imageElement.appendChild(more);

    more.addEventListener("click", fastView);

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

    function fastView() {
      const viewWindow = document.createElement("div");
      document.body.appendChild(viewWindow);
      viewWindow.classList.add("viewWindow");

      const btnWrap = document.createElement("div");
      btnWrap.classList.add("btnWrap");
      const btnClose = document.createElement("button");
      btnClose.classList.add("btnClose");
      btnClose.innerHTML = "✖";
      viewWindow.appendChild(btnWrap);
      btnWrap.appendChild(btnClose);

      btnClose.addEventListener("click", () => {
        viewWindow.style.display = "none";
      });

      const windowWrap = document.createElement("div");
      windowWrap.classList.add("windowWrap");
      viewWindow.appendChild(windowWrap);

      const prodImgWrap = document.createElement("div");
      prodImgWrap.classList.add("prodImgWrap");
      const prodImg = img;
      prodImg.classList.add("prodImg");

      windowWrap.appendChild(prodImgWrap);
      prodImgWrap.appendChild(prodImg);

      const descrWrap = document.createElement("div");
      descrWrap.classList.add("descrWrap");
      const detales = document.createElement("div");
      detales.classList.add("detales");
      const prodTitle = productName;
      prodTitle.classList.add("prodTitle");
      const prodFirm = firm;
      prodFirm.classList.add("prodFirm");
      const prodPrice = priceNew;
      prodPrice.classList.add("prodPrice");

      windowWrap.appendChild(descrWrap);
      descrWrap.appendChild(detales);
      detales.appendChild(prodTitle);
      detales.appendChild(prodFirm);
      detales.appendChild(prodPrice);

      const buttons = document.createElement("div");
      buttons.classList.add("buttons");
      const buttAdd = addButton;
      buttAdd.classList.add("buttAdd");
      const buttMore = document.createElement("button");
      buttMore.innerHTML = "Подробнее";
      buttMore.classList.add("button-more");

      descrWrap.appendChild(buttons);
      buttons.appendChild(buttAdd);
      buttons.appendChild(buttMore);

      viewWindow.style.display = "block";
    }
  });
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

const inputSearch = document.querySelector("input");
inputSearch.addEventListener("input", search);

function search() {
  const input = inputSearch.value.toLowerCase();
  const products = document.querySelectorAll(".product__item");

  products.forEach((product) => {
    const searchTitle = product
      .querySelector(".product-name-span")
      .textContent.toLowerCase();
    const searchFirm = product
      .querySelector(".firm-name")
      .textContent.toLowerCase();

    if (searchTitle.includes(input) || searchFirm.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
