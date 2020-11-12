function Rotate() {
    var pic = document.getElementById("Me");
    var deg = document.getElementById("Me").style.transform;
    deg = deg + 180;
    pic.style.transform = "rotate("+deg+"deg)";
}

function makeVisible(i) {
   
    console.log("Hello")
    if(i.style.display === "none" || i.style.display === ""){
        i.style.display = "contents"
    } 
    else if (i.style.display === "contents") {
        i.style.display = "none"
    }
}