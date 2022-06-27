/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myPictures");
  let dots = document.getElementsByClassName("opacity");
  let captionText = document.getElementById("picText");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1]v;
  captionText.innerHTML = dots[slideIndex-1].alt;
}*/

var currentPic=1;
function nextPic(){
  currentPic++;
  myPic(currentPic);
}
function previousPic(){
  currentPic--;
  myPic(currentPic);
}
function myPic(numOfPic){
  currentPic=numOfPic;
  var bigPic=document.getElementsByClassName("myPictures");
  var picRow=document.getElementsByClassName("opacity");
  var picName=document.getElementById("picText");
  if(numOfPic>bigPic.length){
    currentPic=1;
  }
  if(numOfPic<1){
    currentPic=bigPic.length;
  }
  for(var pic of bigPic){
    pic.style.display="none";
  }
for(i=0;i<picRow.length;i++){
  picRow[i].className=picRow[i].className.replace(" active","");
 // Thumbnail.style.opacity=0.5;
}
bigPic[currentPic-1].style.display="block";
picRow[currentPic-1].className+=" active";
picText.innerHTML = picRow[currentPic-1].alt;
}
