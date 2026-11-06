const inputItem = document.getElementById("input-item");
const listadetarefas = document.getElementById("lista-de-tarefas");

let contador = 0;


const botaoAdd = document.getElementById("adicionar-item");

botaoAdd.addEventListener("click", (eventoClique) => {eventoClique.preventDefault();
    // evento.preventDefault= bloqueia o carregamento da pagina
    if(inputItem.value === ""){
        alert("Insira um item");
        return
    }

    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    const inputChatbox =document.createElement("input");
    inputChatbox.type = "checkbox";
    inputChatbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

inputChatbox.addEventListener("click", function(){
    if (inputChatbox.checked){
        nomeItem.style.textDecoration = "line-through";

    }else
        nomeItem.style.textDecoration = "none";

});

    containerItemLista.appendChild(inputChatbox);
    containerItemLista.appendChild(nomeItem);

    itemLista.appendChild(containerItemLista);
    const diaSemana = new Date().toLocaleDateString("pt-br", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-br");
    const hora = new Date().toLocaleTimeString("pt-br", {hour:"numeric", minute:"numeric"});
    const datacompleta = `${diaSemana} (${data}) às ${hora}`
    const itemData = document.createElement("p");
    itemData.innerHTML=datacompleta;
    itemData.classList.add("texto-data");
    itemLista.appendChild(itemData);


    listadetarefas.appendChild(itemLista);
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