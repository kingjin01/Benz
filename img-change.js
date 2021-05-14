const Img = document.querySelector('.hatchback .car img');
const dots = document.querySelectorAll('.hatchback .car .imgbtn .dot')


dots.forEach(function(dot){
    dot.addEventListener('click',function(e){
        const model =  dot.dataset.model;
        Img.src = model;

        // if(dot.classList.contains('click')){
        //     dot.classList.remove('click');
        // }else {
        //     dot.classList.add('click');
        // }
        
    })
});