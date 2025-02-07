const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

const header = document.querySelector(".header");
const visualArea = document.querySelector(".section_works");
const descriptionSection = document.querySelector(".section_description");
const container = document.querySelector(".container");
const sectionLog = document.querySelector(".section_log");
const moGnb = document.querySelector(".mo_gnb");
const moLogo = document.querySelector(".header .logo")
const buttonBugger = document.querySelector(".buttonBugger");
const sectionGoal = document.querySelector(".section_goal");
const sectionWorks = document.querySelector(".section_works");
const sectionAbout = document.querySelector(".section_about");

const wrapper = document.querySelector(".wrapper");

const hoverTarget = document.querySelector(".intro-container");
let intervalId;
function startSkewTransform() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      hoverTarget.style.transform = applySkewTransform();
    }, 500);
  }
}

function stopSkewTransform() {
  clearInterval(intervalId);
  intervalId = null;
  hoverTarget.style.transform = "";
}


function applySkewTransform() {
  const baseTransform = "scale3d(0.6, 0.6, 1) rotateX(30deg)";
  const randomSkew = `skew(${Math.random() * 20 - 10}deg, ${
    Math.random() * 20 - 10
  }deg)`;
  return `${baseTransform} ${randomSkew}`;
}

ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {
    gsap.to(header, {
      scrollTrigger: {
        trigger: visualArea,
        start: "0% 10%",
        markers: false,
        onToggle: () => header.classList.toggle("js_show"),
      },
    });

    gsap.to(document.querySelector(".section_about"), {
      scrollTrigger: {
        trigger: sectionAbout,
        start: "0 70%",
        end: "100% 0%",
        markers: false,
        onToggle: function () {
          container.classList.toggle("is_active");
          header.classList.toggle("is_active");
        },
        onEnter: () => startSkewTransform(), 
        onLeave: () => stopSkewTransform(),
        onEnterBack: () => startSkewTransform(), 
        onLeaveBack: () => stopSkewTransform(),
      },
    });
  },
});
buttonBugger.addEventListener("click", () => {
  moGnb.classList.toggle("is_active");
  moLogo.classList.toggle("is_active");

  const isExpanded = buttonBugger.getAttribute("aria-expanded") === "true";
  buttonBugger.setAttribute("aria-expanded", !isExpanded);
  buttonBugger.setAttribute(
    "aria-label",
    isExpanded ? "메뉴 열기" : "메뉴 닫기"
  );
  buttonBugger.setAttribute("aria-pressed", !isExpanded);
});

const scrollToSection = (navElements, targetSection) => {
  navElements.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
};

scrollToSection(document.querySelectorAll(".link_goal"), sectionGoal);
scrollToSection(document.querySelectorAll(".link_works"), sectionWorks);
scrollToSection(document.querySelectorAll(".link_home"), wrapper);

const navContact = document.querySelectorAll(".contact");

navContact.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});


let typeSplit = new SplitType("[text-split]", {
  types: "words, chars, lines",
  tagName: "span",
});

function createScrollTrigger(triggerElement, timeline) {
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top bottom",
    onLeaveBack: () => {
      timeline.progress(0);
      timeline.pause();
    },
  });

  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 70%",
    markers:false,
    onEnter: () => timeline.play(),
  });
}

document.querySelectorAll("[lines]").forEach((element) => {
  let tl = gsap.timeline({ paused: true });
  tl.from(element.querySelectorAll(".line"), {
    opacity: 0,
    yPercent: 100,
    duration: 0.75,
    ease: "power1",
    stagger: { amount: 0.5 },
    // markers: true,
  });
  createScrollTrigger(element, tl);
});

gsap.set("[text-split]", { opacity: 1 });


const logArticle = document.querySelectorAll(".log_area .log_article");


logArticle.forEach((article) => {
  article.onclick = (e) => {
    const targetDesc = e.currentTarget.querySelector(".text_box");
    [...logArticle].filter(item => {
      if (item === e.currentTarget) {
        targetDesc.classList.add("is_show");
        e.currentTarget.classList.add("is_active");
      } else {
        const desc = item.querySelector(".text_box");
        desc.classList.remove("is_show");
        item.classList.remove("is_active");
      }
    })
  }
});

const logLink = document.querySelectorAll(".log_area .log_link");

logLink.forEach((link) => {
  link.onclick = (e) => {
    const descElement = e.currentTarget.querySelector(".text_box");
    descElement.classList.toggle("is_show");
  };
  link.addEventListener("mouseenter", function (e) {
    gsap.to(".cursor_box", { scale: 0.5 });
  });
  link.addEventListener("mouseleave", function (e) {
    gsap.to(".cursor_box", { scale: 1 });
  });
});




gsap.registerPlugin(TextPlugin);
const value = document.querySelector(".visual_area .headline").textContent
const randomChars = "!@#$%^&*()_+{}:<>?";
gsap.to(".headline_text", {
  text: {
    value: value, 
    scrambleText: true, 
    revealDelay: 0.1, 
    speed: 0.4, 
  },
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
});