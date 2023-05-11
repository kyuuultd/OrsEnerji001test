let menu = document.querySelector('.menu-btn');
let navigation = document.querySelector('.navigation');
let socialmedia = document.querySelector('.socialmedia');

menu.onclick = () => {
    navigation.classList.toggle('open');
    socialmedia.classList.toggle('open');
   
}