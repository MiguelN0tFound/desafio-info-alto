function myFunction() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function validarSenha() {
    var senha = document.getElementById("senha").value;
    var confirmarcao = document.getElementById("confirmacao").value;

    if (senha != confirmarcao) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return false;
    }
  }