function makeVisible(i, j) {
   console.log("Hello")
    if(i.style.display === "none" || i.style.display === ""){
        j.style.display = "none"
        i.style.display = "contents"
        
    } 
    else if (i.style.display === "contents") {
        j.style.display = "inline"
        i.style.display = "none"
    }
}
