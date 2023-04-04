const buttonFoward = document.querySelector("#foward");
const buttonBack = document.querySelector("#back");
const progress = document.querySelectorAll(".step");

let count = 0;

buttonFoward.addEventListener("click", () => {
    progress[count].classList.add("active");
    count++;
    buttonsListener();
});

buttonBack.addEventListener("click", () => {
    count--;
    progress[count].classList.remove("active");
    buttonsListener()
});

const buttonsListener = () => {
    count <= 0 ? buttonBack.setAttribute("disabled", "") : 
        buttonBack.removeAttribute("disabled", "")
    count > 3 ? buttonFoward.setAttribute("disabled", "") : 
        buttonFoward.removeAttribute("disabled", "")
}

buttonsListener();