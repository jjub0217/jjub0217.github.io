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
const buttonBugger = document.querySelector(".buttonBugger");
const detailCardsLinkArea = document.querySelector(".detail_cards_link_area");
const detailCards = document.querySelector(".description_cards");
const frontCard = document.querySelector(".front_card");
const detailCardsBtn = document.querySelector(".detail_cards_btn");
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
        start: "0% 70%",
        endTrigger: descriptionSection,
        end: "100% 50%",
        markers: true,
        onToggle: () => header.classList.toggle("js_show"),
      },
    });

  gsap.fromTo(
    document.querySelector(".description_cards"),
    { y: "-5rem" }, 
    {
      y: "-20rem", 
      scrollTrigger: {
        trigger: sectionLog,
        start: "135% 100%",
        end: "135% 0%",
        scrub: true, 
        markers: false,
      },
    }
  );


    gsap.to(document.querySelector(".section_about"), {
      scrollTrigger: {
        trigger: sectionAbout,
        start: "0 80%",
        end: "100% 20%",
        markers: false,
        onToggle: function () {
          container.classList.toggle("is_active");
          sectionLog.classList.toggle("is_active");
          if (!sectionLog.classList.contains("is_active")) {
            header.classList.add("js_show");
          } else {
            header.classList.remove("js_show");
          }
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

function toggleCardState() {
  detailCardsLinkArea.classList.toggle("is_active");
  detailCards.classList.toggle("is_active");
  document
  .querySelectorAll(".cyan, .purple, .yellow, .green, .pink")
  .forEach((element) => {
    element.classList.toggle("is_active");
  });
  window.addEventListener("scroll", updateScroll, { once: true })

}

const navContact = document.querySelectorAll(".contact");

navContact.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});

