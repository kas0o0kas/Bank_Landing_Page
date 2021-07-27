const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const menu = document.querySelector('.header__menu');


btnMenu.addEventListener('click', function(){
    //close Menu
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noscroll');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
    }
    //open Menu
    else{
        header.classList.add('open');
        body.classList.add('noscroll');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        menu.classList.remove('fade-out');
        menu.classList.add('fade-in');
    }
});



// jQuery(document).ready(function(){
//     jQuery('.header__menu a').hover(function(){
//         if(jQuery('.header__menu').css('visibility','visible')){
//             jQuery(this).css('backgroundColor','red');
//         }
        
//     });
// })
