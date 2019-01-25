// burger
$('.burger').click(function () {
    $('.navbar_list').slideToggle(1000);
    $('.fa-bars').toggleClass('show');
    $('.fa-times').toggleClass('show');
})

//go to section
$('.navbar_link').click(function () {
    const goToSection = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})

//slider
let activeElement = 0;
const mottos = ['Every flower is a soul blossoming in nature.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Ut enim ad minim veniam, quis nostrud exercitation.'];

const motto = document.querySelector('.flowers_motto')

function changeElement() {
    activeElement++;
    if (activeElement == mottos.length) {
        activeElement = 0;
    }
    motto.textContent = mottos[activeElement];
}
setInterval(changeElement, 4000);

//popup
const btns = document.querySelectorAll('.cards .btn--link');
const popup = document.getElementById('popup');
const close = document.querySelector('.popup_close');
const img = document.querySelector('.popup_img');
const heading = document.querySelector('.popup_planty-name');

btns.forEach(item => item.addEventListener('click', function () {
    popup.classList.add('active');
    let bookNumber = this.dataset.book;
    if (bookNumber == '1') {
        img.setAttribute('src', 'assets/begonia.jpg');
        heading.textContent = 'begonia tuberhybrida';
    } else if (bookNumber == '2') {
        img.setAttribute('src', 'assets/bratek.jpg');
        heading.textContent = 'viola × wittrockiana';
    } else {
        img.setAttribute('src', 'assets/aksamitka.jpg');
        heading.textContent = 'tagetes erecta';
    }
}));

close.addEventListener('click', function () {
    popup.classList.remove('active');
});

window.addEventListener('click', function (e) {
    if (e.target == popup) {
        popup.classList.remove('active');
    }
});