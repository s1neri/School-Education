const rootSelector = '[data-js-carousel]'

class Carousel {
  selectors = {
    rootSelector: rootSelector,
    carouselContainer: '[data-js-carousel-container]',
    carouselSlide: '[data-js-carousel-slide]',
    carouselButtonLeft: '[data-js-carousel-button-left]',
    carouselButtonRight: '[data-js-carousel-button-right]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.buttonLeftElement = this.rootElement.querySelector(this.selectors.carouselButtonLeft);
    this.buttonRightElement = this.rootElement.querySelector(this.selectors.carouselButtonRight);
    this.slideContainer = this.rootElement.querySelector(this.selectors.carouselContainer);
    this.slides = Array.from(this.rootElement.querySelectorAll(this.selectors.carouselSlide));
    this.init();
  }

  init() {
    this.buttonLeftElement.addEventListener('click', this.prev);
    this.buttonRightElement.addEventListener('click', this.next);
    this.updateSlides();
  }

  prev = () => {
    const firstSlide = this.slides.shift();
    this.slides.push(firstSlide);
    this.updateSlides();
  }
  
  next = () => {
    const lastSlide = this.slides.pop();
    this.slides.unshift(lastSlide);
    this.updateSlides();
  }

  updateSlides() {
    this.slideContainer.innerHTML = '';

    this.slides.forEach(slide => {
      this.slideContainer.appendChild(slide);
    })
  }

}

class CarouselCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Carousel(element)
    })
  }
}

export default CarouselCollection