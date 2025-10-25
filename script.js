const rocket = document.querySelector('.rocket');
const earth = document.querySelector('.earth');
const moon = document.querySelector('.moon');
const stars = document.querySelector('.stars');
const heading = document.getElementById('main-heading');
const titleSection = document.querySelector('.title-section');

let changed = false;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = scrollY / docHeight; // 0 → 1

  // 🌍 Earth moves down
  earth.style.transform = `translate(-50%, ${scrollY * 0.5}px)`;

  // 🌙 Moon moves into view
  const moonTop = -20000 + scrollY * 1.2;
  moon.style.top = `${moonTop}px`;
  moon.style.opacity = progress > 0.9 ? 1 : 0;

  // 🚀 Rocket tilt
  const tilt = Math.min(progress * 25, 25);
  rocket.style.transform = `translate(-50%, 50%) rotate(${tilt}deg)`;

  // ✨ Parallax stars
  stars.style.backgroundPositionY = `${scrollY * 0.3}px`;

  // 💫 Change heading when we reach near the end
  if (progress > 0.95 && !changed) {
    changed = true;
    titleSection.style.opacity = 0;
    setTimeout(() => {
      heading.textContent = "It never ends — I love you till the end of the universe 💫❤️";
      titleSection.style.opacity = 1;
    }, 2000);
  } else if (progress < 0.9 && changed) {
    // revert back when scrolling up again
    changed = false;
    titleSection.style.opacity = 0;
    setTimeout(() => {
      heading.textContent = "How Much I Love You 🚀❤️🌙";
      titleSection.style.opacity = 1;
    }, 2000);
  }
});
