//rendering carousel nav buttons dynamically for multiple carousel we use
document
  .querySelectorAll(".carousel_container")
  .forEach((carousel_container) => {
    const c_slider = carousel_container.querySelector(".carousel_slider");
    const items = c_slider.querySelectorAll(".carousel_item");
    const buttonsHtml = Array.from(items, (element, index) => {
      if (index == 0)
        return `<span class="carousel_button carousel_button_selected"></span>`;
      else return `<span class="carousel_button"></span>`;
    });

    carousel_container.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel_nav">
${buttonsHtml.join("")}
</div>`
    );
  });

//as there can be multiple carousel so we are targeting with carousel having id 1
const carouselSlider = document.querySelector("#carousel1 div.carousel_slider");
// console.log(carouselSlider);
const carouselItems = document.querySelectorAll(
  "#carousel1 div.carousel_slider img"
);
// console.log(carouselItems);

const prev = document.querySelectorAll("#carousel1>span")[0];
const next = document.querySelectorAll("#carousel1>span")[1];
// console.log(prev);
// console.log(next);

const nav_buttons = document.querySelectorAll(
  "#carousel1 span.carousel_button"
);
console.log(nav_buttons);

//by default for a carousel
let counter = 0;
const size = carouselItems[0].clientWidth;
carouselSlider.style.transform = `translateX(${-size * counter}px)`;

prev.addEventListener("click", () => {
  if (counter > 0) {
    next.classList.remove("carousel_arrow_active");
    prev.classList.add("carousel_arrow_active");
    counter--;

    nav_buttons.forEach((button, index) => {
      button.classList.remove("carousel_button_selected");
      if (index == counter) {
        button.classList.add("carousel_button_selected");
      }
    });

    carouselSlider.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter);
  }
});

next.addEventListener("click", () => {
  if (counter < carouselItems.length - 1) {
    //as counter started from 0
    prev.classList.remove("carousel_arrow_active");
    next.classList.add("carousel_arrow_active");
    counter++;

    nav_buttons.forEach((button, index) => {
      button.classList.remove("carousel_button_selected");
      if (index == counter) {
        button.classList.add("carousel_button_selected");
      }
    });

    carouselSlider.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter);
  }
});



nav_buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
     counter=index;
    nav_buttons.forEach(button=>{button.classList.remove("carousel_button_selected");})
   nav_buttons[index].classList.add("carousel_button_selected");
   carouselSlider.style.transform = `translateX(${-size * index}px)`;
      

    })

      })
