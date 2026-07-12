const alunos = [
   "Gustavo",
   "Nilson",
   "Ezequiel",
   "Bruna",
]
// alert(alunos[1]);

//for (const aluno of alunos) {
//onsole.log(aluno);
//}
const carros = [
   {
      placa: "ABC-1234",
      cor: "Branca",
      marca: "wm",
      modelo: "Fusca",
      tetoSolar: false,
      chassi: "aa123456789",
   },

   {
      placa: "ABC-123456",
      cor: "azul",
      marca: "Chevrolet",
      modelo: "Chervrolet",
      tetoSolar: false,
      chassi: "aa12345678",
   },

   {
      placa: "ABC-123456",
      cor: "Amarela",
      marca: "Brasil",
      modelo: "Brasilia",
      tetoSolar: false,
      chassi: "aa1234",
   },
];
//alert(`o carros é: ${carros.marca} ${carros.modelo} - ${carros.placa}`);
//console.log(carros[0].placa);
//console.log(carros[1].placa);

//for (const carro of carros) {
// console.log(carro.modelo);

//}

function popularTabela() {
   const tbody = document.querySelector("#tabela-carros tbody");

   let html = "";
   for (const carro of carros) {
      html += `<tr>  
         <td>${carro.placa}</td>
         <td>${carro.cor}</td>
         <td>${carro.marca}</td>
         <td>${carro.modelo}</td>
         <td>${carro.chassi}</td>
         <td>${carro.tetoSolar ? 'Sim' : 'Não'}</td>
      </tr>`;
   }

   tbody.innerHTML = html;

}

popularTabela();