
const footerYear = document.getElementById('year');
const currentYear = new Date().getFullYear();
footerYear.innerHTML = currentYear;
const header = document.querySelector('nav');

const nav = document.getElementById('header');
const hamburgar = document.querySelector('.hamburgar');
const mobview = document.querySelector('nav ul');
const mob = document.querySelectorAll('nav ul li a');

hamburgar.addEventListener('click', () => {
  hamburgar.classList.toggle('active');
  mobview.classList.toggle('active');
  nav.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_pos = window.scrollY;
  if (scroll_pos > 250) {
    header.style.backgroundColor = '#000';
    header.classList.add('white');
  } else {
    header.style.backgroundColor = 'transparent';
    header.classList.remove('white');
  }
});

mob.forEach((item) => {
  item.addEventListener('click', () => {
    item.scrollTop;
    hamburgar.classList.toggle('active');
    mobview.classList.toggle('active');
    nav.classList.toggle('active');
  });
});
