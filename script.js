// Smooth scrolling animation for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight active section in the navigation menu
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navigationLinks = document.querySelectorAll('nav a');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navigationLinks.forEach(link => {
    link.classList.remove('highlight');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('highlight');
    }
  });
});
