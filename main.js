const form = document.getElementById('form-validação');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message');

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    const frasesInspiradoras = [
        "O sucesso é a soma de pequenos esforços, repetidos dia após dia!", 
        "Acredite em si mesmo! Sua força é maior do que você pensa.", 
        "Grandes conquistas devem começar com o primeiro passo.", 
        "Não hesite em cometer erros, pois é assim que você aprende.", 
        "A persistência realiza o impossível "
    ];

    // Seleciona uma frase aleatória do array
    const fraseAleatoria = frasesInspiradoras[Math.floor(Math.random() * frasesInspiradoras.length)];
    const mensagemSucesso = `<i>${fraseAleatoria}</i>`;
    const mensagemErro = `Não foi dessa vez, tente novamente`;
    const mensagemErroIgual = `A igualdade pode ser boa em muitos momentos, mas não dessa vez. Continue tentando`;

    if (valorB > valorA) {
        containerMensagemErro.style.display = 'none';
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else if (valorB === valorA) {
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.innerHTML = mensagemErroIgual;
        containerMensagemErro.style.display = 'block';
    } else {
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
});
