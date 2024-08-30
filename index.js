let listaProdutos = [
    {
        id: 1,
        image: "./relogio1-removebg-preview.png",
        productType: "Relogios",
        title: "Fit Haiz",
        description:
            "Smartwatch Relógio Inteligente My Watch I Fit Haiz Tela Full Touch 1.28 Resistente à Água IP67 com ...",
        price: 200.303,
    },
    {
        id: 2,
        image: "./relogio2-removebg-preview.png",
        productType: "Relogios",
        title: "Ticwatch",
        description:
            " Ticwatch Pro 3 GPS Smart Watch, relógio inteligente, Wear OS, Processador...",
        price: 100.339,
    },
    {
        id: 3,
        image: "./relogio3-removebg-preview.png",
        productType: "Relogios",
        title: "TicWatch Pro 5",
        description:
            "TicWatch Pro 5 Android Wear OS Smartwatch Relógio Inteligente Snapdragon...",
        price: 10.0,
    },
    {
        id: 4,
        image: "./novocolar-removebg-preview.png",
        productType: "Colares",
        title: "Colar Sury",
        description:
            " Nosso colar Sury em formato de gravatinha, é estiloso e muito versátil. A zircônia...",
        price: 11.0,
    },
    {
        id: 5,
        image: "./images-removebg-preview.png",
        productType: "Colares",
        title: "Colar Julia",
        description:
            "Colar mini bolinhas amassadas, ideal para composições. Minimalista e delicado...",
        price: 13.0,
    },
    {
        id: 6,
        image: "./novocolar-removebg-preview.png",
        productType: "Colares",
        title: "Colar Julia Dourado",
        description:
            "Colar mini bolinhas amassadas, ideal para composições. Minimalista...",
        price: 10.0,
    },
    {
        id: 7,
        image: "./camisa1-removebg-preview.png",
        productType: "Camisetas",
        title: "Poliéster",
        description:
            "Camiseta Masculina Poliéster Com Toque de Algodão Camisa Blusa Treino Academia Tshrt Esporte",
        price: 100,
    },
    {
        id: 8,
        image: "./camiseta2-removebg-preview.png",
        productType: "Camisetas",
        title: "Dry Non-Wet",
        description:
            "Camiseta Dry Non-Wet, Não Amassa, Anti-Odor, Não Desbota Dial Cyclo...",
        price: 290,
    },
    {
        id: 9,
        image: "./camisa3-removebg-preview.png",
        productType: "Camisetas",
        title: "Dry Non-Wet",
        description:
            "Camiseta Dry Non-Wet, Não Amassa, Anti-Odor, Não Desbota Dial Cyclo...",
        price: 29,
    },
];

function renderCards(list) {
    let watchesUl = document.querySelector("#listWatches");
    let neckalcesUl = document.querySelector("#listNecklaces");
    let tshirtsUl = document.querySelector("#listTshirts");
    for (let i = 0; i < list.length; i++) {
        let formattedPrice = list[i].price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        let productsLi = document.createElement("li");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let divInf = document.createElement("div");
        let productType = document.createElement("div");
        let productTypeName = document.createElement("p");
        let title = document.createElement("p");
        let description = document.createElement("p");
        let price = document.createElement("strong");
        let button = document.createElement("button");

        productsLi.className = "product";
        divInf.className = "inf-product";
        productType.className = "type-product";
        title.className = "title";
        price.className = "price";
        button.className = "buy-button";

        img.src = list[i].image;
        productTypeName.innerText = list[i].productType;
        title.innerText = list[i].title;
        price.innerText = formattedPrice;
        button.innerText = "Adicionar ao carrinho";
        description.innerText = list[i].description;

        productsLi.append(figure, divInf);
        figure.appendChild(img);
        divInf.append(productType, title, description, price, button);
        productType.append(productTypeName);

        if (list[i].productType === "Relogios") {
            watchesUl.appendChild(productsLi);
        } else if (list[i].productType === "Camisetas") {
            tshirtsUl.appendChild(productsLi);
        } else {
            neckalcesUl.appendChild(productsLi);
        }
    }
}

renderCards(listaProdutos);
const showcaseDiv = document.querySelectorAll(".product-list");
function searchItems() {
    let form = document.querySelector(".form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let products = [];
        showcaseDiv.forEach((ul) => {
            ul.innerHTML = "";
        });
        let input = document.querySelector("#search-bar");
        if (input.value != "") {
            for (let i = 0; i < listaProdutos.length; i++) {
                if (listaProdutos[i].title === input.value) {
                    products.push(listaProdutos[i]);
                }
            }
            if (products.length > 0) {
                renderCards(products);
                addCart(products);
            }
        } else {
            renderCards(listaProdutos);
            addCart(listaProdutos);
        }
    });
}
let shoppingCart = document.querySelector(".div-empty-cart");
divInfCart = document.querySelector(".inf-empty");
let search = document.querySelector(".search");

function filterItems(list) {
    let buttonsList = document.querySelectorAll(".button-nav");
    let watchesList = [];
    let necklacesList = [];
    let tshirtsList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].productType === "Relogios") {
            watchesList.push(list[i]);
        } else if (list[i].productType === "Colares") {
            necklacesList.push(list[i]);
        } else {
            tshirtsList.push(list[i]);
        }
    }
    for (let i = 0; i < buttonsList.length; i++) {
        buttonsList[i].setAttribute("data-id", i);
    }
    for (let j = 0; j < buttonsList.length; j++) {
        buttonsList[j].addEventListener("click", (e) => {
            let id = Number(buttonsList[j].getAttribute("data-id"));
            if (id === 0) {
                showcaseDiv.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderCards(listaProdutos);
                addCart(listaProdutos);
            }
            if (id === 1) {
                showcaseDiv.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderCards(watchesList);
                addCart(watchesList);
            } else if (id === 2) {
                showcaseDiv.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderCards(necklacesList);
                addCart(necklacesList);
            } else if (id === 3) {
                showcaseDiv.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderCards(tshirtsList);
                addCart(tshirtsList);
                console.log(tshirtsList);
            }
        });
    }
}

let cartProducts = [];
let counterCartId = 1;
function addCart(list) {
    let listButton = document.querySelectorAll(".buy-button");
    for (let i = 0; i < listButton.length; i++) {
        listButton[i].setAttribute("data-id", list[i].id);
    }
    for (let i = 0; i < listButton.length; i++) {
        listButton[i].addEventListener("click", (e) => {
            shoppingCart.classList.remove("div-empty-cart");
            shoppingCart.classList.add("other-cart");
            let id = Number(listButton[i].getAttribute("data-id"));

            for (let l = 0; l < list.length; l++) {
                if (id === list[l].id) {
                    let product = list[l];
                    cartProducts.push({
                        ...product,
                        id: counterCartId++,
                    });
                }
            }
            shoppingCart.innerHTML = "";
            divInfCart.classList.add("cart-inf");
            cartCards(cartProducts);
            productsCartRemove(cartProducts);
        });
    }
}

function productsCartRemove(list) {
    let removeButton = document.querySelectorAll(".cart-remove");
    for (let i = 0; i < list.length; i++) {
        removeButton[i].setAttribute("data-id", list[i].id);
    }
    for (let k = 0; k < removeButton.length; k++) {
        removeButton[k].addEventListener("click", (e) => {
            let id = Number(removeButton[k].getAttribute("data-id"));
            for (let j = 0; j < list.length; j++) {
                if (id === list[j].id) {
                    list.splice(j, 1);
                }
            }
            shoppingCart.innerHTML = "";
            cartCards(list);
            productsCartRemove(list);
            if (list.length === 0) {
                shoppingCart.classList.remove("other-cart");
                shoppingCart.classList.add("div-empty-cart");
                shoppingCart.innerHTML =
                    '  <p id="cart-empty">Carrinho vazio</p><p>Adicione itens</p>';
                divInfCart.innerHTML = "";
                divInfCart.classList.remove("cart-inf");
            }
        });
    }
}

function cartCards(list) {
    let ul = document.createElement("ul");
    ul.className = "list-cart";
    let totalPrice = 0;
    let totalQuantity = 0;
    for (let i = 0; i < list.length; i++) {
        let formattedPrice = list[i].price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        totalPrice += list[i].price;
        totalQuantity += 1;
        let priceTotalFomatted = totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        let li = document.createElement("li");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let div = document.createElement("div");
        let title = document.createElement("titulo");
        let price = document.createElement("strong");
        let removeButton = document.createElement("button");

        li.className = "product-cart";
        div.className = "inf-product-cart";
        removeButton.className = "cart-remove";
        img.src = list[i].image;
        title.innerText = list[i].title;
        price.innerText = formattedPrice;
        removeButton.innerText = "remover do carrinho";

        shoppingCart.appendChild(ul);
        ul.append(li);
        li.append(figure, div);
        figure.append(img);
        div.append(title, price, removeButton);

        divInfCart.innerHTML = "";
        divInfCart.innerHTML = `
    <div class="quantity-price"><p>Quantidade:</p><p>Total:</p></div>
    <div><p>${totalQuantity}</p><p>${priceTotalFomatted}</p></div>
`;
        search.append(divInfCart);
    }
}
addCart(listaProdutos);
filterItems(listaProdutos);
searchItems();
