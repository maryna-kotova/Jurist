let body = document.body;
let burger = document.getElementById('burger');
// let burger1 = document.getElementById('burger1');
let menu = document.getElementById('menu');
// let menu1 = document.getElementById('menu1');

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});


