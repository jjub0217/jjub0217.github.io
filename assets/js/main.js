  /**
   * @clicktrigger
   * 
   */
  $(window).trigger("click")
  


  /**
   * @floatingbox나타나는기능
   * 
   */
let matchMedia = gsap.matchMedia();
matchMedia.add("(min-width: 1025px)", ()=>{
  gsap.timeline({
    scrollTrigger: {
    trigger: $(".header .inner"),
    start:"100% 0%",
    end: "100% 0%",
    markers:false,
    scrub:0,
    }
  })
  .fromTo($(".floating-box"),  {
    transform: "translate(0, -100%)",
    transition: "0.5s"
  },
  {
    position: "fixed",
    top: 0,
    transform: "translate(0, 0)",
    zIndex: 10,
  })
  })

  /**
   * @페이지가로딩되었을때의기능
   * 
   */
  $(window).on("load",function(e){
    console.log('load 이벤트 실행');
  }) 


  /**
   * @페이지의사이즈가변경되었을때의기능
   * 
   */
  $(window).resize(function(){
    // console.log('resize 이벤트 실행');
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
        // $(el).toggleClass("on")
      },
    },
  })
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
