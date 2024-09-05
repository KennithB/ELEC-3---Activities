const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const dropdownItems = document.querySelectorAll('.navbar__item.dropdown');

// Toggle Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Toggle Dropdown in Mobile View
const toggleDropdownMenu = (event) => {
    if (window.innerWidth <= 960) {
        event.preventDefault();
        const dropdownMenu = event.currentTarget.querySelector('.dropdown__menu');
        dropdownMenu.classList.toggle('active'); // Show or hide the dropdown
    }
};

// Event Listeners for Mobile Layout
menu.addEventListener('click', mobileMenu);
dropdownItems.forEach(item => item.addEventListener('click', toggleDropdownMenu));
