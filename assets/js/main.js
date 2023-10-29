
  /**
   * @floatingmenu나타나는기능
   * 
   */
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


  /**
   * @페이지가로딩되었을때의기능
   * 
   */
  $(window).on("load",function(e){
    console.log('load 이벤트 실행');
    floatingObject('.work1',1,15)
    floatingObject('.work2',.5,15)
    floatingObject('.work3',1.5,20)
    floatingObject('.work4',2,25)
    floatingObject('.work5',1.5,20)
    floatingObject('.work6',2.5,20)
    floatingObject('.work7',3,20)
    floatingObject('.work8',2.5,20)
    floatingObject('.work9',3.5,20)
    floatingObject('.work10',4,20)
    floatingObject('.work11',3.5,20)
    floatingObject('.work12',4.5,20)
  }) 



  /**
   * @페이지의사이즈가변경되었을때의기능
   * 
   */
$(window).resize(function(){
    console.log('resize 이벤트 실행');
    floatingObject('.work1',1,15)
    floatingObject('.work2',.5,15)
    floatingObject('.work3',1.5,20)
    floatingObject('.work4',2,25)
    floatingObject('.work5',1.5,20)
    floatingObject('.work6',2.5,20)
    floatingObject('.work7',3,20)
    floatingObject('.work8',2.5,20)
    floatingObject('.work9',3.5,20)
    floatingObject('.work10',4,20)
    floatingObject('.work11',3.5,20)
    floatingObject('.work12',4.5,20)
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
  if(
    window.matchMedia("(min-width: 1025px)").matches){
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
 * @floatingmenu클릭했을때메뉴이동기능
 * 
 */
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


/**
 * @footer로이동하는기능-
 * 
 */
// 속도를 줄일순 없나?
$(".nav-item.about").click(function(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})

$(".floating-nav-item").find("a").click(function(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})
