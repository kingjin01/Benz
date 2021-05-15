const Btns = document.querySelectorAll('.model-btn');
const All = document.querySelector('.all');
const Spans = document.querySelectorAll('.icon-btn-items .icon-btn .model-btn span')

const carProducts = document.querySelector('.car-products');

const hatchback = document.querySelector('.hatchback');
const sedan = document.querySelector('.sedan');
const Coupé = document.querySelector('.Coupé');
const suv = document.querySelector('.suv');
const roadster = document.querySelector('.roadster');
const cabriolet = document.querySelector('.cabriolet');

Btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.target)

        e.preventDefault();

        const btnDate = btn.dataset.car;

        if(e.target) {
            e.target.classList.add('active');
        }else if(!e.target){
            e.target.classList.remove('active');
        }

        if(btnDate === hatchback.dataset.kind) {
            hatchback.style.display = 'block';
            sedan.style.display = 'none';
            Coupé.style.display = 'none';
            suv.style.display = 'none';
            roadster.style.display = 'none';
            cabriolet.style.display = 'none';
        }

        if(btnDate === sedan.dataset.kind) {
            hatchback.style.display = 'none';
            sedan.style.display = 'block';
            Coupé.style.display = 'none';
            suv.style.display = 'none';
            roadster.style.display = 'none';
            cabriolet.style.display = 'none';
        }

        if(btnDate === Coupé.dataset.kind) {
            hatchback.style.display = 'none';
            sedan.style.display = 'none';
            Coupé.style.display = 'block';
            suv.style.display = 'none';
            roadster.style.display = 'none';
            cabriolet.style.display = 'none';
        }

        if(btnDate === suv.dataset.kind) {
            hatchback.style.display = 'none';
            sedan.style.display = 'none';
            Coupé.style.display = 'none';
            suv.style.display = 'block';
            roadster.style.display = 'none';
            cabriolet.style.display = 'none';
        }

        if(btnDate === roadster.dataset.kind) {
            hatchback.style.display = 'none';
            sedan.style.display = 'none';
            Coupé.style.display = 'none';
            suv.style.display = 'none';
            roadster.style.display = 'block';
            cabriolet.style.display = 'none';
        }

        if(btnDate === cabriolet.dataset.kind) {
            hatchback.style.display = 'none';
            sedan.style.display = 'none';
            Coupé.style.display = 'none';
            suv.style.display = 'none';
            roadster.style.display = 'none';
            cabriolet.style.display = 'block';
        }
        if(btnDate === All.dataset.car) {
            hatchback.style.display = 'block';
            sedan.style.display = 'block';
            Coupé.style.display = 'block';
            suv.style.display = 'block';
            roadster.style.display = 'block';
            cabriolet.style.display = 'block';
        }
    });
});



const handleClick = function(e) {

    Spans.forEach(function(span){
        span.classList.remove('active');
    });

    e.target.classList.add('active')
}

Spans.forEach(function(btn){

    btn.addEventListener('click', handleClick);

});