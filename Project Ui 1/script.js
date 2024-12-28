var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 1.5,
    });
});
