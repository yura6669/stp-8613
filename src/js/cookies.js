const cookies = document.querySelector('.cookies');
const acceptBtn = document.querySelector('#accept-cookies');
const declineBtn = document.querySelector('#decline-cookies');

function checkCookies() {
  if (localStorage.getItem('cookiesAnswer') === null) {
    setTimeout(() => {
      cookies.classList.toggle('open');
    }, 300);
  }
}

checkCookies();

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAnswer', 'true');
  cookies.classList.remove('open');
});

declineBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAnswer', 'false');
  cookies.classList.remove('open');
});
