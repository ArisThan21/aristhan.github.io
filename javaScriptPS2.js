function FontSize() {
    var paragraphs = document.querySelectorAll("main p");
    var header = document.querySelector("header");
    var paragraph_header = document.querySelector("div p");
    var photografia = document.querySelector(".im1");
    var container = document.querySelector(".contener");

    if (window.innerWidth >= 768) {
        paragraphs.forEach(function(paragraph) {
            paragraph.style.fontSize = "35px";
            paragraph_header.style.fontSize = "35px"
        });
        header.style.height = "300px"; 
    } else {
        paragraphs.forEach(function(paragraph) {
            paragraph.style.fontSize = "25px"; 
            paragraph_header.style.fontSize = "25px"
            photografia.style.float = "none"; 
            photografia.style.margin = "auto"; 
            container.parentElement.style.textAlign = "center";
        });
        header.style.height = "400px"; 
    }
}


FontSize();

window.addEventListener("resize", FontSize);