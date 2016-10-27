var togglebutton = document.querySelectorAll('.togglebutton'),
    container     = document.querySelector('.header-content');

for(var i = 0; i < togglebutton.length; i++) {
  togglebutton[i].addEventListener('click', function() {
    container.classList.toggle('open');
  });
}
