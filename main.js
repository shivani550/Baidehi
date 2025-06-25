let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');

    user.classList.remove('active');
    
}

    

let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');

    user.classList.remove('active');
}




let user = document.querySelector('.user');
document.querySelector('#user').onclick = () =>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}
 var swiper = new Swiper(".new-arrival", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    },
  });
