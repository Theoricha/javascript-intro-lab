console.info("Hello from the file");
document.getElementById("myHeading").innerHTML = "Theo Richards"
document.querySelector("nav ul li").setAttribute("class","currentPage")
//document.querySelector("nav ul li a").setAttribute("href","https://google.co.uk")
let colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons);
for (let i= 0; i<colourButtons.length;i++){
    colourButtons[i].style.backgroundColor = "gray";
}

document.getElementById("myTestBtn").addEventListener("click",function(){
    console.info("Hi i was clicked")
})

//colour picker
document.querySelector(".red").addEventListener('click', function(ev){
         document.body.setAttribute('class', "redBack");
   })

let colourbuttons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++){
    colourButtons[i].addEventListener("click",changeColour);
}

function changeColour(ev){
    console.info(ev.target.classList[0]);
    let colourClass = ev.target.classList[0] + "Back"
    document.body.setAttribute("class",colourClass);
}

//image rotator
let imageAr = [
  'images/view1.jpg',
  'images/view2.jpg',
  'images/view3.jpg',
  'images/view4.jpg',
  'images/view5.jpg',
  'images/view6.jpg'
];

let imageRotator = document.getElementById("myImages")
let imageCounter = 0;
imageRotator.setAttribute("src",imageAr[imageCounter])


function chgImage(){
    imageCounter ++
    if (imageCounter > imageAr.length - 1)
        imageCounter = 0
    console.info("hi")
    console.info(imageCounter)
    imageRotator.setAttribute("src",imageAr[imageCounter])
}
chgImage()
setInterval(chgImage, 1000)