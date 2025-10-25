const sunsetSky = document.querySelector(".sky-sunset");
const nightSky = document.querySelector(".sky-night");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const clouds = document.querySelector(".clouds");
const stars = document.querySelector(".stars");
const sunReflection = document.querySelector(".sun-reflection");
const moonReflection = document.querySelector(".moon-reflection");

// Create stars
function createStars() {
  let numStars = 100;

  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");

    star.style.position = "absolute";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.width = "2px";
    star.style.height = "2px";
    star.style.backgroundColor = "white";
    star.style.borderRadius = "50%";

    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
    star.style.animationDelay = `${Math.random() * 5}s`;

    stars.appendChild(star);
  }
}

createStars();

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let maxScroll = window.innerHeight * 1.5;
  let scrollPercent = scrollPosition / maxScroll;
  scrollPercent = Math.min(scrollPercent, 1);

  // Move sun down
  let sunTop = 20 + scrollPercent * 120;
  sun.style.top = sunTop + "vh";
  // Fade sun out
  sun.style.opacity = 1 - scrollPercent;
  // Sun reflection fades with sun
  sunReflection.style.opacity = 1 - scrollPercent;

  // Moon
  let moonTop = 60 - scrollPercent * 40;
  moon.style.top = moonTop + "vh";
  moon.style.opacity = scrollPercent;
  // Moon reflection fades in with moon
  moonReflection.style.opacity = scrollPercent;

  // Clouds
  let cloudOpacity = Math.max(0, 1 - scrollPercent);
  clouds.style.opacity = cloudOpacity;
  // Fade clouds out
  clouds.style.opacity = 1 - scrollPercent;
  if (scrollPercent > 0.3) {
    clouds.style.visibility = "hidden";
  } else {
    clouds.style.visibility = "visible";
  }

  // Fade stars in
  stars.style.opacity = scrollPercent;

  // Sky transition
  sunsetSky.style.opacity = 1 - scrollPercent;
  nightSky.style.opacity = scrollPercent;
});
