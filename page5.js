function Back(){
    window.location="index.html"
}


img=""
Status=""
objects=[]
function preload(){
    img=loadImage("Bedroom2.jpg")
}

function setup(){
    canvas=createCanvas(640,420)
    canvas.center() 
    objectDetected=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status:Detectng objects"
}

function modelLoaded(){
    console.log("The Model has Loaded")
    Status=true
    objectDetected.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
    objects=results
}

function draw(){
    image (img,0,0,640,420)

    if(Status !="" ){
        for (let i = 0; i< objects.length; i++) {
        document.getElementById("status").innerHTML="status: objects detected"
        fill("#0000FF")
        percent=floor( objects[i].confidence * 100 )
        text( objects[i].label + " " + percent + "%", objects[i].x + 15 , objects[i].y + 15 )
        noFill()
        stroke("#0000FF")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            
        }
    }
}
