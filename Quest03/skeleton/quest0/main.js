var imageDisplayed = document.getElementsByClassName("displayed-img")[0];
var thumbBarArea = document.getElementsByClassName("thumb-bar")[0];
var overlayBtn = document.getElementsByClassName("dark")[0];
var overlayArea = document.getElementsByClassName("overlay")[0];

/* Declaring the array of image filenames */
/* Declaring the alternative text for each image file */
// 각 이미지 파일의 이름(src 값)과 대체 텍스트(alt값) 값을 각각 객체타입 안에 담아주기!
var imageAltArr = ["Closeup of a human eye", "Rock", "Violet flower",
                   "Egyptian Wall Painting", "Butterfly"];
var imageTitleObj = {};

//=> 객체 imageObj에 각각 key, value로 추가
for(var i = 0; i < imageAltArr.length; i++){
    imageTitleObj["images/pic" + (i+1) + ".jpg"] = imageAltArr[i];
};

console.log(imageTitleObj);
/*
   {images/pic1.jpg : "Closeup of a human eye"
    images/pic2.jpg : "Rock"
    images/pic3.jpg : "Violet flower"
    images/pic4.jpg : "Egyptian Wall Painting"
    images/pic5.jpg : "Butterfly"}
*/

/* Looping through images */
// thumb_bar 요소에 이미지 추가하기!
for(var i = 0; i < imageAltArr.length; i++){

    var key = Object.keys(imageTitleObj)[i];

    var newImage = document.createElement('img'); // 이미지 요소 생성해서 newImage라는 변수에 담기
    newImage.setAttribute("src", key); // 이미지 src 주소 세팅
    newImage.setAttribute("alt", imageTitleObj.key); // 이미지 alt 값 세팅
    thumbBarArea.appendChild(newImage); // thumBar의 요소에 newImage 요소를 자식으로 추가하기

    // thumbBar에 있는 이미지를 클릭시 full_img 에 있는 이미지를 클릭한 이미지로 바꾸는 기능을 각 이미지에 추가
    newImage.addEventListener("click", function(){
        imageDisplayed.setAttribute("src", this.getAttribute("src")); // displayedImage.src = this.src;
        imageDisplayed.setAttribute("alt", this.getAttribute("alt")); // displayedImage.alt = this.alt; 
    });
};

/* Wiring up the Darken/Lighten button */
// 어두워지게/ 밝게 하는 버튼 이벤트 추가하기!
overlayBtn.addEventListener("click", function(){
    if(overlayBtn.className === "dark"){ // => 버튼의 클래스이름이 "dark"이면
        overlayBtn.setAttribute("class", "light"); // => 클래스 속성값을 "ligth"로 변경
        overlayBtn.textContent = "Lighten"; // => 버튼의 텍스트 콘텐츠를 "Ligthen" 으로 변경
        overlayArea.style.backgroundColor = "rgba(0,0,0,0.5)"; // => overlay 요소의 배경색을 rgba(0,0,0,0.5)으로 변경
    }else{
        overlayBtn.setAttribute("class", "dark");
        overlayBtn.textContent = "Darken";
        overlayArea.style.backgroundColor = "rgba(0,0,0,0)";
    };
});
