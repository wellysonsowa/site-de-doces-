document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var menuList = document.getElementById('menuList');

    toggleButton.addEventListener('click', function() {
        // Alternar a visibilidade do menu ao clicar no botão
        menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
    });
});
