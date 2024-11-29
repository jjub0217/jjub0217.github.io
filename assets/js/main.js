
/**
 * @스크롤부드럽게해주는lenis라이브러리
 * 
 */
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




// /**
//  * @split라이브러리
//  * 
//  */
// const loadingText = new SplitType(".intro p", { types: "words, chars" });

// gsap.to($(".intro .char"), {
//   opacity: 1,
//   stagger: 0.2,
//   scale: 1,
//   duration: 0.5,
//   ease: "bounce.out", // 튀는 효과
// });



/**
*  @이미지들이스크롤에의해커지는기능
*
*/
// ScrollTrigger.matchMedia({
//   "(min-width: 1024px)": function () {
//     $("[data-scroll]").each(function (i, el) {
//       gsap.to(el, {
//         scrollTrigger: {
//           trigger: el,
//           start: "0% 100%",
//           end: "100% 0%",
//           markers: false,
//           scrub: 1,
//           onToggle: function () {
//             $(el).toggleClass("js_show");
//           },
//         },
//       });
//     });
//   }
// })




/**
 * @floatingbox나타나는기능
 * 
 */
// const header = document.querySelector(".header");
// const visualArea = document.querySelector(".visual_area");

// gsap.to($(".header"), {
//   scrollTrigger: {
//     trigger: $(".visual_area"),
//     start: "bottom top",
//     end: "100% 0%",
//     markers: false,
//     onEnter: () => {
//       document.querySelector(".header").classList.remove("js_hidden");
//     },
//     onLeaveBack: () => {
//       document.querySelector(".header").classList.add("js_hidden");
//     },
//   },
// });






/**
 * @커서
 * 
 */
// $("body").mousemove(function (e) {
//   xVal = e.clientX;
//   yVal = e.clientY;
//   gsap.to(".cursor_box", {
//     x: xVal,
//     y: yVal,
//     duration: 0.3,
//   });
// });

// $(".works-area .thumb-box").mouseover(function () {
//   gsap.to(".cursor_box", { scale: 2 });
//   gsap.to(".cursor_box .cursor_text", { visibility: "visible", opacity: 1 });
// });
// $(".works-area .thumb-box").mouseleave(function () {
//   gsap.to(".cursor_box", { scale: 1 });
//   gsap.to(".cursor_box .cursor_text", { visibility: "hidden", opacity: 0 });
// });




/**
 * @스프라이트이미지프레임업데이트
 * 
 */
// const loadingAni = gsap.timeline({
//   paused: true, // 처음에는 멈춘 상태
// });

// loadingAni.to(".intro", { 
//   yPercent: -100, 
//   display: "none", 
//   delay: 1
// });


// const bodyElement = document.body;

// const flowerAnimation = document.getElementById("flower_animation");
// const totalFrames = 25; // 스프라이트에 있는 총 프레임 수
// let currentFrame = 0;
// let repeatCount = 0; // 프레임 업데이트 횟수 카운트
// const maxRepeats = 25; // 원하는 반복 횟수
// // 디바이스의 너비에 따른 프레임 너비 설정
// let frameWidth = window.innerWidth <= 768 ? 320 : 600; // 768px 이하에서는 200px, 그 이상은 600px

// const frameInterval = setInterval(() => {
//   const progress = 
//     document.readyState === "complete"
//     ? 1
//     : document.readyState === "interactive"
//     ? 0.5
//     : 0;

//   // 현재 프레임에 따라 background-position을 이동
//   flowerAnimation.style.backgroundPosition = `-${
//     currentFrame * frameWidth
//   }px 0`;

//   // 프레임을 증가시키고, 마지막 프레임 이후 처음으로 돌아감
//   currentFrame = (currentFrame + 1) % totalFrames;
//   repeatCount++;

//   if (repeatCount >= maxRepeats) {
//     clearInterval(frameInterval);
//     console.log('여기1');
//     if(progress === 1){
//       console.log('여기2');
//       loadingAni.play();
//       console.log('여기3');
//     }
//     console.log('여기4');
//   }
//   console.log('여기5');
// }, 100); // 100ms마다 프레임 업데이트



