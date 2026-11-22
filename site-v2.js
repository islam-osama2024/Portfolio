var nav=document.getElementById('nav'),toggle=document.getElementById('menu-toggle'),navLinks=document.getElementById('nav-links');
addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>10)},{passive:true});
toggle.addEventListener('click',function(){navLinks.classList.toggle('open')});
navLinks.addEventListener('click',function(e){if(e.target.tagName==='A')navLinks.classList.remove('open')});
if('IntersectionObserver' in window){
  var t=document.querySelectorAll('.feature,.card,.arch,.about-text,.about-side,.big-links a,.sec-head');
  t.forEach(function(el){el.classList.add('rv')});
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('on');io.unobserve(en.target)}})},{threshold:.1});
  t.forEach(function(el){io.observe(el)});
}
