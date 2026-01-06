const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        mostrarBotao();
    } else {
        esconderBotao();
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function mostrarBotao() {
    btnTopo.classList.remove('hidden');
}

function esconderBotao() {
    btnTopo.classList.add('hidden');
}