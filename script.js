const heroSection = document.querySelector('section.hero');
const aboutSection = document.querySelector('section.about');
const featuresSection = document.querySelector('section.features');
const howItWorksSection = document.querySelector('section.how_it_works');
const communitySection = document.querySelector('section.community');

const menuBtn = document.querySelector('.menu_btn');
const navScreen = document.querySelector('.nav_screen');
const wrapperScreen = document.querySelector('.wrapper_screen');
const closeBtn = document.querySelector('.close');
const menuItems = document.querySelectorAll('.nav_menu li');

menuBtn.addEventListener('click', () => {
  navScreen.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navScreen.classList.remove('active');
});

navScreen.addEventListener('click', (event) => {
  if (!wrapperScreen.contains(event.target)) {
    navScreen.classList.remove('active');
  }
});

const sections = [
  heroSection,
  aboutSection,
  featuresSection,
  howItWorksSection,
  communitySection
];

function scrollToSection(index) {
  if (sections[index]) {
    setCurrentMenuItem(index);
    sections[index].scrollIntoView({ behavior: 'smooth' });
  }
}
function setCurrentMenuItem(index) {
  menuItems.forEach((item) => item.classList.remove('current'));

  if (menuItems[index]) {
    menuItems[index].classList.add('current');
  }
}

window.addEventListener('scroll', () => {
  let currentIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      currentIndex = index;
    }
  });

  if (currentIndex !== -1) {
    setCurrentMenuItem(currentIndex);
  }
});

console.log('Chiều rộng màn hình:', window.innerWidth);
console.log('Chiều dài màn hình:', window.innerHeight);
