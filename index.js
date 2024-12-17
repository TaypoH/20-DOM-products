function requestAPI() {
    const url = 'https://fakestoreapi.com/products';

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(createProductCard);
    })
}

function createProductCard(productObject) {
    const root = document.querySelector('#root');
    const { title, price, image, rating: { rate, count } } = productObject;

    const article = document.createElement('article');
    article.classList.add('card-wrapper');

    const img = document.createElement('img');
    img.classList.add('card-image');
    img.setAttribute('src', image);
    img.setAttribute('alt', title);

    const productTitle = document.createElement('p');
    productTitle.classList.add('title');
    productTitle.append(title);

    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    productPrice.append(`$${price}`);

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating');

    const productRate = document.createElement('p');
    productRate.classList.add('rate');
    productRate.append(`${rate}★`);

    const productCount = document.createElement('p');
    productCount.classList.add('count');
    productCount.append(`${count} views`)

    ratingDiv.append(productRate, productCount);
    article.append(img, productTitle, productPrice, ratingDiv);
    root.append(article);
}

requestAPI();