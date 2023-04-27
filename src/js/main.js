document.addEventListener('DOMContentLoaded', () => {

    //Мобільне меню
    const mobMenu = document.querySelector('.header');
    const burger = document.querySelector('.hamburger');
    const mobLinks = document.querySelectorAll('.menu__link');
    let mobMenuActive = false;

    burger.addEventListener('click', (e) => {
        if (mobMenuActive) {
            burger.classList.remove('hamburger__icon-active');
            mobMenu.style.left = "-100%";
            mobMenuActive = false;
            document.body.style.overflow = '';
        } else {
            burger.classList.add('hamburger__icon-active');
            mobMenu.style.left = 0;
            mobMenuActive = true;
            document.body.style.overflow = 'hidden';
        }
    });

    mobLinks.forEach(el => el.addEventListener('click', () => {
        if (mobMenuActive) {
            burger.classList.remove('hamburger__icon-active');
            mobMenu.style.left = "-100%";
            mobMenuActive = false;
            document.body.style.overflow = '';
        }
    }));

    // SELECT FORMS
    const selectHeader = document.querySelectorAll('.order__form-select-header');
    const selectItem = document.querySelectorAll('.order__form-select-item');
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
            currentHTML = this.closest('.order__form-select').querySelector('.order__form-select-current');
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



    // MODALS
    const overlay = document.querySelector('.overlay');
    const closeButtons = document.querySelectorAll('.modal__close-icon');
    const buttons = document.querySelectorAll('.button');
    // const closeButton = document.querySelector('.modal__close-icon');

    buttons.forEach(function (item) {
        if (item.hasAttribute('data-modal')) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const attr = this.getAttribute('data-modal'),
                    modalWindow = document.getElementById(`${attr}`);

                modalWindow.classList.add('show');
                overlay.classList.add('show');
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = '12px';
            });
        }
    });

    closeButtons.forEach(function (item) {
        item.addEventListener('click', function () {
            const modal = this.closest('.modal');

            modal.classList.remove('show');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        });
    });

    overlay.addEventListener('click', function () {
        document.querySelector('.modal.show').classList.remove('show');
        this.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    });
});