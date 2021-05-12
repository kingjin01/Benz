const Haberger = document.querySelector('.hamberger')
const showMenu = document.querySelector('.sohw-menu')
const X = document.querySelector('.sohw-menu img');

Haberger.addEventListener('click', function(){
    showMenu.classList.toggle('show');
});

X.addEventListener('click',function(){
    showMenu.classList.remove('show');
});