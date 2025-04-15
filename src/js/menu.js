const menu = document.querySelector('.menu');

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const screenWidth = window.innerWidth;
    if (screenWidth < 1200) {
      menu.classList.remove('open');
    }
  });
});
