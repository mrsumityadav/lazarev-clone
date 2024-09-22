function lenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
lenis();

function navAnimation() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const submenu = item.querySelector(".submenu");

    item.addEventListener("mouseenter", () => {
      submenu.style.display = "block";
      gsap.to(submenu, {
        opacity: 1,
        duration: 0.3,
        onStart: () => {
          gsap.set(submenu.querySelectorAll("span"), { opacity: 0, y: 10 });
        },
      });
      gsap.to(submenu.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(submenu.querySelectorAll("span"), {
        opacity: 0,
        y: 10,
        duration: 0.3,
        onComplete: () => {
          submenu.style.display = "none"; // Hide submenu after animation
        },
      });
    });
  });
}
navAnimation()

function page2Animation() {
  var elemImg = document.querySelectorAll("#page2 .right-ctn .elem");
  elemImg.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      gsap.to(e.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    e.addEventListener("mouseleave", function () {
      gsap.to(e.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    e.addEventListener("mousemove", function (dets) {
      var topImg =
        dets.clientY -
        (e.getBoundingClientRect().top +
          e.childNodes[3].getBoundingClientRect().width / 2);
      var leftImg =
        dets.clientX -
        (e.getBoundingClientRect().left +
          e.childNodes[3].getBoundingClientRect().width / 2);
      e.childNodes[3].style.top = topImg + "px";
      e.childNodes[3].style.left = leftImg + "px";
    });
  });
}
page2Animation();

function playVideo() {
  var icon = document.querySelector(".center .icon");
  var vdo = document.querySelector("#page3 video");
  icon.addEventListener("click", function () {
    vdo.play();
    gsap.to(vdo, {
      transform: "scale(1,1)",
      opacity: "1",
    });
  });
  vdo.addEventListener("click", function () {
    vdo.pause();
    gsap.to(vdo, {
      transform: "scale(0.7,0)",
      opacity: "0",
    });
  });
}
playVideo();

function secvideo() {
  var rightSec = document.querySelectorAll(".right-sec");
  rightSec.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      e.childNodes[1].play();
    });
    e.addEventListener("mouseleave", function () {
      e.childNodes[1].load();
    });
  });
}
secvideo();

function othersec() {
  var smallsec = document.querySelectorAll(".sec .part");
  smallsec.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      e.childNodes[7].style.opacity = "1";
      e.childNodes[7].childNodes[1].play();
    });
    e.addEventListener("mouseleave", function () {
      e.childNodes[7].style.opacity = "0";
      e.childNodes[7].childNodes[1].load();
    });
  });
}
othersec();

function page6animation() {
  gsap.from(".btm6-parts h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".btm6-parts",
      scroller: "body",
      // markers:true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}
page6animation();

var imgsvn = document.querySelector(".page7-img .main-part");
var pointsvn = document.querySelector(".page7-img .main-part .normal");
imgsvn.addEventListener("mousemove", function (dets) {
  gsap.to(pointsvn, {
    scale: 1,
    // duration : 2,
  });
  var lefty =
    dets.clientX -
    (imgsvn.getBoundingClientRect().left +
      pointsvn.getBoundingClientRect().width / 2);
  var topp =
    dets.clientY -
    (imgsvn.getBoundingClientRect().top +
      pointsvn.getBoundingClientRect().width / 2);
  pointsvn.style.left = lefty + "px";
  pointsvn.style.top = topp + "px";
});
imgsvn.addEventListener("mouseleave", function (dets) {
  gsap.to(pointsvn, {
    scale: 0,
  });
});
