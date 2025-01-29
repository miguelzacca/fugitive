const container = document.querySelector('.container');
const pergunta = document.querySelector('.pergunta');
const resposta = document.querySelector('.resposta');
const area = document.querySelector('.area');
const nao = document.querySelector('.nao');
const sim = document.querySelector('.sim');

nao.addEventListener('mouseover', () => {
    newLeft = area.clientWidth - nao.clientWidth;
    newTop = area.clientHeight - nao.clientHeight;
    randLeft = Math.floor(Math.random() * newLeft);
    randTop = Math.floor(Math.random() * newTop);

    area.appendChild(nao);
    Object.assign(nao.style, {
        position: 'absolute',
        left: `${randLeft}px`,
        top: `${randTop}px`
    });
});

sim.addEventListener('click', () => {
    pergunta.style.display = 'none';
    resposta.style.display = 'block';
    nao.removeAttribute('style');
    container.appendChild(nao);
});