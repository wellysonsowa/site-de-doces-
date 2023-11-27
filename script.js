function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var houseNumber = document.getElementById('houseNumber').value;
    var neighborhood = document.getElementById('neighborhood').value;
    var city = document.getElementById('city').value;
    var zipCode = document.getElementById('zipCode').value;
    var landmark = document.getElementById('landmark').value;

    // Faça algo com os dados, por exemplo, exibir um alerta
    alert('compra realizada com sucesso!\n\nNome Completo: ' + fullName + '\nNúmero da Casa/Apartamento: ' + houseNumber + '\nBairro: ' + neighborhood + '\nCidade: ' + city + '\nCEP: ' + zipCode + '\nPonto de Referência: ' + landmark);

    // Limpar o formulário após o envio
    document.getElementById('deliveryForm').reset();

    // Aguardar 3 segundos (3000 milissegundos) e redirecionar para o novo link
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 3000);
}

function voltarParaPrimeiraPagina() {
    window.location.href = 'index.html';
}
