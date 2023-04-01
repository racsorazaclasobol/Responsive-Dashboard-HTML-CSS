const sideMenu  = document.querySelector("aside");
const btnMenu   = document.querySelector("#menu-btn");
const btnClose  = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggle");

// SHOW MENU
btnMenu.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// CLOSE MENU 
btnClose.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// CHANGE THEME
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle( 'dark-theme-variables' );

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})

