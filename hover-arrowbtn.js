const Hovers = document.querySelectorAll('.hover');
const arrow = document.querySelector('.top i');
const Bottom = document.querySelector('.reference .bottom');

Hovers.forEach(function(hover){
    hover.addEventListener('mouseover', function(){
        hover.classList.toggle('zero');
    });

    hover.addEventListener('mouseout', function(){
        hover.classList.remove('zero');
    });
    
});

arrow.addEventListener('click', function(){
    arrow.classList.toggle('rotate');
    Bottom.classList.toggle('a');
    console.log(Bottom)
})