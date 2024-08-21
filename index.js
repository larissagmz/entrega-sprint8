let listaProdutos = [
    {
        id: 1,
        imagem: "./relogio1-removebg-preview.png",
        tipoProduto: "Relogios",
        titulo: "Fit Haiz",
        descricao:
            "Smartwatch Relógio Inteligente My Watch I Fit Haiz Tela Full Touch 1.28 Resistente à Água IP67 com ...",
        preco: 278.339,
    },
    {
        id: 2,
        imagem: "./relogio2-removebg-preview.png",
        tipoProduto: "Relogios",
        titulo: "Ticwatch",
        descricao:
            " Ticwatch Pro 3 GPS Smart Watch, relógio inteligente, Wear OS, Processador...",
        preco: 100.339,
    },
    {
        id: 3,
        imagem: "./relogio3-removebg-preview.png",
        tipoProduto: "Relogios",
        titulo: "TicWatch Pro 5",
        descricao:
            "TicWatch Pro 5 Android Wear OS Smartwatch Relógio Inteligente Snapdragon...",
        preco: 10.0,
    },
    {
        id: 4,
        imagem: "./novocolar-removebg-preview.png",
        tipoProduto: "Colares",
        titulo: "Colar Sury",
        descricao:
            " Nosso colar Sury em formato de gravatinha, é estiloso e muito versátil. A zircônia...",
        preco: 11.0,
    },
    {
        id: 5,
        imagem: "./images-removebg-preview.png",
        tipoProduto: "Colares",
        titulo: "Colar Julia",
        descricao:
            "Colar mini bolinhas amassadas, ideal para composições. Minimalista e delicado...",
        preco: 13.0,
    },
    {
        id: 6,
        imagem: "./novocolar-removebg-preview.png",
        tipoProduto: "Colares",
        titulo: "Colar Julia Dourado",
        descricao:
            "Colar mini bolinhas amassadas, ideal para composições. Minimalista...",
        preco: 10.0,
    },
    {
        id: 7,
        imagem: "./camisa1-removebg-preview.png",
        tipoProduto: "Camisetas",
        titulo: "Poliéster",
        descricao:
            "Camiseta Masculina Poliéster Com Toque de Algodão Camisa Blusa Treino Academia Tshrt Esporte",
        preco: 100,
    },
    {
        id: 8,
        imagem: "./camiseta2-removebg-preview.png",
        tipoProduto: "Camisetas",
        titulo: "Dry Non-Wet",
        descricao:
            "Camiseta Dry Non-Wet, Não Amassa, Anti-Odor, Não Desbota Dial Cyclo...",
        preco: 290,
    },
    {
        id: 9,
        imagem: "./camisa3-removebg-preview.png",
        tipoProduto: "Camisetas",
        titulo: "Dry Non-Wet",
        descricao:
            "Camiseta Dry Non-Wet, Não Amassa, Anti-Odor, Não Desbota Dial Cyclo...",
        preco: 29,
    },
];

function renderizarCards(list) {
    let ulRelogios = document.querySelector("#lista-Relogios");
    let ulColares = document.querySelector("#lista-colares");
    let ulCamisetas = document.querySelector("#lista-camisetas");
    for (let i = 0; i < list.length; i++) {
        let precoFormatado = list[i].preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        let liProdutos = document.createElement("li");
        liProdutos.className = "produto";
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.src = list[i].imagem;
        let divInf = document.createElement("div");
        divInf.className = "inf-produto";
        let tipoProduto = document.createElement("div");
        tipoProduto.className = "tipo-produto";
        let nomeTipoProduto = document.createElement("p");
        nomeTipoProduto.innerText = list[i].tipoProduto;
        let titulo = document.createElement("p");
        titulo.innerText = list[i].titulo;
        titulo.className = "titulo";
        let descricao = document.createElement("p");
        descricao.innerText = list[i].descricao;
        let preco = document.createElement("strong");
        preco.className = "preco";
        preco.innerText = precoFormatado;
        let botao = document.createElement("button");
        botao.innerText = "Adicionar ao carrinho";
        botao.className = "botao-comprar";
        liProdutos.append(figure, divInf);
        figure.appendChild(img);
        divInf.append(tipoProduto, titulo, descricao, preco, botao);
        tipoProduto.append(nomeTipoProduto);
        if (list[i].tipoProduto === "Relogios") {
            ulRelogios.appendChild(liProdutos);
        } else if (list[i].tipoProduto === "Camisetas") {
            ulCamisetas.appendChild(liProdutos);
        } else {
            ulColares.appendChild(liProdutos);
        }
    }
}
function separarCards(list) {
    let relogios = [];
    let colares = [];
    let camisetas = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].tipoProduto === "Camisetas") {
            camisetas.push(list[i]);
        } else if (list[i].tipoProduto === "Colares") {
            colares.push(list[i]);
        } else {
            relogios.push(list[i]);
        }
    }
}
renderizarCards(listaProdutos);
const divVitrine = document.querySelectorAll(".lista-produto");

function acharItens() {
    let form = document.querySelector(".formulario");
    let botaoLista = document.querySelectorAll(".botao-comprar");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let produtos = [];
        divVitrine.forEach((ul) => {
            ul.innerHTML = ""; // Limpa o conteúdo de cada <ul>
        });
        let input = document.querySelector("#barra-pesquisa");
        if (input.value != "") {
            for (let i = 0; i < listaProdutos.length; i++) {
                if (listaProdutos[i].titulo === input.value) {
                    produtos.push(listaProdutos[i]);
                }
            }
            if (produtos.length > 0) {
                renderizarCards(produtos);
                adicionarCarrinho(produtos);
                console.log(produtos);
            }
        } else renderizarCards(listaProdutos);
    });
}
let carrinhoCompras = document.querySelector(".div-carrinho-vazio");

function adicionarCarrinho(list) {
    let botaoLista = document.querySelectorAll(".botao-comprar");
    let produtos = [];
    for (let i = 0; i < botaoLista.length; i++) {
        botaoLista[i].setAttribute("data-id", list[i].id);
    }
    for (let i = 0; i < botaoLista.length; i++) {
        botaoLista[i].addEventListener("click", (e) => {
            carrinhoCompras.classList.remove("div-carrinho-vazio");
            carrinhoCompras.classList.add("outro-carrinho");
            let id = Number(botaoLista[i].getAttribute("data-id"));
            for (let j = 0; j < list.length; j++) {
                if (id === list[j].id) {
                    produtos.push(list[j]);
                }
            }
            carrinhoCompras.innerHTML = "";

            cardsCarrinho(produtos);
        });
    }
}

function cardsCarrinho(list) {
    let ul = document.createElement("ul");
    ul.className = "lista-carrinho";
    divInfCarrinho = document.querySelector(".carrinho-inf");
    let pesquisa = document.querySelector(".pesquisa");
    let precoTotal = 0;
    let quantidadeTotal = 0;
    for (let i = 0; i < list.length; i++) {
        let precoFormatado = list[i].preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        precoTotal += list[i].preco;
        quantidadeTotal += 1;
        let li = document.createElement("li");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let div = document.createElement("div");
        let titulo = document.createElement("titulo");
        let preco = document.createElement("strong");
        let botao = document.createElement("button");
        li.className = "produto-carrinho";
        div.className = "inf-produto-carrinho";
        botao.className = "remover-carrinho";
        img.src = list[i].imagem;
        titulo.innerText = list[i].titulo;
        preco.innerText = precoFormatado;
        botao.innerText = "remover do carrinho";
        carrinhoCompras.appendChild(ul);
        ul.append(li);
        li.append(figure, div);
        figure.append(img);
        div.append(titulo, preco, botao);

        // let div1 = document.createElement("div");
        // let quantidade = document.createElement("p");
        // let total = document.createElement("p");
        // let div2 = document.createElement("div");
        // let textoQuantidade = document.createElement("strong");
        // let textoPreco = document.createElement("strong");
        // textoPreco.innerText = `${precoTotal}`;
        // textoQuantidade.innerText = `${quantidadeTotal}`;

        // divInfCarrinho.append(div1, div2);
        // div1.append(quantidade, total);
        // div2.append(textoQuantidade, textoPreco);

        divInfCarrinho.innerHTML = "";
        divInfCarrinho.innerHTML = `
    <div class="quantidade-preco"><p>quantidade</p><p>total</p></div>
    <div><strong>${quantidadeTotal}</strong><strong>${precoTotal}</strong></div>
`;
        pesquisa.append(divInfCarrinho);
    }
}

adicionarCarrinho(listaProdutos);
acharItens();
