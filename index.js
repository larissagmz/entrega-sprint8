let listaProdutos = [
    {
        imagem: "./relogio1-removebg-preview.png",
        tipoProduto: "Relogios",
        titulo: "Fit Haiz",
        descricao:
            "Smartwatch Relógio Inteligente My Watch I Fit Haiz Tela Full Touch 1.28 Resistente à Água IP67 com ...",
        preco: 278.339,
    },
    {
        imagem: "./relogio2-removebg-preview.png",
        tipoProduto: "Relogios",
        titulo: "Ticwatch",
        descricao:
            " Ticwatch Pro 3 GPS Smart Watch, relógio inteligente, Wear OS, Processador...",
        preco: 100.339,
    },
    {
        imagem: "./relogio3-removebg-preview.png",
        tipoProduto: "Relogios",
        titulo: "TicWatch Pro 5",
        descricao:
            "TicWatch Pro 5 Android Wear OS Smartwatch Relógio Inteligente Snapdragon...",
        preco: 10.0,
    },
    {
        imagem: "./novocolar-removebg-preview.png",
        tipoProduto: "Colares",
        titulo: "Colar Sury",
        descricao:
            " Nosso colar Sury em formato de gravatinha, é estiloso e muito versátil. A zircônia...",
        preco: 11.0,
    },
    {
        imagem: "./images-removebg-preview.png",
        tipoProduto: "Colares",
        titulo: "Colar Julia",
        descricao:
            "Colar mini bolinhas amassadas, ideal para composições. Minimalista e delicado...",
        preco: 13.0,
    },
    {
        imagem: "./novocolar-removebg-preview.png",
        tipoProduto: "Colares",
        titulo: "Colar Julia Dourado",
        descricao:
            "Colar mini bolinhas amassadas, ideal para composições. Minimalista...",
        preco: 10.0,
    },
    {
        imagem: "./camisa1-removebg-preview.png",
        tipoProduto: "Camisetas",
        titulo: "Poliéster",
        descricao:
            "Camiseta Masculina Poliéster Com Toque de Algodão Camisa Blusa Treino Academia Tshrt Esporte",
        preco: 100,
    },
    {
        imagem: "./camiseta2-removebg-preview.png",
        tipoProduto: "Camisetas",
        titulo: "Dry Non-Wet",
        descricao:
            "Camiseta Dry Non-Wet, Não Amassa, Anti-Odor, Não Desbota Dial Cyclo...",
        preco: 290,
    },
    {
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

function separarCards(list) {}
renderizarCards(listaProdutos);
