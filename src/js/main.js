(function() {
  var togglebutton = document.querySelectorAll('.togglebutton'),
      link         = document.querySelectorAll('.link'),
      container    = document.querySelector('.header-content');

  for(var i = 0; i < togglebutton.length; i++) {
    togglebutton[i].addEventListener('click', function() {
      container.classList.toggle('open');
    });
  }

  for(var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
      container.classList.toggle('open');
    });
  }
})();
