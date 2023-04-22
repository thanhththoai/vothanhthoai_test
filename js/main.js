
//web
var swiper = new Swiper(".bg-slide", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //mobi
  var swiper = new Swiper(".mob-slide", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  //Navigation bar effect on scroll
  window.addEventListener("scroll", function() {
    const header= document.querySelector(".header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
    
  })

  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const app1 = document.querySelector(".first");
  const app2 = document.querySelector(".second");
  const app3 = document.querySelector(".third");
  const img1 = document.querySelector(".img_one");
  const img2 = document.querySelector(".img_two");
  const img3 = document.querySelector(".img_three");
  one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    app1.classList.add("active");
    app2.classList.remove("active");
    app3.classList.remove("active");
    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
  } 
  two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    app1.classList.remove("active");
    app2.classList.add("active");
    app3.classList.remove("active");
    img2.classList.add("active");
    img1.classList.remove("active");
    img3.classList.remove("active");
  }
  three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    app1.classList.remove("active");
    app2.classList.remove("active");
    app3.classList.add("active");
    img3.classList.add("active");
    img1.classList.remove("active");
    img2.classList.remove("active");
  }


  // function handleToggleMenu () {
  //   const menuToggle = document.querySelector(".menu-toggle");
  //   const menu = document.querySelector(".header_menu-list");
  //   if (!menuToggle || !menu) return;
  //   menuToggle.addEventListener("click", function () {
  //   menu.classList.add("is-active");
  //   });
  //   document.addEventListener("click", function(e) {
  //       if(!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
  //           menu.classList.remove("is-active");
  //       }
  //   })
  //   }
  //   handleToggleMenu ();


let menuToggle = document.querySelector("#menu-icon");
let menu = document.querySelector(".header_menu-list");
menuToggle.onclick = () => {
  menuToggle.classList.toggle("bx-x");
  menu.classList.toggle("is-active");
}