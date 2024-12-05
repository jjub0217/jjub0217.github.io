
if (window.innerWidth > 991) {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.22/bundled/lenis.min.js";

  script.onload = () => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };

  document.body.appendChild(script);
}


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
const buttonBugger = document.querySelector(".buttonBugger");
const detailCardsLinkArea = document.querySelector(".detail_cards_link_area");
const frontCard = document.querySelector(".front_card");
const detailCardsBtn = document.querySelector(".detail_cards_btn");
const sectionGoal = document.querySelector(".section_goal");
const sectionWorks = document.querySelector(".section_works");
const wrapper = document.querySelector(".wrapper");



ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {
    gsap.to(header, {
      scrollTrigger: {
        trigger: visualArea,
        start: "0% 70%",
        endTrigger: descriptionSection,
        end: "100% 50%",
        markers: false,
        onToggle: () => header.classList.toggle("js_show"),
      },
    });

    gsap.to(document.querySelector(".section_about"), {
      scrollTrigger: {
        trigger: document.querySelector(".section_about"),
        start: "0 80%",
        end: "100% 20%",
        markers: false,
        onToggle: function () {
          container.classList.toggle("is_active");
          sectionLog.classList.toggle("is_active");
        },
      },
    });
  },
});

buttonBugger.addEventListener("click", () => {
  moGnb.classList.toggle("is_active");

  const isExpanded = buttonBugger.getAttribute("aria-expanded") === "true";
  buttonBugger.setAttribute("aria-expanded", !isExpanded);
  buttonBugger.setAttribute(
    "aria-label",
    isExpanded ? "메뉴 열기" : "메뉴 닫기"
  );
  buttonBugger.setAttribute("aria-pressed", !isExpanded);
});

frontCard.addEventListener("click", toggleCardState);
detailCardsBtn.addEventListener("click", toggleCardState);

scrollToSection(document.querySelectorAll(".link_goal"), sectionGoal);
scrollToSection(document.querySelectorAll(".link_works"), sectionWorks);
scrollToSection(document.querySelectorAll(".link_home"), wrapper);

function toggleCardState() {
  detailCardsLinkArea.classList.toggle("is_active");
  document
    .querySelectorAll(".cyan, .purple, .yellow, .green, .pink")
    .forEach((element) => {
      element.classList.toggle("is_active");
    });
}

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

const navContact = document.querySelectorAll(".contact");

navContact.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});



const hoverTarget = document.querySelector(".intro-container");
let intervalId;

hoverTarget.addEventListener("mouseenter", () => {
  intervalId = setInterval(() => {
    hoverTarget.style.transform = applySkewTransform();
  }, 500);
});

hoverTarget.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
  hoverTarget.style.transform = ""; // 초기화
});

function applySkewTransform() {
  const baseTransform = "scale3d(0.6, 0.6, 1) rotateX(30deg)";
  const randomSkew = `skew(${Math.random() * 20 - 10}deg, ${
    Math.random() * 20 - 10
  }deg)`;
  return `${baseTransform} ${randomSkew}`;
}

