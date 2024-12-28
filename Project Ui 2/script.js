var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")



var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.6
})

tl.from("#full h4",{
    x:1500,
    duration:0.5,
    stagger:0.1,
    opaccity:0
})

tl.to("#full i",{
    opaccity: 0
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function() {
    tl.reverse()
})
