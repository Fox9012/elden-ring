

document.querySelectorAll("a[href^='#'").forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.top-offset').offsetHeight;

        const topOffset = 0; //нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



const popUp = document.getElementById('popUp')
popUp.onclick = () => popUp.style.display = 'none'

const buttonform = document.getElementById('formButton')
buttonform.onclick = () => popUp.style.display = 'flex'

/*sliderImagesArr.forEach( () => {
    const selectSlideBtn = document.createElement('div')
    selectSlideBtn.className = "select-slide-button"

    selectSlideBtn.onclick = (slide) => userSelectNewSlide(slide)
    selectSlidePointsArr.push(selectSlideBtn)
})*/

// Получаем элементы
const slides = document.querySelectorAll('.slide-img');
const prevButton = document.querySelector('.slide-button.previous');
const nextButton = document.querySelector('.slide-button.next');
const slideSelectors = document.querySelectorAll('.select-slide-button');

// Переменные состояния
let currentIndex = 0;

// Функция для отображения активного слайда
function showSlide(index) {
    // Сбрасываем состояние всех слайдов
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });

    // Обновляем активный селектор
    slideSelectors.forEach((selector, i) => {
        selector.classList.toggle('active', i === index);
    });
}

// Функция для переключения на следующий слайд
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Функция для переключения на конкретный слайд
function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Добавляем обработчики событий
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
slideSelectors.forEach((selector, index) => {
    selector.addEventListener('click', () => goToSlide(index));
});

// Инициализируем первый слайд
showSlide(currentIndex);
