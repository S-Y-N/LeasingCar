const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (el) {
    el.addEventListener('click', open)
})

function open(event) {
    const isTarget = event.currentTarget;
    const btn = isTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs__btn-item--active');
    });

    isTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function (item) {
        item.classList.remove('tabs__content-item--active')
    });
    document.querySelector(`#${btn}`).classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
})