// 1. Referências do HTML (Garantindo que todos os elementos estão aqui)
const secaoEnvelope = document.getElementById('area-envelope');
const secaoCartao = document.getElementById('area-cartao');
const imgDinamicaEnvelope = document.getElementById('img-dinamica-envelope');
const legendaGuia = document.getElementById('legenda-guia');
const cartaoFinal = document.getElementById('meuCartao');
const dicaFinal = document.querySelector('.dica-final'); // Seleciona o texto de dica do cartão

// Variáveis para controlar os passos
let faseEnvelope = 0; // Controla os cliques dentro da área do envelope
let faseCartao = 0;   // Controla os cliques dentro da área do cartão final

// --- FASE 1: LÓGICA DO ENVELOPE (Cliques 1, 2 e Transição) ---
// Adicionamos o escutador apenas na área do envelope
secaoEnvelope.addEventListener('click', () => {
    faseEnvelope++;

    if (faseEnvelope === 1) {
        // Clique 1: Envelope abre, ursinho espia
        imgDinamicaEnvelope.src = 'img/Urso_espiando.jpeg'; // Certifique-se de que o nome está correto
        legendaGuia.innerText = "Olha só quem apareceu... ✨";
    } 
    else if (faseEnvelope === 2) {
        // Clique 2: Ursinho com coração rosa e o texto (O estado da sua foto: image_52.png)
        imgDinamicaEnvelope.src = 'img/Urso_saindo.jpeg'; // Certifique-se de que o nome está correto
        legendaGuia.innerText = "Ele tem algo para você! 💖";
    } 
    else if (faseEnvelope === 3) {
        // Clique 3: TRANSIÇÃO SUAVE
        // Fazemos o envelope sumir (FadeOut)
        secaoEnvelope.style.opacity = '0';
        
        // Após o fadeout (600ms no CSS), fazemos a troca para a nova cena
        setTimeout(() => {
            // Esconde a área do envelope totalmente
            secaoEnvelope.classList.add('escondida');
            secaoEnvelope.classList.remove('ativa');
            
            // Mostra a área do cartão final (com opacidade inicial 0)
            secaoCartao.classList.remove('escondida');
            secaoCartao.classList.add('ativa');
            secaoCartao.style.opacity = '0'; // Garante que começa transparente

            // A dica final do cartão deve estar transparente no início
            dicaFinal.style.opacity = '0';

            // Fazemos o cartão final aparecer suavemente (FadeIn)
            setTimeout(() => {
                secaoCartao.style.opacity = '1';
            }, 50);

        }, 600); // 600ms (tempo da transição CSS)
    }
});

// --- FASE 2: LÓGICA DO CARTÃO FINAL (Cliques 4, 5 e Zoom) ---
// Adicionamos o escutador apenas na área do cartão final (cena-3d)
secaoCartao.addEventListener('click', () => {
    faseCartao++;

    // Esta área só fica disponível APÓS o clique 3 da fase anterior.

    if (faseCartao === 1) {
        // Clique 4: Aplica o ZOOM na imagem do Urso com Lírios (Frente)
        // Isso dá destaque e prepara para a dica final
        cartaoFinal.classList.add('com-zoom');
        
        // Mostra a dica final ("Clique para ler o que sinto 🌸") pulsando suavemente
        setTimeout(() => {
            dicaFinal.style.opacity = '1';
        }, 500); // Mostra 500ms após o zoom
    } 
    else if (faseCartao === 2) {
        // Clique 5: Faz o FLIP para revelar o verso com o poema
        // O zoom é mantido para facilitar a leitura.
        cartaoFinal.classList.add('virado');
    }
});