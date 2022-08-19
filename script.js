const imgTanya = document.querySelector('.img-tanya');
const imgJohn = document.querySelector('.img-john');
const testimonialTanya = document.querySelector('.testimonial-Tanya');
const testimonialJohn = document.querySelector('.testimonial-john');
const testimonialName1 = document.querySelector('.testimonial-name-1');
const testimonialName2 = document.querySelector('.testimonial-name-2');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


prev.addEventListener('click', function clickPrev(){
    imgTanya.classList.remove('img-desativada')
    testimonialTanya.classList.remove('testimonial-desativado');
    testimonialName1.classList.remove('testimonial-name-desativado');
    imgJohn.classList.add('img-desativada');
    testimonialJohn.classList.add('testimonial-desativado');
    testimonialName2.classList.add('testimonial-name-desativado')

});

next.addEventListener('click', function clickNext(){
    imgTanya.classList.add('img-desativada');
    testimonialTanya.classList.add('testimonial-desativado');
    testimonialName1.classList.add('testimonial-name-desativado');
    imgJohn.classList.remove('img-desativada');
    testimonialJohn.classList.remove('testimonial-desativado');
    testimonialName2.classList.remove('testimonial-name-desativado')
})