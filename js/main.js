// let navElements = document.querySelectorAll("header nav .menu li a");

// for (let i = 0; i < navElements.length; i++) {
//   navElements[i].addEventListener("click", function () {
//     if (navElements[i].classList.contains("active")) {
//       this.classList.remove("active");
//     } else {
//       this.classList.add("active");
//     }
//   });
// }

// let accordionItemHeaders = document.querySelectorAll(
//   ".accordion .acrdItem .acrdHeader"
// );

// for (let i = 0; i < accordionItemHeaders.length; i++) {
//   accordionItemHeaders[i].onclick = function () {
//     this.css.outline = "none";
//   };
// }

let loader = document.querySelector("#loader");

setTimeout(() => {
  loader.style.display = "none";
}, 1000);

// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

// let scroll = document.querySelector(".scroll-to-top");
// scroll.scrollIntoView({
//   behaviour: "smooth",
//   block: "center",
//   inline: "end",
// });

let scroll = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  // SCROLL-To-Top
  if (window.pageYOffset > 100) {
    scroll.classList.add("active");
  } else {
    scroll.classList.remove("active");
  }

  // NAVBAR STICKY
  let nav = document.querySelector("#top nav");
  if (window.pageYOffset > 500) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
