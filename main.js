let burgerMenu = document.querySelector(".icon");
burgerMenu.addEventListener("click", menuOpenClose)

function menuOpenClose() {
    let menu = document.getElementById("myLinks");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}