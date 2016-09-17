var img = document.getElementsByTagName('img');

for(var i=0;i<img.length;i++) {
   img[i].onload = function() {
       img[i].style.opacity = 1;
   }
}