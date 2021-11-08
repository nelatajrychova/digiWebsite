// this defines the change image function which will be called when the image is clicked on
function changeImage() {
//this checks which image is curently being displayed
    if (document.getElementById("ProductImg").getAttribute("src") == "beaded%20charm%20necklace%201.png") {
        //this changes the image to image 2
        document.getElementById("ProductImg").src = "beaded%20charm%20necklace%202.png";
    }
    else {
        //this changes the image to image 1
        document.getElementById("ProductImg").src = "beaded%20charm%20necklace%201.png";
    }
}