const sharebutton = document.querySelectorAll(".share-icon");
const shareOption = document.querySelector(".info-area1");
const shareArea = document.querySelector(".info-area2");



sharebutton.forEach(img => {
    img.addEventListener("click", () => {
        console.log("fuck")
        
    
        if (shareArea.style.display != "none") {
            shareOption.style.display = "flex";
            shareArea.style.display = "none";
            
        } else {
            shareOption.style.display = "none";
            shareArea.style.display = "flex";
    
        }
    
    
    
    })

})


const facebook = document.querySelector("#facebook");
const twitter = document.querySelector("#twitter");
const pinterest = document.querySelector("#pinterest");

facebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/sharer/sharer.php?u=http://192.168.1.11:5500/index.html/", "", ",width=500,height=500");
})




