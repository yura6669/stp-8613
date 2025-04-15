document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();

      const screenWidth = window.innerWidth;
      const headerHeight = screenWidth >= 1200 ? 173 : 103;

      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - headerHeight,
        behavior: 'smooth',
      });
    }
  });
});
