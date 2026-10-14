/*
 * LIVRINHO DA GABI — feito para funcionar sem bibliotecas e sem internet.
 * Todas as 24 páginas podem receber música (e múltiplas faixas).
 * Configure trechos, arquivos e a mensagem final em trilhas.js.
 * A faixa de “Pequenos momentos, grandes significados” (0:00–1:20 de Every Breath You Take),
 * a faixa da primeira vez que a Gabi apareceu (Me Apaixonei 0–29 s),
 * a da primeira mensagem (Pupila 0–26 s) e de
 * “Mais perto do que eu imaginava” (0:41–1:02),
 * “Eu torci pra esse dia não chegar” (1:10–2:40 de Purple Rain),
 * “Sem você por lá” (0:00–0:30 de Brega Demais),
 * “Depois que você foi embora” (0:00–0:59 de 222-0210),
 * “São os pequenos detalhes” (0:00–2:10 de Somewhere Over the Rainbow),
 * “O último abraço” (0:52–1:08 de Dois Passarinhos)
 * “Um poema pra você” (0:00–1:13 de Seu Astral) e a trilha contínua
 * entre as páginas 12 e 13 (0:00–1:00 de Quando Bate Aquela Saudade) já estão incluídas.
 * A mensagem de voz da página 24 está incluída e só toca após clique intencional.
 */
const pages = [
  {slug:'01-capa', title:'Oi, Gabi! ♡', chapter:'O começo', category:'Uma surpresa feita com carinho', alt:'Capa do livrinho: Lucas e Gabi contemplam um pôr do sol sobre a cidade.'},
  {slug:'02-envelope', title:'Uma cartinha pra você...', chapter:'O começo', category:'Um pequeno presente', alt:'Envelope delicado sobre uma mesa, com flores e um selo de coração.'},
  {slug:'03-carta', title:'Gabi, ♡', chapter:'O começo', category:'Palavras que queria guardar', alt:'Uma carta escrita à mão para Gabi, apoiada numa mesa acolhedora.'},
  {slug:'04-pequenas-conversas', title:'Pequenas conversas, grandes lembranças', chapter:'As primeiras lembranças', category:'Onde a história começou', alt:'Scrapbook com Polaroids, bilhetes e lembranças das conversas entre Lucas e Gabi.'},
  {slug:'05-pequenos-momentos', title:'Pequenos momentos, grandes significados', chapter:'As primeiras lembranças', category:'Os olhares, os sorrisos, os pequenos ois', alt:'Colagem de lembranças com olhares tímidos no restaurante e cumprimentos de longe.'},
  {slug:'06-primeiro-sorriso', title:'O sorriso que eu nunca esqueci', chapter:'As primeiras lembranças', category:'O dia em que eu te conheci', alt:'Ilustrações da primeira vez que Gabi passou pela porta e sorriu.'},
  {slug:'07-cadeira', title:'Uma cadeira pra você...', chapter:'As primeiras lembranças', category:'Tecelagem 3', alt:'A brincadeira da cadeira quando Lucas foi arrumar a impressora de etiquetas.'},
  {slug:'08-nome', title:'O dia em que descobri seu nome', chapter:'As primeiras lembranças', category:'Denise Gabriela, o Gol e a moto', alt:'Terceira conversa, quando Lucas descobriu o nome de Gabi e detalhes sobre seu carro e sua moto.'},
  {slug:'09-primeira-mensagem', title:'A primeira mensagem...', chapter:'A conexão cresceu', category:'A coragem de dizer oi', alt:'Scrapbook mostrando a timidez de Lucas antes de mandar a primeira mensagem para Gabi no Instagram.'},
  {slug:'10-conversas', title:'As conversas que sempre rendiam', chapter:'A conexão cresceu', category:'Filmes, estudos e risadas', alt:'Cenas dos dois conversando sobre estudos, filmes e assuntos espontâneos no trabalho.'},
  {slug:'11-mais-perto', title:'Mais perto do que eu imaginava', chapter:'A conexão cresceu', category:'Cadeiras mais próximas', alt:'Colagem com Lucas e Gabi conversando lado a lado perto dos computadores da empresa.'},
  {slug:'12-partida', title:'Quando percebi que você ia embora', chapter:'A saudade começou', category:'Palavras que viraram desenhos', alt:'A notícia do exame demissional e o começo das cartas e desenhos que Lucas preparou.'},
  {slug:'13-partida-continuacao', title:'Quando percebi que você ia embora — continuação', chapter:'A saudade começou', category:'Outra parte daquela lembrança', alt:'Outra composição da notícia do exame demissional: Lucas pensativo, desenhos, cartas e os primeiros sinais da saudade.'},
  {slug:'13-ultimo-abraco', title:'O último abraço', chapter:'A saudade começou', category:'14 de julho', alt:'Lucas e Gabi se abraçam pela última vez na salinha, ao lado da porta e do quadro de avisos.'},
  {slug:'14-nao-queria-que-chegasse', title:'Eu torci para esse dia não chegar', chapter:'A saudade começou', category:'Mais tempo, mais conversas', alt:'A entrega dos chocolates, desenhos e textinhos, seguida do abraço de Gabi.'},
  {slug:'15-sem-voce', title:'Sem você por lá...', chapter:'A saudade e os dias', category:'Quando a rotina mudou', alt:'O local de trabalho e o restaurante parecem diferentes depois que Gabi foi embora.'},
  {slug:'16-depois-da-partida', title:'Depois que você foi embora...', chapter:'A saudade e os dias', category:'A vida continua em mensagens', alt:'Lucas se lembra dos corredores e fica feliz ao escrever e receber mensagens de Gabi.'},
  {slug:'17-reencontro', title:'Ainda sonho com o dia em que vou te ver de novo', chapter:'As possibilidades', category:'Biblioteca, cinema, praça e muito mais', alt:'Momentos imaginados de Lucas e Gabi em livraria, shopping, cinema, parque e praça.'},
  {slug:'18-novas-memorias', title:'Quero construir novas memórias com você', chapter:'As possibilidades', category:'O que importa é a companhia', alt:'Scrapbook de momentos imaginados: conversas, risadas e lembranças que poderiam viver juntos.'},
  {slug:'19-detalhes', title:'São os pequenos detalhes...', chapter:'As possibilidades', category:'Mensagens, áudios e sentimentos', alt:'Uma colagem sobre a alegria de receber notificações, conversar por mensagem e ouvir áudios de Gabi.'},
  {slug:'20-poema', title:'Um poema pra você...', chapter:'As possibilidades', category:'Um poema escrito por Lucas', alt:'Poema dedicado ao brilho do olhar, ao sorriso e aos cachos de Gabi, com desenhos e notas musicais.'},
  {slug:'21-coloriu-meu-coracao', title:'Você coloriu as paredes do meu coração', chapter:'Um carinho que fica', category:'Pequenos momentos, grandes significados', alt:'Flores simbólicas, fotografias e uma ilustração dos dois conversando ao pôr do sol.'},
  {slug:'22-futuro', title:'O que o futuro reserva...', chapter:'Um carinho que fica', category:'Quero continuar conhecendo você', alt:'Carta sobre continuar conversando e construindo lembranças, ao lado de um céu de pôr do sol.'},
  {slug:'23-agradecimento', title:'Obrigado por existir, Gabi. ♡', chapter:'Um carinho que fica', category:'Beijos e abraços, com carinho, Lucas', alt:'Cena final: Lucas e Gabi vistos de costas diante de um pôr do sol estrelado, com agradecimento e assinatura.'},
];

const $ = s => document.querySelector(s);
const els = {
  pageImage:$('#pageImage'), artwork:$('#artwork'), ambient:$('#ambientPicture'),
  pageNumber:$('#pageNumber'), totalPages:$('#totalPages'), chapterLabel:$('#chapterLabel'),
  pageCategory:$('#pageCategory'), pageTitle:$('#pageTitle'), progressTrack:$('#progressTrack'),
  progressFill:$('#progressFill'), progressPercent:$('#progressPercent'),
  prevBtn:$('#prevBtn'), nextBtn:$('#nextBtn'), artNext:$('#artNext'), artHome:$('#artHome'), envelope:$('#envelopeHit'),
  indexDialog:$('#indexDialog'), chapterGrid:$('#chapterGrid'),
  zoomDialog:$('#zoomDialog'), zoomImage:$('#zoomImage'), zoomScroll:$('#zoomScroll'),
  audio:$('#sceneAudio'), audioBtn:$('#audioBtn'), audioLabel:$('#audioLabel'), audioIcon:$('#audioIcon'),
  audioPanel:$('#audioPanel'), audioPageTitle:$('#audioPageTitle'), audioTracks:$('#audioTracks'),
  audioTransport:$('#audioTransport'), audioPlayBtn:$('#audioPlayBtn'), audioPlayIcon:$('#audioPlayIcon'),
  audioNowTitle:$('#audioNowTitle'), audioTime:$('#audioTime'), audioSeek:$('#audioSeek'),
  audioAuto:$('#audioAuto'),
  rotateTip:$('#rotateTip'), toast:$('#toast'), shell:$('#shell'), fullscreenBtn:$('#fullscreenBtn'), fullscreenLabel:$('#fullscreenLabel'), fullscreenIcon:$('#fullscreenIcon')
};

let pageIndex=0, transitionKey=0, envelopeOpening=false, toastTimeout, currentAudio=null;
let audioPlaying=false, trackIndex=0, loadedAudioKey='', autoSoundtrack=true;
const soundtracks = window.TRILHAS_GABI || {};
const pageTrackList = (index=pageIndex) => Array.isArray(soundtracks[index+1]) ? soundtracks[index+1] : [];
const configuredTracks = (index=pageIndex) => pageTrackList(index).filter(track => typeof track.arquivo==='string' && track.arquivo.trim()!=='');
const chosenTrack = () => configuredTracks()[trackIndex] || null;
const timeText = seconds => Number.isFinite(seconds) && seconds>=0 ? `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}` : '--:--';
const padded=i=>String(i+1).padStart(2,'0');
const asset=i=>`assets/${pages[i].slug}.webp`;
const thumb=i=>`assets/${pages[i].slug}-mini.webp`;

function toast(message,{duration=3400,readingTip=false}={}){
  clearTimeout(toastTimeout);
  els.toast.textContent=message;
  els.toast.classList.toggle('reading-tip',readingTip);
  els.toast.classList.add('visible');
  toastTimeout=setTimeout(()=>{
    els.toast.classList.remove('visible','reading-tip');
  },duration);
}
function refreshTransport(){
  const chosen=chosenTrack();
  els.audioTransport.hidden=!chosen;
  els.audioPlayIcon.textContent=audioPlaying?'Ⅱ':'▶';
  els.audioPlayBtn.setAttribute('aria-label',audioPlaying?'Pausar áudio':'Reproduzir áudio');
  els.audioNowTitle.textContent=chosen?.titulo || '';
  els.audioBtn.classList.toggle('is-playing',audioPlaying);
  els.audioBtn.setAttribute('aria-expanded',String(!els.audioPanel.hidden));
  const start=Number(chosen?.inicio)||0;
  const total=Number.isFinite(els.audio.duration)?els.audio.duration:NaN;
  const stop=chosen?.fim==null?total:Math.min(total||Infinity,Number(chosen.fim));
  const length=Number.isFinite(stop)?Math.max(0,stop-start):NaN;
  const elapsed=Math.max(0,els.audio.currentTime-start);
  els.audioTime.textContent=`${timeText(elapsed)} / ${timeText(length)}`;
  els.audioSeek.min='0';els.audioSeek.max=Number.isFinite(length)&&length>0?String(length):'100';
  els.audioSeek.value=String(Math.min(elapsed,Number(els.audioSeek.max)));
}
function stopAudio(){
  els.audio.pause();
  els.audio.removeAttribute('src');
  els.audio.load();
  loadedAudioKey='';
  audioPlaying=false;
  els.audioBtn.classList.remove('is-playing');
  refreshTransport();
}
function renderAudioPanel(){
  const page=pages[pageIndex];
  els.audioPageTitle.textContent=`Página ${padded(pageIndex)} · ${page.title}`;
  els.audioTracks.replaceChildren();
  const entries=pageTrackList();
  const actual=configuredTracks();
  if(entries.length===0){
    const empty=document.createElement('p');empty.className='audio-empty';
    empty.textContent='Esta página está pronta para receber a música que você escolher. ♡';
    els.audioTracks.append(empty);
  } else {
    entries.forEach((entry)=>{
      const isReady=typeof entry.arquivo==='string'&&entry.arquivo.trim().length>0;
      const pos=actual.indexOf(entry);
      const button=document.createElement('button');button.type='button';button.className='audio-track';
      button.disabled=!isReady;
      if(pos===trackIndex&&isReady)button.classList.add('selected');
      const symbol=document.createElement('span');symbol.className='audio-track-icon';symbol.textContent=entry.tipo==='voz'?'🎙':'♫';
      const label=document.createElement('span');label.className='audio-track-title';label.textContent=entry.titulo||'Música sem título';
      const note=document.createElement('small');note.textContent=isReady ? `Trecho: ${timeText(Number(entry.inicio)||0)}${entry.fim==null?' até o fim':` – ${timeText(Number(entry.fim))}`}`:'Ainda não adicionada';
      label.append(note);button.append(symbol,label);
      if(isReady)button.addEventListener('click',()=>{trackIndex=pos;stopAudio();renderAudioPanel();playSelectedTrack();});
      els.audioTracks.append(button);
    });
  }
  els.audioAuto.checked=autoSoundtrack;
  $('#audioPanelTitle').textContent=chosenTrack()?.tipo==='voz'?'Uma mensagem do Lucas ♡':'A música desta página';
  refreshTransport();
}
function updateAudio(){
  const all=pageTrackList();
  const chosen=chosenTrack();
  els.audioIcon.textContent=chosen?.tipo==='voz'?'🎙':'♫';
  els.audioLabel.textContent=audioPlaying?'Tocando…':configuredTracks().length ? (chosen?.tipo==='voz'?'Ouvir mensagem':'Ouvir música') : 'Trilha sonora';
  els.audioBtn.setAttribute('aria-label',`Abrir o painel de áudio da página ${padded(pageIndex)}`);
  if(!els.audioPanel.hidden)renderAudioPanel();
}
function showAudioPanel(){
  els.audioPanel.hidden=false;
  els.audioBtn.setAttribute('aria-expanded','true');
  renderAudioPanel();
}
function closeAudioPanel(){
  els.audioPanel.hidden=true;
  els.audioBtn.setAttribute('aria-expanded','false');
}
function toggleAudioPanel(){els.audioPanel.hidden?showAudioPanel():closeAudioPanel();}
async function playSelectedTrack(){
  const track=chosenTrack();
  if(!track){toast('Essa página está esperando sua trilha sonora. ♫');return;}
  if(audioPlaying){els.audio.pause();audioPlaying=false;refreshTransport();updateAudio();return;}
  const key=`${pageIndex}:${trackIndex}`;
  if(loadedAudioKey!==key){
    els.audio.src=track.arquivo;
    els.audio.load();
    loadedAudioKey=key;
    const start=Math.max(0,Number(track.inicio)||0);
    try{els.audio.currentTime=start;}catch(_e){}
  }
  try{
    await els.audio.play();
    audioPlaying=true;
    refreshTransport();updateAudio();
  }catch(_e){
    audioPlaying=false;
    refreshTransport();
    toast('Não foi possível tocar esta faixa. Confira o arquivo em audio/ ou toque em reproduzir novamente.');
  }
}
els.audio.addEventListener('loadedmetadata',()=>{
  const t=chosenTrack();if(t){const start=Math.max(0,Number(t.inicio)||0);if(els.audio.currentTime<start)els.audio.currentTime=start;}
  refreshTransport();
});
els.audio.addEventListener('ended',()=>{audioPlaying=false;refreshTransport();updateAudio();});
els.audio.addEventListener('timeupdate',()=>{
  const t=chosenTrack();if(!t)return;
  if(t.fim!=null && els.audio.currentTime>=Number(t.fim)){
    els.audio.pause();audioPlaying=false;
    els.audio.currentTime=Math.max(0,Number(t.inicio)||0);
    updateAudio();
  }
  refreshTransport();
});
els.audio.addEventListener('error',()=>{audioPlaying=false;refreshTransport();toast('Arquivo de áudio não encontrado. Confira o nome e o caminho em trilhas.js.');});
function indexFromHash(){
  const match=location.hash.match(/^#pagina-(\d+)$/);
  return match?Math.min(pages.length-1,Math.max(0,Number(match[1])-1)):0;
}
function showPage(index,{instant=false,updateHash=true}={}){
  if(index<0||index>=pages.length)return;
  // Quando duas páginas pertencem ao mesmo momento musical, não cortamos a faixa
  // ao passar de uma para a outra: a música continua do segundo em que estava.
  // Ao abrir diretamente qualquer uma delas, ela começa em 0:00 normalmente.
  const previousTrack=chosenTrack();
  const nextTracks=configuredTracks(index);
  const nextTrack=nextTracks[0]||null;
  const continueSound=Boolean(
    Math.abs(index-pageIndex)===1 && loadedAudioKey &&
    previousTrack?.grupoContinuo &&
    nextTrack?.grupoContinuo===previousTrack.grupoContinuo &&
    previousTrack.arquivo===nextTrack.arquivo &&
    previousTrack.inicio===nextTrack.inicio &&
    previousTrack.fim===nextTrack.fim &&
    // Se o trecho já terminou, o player poderá começar novamente na outra tela.
    els.audio.currentTime<(Number(previousTrack.fim)||Infinity)-0.1 &&
    (audioPlaying || els.audio.currentTime>0.05)
  );
  if(!continueSound)stopAudio();
  trackIndex=0;
  if(continueSound)loadedAudioKey=`${index}:0`;
  envelopeOpening=false;
  els.artwork.classList.remove('art-opening');
  pageIndex=index;
  if(isImmersive())els.artwork.scrollTop=0;
  const page=pages[index];
  const id=++transitionKey;
  els.pageNumber.textContent=padded(index);
  els.totalPages.textContent=String(pages.length).padStart(2,'0');
  els.chapterLabel.textContent=page.chapter;
  els.pageCategory.textContent=page.category;
  els.pageTitle.textContent=page.title;
  els.pageTitle.title=page.title;
  els.progressFill.style.width=`${(index+1)/pages.length*100}%`;
  els.progressPercent.textContent=`${Math.round((index+1)/pages.length*100)}%`;
  els.progressTrack.setAttribute('aria-valuenow',index+1);
  els.prevBtn.disabled=index===0;
  els.nextBtn.setAttribute('aria-label',index===pages.length-1?'Recomeçar o livrinho':'Próxima página');
  els.artNext.setAttribute('aria-label',index===pages.length-1?'Recomeçar o livrinho':'Continuar para a próxima página');
  els.artHome.hidden=index!==pages.length-1;
  els.envelope.hidden=index!==1;
  updateAudio();
  if(autoSoundtrack && configuredTracks().length && !continueSound){
    // Com este modo ligado, músicas e mensagem final tentam tocar ao chegar à página.
    // Em dispositivos que bloqueiam reprodução, o botão normal continua disponível.
    playSelectedTrack();
  }
  if(updateHash)history.replaceState(null,'',`#pagina-${index+1}`);
  const display=()=>{
    if(id!==transitionKey)return;
    els.pageImage.src=asset(index);
    els.pageImage.alt=page.alt;
    els.ambient.style.backgroundImage=`url('${asset(index)}')`;
    els.artwork.classList.remove('art-enter');
    if(!instant){void els.artwork.offsetWidth;els.artwork.classList.add('art-enter');}
    if(index+1<pages.length){const preload=new Image();preload.src=asset(index+1);}
    document.querySelectorAll('.chapter-card').forEach((card,i)=>card.classList.toggle('active',i===index));
  };
  if(els.pageImage.src.endsWith(asset(index)))display();
  else {const pre=new Image();pre.onload=display;pre.onerror=()=>toast('Não foi possível abrir essa ilustração. Confira a pasta assets.');pre.src=asset(index);}
}
function next(){showPage(pageIndex===pages.length-1?0:pageIndex+1);}
function previous(){if(pageIndex>0)showPage(pageIndex-1);}
function openEnvelope(){
  if(pageIndex!==1||envelopeOpening)return;
  envelopeOpening=true;
  els.artwork.classList.add('art-opening');
  setTimeout(()=>{if(envelopeOpening){els.artwork.classList.remove('art-opening');next();}},530);
}
function buildIndex(){
  els.chapterGrid.innerHTML='';
  pages.forEach((page,i)=>{
    const card=document.createElement('button');card.type='button';card.className='chapter-card';
    card.setAttribute('aria-label',`Ir à página ${i+1}: ${page.title}`);
    const picture=document.createElement('img');picture.src=thumb(i);picture.loading='lazy';picture.alt='';
    const num=document.createElement('span');num.className='card-num';num.textContent=`PÁGINA ${padded(i)}`;
    const title=document.createElement('span');title.className='card-title';title.textContent=page.title;
    card.append(picture,num,title);
    card.addEventListener('click',()=>{els.indexDialog.close();showPage(i);});
    els.chapterGrid.append(card);
  });
}
function openIndex(){buildIndex();els.indexDialog.showModal();const active=els.chapterGrid.querySelectorAll('.chapter-card')[pageIndex];active?.scrollIntoView({block:'nearest'});}
// Ampliação automática: um toque utiliza o máximo da tela, sem controles de zoom.
// No celular horizontal, usa toda a largura e permite deslizar para baixo
// quando a ilustração é mais alta que a tela. No vertical, usa a altura
// disponível e permite deslocar horizontalmente para ler as letras.
function zoomSizing(){
  const img=els.zoomImage;
  if(!els.zoomDialog.open || !img.naturalWidth)return;
  const visibleW=Math.max(1,els.zoomScroll.clientWidth-6);
  const visibleH=Math.max(1,els.zoomScroll.clientHeight-6);
  const aspect=img.naturalWidth/img.naturalHeight;
  const isPortrait=window.matchMedia('(orientation: portrait) and (max-width: 700px)').matches;
  const isMobile=window.matchMedia('(pointer:coarse)').matches || window.innerWidth<=920;
  let drawWidth;
  if(isPortrait) drawWidth=Math.max(visibleW, visibleH*aspect);
  else if(isMobile) drawWidth=visibleW;
  else drawWidth=Math.min(visibleW,visibleH*aspect);
  img.style.width=`${Math.round(Math.min(img.naturalWidth,drawWidth))}px`;
}
function openZoom(){
  els.zoomImage.onload=()=>{zoomSizing();els.zoomScroll.scrollTo({top:0,left:0,behavior:'instant'});};
  els.zoomImage.alt=pages[pageIndex].alt;
  els.zoomImage.src=asset(pageIndex);
  if(!els.zoomDialog.open)els.zoomDialog.showModal();
  zoomSizing();
  els.zoomScroll.scrollTo({top:0,left:0,behavior:'instant'});
}
// TELA CHEIA: modo de leitura horizontal, com gesto lateral para trocar páginas.
// Android/desktop: Fullscreen API nativa. iOS/Safari sem suporte: modo imersivo CSS.
let immersiveFallback = false;
let immersiveBarTimeout = null;
let immersiveTouchStart = null;
const immersiveTouchMode = () => matchMedia('(pointer:coarse)').matches;
function isImmersive(){return Boolean(document.fullscreenElement === els.shell || immersiveFallback);}
function showImmersiveBar(){
  clearTimeout(immersiveBarTimeout);
  if(!isImmersive() || !immersiveTouchMode())return;
  els.shell.classList.remove('immersive-bar-hidden');
  // Give the reader time to find "Sair", then get the controls out of the drawing.
  immersiveBarTimeout=setTimeout(()=>{
    if(isImmersive() && els.audioPanel.hidden && !els.indexDialog.open)
      els.shell.classList.add('immersive-bar-hidden');
  },3800);
}
function syncFullscreenUI(){
  const active=isImmersive();
  els.shell.classList.toggle('is-immersive',active);
  if(active)showImmersiveBar();
  else {clearTimeout(immersiveBarTimeout);els.shell.classList.remove('immersive-bar-hidden');}
  els.fullscreenBtn.setAttribute('aria-pressed',String(active));
  els.fullscreenBtn.setAttribute('aria-label',active?'Sair da tela cheia':'Entrar em tela cheia para passar as páginas');
  els.fullscreenBtn.title=active?'Sair da tela cheia':'Tela cheia: passar páginas deslizando';
  els.fullscreenLabel.textContent=active?'Sair':'Tela cheia';
  els.fullscreenIcon.innerHTML=active
   ? '<path d="M3 9h6V3M21 9h-6V3M3 15h6v6M21 15h-6v6"/>'
   : '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>';
}
async function exitImmersive(){
  immersiveFallback=false;
  if(document.fullscreenElement===els.shell){
    try {await document.exitFullscreen();} catch(_e){}
  }
  try {if(screen.orientation?.unlock)screen.orientation.unlock();} catch(_e){}
  syncFullscreenUI();
}
async function enterImmersive(){
  // Chrome/Android mostra um aviso branco próprio quando requestFullscreen() é chamado.
  // O site não pode personalizar ou esconder esse aviso. No celular, optamos pelo
  // modo imersivo CSS, que mantém a navegação, a rolagem vertical e nossa dica.
  const isMobile = matchMedia('(pointer:coarse), (any-pointer:coarse), (max-width:920px)').matches;
  immersiveFallback=true;
  syncFullscreenUI();
  // O modo nativo permanece apenas no computador, onde o aviso de Android não existe.
  if(!isMobile && els.shell.requestFullscreen){
    try{
      await els.shell.requestFullscreen({navigationUI:'hide'});
      immersiveFallback=false;
      syncFullscreenUI();
    }catch(_e){syncFullscreenUI();}
  }
  if(isMobile){
    els.rotateTip.hidden=true;
    const landscape=matchMedia('(orientation:landscape)').matches;
    const tip=landscape
      ? '↕ A imagem continua mais abaixo: deslize para cima para ver o restante.\n↔ Deslize para os lados para trocar de página.\n♡ Toque para mostrar o botão Sair.'
      : '↻ Vire o celular de lado para ler as páginas maiores.\n↔ Deslize para os lados para trocar de página.\n♡ Toque para mostrar o botão Sair.';
    toast(tip,{duration:6200,readingTip:true});
  }
}
async function toggleImmersive(){
  if(isImmersive())await exitImmersive();else await enterImmersive();
}
document.addEventListener('fullscreenchange',()=>{
  if(document.fullscreenElement!==els.shell)immersiveFallback=false;
  syncFullscreenUI();
});
// Painel de áudio dentro do elemento em tela cheia, para funcionar no Android.
els.shell.append(els.audioPanel,els.toast);

function initOrientationTip(){
  const isPortrait=matchMedia('(max-width:700px) and (orientation:portrait)').matches;
  let alreadyShown=false;try{alreadyShown=sessionStorage.getItem('gabi-rotate-dismissed')==='yes';}catch(_e){}
  if(isPortrait&&!alreadyShown)setTimeout(()=>{if(!isImmersive() && matchMedia('(orientation:portrait)').matches)els.rotateTip.hidden=false;},1200);
}
function closeRotate(){els.rotateTip.hidden=true;try{sessionStorage.setItem('gabi-rotate-dismissed','yes');}catch(_e){}}

$('#homeBtn').addEventListener('click',()=>showPage(0));
$('#prevBtn').addEventListener('click',previous);
$('#nextBtn').addEventListener('click',next);
els.artNext.addEventListener('click',next);
els.artHome.addEventListener('click',()=>showPage(0));
els.envelope.addEventListener('click',openEnvelope);
$('#indexBtn').addEventListener('click',async()=>{if(isImmersive())await exitImmersive();openIndex();});
$('#closeIndexBtn').addEventListener('click',()=>els.indexDialog.close());
$('#zoomBtn').addEventListener('click',openZoom);
els.fullscreenBtn.addEventListener('click',toggleImmersive);
// In immersive mobile view a short tap restores the top controls;
// horizontal page swipes and vertical scrolling should NOT restore them.
els.shell.addEventListener('pointerdown',event=>{
  if(!isImmersive() || !immersiveTouchMode() || !event.isPrimary)return;
  immersiveTouchStart={x:event.clientX,y:event.clientY,id:event.pointerId};
});
els.shell.addEventListener('pointerup',event=>{
  const start=immersiveTouchStart;
  immersiveTouchStart=null;
  if(!start || start.id!==event.pointerId || !isImmersive() || !immersiveTouchMode())return;
  if(Math.hypot(event.clientX-start.x,event.clientY-start.y)<16)showImmersiveBar();
});
els.shell.addEventListener('pointercancel',()=>{immersiveTouchStart=null;});
// Don't hide the exit button while a keyboard user is tabbing through it.
els.fullscreenBtn.addEventListener('focus',()=>{if(isImmersive())showImmersiveBar();});
els.indexBtn?.addEventListener('focus',()=>{if(isImmersive())showImmersiveBar();});
// Touching a drawing opens the reading/zoom view. The embedded Continue and Envelope buttons still work.
els.pageImage.addEventListener('click',()=>{if(!isImmersive())openZoom();});
$('#closeZoomBtn').addEventListener('click',()=>els.zoomDialog.close());
els.audioBtn.addEventListener('click',toggleAudioPanel);
$('#audioCloseBtn').addEventListener('click',closeAudioPanel);
els.audioPlayBtn.addEventListener('click',playSelectedTrack);
els.audioAuto.addEventListener('change',()=>{
  autoSoundtrack=els.audioAuto.checked;
  if(autoSoundtrack && configuredTracks().length && !audioPlaying)playSelectedTrack();
  else if(autoSoundtrack)toast('Pronto! As músicas e a mensagem final vão tocar ao avançar, se o navegador permitir. ♡');
});
els.audioSeek.addEventListener('input',()=>{
  const track=chosenTrack();if(!track || !loadedAudioKey)return;
  const start=Math.max(0,Number(track.inicio)||0);
  els.audio.currentTime=start+Number(els.audioSeek.value);
});
document.addEventListener('pointerdown',event=>{
  if(!els.audioPanel.hidden && !els.audioPanel.contains(event.target) && !els.audioBtn.contains(event.target))closeAudioPanel();
});
$('#closeRotateBtn').addEventListener('click',closeRotate);
window.addEventListener('resize',()=>{if(els.zoomDialog.open)zoomSizing();if(matchMedia('(orientation:landscape)').matches)els.rotateTip.hidden=true;});
window.addEventListener('hashchange',()=>showPage(indexFromHash(),{updateHash:false}));
document.addEventListener('keydown',e=>{
  if(e.key==='Escape' && immersiveFallback){e.preventDefault();exitImmersive();return;}
  if(els.indexDialog.open||els.zoomDialog.open)return;
  if(!els.audioPanel.hidden){if(e.key==='Escape')closeAudioPanel();return;}
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
  if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();next();}
  else if(e.key==='ArrowLeft'){e.preventDefault();previous();}
  else if(e.key==='Home'){e.preventDefault();showPage(0);}
  else if(e.key==='End'){e.preventDefault();showPage(pages.length-1);}
});
// Deslizar para os lados troca página inclusive na tela cheia.
// Também funciona quando o gesto começa sobre o botão transparente desenhado na arte.
let touchStart=null, suppressSwipeClickUntil=0;
$('#stage').addEventListener('touchstart',e=>{
  if(e.touches.length!==1 || e.target.closest('.page-arrow')){touchStart=null;return;}
  const t=e.changedTouches[0];touchStart={x:t.clientX,y:t.clientY};
},{passive:true});
$('#stage').addEventListener('touchend',e=>{
  if(!touchStart || e.changedTouches.length!==1){touchStart=null;return;}
  const t=e.changedTouches[0], dx=t.clientX-touchStart.x, dy=t.clientY-touchStart.y;
  touchStart=null;
  if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.35){
    suppressSwipeClickUntil=performance.now()+650;
    if(dx<0)next();else previous();
  }
},{passive:true});
$('#stage').addEventListener('click',e=>{
  if(performance.now()<suppressSwipeClickUntil && !e.target.closest('.page-arrow')){e.preventDefault();e.stopImmediatePropagation();}
},true);
$('#progressTrack').addEventListener('click',e=>{const r=e.currentTarget.getBoundingClientRect();const ratio=(e.clientX-r.left)/r.width;showPage(Math.max(0,Math.min(pages.length-1,Math.floor(ratio*pages.length))));});
els.indexDialog.addEventListener('click',e=>{if(e.target===els.indexDialog)els.indexDialog.close();});
els.zoomDialog.addEventListener('click',e=>{if(e.target===els.zoomDialog)els.zoomDialog.close();});
// Toda abertura ou atualização do site recomeça na capa.
// A navegação durante a leitura continua guardando o número da página na URL.
showPage(0,{instant:true,updateHash:true});
// Evita que o navegador restaure a posição vertical anterior ao recarregar.
window.scrollTo({top:0,left:0,behavior:'instant'});
initOrientationTip();
