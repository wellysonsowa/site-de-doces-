document.addEventListener("DOMContentLoaded", function () {
    const precoTotalSpan = document.getElementById("precoTotal");
    const adicionarAoTotalButtons = document.querySelectorAll(".adicionar-ao-total");

    let total = 0;

    adicionarAoTotalButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productDiv = button.closest('.product');
            const quantidadeInput = productDiv.querySelector('.quantidade');

            let quantidade = parseInt(quantidadeInput.value);
            if (isNaN(quantidade) || quantidade < 1) {
                alert('Por favor, insira uma quantidade válida.');
                return;
            }

            const precoProduto = parseFloat(button.getAttribute("data-preco"));
            total += quantidade * precoProduto;
            precoTotalSpan.textContent = total.toFixed(2);
        });
    });
});
