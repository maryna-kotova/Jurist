let body = document.body;
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let list = document.querySelector('.header__list');

burger.addEventListener('click', ()=>{
   body.classList.toggle('lock');
   burger.classList.toggle('active');
   menu.classList.toggle('active');  
});

list.addEventListener('click', ()=>{
   if (menu.classList.contains("active")) {
      body.classList.remove('lock');
      burger.classList.remove('active');
      menu.classList.remove('active');        
   }
});

