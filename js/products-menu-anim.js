const menuBtn = document.querySelector('.navigation li i');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
    menuBtn.classList.add('opened');
    menuOpen = true;
} else {
    menuBtn.classList.remove('opened');
    menuOpen = false;
}
});