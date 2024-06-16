const hamburgerEl = document.getElementById("hamburger");
const navEl = document.getElementById("nav");
const closeEl = document.getElementById("close");
const navLink = document.querySelectorAll(".nav-link");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

const tabs = document.querySelectorAll(".tabs_wrap ul li");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.remove('hidden')
})

closeEl.addEventListener("click", () =>{
  navEl.classList.add('hidden')
})

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navEl.classList.add("hidden");
  })
)

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(tab => {
      tab.classList.remove("active")
    });

    tab.classList.add("active")

    all.forEach(item => {
      item.style.display = 'none';
    })

    const tavbal = tab.getAttribute("data-tabs");
    
    if (tavbal == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tavbal == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tavbal == "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    }else {
      all.forEach((item) => {
        item.style.display = "none";
      });
    }

  })
});

// dark themes
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "light") {
  lightMode()
}else {
  darkMode()
}

themeBtn.addEventListener("click", (e) => {
  if(localStorage.getItem("mode") == "light" ) {
    darkMode();
  }else {
    lightMode();
  }
  
})

function darkMode ()  {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode () {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
};

// scroll up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
   
  if(this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
}

window.addEventListener("scroll", scrollUp)

// nav header

const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor", "z-80");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};

window.addEventListener("scroll", scrollHeader);

// scroll section active link

// const activeLink = () => {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".nav-link");

//   let current = "home";

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;

//     if(this.scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   })

//   navLinks.forEach(item => {
//     item.classList.remove("text-secondaryColor");
//     if(item.href.includes(current)) {
//       item.classList.add("text-secondaryColor");
//     }
//   })
  
// }

// window.addEventListener("scroll",activeLink)

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop; //position ko save htrr trr

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); //current ko update lote tl
    }
  });

  navLinks.forEach(item => {
    item.classList.remove("text-secondaryColor");
    if(item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  })
}

window.addEventListener("scroll", activeLink)

// scroll reveal animation 
// new to me

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
})

sr.reveal(".home__image");
sr.reveal(".home__content", {origin: "bottom"});
sr.reveal(".category__card", {interval: 300});

sr.reveal(".promo__card-1", { origin: "left" });
sr.reveal(".promo__card-2", { origin: "right" });

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });

sr.reveal(".customer__review", { origin: "right" });

sr.reveal(".footer")







