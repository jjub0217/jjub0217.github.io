
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const header = document.querySelector(".header");
const visualArea = document.querySelector(".section_works");


ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {
    gsap.to(header, {
      scrollTrigger: {
        trigger: document.querySelector(".section_works"),
        start: "0% 70%",
        endTrigger: document.querySelector(".section_description"),
        end: "100% 50%",
        markers: false,
        onToggle: () => {
          header.classList.toggle("js_show");
        },
      },
    });
  },
});



// function handleMouseMove(e) {
//   const xVal = e.clientX;
//   const yVal = e.clientY;
//   gsap.to(".cursor_box", {
//     x: xVal,
//     y: yVal,
//     duration: 0.3,
//   });
// }


// function checkViewport() {
//   if (window.innerWidth > 991) {
//     document.body.addEventListener("mousemove", handleMouseMove);
//   } else {
//     console.log('모바일입니다');
//     document.body.removeEventListener("mousemove", handleMouseMove);
//   }
// }

// checkViewport();

// window.addEventListener("resize", checkViewport);

let isRunning = false;

function handleMouseMove(e) {
  if (isRunning) return;
  isRunning = true;

  requestAnimationFrame(() => {
    const xVal = e.clientX;
    const yVal = e.clientY;
    gsap.to(".cursor_box", { x: xVal, y: yVal, duration: 0.3 });
    isRunning = false;
  });
}

document.body.addEventListener("mousemove", handleMouseMove);


ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {
    gsap.to(document.querySelector(".section_about"), {
      scrollTrigger: {
        trigger: document.querySelector(".section_about"),
        start: "0 80%",
        end: "100% 20%",
        markers: false,
        onToggle: function () {
          document.querySelector(".container").classList.toggle("is_active");
          document.querySelector(".section_log").classList.toggle("is_active");
        },
      },
    });
  },
});


  const buttonBugger = document.querySelector(".buttonBugger");

  buttonBugger.addEventListener("click", () => {
    const moGnb = document.querySelector(".mo_gnb");
    moGnb.classList.toggle("is_active");

    if (buttonBugger.getAttribute("aria-expanded") === "false") {
      buttonBugger.setAttribute("aria-expanded", "true");
      buttonBugger.setAttribute("aria-label", "메뉴 닫기");
      buttonBugger.setAttribute("aria-pressed", "true");
    } else {
      buttonBugger.setAttribute("aria-expanded", "false");
      buttonBugger.setAttribute("aria-label", "메뉴 열기");
      buttonBugger.setAttribute("aria-pressed", "false");
    }
  });


  const toggleCardState = () => {
    document.querySelector(".description_cards").classList.toggle("is_active");
    document
      .querySelector(".detail_cards_link_area")
      .classList.toggle("is_active");
    document.querySelector(".cyan").classList.toggle("is_active");
    document.querySelector(".purple").classList.toggle("is_active");
    document.querySelector(".yellow").classList.toggle("is_active");
    document.querySelector(".green").classList.toggle("is_active");
    document.querySelector(".pink").classList.toggle("is_active");
};

document.querySelector(".front_card").addEventListener("click", toggleCardState);
document.querySelector(".detail_cards_btn").addEventListener("click", toggleCardState);


const hoverTarget = document.querySelector(".intro-container");

let intervalId; 

function getRandomSkew() {
  const skewX = Math.random() * 20 - 10; 
  const skewY = Math.random() * 20 - 10; 
  return `skew(${skewX}deg, ${skewY}deg)`;
}

function applySkewTransform() {
  const baseTransform = 'scale3d(0.6, 0.6, 1) rotateX(30deg)'; 
  const randomSkew = getRandomSkew();
  return `${baseTransform} ${randomSkew}`; 
}

hoverTarget.addEventListener('mouseenter', () => {
  intervalId = setInterval(() => {
    hoverTarget.style.transform = applySkewTransform();
  }, 500); 
});

hoverTarget.addEventListener('mouseleave', () => {
  clearInterval(intervalId); 
});




const navContact = document.querySelectorAll(".contact");

navContact.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});



const NavGoal = document.querySelectorAll(".link_goal");
const sectionGoal = document.querySelector(".section_goal");

NavGoal.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: sectionGoal.offsetTop,
      behavior: "smooth",
    });
  });
});

const NavWork = document.querySelectorAll(".link_works");
const sectionWorks = document.querySelector(".section_works");

NavWork.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: sectionWorks.offsetTop,
      behavior: "smooth",
    });
  });
});

const NavHome = document.querySelectorAll(".link_home");
const wrapper = document.querySelector(".wrapper");

NavHome.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: wrapper.offsetTop,
      behavior: "smooth",
    });
  });
});

