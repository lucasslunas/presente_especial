/*
 * TRILHAS SONORAS — LIVRINHO DA GABI ♡
 * Aqui você pode colocar músicas em QUALQUER UMA das 24 páginas.
 * Salve os arquivos na pasta audio/ (ex.: audio/minha-musica.mp3).
 *
 * Para ativar uma faixa, substitua arquivo: '' pelo caminho do áudio.
 * inicio e fim são segundos (fim: null = tocar até o final).
 * Pode incluir várias faixas entre [ ] na mesma página, separadas por vírgulas.
 * A voz na última página também funciona aqui, sem perder as músicas.
 *
 * MODELO PARA COPIAR:
 * { titulo: 'Nome da música', arquivo: 'audio/nome.mp3', inicio: 35, fim: 60, tipo: 'musica' }
 *
 * Página 4: 0:00 a 0:40 de Trevo (Tu) — ANAVITÓRIA e Tiago Iorc, com saída suave.
 * Página 5: 0:00 a 1:20 de Every Breath You Take, arquivo editado com saída suave.
 * Página 6: primeiros 29 segundos de Me Apaixonei.
 * Página 7: 0:00 a 0:36 de O Sol — Vitor Kley, com saída suave.
 * Página 9: primeiros 26 segundos de Pupila.
 * Página 11: 0:41 a 1:02 de Mina do Condomínio, editado como um trecho de 21 segundos.
 * Página 21: 0:00 a 1:13 de Seu Astral, editado como trecho de 73 segundos.
 * Página 15: 1:10 a 2:40 de Purple Rain, editado como trecho de 90 segundos.
 * Página 16: 0:00 a 0:30 de Brega Demais, editado como trecho de 30 segundos.
 * Página 17: 0:00 a 0:59 de 222-0210, editado como trecho de 59 segundos.
 * Página 20: 0:00 a 2:10 de Somewhere Over the Rainbow, editado como trecho de 130 segundos.
 * Página 14: 0:52 a 1:08 de Dois Passarinhos, editado como trecho de 16 segundos.
 * Página 22: 0:00 a 1:10 do instrumental de piano de Aquarela, com saída suave.
 * Página 19: 0:00 a 2:02 de Better Together — Jack Johnson, com saída suave.
 * Página 18: 0:00 a 1:16 de Amei Te Ver — Tiago Iorc, com saída suave.
 * Páginas 12 e 13: 0:00 a 1:00 de Quando Bate Aquela Saudade — Rubel; o áudio segue sem reiniciar entre elas.
 * A gravação de voz do Lucas também toca ao chegar na página 24, como as músicas,
 * se o navegador permitir. É possível pausar ou recomeçar pelo player.
 */
window.TRILHAS_GABI = {
  1:  [], // Oi, Gabi!
  2:  [], // Uma cartinha pra você...
  3:  [], // Gabi, ♡
  4:  [ // Pequenas conversas, grandes lembranças — 0:00 a 0:40 de Trevo (Tu)
    { titulo: 'Trevo (Tu) — ANAVITÓRIA e Tiago Iorc (0:00 a 0:40)', arquivo: 'audio/trevo-tu-pequenas-conversas-0-a-40.mp3', inicio: 0, fim: 40, tipo: 'musica' },
  ],
  5:  [ // Pequenos momentos, grandes significados — primeiros 80 segundos de Every Breath You Take
    { titulo: 'Every Breath You Take — The Police (0:00 a 1:20)', arquivo: 'audio/every-breath-you-take-pequenos-momentos-0-a-80.mp3', inicio: 0, fim: 80, tipo: 'musica' },
  ],
  6:  [ // O sorriso que eu nunca esqueci — O dia em que eu te vi pela primeira vez
    { titulo: 'Me Apaixonei (A Primeira Vez Que Eu Te Vi) — César Menotti & Fabiano', arquivo: 'audio/me-apaixonei-primeira-vez-29s.mp3', inicio: 0, fim: 29, tipo: 'musica' },
  ],
  7:  [ // Uma cadeira pra você... — 0:00 a 0:36 de O Sol
    { titulo: 'O Sol — Vitor Kley (0:00 a 0:36)', arquivo: 'audio/o-sol-cadeira-0-a-36.mp3', inicio: 0, fim: 36, tipo: 'musica' },
  ],
  8:  [], // O dia em que descobri seu nome
  9:  [ // A primeira mensagem — 0:00 a 0:26 de Pupila
    { titulo: 'Pupila — ANAVITÓRIA e Vitor Kley (0:00 a 0:26)', arquivo: 'audio/pupila-primeira-mensagem-0-a-26.mp3', inicio: 0, fim: 26, tipo: 'musica' },
  ],
  10: [], // As conversas que sempre rendiam
  11: [ // Mais perto do que eu imaginava — 0:41 a 1:02 da música original
    { titulo: 'Mina do Condomínio — 0:41 a 1:02', arquivo: 'audio/mina-do-condominio-41-a-62.mp3', inicio: 0, fim: 21, tipo: 'musica' },
  ],
  12: [ // Quando percebi que você ia embora — trilha compartilhada com a próxima página
    { titulo: 'Quando Bate Aquela Saudade — Rubel (0:00 a 1:00)', arquivo: 'audio/rubel-quando-bate-aquela-saudade-paginas-12-13-0-a-60.mp3', inicio: 0, fim: 60, tipo: 'musica', grupoContinuo: 'despedida-12-13' },
  ],
  13: [ // Quando percebi que você ia embora — continuação da mesma música (sem reiniciar)
    { titulo: 'Quando Bate Aquela Saudade — Rubel (0:00 a 1:00)', arquivo: 'audio/rubel-quando-bate-aquela-saudade-paginas-12-13-0-a-60.mp3', inicio: 0, fim: 60, tipo: 'musica', grupoContinuo: 'despedida-12-13' },
  ],
  14: [ // O último abraço — 0:52 a 1:08 de Dois Passarinhos
    { titulo: 'Dois Passarinhos — Giovana Costa (0:52 a 1:08)', arquivo: 'audio/dois-passarinhos-52-a-68.mp3', inicio: 0, fim: 16, tipo: 'musica' },
  ],
  15: [ // Eu torci para esse dia não chegar — 1:10 a 2:40 da música original
    { titulo: 'Purple Rain — Prince (1:10 a 2:40)', arquivo: 'audio/purple-rain-70-a-160.mp3', inicio: 0, fim: 90, tipo: 'musica' },
  ],
  16: [ // Sem você por lá... — 0:00 a 0:30 da música original
    { titulo: 'Brega Demais — Marília Mendonça (0:00 a 0:30)', arquivo: 'audio/brega-demais-sem-voce-0-a-30.mp3', inicio: 0, fim: 30, tipo: 'musica' },
  ],
  17: [ // Depois que você foi embora... — primeiros 59 segundos
    { titulo: '222-0210 — César Menotti & Fabiano (0:00 a 0:59)', arquivo: 'audio/222-0210-depois-que-voce-foi-embora-0-a-59.mp3', inicio: 0, fim: 59, tipo: 'musica' },
  ],
  18: [ // Ainda sonho com o dia em que vou te ver de novo — 0:00 a 1:16 de Amei Te Ver
    { titulo: 'Amei Te Ver — Tiago Iorc (0:00 a 1:16)', arquivo: 'audio/amei-te-ver-reencontro-0-a-76.mp3', inicio: 0, fim: 76, tipo: 'musica' },
  ],
  19: [ // Quero construir novas memórias com você — 0:00 a 2:02 de Better Together
    { titulo: 'Better Together — Jack Johnson (0:00 a 2:02)', arquivo: 'audio/better-together-novas-memorias-0-a-122.mp3', inicio: 0, fim: 122, tipo: 'musica' },
  ],
  20: [ // São os pequenos detalhes... — 0:00 a 2:10 da música original
    { titulo: 'Somewhere Over the Rainbow — Israel Kamakawiwoʻole (0:00 a 2:10)', arquivo: 'audio/somewhere-over-the-rainbow-pequenos-detalhes-0-a-130.mp3', inicio: 0, fim: 130, tipo: 'musica' },
  ],
  21: [ // Um poema pra você... — 0:00 a 1:13 da música original
    { titulo: 'Seu Astral — Jorge & Mateus (Ao Vivo em Jurerê)', arquivo: 'audio/seu-astral-poema-0-a-73.mp3', inicio: 0, fim: 73, tipo: 'musica' },
  ],
  22: [ // Você coloriu as paredes do meu coração — 0:00 a 1:10 de Aquarela (piano)
    { titulo: 'Aquarela — Toquinho (cover de piano, PiaNostalgia; 0:00 a 1:10)', arquivo: 'audio/aquarela-piano-coracao-0-a-70.mp3', inicio: 0, fim: 70, tipo: 'musica' },
  ],
  23: [], // O que o futuro reserva...
  24: [ // Obrigado por existir, Gabi. ♡ — as duas gravações são uma só mensagem.
    { titulo: 'Mensagem do Lucas — Parte 1 ♡', arquivo: 'audio/mensagem-final-lucas.mp3', inicio: 0, fim: null, tipo: 'voz', proximaAutomatica: true },
    { titulo: 'Mensagem do Lucas — Parte 2 ♡', arquivo: 'audio/mensagem-final-lucas-continuacao.mp3', inicio: 0, fim: null, tipo: 'voz' },
  ],
};
