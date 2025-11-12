const area = document.querySelector('.area');
const lista = document.createElement('ul');
const input = document.querySelector('.formulario input');
const criar = document.querySelector('.botao');

let atividades = [];

lista.id = "lista-atividades"

area.appendChild(lista);

function novaAtividade(atividade) {
    const modelo = document.createElement('li');
    modelo.classList.add('atividade');

    const tarefa= {
        completo: false,
        nome: atividade 
    }
    modelo.innerHTML = `<div class='card-atividade'>${criarHtmlTarefa(tarefa,atividade.length)}  
                        </div>`;
    lista.appendChild(modelo);

    const checkbox = document.querySelector (`.tarefas-${atividades.length}`);
    checkbox.addEventListener("change", function () {
        const indiceTarefa = this.id.split("-")[1];
        //usa o valor atual do checkbox (true se marcado, false se desmarcado)//
        atividades [indiceTarefa].completo = this.checked;
        atualizarContadores();
    })


    atividades.push({ completo: false, nome: atividade });

    atualizarContadores();
}

function criarHtmlTarefa(tarefa) {
const li = document.createElement("li")
li.innerHTML= `
<input type="checkbox" ${tarefa.completo ? 'checked' : '' }
      data-id="${tarefa.id}" class="checkbox-tarefa">
        <span class="texto-tarefa ${tarefa.completo ? 'concluida' : ''}">
            ${tarefas.texto}
            </span> 
            <button class="botao-deletar" data-id="${tarefa.id}"><img/></button>`
            return li 


}

function atualizarContadores() {
    const criadas = document.getElementById("criadas");
    const concluidas = document.getElementById("concluidas");

    criadas.innerText = atividades.length;
    concluidas.innerText = `${atividades.filter(a => a.completo).length} de ${atividades.length}`;
}

criar.addEventListener('click', function () {
    const texto = input.value.trim();
    if (texto !== "") {
        novaAtividade(texto);
        input.value = "";
    }
});
