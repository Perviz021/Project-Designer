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
}, 3000);

// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

// let scroll = document.querySelector(".scroll-to-top");
// scroll.scrollIntoView({
//   behaviour: "smooth",
//   block: "center",
//   inline: "end",
// });
