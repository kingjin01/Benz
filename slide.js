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

setInterval(slide,4000);