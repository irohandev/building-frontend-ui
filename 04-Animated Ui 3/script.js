function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");
    var halfValue = Math.floor(splittedText.length / 2);

    var clutter = "";

    splittedText.forEach(function (element, id) {
        if (id < halfValue) {
            clutter += `<span class="firsthalf">${element}</span>`;
        } else {
            clutter += `<span class="secondhalf">${element}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakTheText();



gsap.from("h1 .firsthalf",{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.1

})

gsap.from("h1 .secondhalf",{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:-0.1

})