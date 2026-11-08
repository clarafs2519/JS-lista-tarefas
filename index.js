import { criarItemLista } from "./scripts/criarItemLista.js";

const listadetarefas = document.getElementById("lista-de-tarefas");



const botaoAdd = document.getElementById("adicionar-item");

botaoAdd.addEventListener("click", (eventoClique) => { eventoClique.preventDefault();
    const ItemLista =  criarItemLista();
    listadetarefas.appendChild(ItemLista);
    verificarLista();

});
 
const mensagemVazia = document.querySelector(".mensagemvazia");
function verificarLista(){
    const itensListas = listadetarefas.querySelectorAll("li");
    if (itensListas.length ===0){
        mensagemVazia.style.display = "block";
    } else{
        mensagemVazia.style.display = "none";
    }

}

verificarLista();