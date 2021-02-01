// $('.wrapper').addClass('loaded');

// $('.icon-menu').click(function(event){
//    $(this).toggleClass('active');
//    $('.menu__body').toggleClass('active');
//    $('body').toggleClass('lock');
// });
let body = document.body;
let burger = document.getElementById('burger');
let menu = document.getElementById('menu');

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});

