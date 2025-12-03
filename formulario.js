 function validaForm() {
            const email = document.getElementById('email');
            let emailText = email.value.trim();
            let valido = false;
            if (emailText.includes("@")) {
                console.log("Achei @!")
                valido = true;


            } else {
                valido = false;
            }

            let partesEmail = emailText.split("@");
            if (partesEmail[0].length >= 7 && partesEmail[0].length <= 127) {
                console.log("o tamanho está entre 7 e 1277");
                valido = true;

            } else {
                valido = false;
            }

            const nome = document.getElementById("nome");
            let nomeText = nome.value.trim();
            if (nome.length >= 3) {
                console.log("Nome atende ao tamanho mínimo")
                valido = true;


            } else {
                valido = false;
            }
            const textArea = document.getElementById("mensagem");
            let textAreaText = textArea.value.trim();
            if (textTexto === "") {
                console.log("Texto não pode ser vazio!")
                valido = true;

            } else {
                valido = false;
            }
            
            if (valido) {
                alert("recebemos sua mensagem, em breve entraremos em contato.")

            } else {
                alert("Temos um erro no formulario, corrija para seguir!")

            }
        }

        document.addEventListener("submit", function (e) {
            e.preventDefault();
            validaForm();
        })