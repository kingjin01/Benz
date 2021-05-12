const Btns = document.querySelectorAll('.model-btn');

const carProducts = document.querySelector('.car-products');

const hatchback = document.querySelector('.hatchback');
const sedan = document.querySelector('.sedan');
const Coupé = document.querySelector('.Coupé');
const suv = document.querySelector('.suv');
const roadster = document.querySelector('.roadster');
const cabriolet = document.querySelector('.cabriolet');

Btns.forEach(function(btn){
    btn.addEventListener('click', function(e){

        e.preventDefault();

        const btnDate = btn.dataset.car;

        // if(btnDate === hatchback.dataset.kind) {
        //     carProducts.textContent = hatchback;
        // }
    })
});