let listaProdutos = [
    {
        id: 1,
        imagem: "./relogio1-removebg-preview.png",
        tipoProduto: "Relogios",
        titulo: "Fit Haiz",
        descricao:
            "Smartwatch Relógio Inteligente My Watch I Fit Haiz Tela Full Touch 1.28 Resistente à Água IP67 com ...",
        preco: 200.303,
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
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let divInf = document.createElement("div");
        let tipoProduto = document.createElement("div");
        let nomeTipoProduto = document.createElement("p");
        let titulo = document.createElement("p");
        let descricao = document.createElement("p");
        let preco = document.createElement("strong");
        let botao = document.createElement("button");

        liProdutos.className = "produto";
        divInf.className = "inf-produto";
        tipoProduto.className = "tipo-produto";
        titulo.className = "titulo";
        preco.className = "preco";
        botao.className = "botao-comprar";

        img.src = list[i].imagem;
        nomeTipoProduto.innerText = list[i].tipoProduto;
        titulo.innerText = list[i].titulo;
        preco.innerText = precoFormatado;
        botao.innerText = "Adicionar ao carrinho";
        descricao.innerText = list[i].descricao;

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

renderizarCards(listaProdutos);
const divVitrine = document.querySelectorAll(".lista-produto");
function acharItens() {
    let form = document.querySelector(".formulario");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let produtos = [];
        divVitrine.forEach((ul) => {
            ul.innerHTML = "";
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
            }
        } else {
            renderizarCards(listaProdutos);
            adicionarCarrinho(listaProdutos);
        }
    });
}
let carrinhoCompras = document.querySelector(".div-carrinho-vazio");
divInfCarrinho = document.querySelector(".inf-vazia");
let pesquisa = document.querySelector(".pesquisa");

function filtrarItens(list) {
    let listaBotoes = document.querySelectorAll(".botaoNav");
    let divBotoes = document.querySelector(".botoes");
    let listaRelogios = [];
    let listaColares = [];
    let listCamisetas = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].tipoProduto === "Relogios") {
            listaRelogios.push(list[i]);
        } else if (list[i].tipoProduto === "Colares") {
            listaColares.push(list[i]);
        } else {
            listCamisetas.push(list[i]);
        }
    }
    for (let i = 0; i < listaBotoes.length; i++) {
        listaBotoes[i].setAttribute("data-id", i);
    }
    for (let j = 0; j < listaBotoes.length; j++) {
        listaBotoes[j].addEventListener("click", (e) => {
            let id = Number(listaBotoes[j].getAttribute("data-id"));
            if (id === 0) {
                divVitrine.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderizarCards(listaProdutos);
                adicionarCarrinho(listaProdutos);
            }
            if (id === 1) {
                divVitrine.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderizarCards(listaRelogios);
                adicionarCarrinho(listaRelogios);
            } else if (id === 2) {
                divVitrine.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderizarCards(listaColares);
                adicionarCarrinho(listaColares);
            } else if (id === 3) {
                divVitrine.forEach((ul) => {
                    ul.innerHTML = "";
                });
                renderizarCards(listCamisetas);
                adicionarCarrinho(listCamisetas);
                console.log(listCamisetas);
            }
        });
    }
}

let produtosCarrinho = [];
let contadorIdCarrinho = 1;
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

            for (let l = 0; l < list.length; l++) {
                if (id === list[l].id) {
                    let produto = list[l];
                    produtosCarrinho.push({
                        ...produto,
                        id: contadorIdCarrinho++,
                    });
                }
            }

            console.log(produtos);
            carrinhoCompras.innerHTML = "";
            divInfCarrinho.classList.add("carrinho-inf");
            cardsCarrinho(produtosCarrinho);
            removerProdutosCarrinho(produtosCarrinho);
        });
    }
}

function removerProdutosCarrinho(list) {
    let botaoRemover = document.querySelectorAll(".remover-carrinho");
    console.log(botaoRemover);
    for (let i = 0; i < list.length; i++) {
        botaoRemover[i].setAttribute("data-id", list[i].id);
    }
    for (let k = 0; k < botaoRemover.length; k++) {
        botaoRemover[k].addEventListener("click", (e) => {
            let id = Number(botaoRemover[k].getAttribute("data-id"));
            console.log("lk");

            for (let j = 0; j < list.length; j++) {
                console.log("k");

                if (id === list[j].id) {
                    list.splice(j, 1);
                    console.log(list);
                }
            }

            carrinhoCompras.innerHTML = "";
            cardsCarrinho(list);
            removerProdutosCarrinho(list);
            if (list.length === 0) {
                carrinhoCompras.classList.remove("outro-carrinho");
                carrinhoCompras.classList.add("div-carrinho-vazio");
                carrinhoCompras.innerHTML =
                    '  <p id="carrinho-vazio">Carrinho vazio</p><p>Adicione itens</p>';
                divInfCarrinho.innerHTML = "";
                divInfCarrinho.classList.remove("carrinho-inf");
            }
        });
    }
}

function cardsCarrinho(list) {
    let ul = document.createElement("ul");
    ul.className = "lista-carrinho";

    let precoTotal = 0;
    let quantidadeTotal = 0;
    for (let i = 0; i < list.length; i++) {
        let precoFormatado = list[i].preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        precoTotal += list[i].preco;
        quantidadeTotal += 1;
        let precoTotalFormatado = precoTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        let li = document.createElement("li");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let div = document.createElement("div");
        let titulo = document.createElement("titulo");
        let preco = document.createElement("strong");
        let botaoRemover = document.createElement("button");
        li.className = "produto-carrinho";
        div.className = "inf-produto-carrinho";
        botaoRemover.className = "remover-carrinho";
        img.src = list[i].imagem;
        titulo.innerText = list[i].titulo;
        preco.innerText = precoFormatado;
        botaoRemover.innerText = "remover do carrinho";
        carrinhoCompras.appendChild(ul);
        ul.append(li);
        li.append(figure, div);
        figure.append(img);
        div.append(titulo, preco, botaoRemover);

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
    <div class="quantidade-preco"><p>Quantidade:</p><p>Total:</p></div>
    <div><p>${quantidadeTotal}</p><p>${precoTotalFormatado}</p></div>
`;
        pesquisa.append(divInfCarrinho);
    }
}

adicionarCarrinho(listaProdutos);
filtrarItens(listaProdutos);
acharItens();
