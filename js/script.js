// *----------------Modal window--------------------*
// let body = document.body;
const first = document.querySelector('.first');

const second = document.querySelector('.second');
const secondH = second.getBoundingClientRect().height;
const secondItems = document.querySelectorAll('.second__item');
const secondItems1 = document.querySelector('.second__item1');
const secondItems2 = document.querySelector('.second__item2');
const secondItems3 = document.querySelector('.second__item3');
const secondItems4 = document.querySelector('.second__item4');

const modalWindow = document.querySelector('.modal__window');
const modalContainer = document.querySelector('.modal__container');
const modalBlocks = document.querySelectorAll('.modal__block');
const modalItems = document.querySelectorAll('.modal__items');

let heightClientWindow =  document.documentElement.clientHeight;
//Открытие модального окна
for (let i = 0; i < secondItems.length; i++) {
   secondItems[i].addEventListener('click', () => {          
      if(secondItems[i].classList.contains('second__item1')){  
         modalContainer.classList.add("item1-margin");         
      }
      else if(secondItems[i].classList.contains('second__item2')){  
         modalContainer.classList.add("item2-margin");        
      }
      else if(secondItems[i].classList.contains('second__item3')){ 
         modalContainer.classList.add("item3-margin");          
      }
      else if(secondItems[i].classList.contains('second__item4')){  
         modalContainer.classList.add("item4-margin");           
      }
      modalWindow.style.display = 'flex';
      modalBlocks[i].style.display = 'block'; 
   });
};

//Закрытие модального окна кликом
modalWindow.addEventListener('click', ()=>{   
   for (let i = 0; i < modalBlocks.length; i++) {
      modalBlocks[i].style.display = 'none';        
   }  
   modalWindow.style.display = 'none';
   modalContainer.classList.remove("item1-margin");  
   modalContainer.classList.remove("item2-margin"); 
   modalContainer.classList.remove("item3-margin"); 
   modalContainer.classList.remove("item4-margin"); 
});
//Закрытие модального окна скроллом
window.addEventListener('scroll', function() {
   let modalContainerHeight = modalContainer.getBoundingClientRect().height;
   if( modalContainer.getBoundingClientRect().bottom < 100 
      || (modalContainer.getBoundingClientRect().top - heightClientWindow) > 0
      )
      {
      for (let i = 0; i < modalBlocks.length; i++) {
         modalBlocks[i].style.display = 'none';        
      }  
      modalWindow.style.display = 'none';   
      modalContainer.classList.remove("item1-margin"); 
      modalContainer.classList.remove("item2-margin"); 
      modalContainer.classList.remove("item3-margin"); 
      modalContainer.classList.remove("item4-margin");     
   }   
});
