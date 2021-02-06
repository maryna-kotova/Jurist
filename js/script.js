// *----------------Modal window--------------------*
// let body = document.body;

const secondItems = document.querySelectorAll('.second__item');
const modalWindow = document.querySelector('.modal__window');
const modalContainer = document.querySelector('.modal__container');
const modalBlocks = document.querySelectorAll('.modal__block');
const modalItems = document.querySelectorAll('.modal__items');


//Вызов модального окна
for (let i = 0; i < secondItems.length; i++) {
   secondItems[i].addEventListener('click', ()=>{      
      modalWindow.style.display = 'flex';
      modalBlocks[i].style.display = 'block';
   })   
}

//Закрытие модального окна
modalWindow.addEventListener('click', ()=>{   
   for (let i = 0; i < modalBlocks.length; i++) {
      modalBlocks[i].style.display = 'none';        
   }  
   modalWindow.style.display = 'none';
})  