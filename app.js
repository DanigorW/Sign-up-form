const button = document.querySelector('.banner-btn');
button.addEventListener('click', (e) => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;'
    document.querySelector('.container').style.background = '#cc683c';
});

const buttonX = document.querySelector('.x-btn');
buttonX.addEventListener('click', () =>{
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden ;'
    document.querySelector('.container').style.cssText = 
    "background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.7)), url('./images/bg1.jpeg') no-repeat center; background-size: cover;"
})