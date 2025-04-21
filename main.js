const navbar = document.querySelector('.header .navbar');

// Open the navbar
document.querySelector('#menu-btn').addEventListener('click', () => {
    navbar.classList.add('active');
});

// Close the navbar
document.querySelector('#close-navbar').addEventListener('click', () => {
    navbar.classList.remove('active'); // ✅ use remove, not add
});

const registerbtn = document.querySelector('.register-btn');
const loginbtn = document.querySelector('.login-btn');

// ✅ FIX: selector was wrong ("..acountform" should be ".acountform")
registerbtn.addEventListener('click', () => {
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.login-form').classList.remove('active');
    document.querySelector('.register-form').classList.add('active');
});

loginbtn.addEventListener('click', () => {
    registerbtn.classList.remove('active');
    loginbtn.classList.add('active');
    document.querySelector('.login-form').classList.add('active');
    document.querySelector(' .register-form').classList.remove('active');
});


const AcountForm = document.querySelector(' .acountform');

// Open the navbar
document.querySelector('#acount-btn').addEventListener('click', () => {
    AcountForm.classList.add('active');
});

// Close the navbar
document.querySelector('#close-form').addEventListener('click', () => {
    AcountForm.classList.remove('active');
});
var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    loop: true,
    grabCursor: true, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, }
  });
  var swiper = new Swiper(".Home-courses-slider", {
    loop: true,
    grabCursor: true, 
    spaceBetween: 20,
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    }
  });
  
  var swiper = new Swiper(".teacher-slides", {
    loop: true,
    grabCursor: true, 
    spaceBetween: 20,
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    }
  });

  var swiper = new Swiper(".review-slider ", {
    loop: true,
    grabCursor: true, 
    spaceBetween: 20,
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    }
  });




  