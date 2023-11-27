function submitForm() {
    // Obter os valores do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validar os campos (pode ser mais complexo dependendo das necessidades)
    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Simular o envio dos dados (substitua por sua lógica de envio real)
    alert("Dados enviados:\nNome: " + name + "\nE-mail: " + email + "\nMensagem: " + message);
  
    // Limpar o formulário após o envio (opcional)
    document.getElementById("contactForm").reset();
  }
  