const track = document.querySelector('.carousel_track02');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right02');
const prevButton = document.querySelector('.carousel_button--left02');
const dotsNav = document.querySelector('.carousel_nav02')
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to each other

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide02');
    targetSlide.classList.add('current-slide02');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide02');
    targetDot.classList.add('current-slide02');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0 ) {
        prevButton.classList.add('is-hidden02');
        nextButton.classList.remove('is-hidden02');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden02');
        nextButton.classList.add('is-hidden02');
    } else {
        prevButton.classList.remove('is-hidden02');
        nextButton.classList.remove('is-hidden02');
    }
}
 
// when i click left move slides left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide02');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide02');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})
// when i click right move slides right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide02');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide02');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})
