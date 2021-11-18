// init scrollbar
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
const header = document.querySelector("header.header");

const sectionList = [...document.querySelectorAll(".section")];

scroller.on("scroll", ({ scroll }) => {
  if (scroll.y > 0) {
    !header.matches(".header-shirk") && header.classList.add("header-shirk");
  } else {
    header.matches(".header-shirk") && header.classList.remove("header-shirk");
  }
});

scroller.on("call", (nameFunc, way, elm) => {
  elm.el.classList.add("start");
});
