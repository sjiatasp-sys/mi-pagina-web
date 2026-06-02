
const btn = document.createElement('button');
btn.textContent = '🌙 Modo oscuro';
btn.classList.add('dark-mode-btn');
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        btn.textContent = '☀️ Modo claro';
    } else {
        btn.textContent = '🌙 Modo oscuro';
    }
});