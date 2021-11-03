let searchForm = document.querySelector('.search-form');

document.querySelector("#search-btn").onclick = function(){
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector("#shopping-btn").onclick = function(){
  shoppingCart.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector("#login-btn").onclick = function(){
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = function(){
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}

window.onscroll = function(){
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});