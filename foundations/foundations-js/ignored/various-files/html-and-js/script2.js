let img = document.images;
console.log(img);
console.log(img[0].src);
console.log(img[0].width);
console.log(img[0].height);
console.log(img[0].title);
img[0].title = "CAT";
console.log(img[0].title);
img[0].id = "catId";
img[0].className = "catClass1";
console.log(img[0]);

console.log(img[0].getAttribute("class"));
console.log(img[0].getAttribute("class"));
console.log(img[0].getAttribute("src"));

img[0].setAttribute("id", "catId2");
console.log(img[0]);