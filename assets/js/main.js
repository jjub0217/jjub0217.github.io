// $(function () {

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


  const loadingText = new SplitType(".intro p", { types: "words, chars" });
  
  // gsap.to($(".intro .char"), {
  //   opacity: 1,
  //   stagger: 0.2,
  //   scale: 1,
  //   duration: 0.5,
  //   ease: "bounce.out", // 튀는 효과
  // });

  const loadingTl = gsap.timeline({
    // stagger: 0.2,
    // scale: 1,
    duration: 0.5,
   
    // loadingTl 이 완료된 후에 실행될 콜백함수
    onComplete: function () {
      loadingAni.play();
    },
  });
  loadingTl.to($(".intro .char"), {
    opacity: 1,
    scale: 1,
    stagger: 0.2,
    ease: "bounce.out", // 튀는 효과
    // stagger: 0.2,
    // scale: 1,
    // duration: 0.5,
    // ease: "bounce.out", // 튀는 효과
  });


 ScrollTrigger.matchMedia({
   "(min-width: 1024px)": function () {
     /**
      *  @이미지들이스크롤에의해커지는기능
      *
      */
     $("[data-scroll]").each(function (i, el) {
       gsap.to(el, {
         scrollTrigger: {
           trigger: el,
           start: "0% 100%",
           end: "100% 0%",
           markers: false,
           scrub: 1,
           onToggle: function () {
             $(el).toggleClass("on");
           },
         },
       });
     });

   }
 })


// });



  /**
   * @floatingbox나타나는기능
   * 
   */
// let matchMedia = gsap.matchMedia();
// matchMedia.add("(min-width: 1024px)", ()=>{
//   gsap.timeline({
//     scrollTrigger: {
//     trigger: $(".header .inner"),
//     start:"100% 0%",
//     end: "100% 0%",
//     markers:false,
//     scrub:0,
//     }
//   })
//   .fromTo($(".floating-box"),  {
//     transform: "translate(0, -100%)",
//     transition: "0.5s"
//   },
//   {
//     position: "fixed",
//     top: 0,
//     transform: "translate(0, 0)",
//     zIndex: 10,
//   })
//   })

  /**
   * @페이지가로딩되었을때의기능
   * 
   */
  $(window).on("load",function(e){
    console.log('load 이벤트 실행');
    const header = document.querySelector(".header");
    const floatingBox = document.querySelector(".floating-box");
    window.addEventListener("scroll", function () {
      console.log(header.scrollHeight);
      let curr = this.scrollY;
      console.log(curr);
      if (curr >= header.scrollHeight) {
        floatingBox.classList.add("on");
      } else {
        floatingBox.classList.remove("on");
      }
    });
  }) 


  /**
   * @페이지의사이즈가변경되었을때의기능
   * 
   */
  $(window).resize(function(){
    // console.log('resize 이벤트 실행');
  }) 




/**
 * @mo-gnb_btn클릭했을때 mo-gnb 나타나는 기능
 * 
 */
$(".mo-gnb_btn").click(function (e){
  e.preventDefault();
  if($(this).hasClass("on")){
    $(".mo_gnb").stop().slideUp()
  }else{
  $(".mo_gnb").stop().slideDown(); 
  }
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true' )
    $(this).addClass("on")
  } else {
    $(this).attr('aria-expanded', 'false' )
    $(this).removeClass("on")
  }
})


/**
 * @mo-gnb의 a 클릭했을때 해당 페이지로 이동하는 기능
 * 
 */
$(".mo_gnb-list a").click(function (e){
  $(".mo_gnb").stop().slideUp()
  $(".mo-gnb_btn").removeClass("on")
})



/**
 * @footer로이동하는기능
 * 
 */
$(".nav-item.about").click(function(e){
  e.preventDefault()
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})

$(".floating-nav-item.about").click(function(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})

$(".mo_gnb-list .about").click(function(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})




$("body").mousemove(function (e) {
  xVal = e.clientX;
  yVal = e.clientY;
  gsap.to(".cursor", {
    x: xVal,
    y: yVal,
    duration: 0.3,
  });
});



$(".works-area .thumb-box").mouseover(function () {
  gsap.to(".cursor", { scale: 2 });
  gsap.to(".cursor span", { visibility: "visible", opacity: 1 });
});
$(".works-area .thumb-box").mouseleave(function () {
  gsap.to(".cursor", { scale: 1 });
  gsap.to(".cursor span", { visibility: "hidden", opacity: 0 });
});



// const videoElement = document.querySelector("#video_intro");
// 동영상 재생이 끝났을 때 실행되는 이벤트 리스너
// videoElement.addEventListener("ended", function () {
//   // 동영상이 끝나면 loadingAni 실행
//   setTimeout(function () {
//     // console.log(videoElement);
//     loadingAni.play(); // GSAP 애니메이션 실행
//   }, 1200); // 3000 밀리초 = 3초
//   // loadingAni.play();
// });

const loadingAni = gsap.timeline({
  paused: true, // 처음에는 멈춘 상태
});

loadingAni.to(".intro", { 
  yPercent: -100, 
  display: "none", 
  delay: 1
});


const flowerAnimation = document.getElementById("flowerAnimation");
const totalFrames = 25; // 스프라이트에 있는 총 프레임 수
let currentFrame = 0;
let repeatCount = 0; // 프레임 업데이트 횟수 카운트
const maxRepeats = 25; // 원하는 반복 횟수


// 각 프레임의 너비
// const frameWidth = 600; 
// 디바이스의 너비에 따른 프레임 너비 설정
let frameWidth = window.innerWidth <= 768 ? 320 : 600; // 768px 이하에서는 200px, 그 이상은 600px

const frameInterval = setInterval(() => {
  const progress =
    document.readyState === "complete"
    ? 1
    : document.readyState === "interactive"
    ? 0.5
    : 0;

  // 현재 프레임에 따라 background-position을 이동
  flowerAnimation.style.backgroundPosition = `-${
    currentFrame * frameWidth
  }px 0`;

  // 프레임을 증가시키고, 마지막 프레임 이후 처음으로 돌아감
  currentFrame = (currentFrame + 1) % totalFrames;
  repeatCount++;

  // if (repeatCount >= maxRepeats) {
  //   clearInterval(frameInterval);
  //   if(progress === 1){
      // loadingAni.play();
    // }
  // }
}, 100); // 100ms마다 프레임 업데이트