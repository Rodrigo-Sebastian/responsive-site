const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.getElementById('show__nav');

hamburgerIcon.addEventListener('click', () =>{
    if(navMenu.style.display ==='flex'){
        navMenu.style.display = 'none';
    }else{
        navMenu.style.display = 'flex';
    }
});