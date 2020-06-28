let wrap = document.querySelector('.wrap');
let box = document.querySelector('.box');
let next = document.querySelector('.slide-next');
let prev = document.querySelector('.slide-prev');
let item = document.querySelectorAll('.item');
let currdeg  = 0;
let active = 0;
next.addEventListener('click', () => {
    wrap.classList.toggle('zoom');
    currdeg = currdeg - 72;
    if (active === item.length - 1) {
        active = 0;
    } else {
        active++;
    }
    toggle();
});
prev.addEventListener('click', () => {
    wrap.classList.toggle('zoom');
    currdeg = currdeg + 72;
    if (active === 0) {
        active = item.length - 1;
    } else {
        active--;
    }
    toggle();
});
let toggle = () => {
    setTimeout(() => {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('active');
        }
        item[active].classList.add('active')
        box.style.transform = 'rotateY(' + currdeg + 'deg)';
    }, 900);
    setTimeout(() => {
        wrap.classList.toggle('zoom');
    }, 1900);
}
