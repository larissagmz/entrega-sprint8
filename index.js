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
const divVitrine = document.querySelectorAll(".lista-produto");

renderizarCards(listaProdutos);

function acharItens() {
    let form = document.querySelector(".formulario");

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
                for (let i = 0; i < produtos.length; i++) {
                    produtos[i].id = i + 1;
                }
                renderizarCards(produtos);
                adicionarCarrinho(produtos);
                console.log(produtos);
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

// function adicionarCarrinho(list) {
//     let botaoLista = document.querySelectorAll(".botao-comprar");
//     let produtos = [];
//     for (let i = 0; i < botaoLista.length; i++) {
//         botaoLista[i].setAttribute("data-id", list[i].id);
//     }
//     for (let i = 0; i < botaoLista.length; i++) {
//         botaoLista[i].addEventListener("click", (e) => {
//             carrinhoCompras.classList.remove("div-carrinho-vazio");
//             carrinhoCompras.classList.add("outro-carrinho");
//             let id = Number(botaoLista[i].getAttribute("data-id"));
//             for (let j = 0; j < list.length; j++) {

//                 if (id === list[j].id) {
//                     let produto = { ...list[j], id: produtos.length + 1 };
//                     produtos.push(produto);
//                 }
//             }
//             console.log(produtos);
//             carrinhoCompras.innerHTML = "";
//             divInfCarrinho.classList.add("carrinho-inf");
//             cardsCarrinho(produtos);
//             removerProdutosCarrinho(produtos);
//         });
//     }
// }

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
                renderizarCards(list);
            }
            if (id === 1) {
                divVitrine.forEach((ul) => {
                    ul.innerHTML = ""; // Limpa o conteúdo de cada <ul>
                });
                renderizarCards(listaRelogios);
            } else if (id === 2) {
                divVitrine.forEach((ul) => {
                    ul.innerHTML = ""; // Limpa o conteúdo de cada <ul>
                });
                renderizarCards(listaColares);
            } else {
                divVitrine.forEach((ul) => {
                    ul.innerHTML = ""; // Limpa o conteúdo de cada <ul>
                });
                renderizarCards(listCamisetas);
            }
        });
    }
}
filtrarItens(listaProdutos);
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
                for (let l = 0; l < listaProdutos.length; l++) {
                    if (list[j].titulo === listaProdutos[l].titulo) {
                        if (id === listaProdutos[l].id) {
                            let produto = {
                                ...listaProdutos[l],
                                id: produtos.length + 1,
                            };
                            produtos.push(produto);
                        }
                    }
                }
            }
            console.log(produtos);
            carrinhoCompras.innerHTML = "";
            divInfCarrinho.classList.add("carrinho-inf");
            cardsCarrinho(produtos);
            removerProdutosCarrinho(produtos);
        });
    }
}

function removerProdutosCarrinho(list) {
    let botaoRemover = document.querySelectorAll(".remover-carrinho");
    console.log(botaoRemover);
    for (let i = 0; i < botaoRemover.length; i++) {
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

acharItens();
