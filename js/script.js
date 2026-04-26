// Referências do HTML
const secaoEnvelope = document.getElementById('area-envelope');
const secaoCartao = document.getElementById('area-cartao');
const imgDinamicaEnvelope = document.getElementById('img-dinamica-envelope');
const legendaGuia = document.getElementById('legenda-guia');
const cartaoFinal = document.getElementById('meuCartao');
const dicaFinal = document.querySelector('.dica-final');

let faseEnvelope = 0;
let faseCartao = 0;

// Cliques na fase do Envelope (Steps 1-3)
secaoEnvelope.addEventListener('click', () => {
    faseEnvelope++;

    if (faseEnvelope === 1) {
        // Step 1: Ursinho espiando
        imgDinamicaEnvelope.src = 'img/Urso_espiando.jpeg';
        legendaGuia.innerText = "Olha só quem apareceu... ✨";
    } 
    else if (faseEnvelope === 2) {
        // Step 2: Ursinho com coração
        imgDinamicaEnvelope.src = 'img/Urso_saindo.jpeg';
        legendaGuia.innerText = "Ele tem algo para você! 💖";
    } 
    else if (faseEnvelope === 3) {
        // Step 3: TRANSIÇÃO
        secaoEnvelope.style.opacity = '0';
        
        setTimeout(() => {
            secaoEnvelope.classList.add('escondida');
            secaoCartao.classList.remove('escondida');
            secaoCartao.classList.add('ativa');
            secaoCartao.style.opacity = '0'; 

            dicaFinal.style.opacity = '0';

            setTimeout(() => {
                secaoCartao.style.opacity = '1';
                setTimeout(() => {
                    dicaFinal.style.opacity = '1';
                }, 1000); 
            }, 50);

        }, 600);
    }
});

// Cliques na fase do Cartão Final (Steps 4-6)
secaoCartao.addEventListener('click', () => {
    faseCartao++;

    if (faseCartao === 1) {
        // Step 4: Aplica o Zoom 
        cartaoFinal.classList.add('com-zoom');
    } 
    else if (faseCartao === 2) {
        // Step 5: VIRA o cartão para mostrar o poema
        cartaoFinal.classList.add('virado');
        dicaFinal.style.opacity = '0'; // Esconde a dica da frente
    }
    else if (faseCartao === 3) {
        // Step 6: Recarrega a página automaticamente
        location.reload();
    }
});