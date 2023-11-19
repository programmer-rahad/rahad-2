// Event: Window load
window.addEventListener('load', function () {
    // Function: Custom Selector
    const $ = (selector, areAll) => {
        const all = document.querySelectorAll(selector);
        const single = document.querySelector(selector)
        return areAll ? all : single;
    }

    // Responsive Navigation
    !function () {
        const nav = $('nav.main-navigation');
        const navToggle = $('.nav-toggle');
        navToggle.addEventListener('click',
            function () {
                const navHeight = nav.offsetHeight;
                const ulHeight = nav.firstElementChild.offsetHeight;
                console.log(ulHeight);
                if (!navHeight) {
                    nav.style.height = `${ulHeight + 10}px`;
                } else {
                    nav.style.height = '0'
                }
            })
    }()

    // Banner Slider
    !function () {
        const arrowButtons = $('.arrow-buttons');
        arrowButtons.addEventListener('click', function (e) {
            let sliderItems = arrowButtons.parentNode;
            sliderItems = sliderItems.children
            let tempArr = [];
            for (let i = 0; i < sliderItems.length - 1; i++) {
                tempArr[tempArr.length] = sliderItems[i]
            }
            sliderItems = tempArr;
            let activeItem;
            for (let i = 0; i < sliderItems.length; i++) {
                if (getComputedStyle(sliderItems[i]).display === 'table-cell') {
                    activeItem = sliderItems[i];
                }
            }
            activeItem.style.display = 'none';
            const previousElement = activeItem.previousElementSibling;
            const nextElement = activeItem.nextElementSibling;
            if (e.target.className.indexOf('left') >= 0) {
                if (!previousElement) {
                    // sliderItems[sliderItems.length - 1].style.display = 'table-cell'
                    activeItem = sliderItems[sliderItems.length - 1]
                } else {
                    activeItem = activeItem.previousElementSibling;
                }

            } else {
                // let 
                if (nextElement.classList.contains('arrow-buttons')) {
                    activeItem = sliderItems[0];
                } else {
                    activeItem = nextElement;
                }
            }
            activeItem.style.display = 'table-cell';
            activeItem.animate([
                {
                    opacity: .2
                }, {
                    opacity: 1
                }
            ], {
                duration: 500,
                iterations: 1
            })
            // console.log(e.target.className === 'fas fa-angle-left');
            // console.log(this);
        });
    }()
})