

const button = document.getElementById('apply');
const keep_editing = document.getElementById('keep-editing');
const discard = document.getElementById('discard');
const modal = document.querySelector('.roy-modal');
const mclose = document.querySelector('.roy-modal .close');
const aclose = document.querySelector('.roy-alert .close');
const alert = document.querySelector('.roy-alert');



button.addEventListener( 'click' , function(e){
  e.preventDefault();

  modal.classList.add('active');
  
});


mclose.addEventListener( 'click' , function(){

  alert.style.display = 'flex';
});


aclose.addEventListener( 'click' ,function(){
  alert.style.display = 'none';
});


keep_editing.addEventListener( 'click' ,function(){
  alert.style.display = 'none';
});



discard.addEventListener( 'click' ,function(){
  alert.style.display = 'none';
  modal.classList.remove('active');

});




modal.addEventListener( 'click' , function(e){


  if ( e.target == this ) {

    modal.classList.remove('active');

  }
  
});




// Accordion .........


const accordion_header = document.querySelectorAll('.accordion-header');


accordion_header.forEach( item => {
   item.addEventListener('click' , function(){

    accordion_header.forEach( item => {  

     if (item != this) {

      item.classList.remove('active');
      item.nextElementSibling.style.height = '0px';
       
     }else{
      item.classList.toggle('active');
       
       if (item.classList.contains('active')) {
        item.classList.add('active');
        item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
       }else{
        item.classList.remove('active');
        item.nextElementSibling.style.height = '0px';
       }

     }

    });
  

   
 });
});



// Tab.......
const tab_menu = document.querySelectorAll('.roy-tab .tab-menu ul a');
const tab_pane_all = document.querySelectorAll('.roy-tab .tab-pane');

tab_menu.forEach( item => {
  item.addEventListener( 'click' , function(){
   

   tab_menu.forEach(item =>{
     item.classList.remove('active');
   });

   
  });

});



 

  




