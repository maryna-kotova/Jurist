let body = document.body;
let burger1 = document.getElementById('burger1');
let menu1 = document.getElementById('menu1');

burger1.addEventListener('click', ()=>{
   burger1.classList.toggle('active');
   menu1.classList.toggle('active');
   body.classList.toggle('lock');
});


