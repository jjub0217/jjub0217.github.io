

  gsap.to(".container",{
    scrollTrigger: {
      start:"bottom top",
      end: "bottom top",
      markers:false,
      onEnter : (e) => {
        gsap.to(".floating-box ", {
          position: "fixed",
          transform: "translateY(0)",
          display: "block"
        })
      },
      onLeaveBack : () => {
         gsap.to(".floating-box", {
          display: "none",
          transform: "translateY(-100%)",
        })
      }
    }
  })

    gsap.timeline({
    scrollTrigger:{
    trigger:$(".header .inner"), 
    start:"100% 100%",
    end:"50% 0%",
    markers:true,
    scrub:1,
    },
    })
    // 왜이렇게 느리지?
  .to($('.header .inner .dev'), { y: -120})
  // .to($('.section-shaping .pc-inner .left .image2'), {rotation:-40, xPercent: -140},{rotation:-15, xPercent: -30, },'a')
  // .to($('.section-shaping .pc-inner .right .image1'), {rotation:40, xPercent: 140},{rotation:0, xPercent: 5, },'a')
  // .to($('.section-shaping .pc-inner .right .image2'), {rotation:15, xPercent: 120},  {rotation:15, xPercent: 45, },'a')



  $(window).on("load",function(e){
    console.log('load 이벤트 실행');
    // floatingObject('.work1',1,15)
    // floatingObject('.work2',.5,15)
    // floatingObject('.work3',1.5,20)
    // floatingObject('.work4',2,25)
    // floatingObject('.work5',1.5,20)
    // floatingObject('.work6',2.5,20)
    // floatingObject('.work7',3,20)
    // floatingObject('.work8',2.5,20)
    // floatingObject('.work9',3.5,20)
    // floatingObject('.work10',4,20)
    // floatingObject('.work11',3.5,20)
    // floatingObject('.work12',4.5,20)
  }) 

$(window).resize(function(){
    console.log('resize 이벤트 실행');
    // floatingObject('.work1',1,15)
    // floatingObject('.work2',.5,15)
    // floatingObject('.work3',1.5,20)
    // floatingObject('.work4',2,25)
    // floatingObject('.work5',1.5,20)
    // floatingObject('.work6',2.5,20)
    // floatingObject('.work7',3,20)
    // floatingObject('.work8',2.5,20)
    // floatingObject('.work9',3.5,20)
    // floatingObject('.work10',4,20)
    // floatingObject('.work11',3.5,20)
    // floatingObject('.work12',4.5,20)
}) 

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size){
  if(
    !window.matchMedia("(max-width: 991px)").matches){
      console.log('width 991 아님');
      // gsap.to(요소, 시간, 옵션)
      gsap.to(selector, random(1.5,2.5), {
        y: size,
        repeat: -1, // -1 무한반복
        yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
        ease: Power1.easeInOut, // 타이밍함수
        delay: random(0,delay) // 지연시간
      })
  }
  return
}

$(".floating-gnb .floating-nav-list.mo").click(function (e){
  e.preventDefault()
  if( $(".floating-box").hasClass("isAct")){
    $(".floating-box").removeClass("isAct")
    $(".mo_gnb").stop().slideUp()
    $(this).removeClass("on")
  }else{
    $(".floating-box").addClass("isAct")
    $(".mo_gnb").stop().slideDown()
    $(this).addClass("on")
  }

})