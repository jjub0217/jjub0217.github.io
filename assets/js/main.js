  /**
   * @clicktrigger
   * 
   */
  $(window).trigger("click")
  


  /**
   * @floatingbox나타나는기능
   * 
   */
  gsap.to(".container",{
    scrollTrigger: {
      start:"bottom top",
      end: "bottom top",
      markers:false,
      onEnter : (e) => {
        if(window.matchMedia("(min-width: 1025px)").matches){
          gsap.to(".floating-box", 
          {
            position: "fixed",
            transform: "translateY(0)",
            display: "block"
          })
        }else{
          gsap.to(".floating-box", 
          {
            position: "relative",
            transform: "none",
            position: "fixed",
            display: "block",
            top: 0
          })
        }
      },
      onLeaveBack : () => {
        if(window.matchMedia("(min-width: 1025px)").matches){
          gsap.to(".floating-box", {
            display: "none",
            transform: "translateY(-100%)",
          })
        }else{
          gsap.to(".floating-box ", 
          {
            position: "relative",
            transform: "none",
            position: "fixed",
            display: "block",
            top: 0
          })
        } 
      }
    }
  })


  /**
   * @페이지가로딩되었을때의기능
   * 
   */
  $(window).on("load",function(e){
    // console.log('load 이벤트 실행');
    // floatingObject('.work1',1,20)
    // floatingObject('.work2',.5,15)
    // floatingObject('.work3',2.5,5)
    // floatingObject('.work4',2,20)
    // floatingObject('.work5',1,20)
    // floatingObject('.work6',2.5,20)
    // floatingObject('.work7',3,20)
    // floatingObject('.work8',2,0.1)
    // floatingObject('.work9',3.5,20)
    // floatingObject('.work10',4,20)
    let currentMode = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
    if(currentMode === "mobile"){
      $(".profile-image").css("display", "none")
    }
  }) 


  /**
   * @페이지의사이즈가변경되었을때의기능
   * 
   */
  $(window).resize(function(){
    // console.log('resize 이벤트 실행');
    // floatingObject('.work1',1,20)
    // floatingObject('.work2',.5,15)
    // floatingObject('.work3',1.5,20)
    // floatingObject('.work4',2,20)
    // floatingObject('.work5',1.5,20)
    // floatingObject('.work6',2.5,20)
    // floatingObject('.work7',3,20)
    // floatingObject('.work8',2.5,20)
    // floatingObject('.work9',3.5,20)
    // floatingObject('.work10',4,20)
  }) 


  /** 
   *  @이미지들이스크롤에의해커지는기능
   * 
  */
  $("[data-scroll]").each(function(i, el) {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "0% 70%",
      end: "100% 0%",
      markers: false,
      scrub:1,
      onToggle: function(){
        $(el).toggleClass("on")
      },
    },
  })
})


/**
 * @페이지가로딩되었거나사이즈가변경되었을때포폴들이움직이는범위를랜덤으로잡아주는기능
 * 
 */
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


/**
 * @페이지가로딩되었거나사이즈가변경되었을때포폴들이움직이는기능을디바이스사이즈가1025보다작은경우에는작동하지않도록하는기능
 * 
 */
function floatingObject(selector,delay,size){
  if(window.matchMedia("(min-width: 1025px)").matches){
      console.log('width 1024 초과임');
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
$(".nav-item.about").click(function(){
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
