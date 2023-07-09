
const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const slidesArray = Array.from(document.querySelectorAll('.slider__item'));
const dotsArray = Array.from(document.querySelectorAll('.slider__dot'));


function changeSlide(index, slidesArray) {
  if (Math.abs(index) >= slidesArray.length) {
    index = 0;
  }
  slidesArray.forEach((slide) => slide.className = 'slider__item');
  dotsArray.forEach((dot) => dot.className = 'slider__dot');
  slidesArray.at(index).classList.add('slider__item_active');
  dotsArray.at(index).classList.add('slider__dot_active');
  // return index;
}

function getActiveSlideIndex() {
  const index = slidesArray.findIndex((slide) => slide.classList.contains('slider__item_active'));
  return index;
}

// let index = 0;
dotsArray.at(getActiveSlideIndex()).classList.add('slider__dot_active');

dotsArray.forEach((dot) => {
  dot.onclick = () => {
    const index = dotsArray.indexOf(dot, 0);
    changeSlide(index, slidesArray);
  }
})


arrowNext.onclick = () => {
  let index = getActiveSlideIndex();
  ++index;
  changeSlide(index, slidesArray);
}

arrowPrev.onclick = () => {
  let index = getActiveSlideIndex();
  --index;
  changeSlide(index, slidesArray);
}
