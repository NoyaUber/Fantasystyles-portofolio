(function(){
document.documentElement.classList.add('js');
var rv=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});rv.forEach(function(el){io.observe(el)})}else{rv.forEach(function(el){el.classList.add('in')})}
var ctx;
function tone(f,at,d){try{ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();var o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+at;o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.06,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+d)}catch(e){}}
function chime(){tone(660,0,.3);tone(880,.1,.3);tone(1320,.2,.5)}
for(var i=0;i<14;i++){var f=document.createElement('div');f.className='fly';
  f.style.left=(Math.random()*100)+'%';f.style.top=(20+Math.random()*60)+'%';
  f.style.setProperty('--fx',(Math.random()*80-40)+'px');f.style.setProperty('--fy',(Math.random()*80-40)+'px');
  f.style.animationDelay=(-Math.random()*8)+'s';f.style.animationDuration=(6+Math.random()*6)+'s';
  document.body.appendChild(f)}
var mo=document.querySelector('.moon');
if(mo&&window.matchMedia('(hover:hover)').matches)document.addEventListener('mousemove',function(e){var x=(e.clientX/innerWidth-.5)*-24,y=(e.clientY/innerHeight-.5)*-16;mo.style.transform='translate('+x+'px,'+y+'px)'});
var um=document.getElementById('umur');
if(um){var b=new Date(um.getAttribute('data-lahir')),n=new Date(),a=n.getFullYear()-b.getFullYear();if(n<new Date(n.getFullYear(),b.getMonth(),b.getDate()))a--;if(a>=5&&a<120)um.textContent=a}
var x=document.getElementById('xpbar');
if(x)setTimeout(function(){x.style.width='80%'},300);
function burst(px,py){
  for(var i=0;i<12;i++){var s=document.createElement('div');s.className='spark';s.textContent='\u2726';
  s.style.left=px+'px';s.style.top=py+'px';s.style.setProperty('--dx',(Math.random()*180-90)+'px');
  s.style.animationDelay=(Math.random()*.2)+'s';document.body.appendChild(s);setTimeout(function(el){el.remove()},1500,s)}
  chime();
}
document.querySelectorAll('.frame').forEach(function(f){f.addEventListener('click',function(e){burst(e.clientX,e.clientY)})});
document.addEventListener('click',function(e){if(e.target.closest('a'))tone(700,0,.15)});
})();
