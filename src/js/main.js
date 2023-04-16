document.addEventListener('DOMContentLoaded', () => {

    //Мобільне меню
    const mobMenu = document.querySelector('.mobile-menu');
    const burger = document.querySelector('.hamburger');
    const mobLinks = document.querySelectorAll('.mobile-menu__list-item');
    let mobMenuActive = false;

    burger.addEventListener('click', (e) => {
        if (mobMenuActive) {
            burger.classList.remove('hamburger-active');
            mobMenu.style.left = "-100%";
            mobMenuActive = false;
            document.body.style.overflow = '';
        } else {
            burger.classList.add('hamburger-active');
            mobMenu.style.left = 0;
            mobMenuActive = true;
            document.body.style.overflow = 'hidden';
        }
    });

    mobLinks.forEach(el => el.addEventListener('click', () => {
        if (mobMenuActive) {
            burger.classList.remove('hamburger-active');
            mobMenu.style.left = "-100%";
            mobMenuActive = false;
            document.body.style.overflow = '';
        }
    }));

    // SELECT FORMS
    const selectHeader = document.querySelectorAll('.order__form-category-header');
    const selectItem = document.querySelectorAll('.order__form-category-item');
    const selectCategoryBody = document.getElementById('select-category');
    const selectServicesBody = document.getElementById('select-services');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectChoose() {
        let item = this.innerHTML,
            currentHTML = this.closest('.order__form-category').querySelector('.order__form-category-current');
        currentHTML.innerHTML = item;

        this.parentElement.parentElement.classList.remove('is-active');
    }


    document.addEventListener('click', outsideEventListener);
    document.addEventListener('click', outsideEventListenerServices);

    function outsideEventListenerServices(event) {
        if (event.target === selectServicesBody || selectServicesBody.contains(event.target)) return;
        selectServicesBody.classList.remove('is-active');
    }

    function outsideEventListener(event) {
        if (event.target === selectCategoryBody || selectCategoryBody.contains(event.target)) return;
        selectCategoryBody.classList.remove('is-active');
    }

});