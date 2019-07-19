var background = document.querySelector(".container-bg");

var sliderControlsButton1 = document.querySelector("#slider-controls__slide1");
var sliderControlsButton2 = document.querySelector("#slider-controls__slide2");
var sliderControlsButton3 = document.querySelector("#slider-controls__slide3");

var sliderSlide1 = document.querySelector("#slide1");
var sliderSlide2 = document.querySelector("#slide2");
var sliderSlide3 = document.querySelector("#slide3");




    sliderControlsButton1.addEventListener("click", function(){
        removeClass();
        sliderSlide1.classList.add("active");
        removeBackground();
        background.classList.add("green-bg");
    });
    sliderControlsButton2.addEventListener("click", function(){
        removeClass();
        sliderSlide2.classList.add("active");
        removeBackground();
         background.classList.add("blue-bg");
    });
    sliderControlsButton3.addEventListener("click", function(){
        removeClass();
        sliderSlide3.classList.add("active");
        removeBackground();
        background.classList.add("red-bg");
    });



function removeClass(){
    if (sliderSlide1.classList.contains("active")){
        sliderSlide1.classList.remove("active");
    }
    if (sliderSlide2.classList.contains("active")){
        sliderSlide2.classList.remove("active");
    }
    if (sliderSlide3.classList.contains("active")){
        sliderSlide3.classList.remove("active");
    }
}
function removeBackground(){
    if (background.classList.contains("green-bg")){
        background.classList.remove("green-bg");
    }
     if (background.classList.contains("blue-bg")){
        background.classList.remove("blue-bg");
    }
     if (background.classList.contains("red-bg")){
        background.classList.remove("red-bg");
    }
}


    setTimeout(function(){
        removeClass();
        sliderSlide1.classList.add("active");
        removeBackground();
        background.classList.add("green-bg");
    },0);

    setTimeout(function(){
        removeClass();
        sliderSlide2.classList.add("active");
        removeBackground();
        background.classList.add("blue-bg");
    },5000);

    setTimeout(function(){
        removeClass();
        sliderSlide3.classList.add("active");
        removeBackground();
        background.classList.add("red-bg");
    },10000);
