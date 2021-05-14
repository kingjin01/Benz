const Item = document.querySelectorAll('.item');
const imgSlider = document.querySelector('.img-slider');

let Count = 1;

function slide() {
    if(Count > Item.length -1) {
        Count = 0;
    }
    imgSlider.style.transform = `translateX(${-Count * 1681}px)`

    Count++

}

// function enter() {
//     Item.forEach(function(Items){
//         Items.addEventListener('mouseenter', function(e){
//             clearInterval(interval);
//         })
//     })
// }

// function out() {
//     Item.forEach(function(Items){
//         Items.addEventListener('mouseout', function(e){
//             setInterval(slide,4000);
//         });
//     });
// }

// enter();
// out();

    const interval = setInterval(slide,4000);

