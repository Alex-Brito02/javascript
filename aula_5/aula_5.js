const API_URL = "https://6a557805e49d9eb2cc55c328.mockapi.io/produtos";

async function buscarProdutos() {
try {
const resposta = await fetch(API_URL);
const produtos = await resposta.json();

popularTabela(produtos);
} catch (error) {
    console.error(error);
    
}

}

function popularTabela(produtos) {
    let html = "";
    for(const produtos of produtos) {
        html += ``;
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    }

}

function calcularTotal(preco, quantidade) {}


buscarProdutos();