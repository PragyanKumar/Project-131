function Back(){
    window.location="index.html"
}


img=""
Status=""
function preload(){
    img=loadImage("bedroom.jpg")
}

function setup(){
    canvas=createCanvas(640,420)
    canvas.center() 
    objectDetected=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status:Detectng objects"
}

function modelLoaded(){
    console.log("Model is Loaded")
    Status=true
    objectDetected.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
}

