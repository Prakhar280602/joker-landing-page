gsap.from("nav a:not(.logo)", {
    y: -500,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    ease: "power4.inOut"
});
gsap.from(".bg-1", {
    x: -500,
    duration: 2,
    ease: "power4.out",
    opacity: 0
})
gsap.from(".bg-2", {
    x: 500,
    duration: 2,
    ease: "power4.out",
    opacity: 0
})
gsap.from(".joker", {
    y: 80,
    duration: 2,
    opacity: 0,
    ease: "power4.out",
    delay: 1.5
})
gsap.from(".upper-text, .lower-text", {
    y: 10,
    duration: 1,
    opacity: 0,
    delay: 3
})
gsap.from(".trailer", {
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 3,
    stagger: 0.5
})