function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); 
        document.querySelector('.icon').src="img/menu-hamburguer24.png"
    } else {
        menuMobile.classList.add('open'); 
        document.querySelector('.icon')
        .src="img/cruz.png";
    }
}
