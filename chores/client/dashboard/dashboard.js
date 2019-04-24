window.onload = function() {
    initCollapsibles();
}

function initCollapsibles() {
    var collapsibles = document.getElementsByClassName("collapsible");
    var c;
    
    for (i=0;i<collapsibles.length;i++){
        c = collapsibles[i];
        c.addEventListener("click", function(){
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (this.classList.contains("active")) {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            }
        })
    }
    
}

function newChore(){
    return editChore();
}

function editChore(chore){
    console.log(chore? "Hausarbeit bearbeiten" : "Neue Hausarbeit");
}
