const formulario = document.getElementById('test-form');
const numero1 = document.getElementById('number-one');
const numero2 = document.getElementById('number-two');
const mensagemErro = document.querySelector('.mensagem-erro');
const mensagemSucesso = document.querySelector('.mensagem-sucesso')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (parseFloat(numero2.value) <= parseFloat(numero1.value)) {
        mensagemErro.textContent = `O segundo número deve ser maior que o primeiro.`;
        mensagemErro.style.display = 'block';

        numero2.classList.add('error');
    } else {
        mensagemErro.textContent = ``;
        mensagemErro.style.display = 'none';
        numero2.classList.remove('error');
        mensagemSucesso.textContent = `Teste finalizado e encaminhado`;
        mensagemSucesso.style.display = 'block';
    }
});
