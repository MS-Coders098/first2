// gsap.to("#page2 img", {
//     width: "100%",
//     scrollTrigger: {
//         trigger: "#page2", // when using pin property, it is necessary to trigger parent otherwise the same element which we targetting above
//         scroller: "body",
//         markers: true,
//         start: "top 0",
//         end: "top -100%",
//         scrub: 2,
//         pin: true
//     }
// })


gsap.to("#page2 h1", {
    transform: "translateX(-173%)",
    duration: 10,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 1,
        pin: true
    }
})