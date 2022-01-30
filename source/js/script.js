const pageHeader = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nav-openned')

function toggleNavigation () {
  pageHeader.classList.toggle('page-header--nav-openned');
}

navToggle.addEventListener('click', () => toggleNavigation())
