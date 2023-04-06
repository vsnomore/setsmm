document.addEventListener('DOMContentLoaded', () => {
    //Валідація форми
    const formInput = document.querySelector('.contacts__form input');
    const formBtn = document.querySelector('.contacts__form button');
    const form = document.querySelector('.contacts__form');
    const successMessage = document.querySelector('.contacts__success');

    formBtn.addEventListener('click', event => {
        event.preventDefault();

        if (!formInput.value) {
            formInput.labels[0].classList.add('input-incorrect');
        } else {
            //Тут має бути відправка даних
            form.style.display = 'none';
            successMessage.style.display = 'flex'
        }
    });

    formInput.addEventListener('input', event => {
        event.target.labels[0].classList.remove('input-incorrect');
    })

    //Тапи по елементам блоку services
    const servicesTabs = document.querySelectorAll('.services__grid-item');
    const servicesInnerTabs = document.querySelectorAll('.services__inner-text');

    servicesTabs.forEach((el,ind) => {
        el.addEventListener('touchstart', e => {
            if (window.getComputedStyle(servicesInnerTabs[ind]).opacity == '0') {
                servicesInnerTabs.forEach(el => el.style.opacity = '0')
                servicesInnerTabs[ind].style.opacity = '1';
            } else {
                servicesInnerTabs[ind].style.opacity = '0';
            }
        });
    });

    //Анімації для головної
    const animatedItems = document.querySelectorAll('._animated-item-1, ._animated-item-2, ._animated-item-3');
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                if (change.target.classList.contains('_animated-item-1')) {
                    change.target.classList.add('animate-fade-out');
                } else if (change.target.classList.contains('_animated-item-2')) {
                    setTimeout(()=> {
                        change.target.classList.add('animate-fade-out');
                    }, 300);
                } else if (change.target.classList.contains('_animated-item-3')) {
                    setTimeout(()=> {
                        change.target.classList.add('animate-fade-out');
                    }, 600);
                }
            }
        });
    }
    let options = { threshold: [0.3] };
    let observer = new IntersectionObserver(onEntry, options);
    for (let el of animatedItems) {
        observer.observe(el);
    }

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

    mobLinks.forEach(el => el.addEventListener('click', ()=> {
        if (mobMenuActive) {
            burger.classList.remove('hamburger-active');
            mobMenu.style.left = "-100%";
            mobMenuActive = false;
            document.body.style.overflow = '';
        }
    }));

    // Перехід від дефолтного меню в фіксоване
    const fixedMenu = document.querySelector('.fixed-menu');

    function test () {
        if (window.innerWidth < 576) {
            fixedMenu.style.top = '0';
        } else {
            document.addEventListener('scroll', (e) => {
                if (window.pageYOffset > 600) {
                    fixedMenu.style.top = '0';
                } else if (window.pageYOffset < 400){
                    fixedMenu.style.top = '-90px';
                }
            });
        }
    }
    test();

});