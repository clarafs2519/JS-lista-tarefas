const inputItem = document.getElementById("input-item");

let contador = 0;



export function criarItemLista(){

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


    return itemLista;
    
}
