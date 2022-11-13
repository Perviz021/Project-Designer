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

$(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
  });
});
