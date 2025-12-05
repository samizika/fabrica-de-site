function validaForm() {

    let valido = true;
    const email = document.getElementById('email');
    let emailText = email.value.trim();

    if (!emailText.includes("@")) {
        console.log("Email inválido: falta @");
        valido = false;
    }

    let partesEmail = emailText.split("@");
    if (partesEmail[0].length < 7 || partesEmail[0].length > 127) {
        console.log("Email inválido: parte antes do @ deve ter entre 7 e 127 caracteres");
        valido = false;
    }

    
    const nome = document.getElementById("nome");
    let nomeText = nome.value.trim();

    if (nomeText.length < 3) {
        console.log("Nome inválido: mínimo 3 caracteres");
        valido = false;
    }

    
    const assunto = document.getElementById("assunto-select");
    if (assunto.value === "") {
        console.log("Escolha um assunto!");
        valido = false;
    }

   
    if (valido) {
        alert("Recebemos sua mensagem, em breve entraremos em contato.");
    } else {
        alert("Temos um erro no formulário. Corrija para seguir!");
    }
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    validaForm();
});