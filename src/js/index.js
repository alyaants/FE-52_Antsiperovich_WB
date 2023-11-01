import "./slider";

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
    img.id = "prodImg";

    const more = document.createElement("button");
    more.classList.add("btn-more");
    more.innerHTML = "Быстрый просмотр";
    imageElement.appendChild(more);

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
    priceNew.id = "priceNew";

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
    nameElement.id = "productName";

    const firm = document.createElement("div");
    firm.classList.add("firm");
    productDescr.appendChild(firm);
    const firmElement = document.createElement("p");
    firmElement.className = "firm-name";
    firmElement.textContent = `${card.firm}`;
    firm.appendChild(firmElement);
    firmElement.id = "productFirm";

    const addButton = document.createElement("button");
    addButton.classList.add('addButton')
    addButton.textContent = "В корзину";
    addButton.addEventListener("click", () => {
      // Создаем объект для товара, который добавляем в корзину
      const item = {
        id: card.id, // Уникальный идентификатор товара
        name: card.name,
        price: card.price,
        img: card.img,
      };
    
      // Добавляем товар в корзину
      cart.push(item);
    
      // Сохраняем корзину в локальном хранилище (localStorage)
      localStorage.setItem("cart", JSON.stringify(cart));
    });

    cardElement.appendChild(addButton);
    productsWrap.appendChild(cardElement);
  });

  const moreButtons = document.querySelectorAll(".btn-more");
  moreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openModalWithData(data[index]);
    });
  });

  const viewWindow = document.createElement("div");
  viewWindow.className = "viewWindow";

  const btnWrap = document.createElement("div");
  btnWrap.classList.add("btnWrap");
  const btnClose = document.createElement("button");
  btnClose.classList.add("btnClose");
  btnClose.innerHTML = "✖";
  btnClose.id = "btnClose";
  viewWindow.innerHTML = `
    <div class="windowWrap">
      <div class="prodImgWrap">
        <img id="modalImage" class ="prodImg" src="" alt="">
      </div>
      <div class="descrWrap">
        <div class="detales">
          <p id="modalNameElement" class="prodTitle"></p>
          <p id="modalFirmElement" class="prodFirm"></p>
          <span id="modalPriceNew" class="prodPrice"></span>
        </div>
        <div class="buttons">
          <button id="modalAdd" class="addCart"></button>
          <button id="modalMore" class="button-more"></button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(viewWindow);
  viewWindow.appendChild(btnWrap);
  btnWrap.appendChild(btnClose);

  function openModalWithData(cardData) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    const modalImage = document.getElementById("modalImage");
    const modalPriceNew = document.getElementById("modalPriceNew");
    const modalFirmElement = document.getElementById("modalFirmElement");
    const modalNameElement = document.getElementById("modalNameElement");

    modalImage.src = cardData.img;
    modalNameElement.textContent = cardData.name;
    modalPriceNew.textContent = `${cardData.price} BYN`;
    modalFirmElement.textContent = `${cardData.firm}`;

    const modalAdd = document.getElementById("modalAdd");
    const modalMore = document.getElementById("modalMore");
    modalAdd.innerHTML = "В корзину";
    modalMore.innerHTML = "Подробнее";

    viewWindow.style.display = "block";
    overlay.style.display = "block";

    const closeModalButton = document.getElementById("btnClose");
    closeModalButton.addEventListener("click", () => {
      viewWindow.style.display = "none";
      overlay.style.display = "none";

    });
  }
}
createProductCards();



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

