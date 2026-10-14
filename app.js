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
  zoomDialog:$('#zoomDialog'), zoomImage:$('#zoomImage'), zoomScroll:$('#zoomScroll'), zoomTitle:$('#zoomTitle'), zoomValue:$('#zoomValue'),
  audio:$('#sceneAudio'), audioBtn:$('#audioBtn'), audioLabel:$('#audioLabel'), audioIcon:$('#audioIcon'),
  audioPanel:$('#audioPanel'), audioPageTitle:$('#audioPageTitle'), audioTracks:$('#audioTracks'),
  audioTransport:$('#audioTransport'), audioPlayBtn:$('#audioPlayBtn'), audioPlayIcon:$('#audioPlayIcon'),
  audioNowTitle:$('#audioNowTitle'), audioTime:$('#audioTime'), audioSeek:$('#audioSeek'),
  audioAuto:$('#audioAuto'),
  rotateTip:$('#rotateTip'), toast:$('#toast')
};

let pageIndex=0, transitionKey=0, envelopeOpening=false, toastTimeout, zoomFactor=1, currentAudio=null;
let audioPlaying=false, trackIndex=0, loadedAudioKey='', autoSoundtrack=true;
const soundtracks = window.TRILHAS_GABI || {};
const pageTrackList = (index=pageIndex) => Array.isArray(soundtracks[index+1]) ? soundtracks[index+1] : [];
const configuredTracks = (index=pageIndex) => pageTrackList(index).filter(track => typeof track.arquivo==='string' && track.arquivo.trim()!=='');
const chosenTrack = () => configuredTracks()[trackIndex] || null;
const timeText = seconds => Number.isFinite(seconds) && seconds>=0 ? `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}` : '--:--';
const padded=i=>String(i+1).padStart(2,'0');
const asset=i=>`assets/${pages[i].slug}.webp`;
const thumb=i=>`assets/${pages[i].slug}-mini.webp`;

function toast(message){
  clearTimeout(toastTimeout);
  els.toast.textContent=message;
  els.toast.classList.add('visible');
  toastTimeout=setTimeout(()=>els.toast.classList.remove('visible'),3400);
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
function zoomSizing(){
  const img=els.zoomImage;
  if(!img.naturalWidth)return;
  const fit=Math.min((window.innerWidth-48)/img.naturalWidth,(window.innerHeight-110)/img.naturalHeight);
  img.style.width=`${Math.round(img.naturalWidth*fit*zoomFactor)}px`;
  els.zoomValue.textContent=`${Math.round(zoomFactor*100)}%`;
}
function openZoom(){zoomFactor=(matchMedia('(pointer:coarse)').matches||window.innerWidth<=700)?2:1;els.zoomTitle.textContent=pages[pageIndex].title;els.zoomImage.src=asset(pageIndex);els.zoomImage.alt=pages[pageIndex].alt;els.zoomDialog.showModal();els.zoomImage.onload=zoomSizing;zoomSizing();els.zoomScroll.scrollTo(0,0);}
function setZoom(change){zoomFactor=Math.max(1,Math.min(4,zoomFactor+change));zoomSizing();}
// Double tap in zoom view to magnify text, or return to fit-to-screen.
let lastZoomTap=0;
els.zoomImage.addEventListener('click',()=>{
  const now=Date.now();
  if(now-lastZoomTap<330){zoomFactor=zoomFactor<1.7?2.4:1;zoomSizing();lastZoomTap=0;}
  else lastZoomTap=now;
});
// Two-finger pinch zoom; a single finger can scroll the enlarged illustration.
let pinchStartDistance=0, pinchStartFactor=1;
els.zoomScroll.addEventListener('touchstart',e=>{
  if(e.touches.length!==2)return;
  const [a,b]=e.touches;
  pinchStartDistance=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
  pinchStartFactor=zoomFactor;
},{passive:true});
els.zoomScroll.addEventListener('touchmove',e=>{
  if(e.touches.length!==2||pinchStartDistance<=0)return;
  const [a,b]=e.touches;
  const distance=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
  zoomFactor=Math.max(1,Math.min(4,pinchStartFactor*distance/pinchStartDistance));
  zoomSizing();e.preventDefault();
},{passive:false});
els.zoomScroll.addEventListener('touchend',e=>{if(e.touches.length<2)pinchStartDistance=0;},{passive:true});
function initOrientationTip(){
  const isPortrait=matchMedia('(max-width:700px) and (orientation:portrait)').matches;
  let alreadyShown=false;try{alreadyShown=sessionStorage.getItem('gabi-rotate-dismissed')==='yes';}catch(_e){}
  if(isPortrait&&!alreadyShown)setTimeout(()=>{if(matchMedia('(orientation:portrait)').matches)els.rotateTip.hidden=false;},1200);
}
function closeRotate(){els.rotateTip.hidden=true;try{sessionStorage.setItem('gabi-rotate-dismissed','yes');}catch(_e){}}

$('#homeBtn').addEventListener('click',()=>showPage(0));
$('#prevBtn').addEventListener('click',previous);
$('#nextBtn').addEventListener('click',next);
els.artNext.addEventListener('click',next);
els.artHome.addEventListener('click',()=>showPage(0));
els.envelope.addEventListener('click',openEnvelope);
$('#indexBtn').addEventListener('click',openIndex);
$('#closeIndexBtn').addEventListener('click',()=>els.indexDialog.close());
$('#fullscreenBtn').addEventListener('click',async()=>{
  try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('Use a opção de tela cheia do seu navegador para ampliar o livrinho.');}
  catch(_e){toast('Este navegador não permitiu tela cheia. Você ainda pode virar o celular.');}
});
$('#zoomBtn').addEventListener('click',openZoom);
// Touching a drawing opens the reading/zoom view. The embedded Continue and Envelope buttons still work.
els.pageImage.addEventListener('click',openZoom);
$('#closeZoomBtn').addEventListener('click',()=>els.zoomDialog.close());
$('#zoomInBtn').addEventListener('click',()=>setZoom(.3));
$('#zoomOutBtn').addEventListener('click',()=>setZoom(-.3));
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
  if(els.indexDialog.open||els.zoomDialog.open)return;
  if(!els.audioPanel.hidden){if(e.key==='Escape')closeAudioPanel();return;}
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
  if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();next();}
  else if(e.key==='ArrowLeft'){e.preventDefault();previous();}
  else if(e.key==='Home'){e.preventDefault();showPage(0);}
  else if(e.key==='End'){e.preventDefault();showPage(pages.length-1);}
});
let touchStart=null;
$('#stage').addEventListener('touchstart',e=>{if(e.target.closest('button'))return;const t=e.changedTouches[0];touchStart={x:t.clientX,y:t.clientY};},{passive:true});
$('#stage').addEventListener('touchend',e=>{if(!touchStart||e.target.closest('button')){touchStart=null;return;}const t=e.changedTouches[0],dx=t.clientX-touchStart.x,dy=t.clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.4){if(dx<0)next();else previous();}},{passive:true});
$('#progressTrack').addEventListener('click',e=>{const r=e.currentTarget.getBoundingClientRect();const ratio=(e.clientX-r.left)/r.width;showPage(Math.max(0,Math.min(pages.length-1,Math.floor(ratio*pages.length))));});
els.indexDialog.addEventListener('click',e=>{if(e.target===els.indexDialog)els.indexDialog.close();});
els.zoomDialog.addEventListener('click',e=>{if(e.target===els.zoomDialog)els.zoomDialog.close();});
// Start with the cover unless the link points to a specific page.
showPage(indexFromHash(),{instant:true,updateHash:false});
initOrientationTip();
