import './slider'

async function createProductCards() {
  const response = await fetch('https://653b9efd2e42fd0d54d56a5c.mockapi.io/cards');
  const data = await response.json();
  const productsWrap = document.querySelector('.products-wrap');

  data.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('product__item');

    const imageElement = document.createElement('div');
    imageElement.classList.add('product-img');
    cardElement.appendChild(imageElement);
    const img = document.createElement('img');
    img.src = card.img;
    imageElement.appendChild(img);
    const productDescr = document.createElement('div');
    productDescr.classList.add('product-descr');
    cardElement.appendChild(productDescr); 


    const price = document.createElement('div');
    price.classList.add('price');
    productDescr.appendChild(price);


    const priceElement = document.createElement('span');
    price.appendChild(priceElement);
    priceElement.textContent = `${card.price} BYN`;


    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productDescr.appendChild(productName);
    const nameElement = document.createElement('span');
    nameElement.textContent = card.name;
    productName.appendChild(nameElement);


    const firm = document.createElement('div');
    firm.classList.add('firm');
    productDescr.appendChild(firm);
    const firmElement = document.createElement('p');
    firmElement.textContent = `${card.firm}`;
    firm.appendChild(firmElement);

    const addButton = document.createElement('button');
    addButton.textContent = 'В корзину';
    addButton.addEventListener('click', () => {
      // Добавить логику для добавления товара в корзину
    });
    cardElement.appendChild(addButton);

    productsWrap.appendChild(cardElement);
  });
}

createProductCards();