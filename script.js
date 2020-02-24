const css = document.querySelector('h3');
//query selector so we do like class selector
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value + ","
        + color2.value + ")";

    css.textContent = body.style.background + ";"
}


color1.addEventListener("input", setGradient );

color2.addEventListener("input", setGradient);



