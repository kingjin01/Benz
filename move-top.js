const Move = document.querySelector('.top-move');

Move.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})