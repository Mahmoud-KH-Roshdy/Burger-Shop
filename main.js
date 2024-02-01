let arrow = document.getElementById("arrowUp");
console.log(arrow)

window.onscroll = function () {
    if (window.scrollY >= 600) {
        arrow.style.right = "20px"
    } else {
        arrow.style.right = "-50px"
    }
}
arrow.onclick = function () {
    window.scrollTo({
        top: 0
    })
}