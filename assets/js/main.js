// Function: Custom Selector
const $ = (selector, areAll) => {
    const all = document.querySelectorAll(selector);
    const single = document.querySelector(selector)
    return areAll ? all : single;
}

window.addEventListener('load', () => {
    // Header Section
    !function () {
        // Add Caret Icon
        const menuItems = $('nav > ul > li', true)
        !function () {
            for (let i = 0; i < menuItems.length; i++) {
                const hasUL = menuItems[i].querySelector('ul')
                if (hasUL) {
                    const I = document.createElement('i');
                    I.className = 'fas fa-caret-down';
                    I.style.marginLeft = '5px'
                    menuItems[i].firstElementChild.append(I);
                }
            }
        }()
        // Align Menu Items
        !function () {
            const alignMenu = () => {
                const windowWidth = window.innerWidth;
                const nav = $('header#header-section nav');
                if (windowWidth > 991 && windowWidth < 1200) {
                    let totalWidth = 0;
                    for (let i = 0; i < menuItems.length; i++) {
                        let width = getComputedStyle(menuItems[i]).width;
                        width = Number(width.substring(0, width.length - 2));
                        totalWidth += width;
                    }
                    nav.style.width = totalWidth + 1 + 'px';
                } else {
                    nav.style.width = 'auto';
                }
            }
            alignMenu();
            window.addEventListener('resize', alignMenu)
        }()
        // Responsive Dropdown
        !function () {
            const navToggler = $('.nav-toggler');
            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].addEventListener('click', function (e) {
                    for (let j = 0; j < menuItems.length; j++) {
                        if (menuItems[i] !== menuItems[j]) {
                            menuItems[j].classList.remove('menu-open')
                        }
                    }
                    menuItems[i].classList.toggle('menu-open')
                    e.preventDefault();
                })
            }
            navToggler.addEventListener('click', function () {
                $('#header-section nav').classList.toggle('open')
            })

        }()
    }()

    // Banner Form Section
    !function () {

    }()



})
