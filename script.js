function over(element) {     
    element.play();    
}
    
function out(element) {
    element.pause();    
}


function click(element) {
    
    element.muted = true;
}

const video = document.querySelector("#my_video");

video.addEventListener("click",click(this));
