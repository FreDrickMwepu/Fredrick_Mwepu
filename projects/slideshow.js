let slideId = ["sb-slide",  "pbm2-slide", "watch-slide", "biosphere-slide", "timer2-slide", "bike-slide", "opencv-slide"];

let slideIndex = [];
for (let i = 0; i < slideId.length; i++) {
  slideIndex.push(1);
}

for (let i = 0; i < slideId.length; i++) {
  showSlides(1, i);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1} 
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}