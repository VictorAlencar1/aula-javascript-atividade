var nome = "";
var senha = "";

function validar() {

    nome = document.getElementById("login").value;
    senha = document.getElementById("senha").value;

    if (nome === "" || senha === "") {
        alert("Usuário e/ou Senha estão inválidos.");

        return;

    }

    else {
        alert("Você será direcionado para nossa página principal.")
    }

}