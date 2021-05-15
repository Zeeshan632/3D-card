const card = document.querySelector('.card');
const container = document.querySelector('.container');
// aninmate items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");


container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(80px)";
    sneaker.style.transform = "translateZ(120px)  rotateZ(-30deg)";
    purchase.style.transform = "translateZ(120px)";
    description.style.transform = "translateZ(80px)";
    sizes.style.transform = "translateZ(80px)";
});
container.addEventListener("mouseleave", (e) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = "all 0.5s ease";
    //popin
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});