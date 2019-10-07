const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("nav");

// menu open/close event
hamburger.addEventListener("click", openMenu);
// menu switch
let navSwitch = 0;

// open/close menu
function openMenu() {
  const bars = hamburger.children;

  if (navSwitch === 0) {
    navigation.style.display = "flex";
    bars[0].classList.add("top");
    bars[1].classList.add("middle");
    bars[2].classList.add("bottom");
    navSwitch = 1;
  } else {
    navigation.style.display = "none";
    bars[0].classList.remove("top");
    bars[1].classList.remove("middle");
    bars[2].classList.remove("bottom");
    navSwitch = 0;
  }
}
