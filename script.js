var photocon = document.querySelector("#photo-cont")
var hellobtn = document.querySelector("#Hello")
photocon.addEventListener("mouseenter", function () {
    gsap.to(hellobtn, {
        scale: 1,
        opacity: 1
    })
})
photocon.addEventListener("mouseleave", function () {
    gsap.to(hellobtn, {
        scale: 0,
        opacity: 0
    })
})
photocon.addEventListener("mousemove", function (dets) {
    gsap.to(hellobtn, {
        left: dets.x - 50,
        top: dets.y - 80
    })
})


gsap.from("#page1 h1", {
    scale: 0.9,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    delay: 1.5

})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.addEventListener("mousemove", function (dets) {
    {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    }
})

document.querySelector(".child").addEventListener("mouseenter", function(){
    gsap.to("#cursor", {
        transform:" translate(-50%, -50%)scale(1)"
    })
})


function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation()







