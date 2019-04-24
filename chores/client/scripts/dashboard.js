var navButton;
var navCollapse;

window.onload = function () {
    navButton = document.getElementById("navButton");
    navCollapse = document.getElementById("navCollapse");
}

function toggleNavbar() {
    navButton.classList.toggle("active");

    if (navButton.classList.contains("active")) {
        navCollapse.style.display = "block";
    } else {
        navCollapse.style.display = "none";
    }

}

function newChore() {
    return editChore();
}

function editChore(chore) {
    console.log(chore ? "Hausarbeit bearbeiten" : "Neue Hausarbeit");
}

