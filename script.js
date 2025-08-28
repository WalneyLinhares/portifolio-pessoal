// Trocando o icone do input dark/light
document.getElementById('input-light').addEventListener('click', () => {
    const iconButton = document.getElementById('icon-light');
    const isDark = document.body.classList.toggle('light-mode');

    iconButton.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
})