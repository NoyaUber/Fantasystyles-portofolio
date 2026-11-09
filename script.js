(function(){
var ctx;
function tone(f,at,d){try{ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();var o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+at;o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.06,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+d)}catch(e){}}
function chime(){tone(660,0,.3);tone(880,.1,.3);tone(1320,.2,.5)}
for(var i=0;i<14;i++){var f=document.createElement('div');f.className='fly';
  f.style.left=(Math.random()*100)+'%';f.style.top=(20+Math.random()*60)+'%';
  f.style.setProperty('--fx',(Math.random()*80-40)+'px');f.style.setProperty('--fy',(Math.random()*80-40)+'px');
  f.style.animationDelay=(-Math.random()*8)+'s';f.style.animationDuration=(6+Math.random()*6)+'s';
  document.body.appendChild(f)}
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
