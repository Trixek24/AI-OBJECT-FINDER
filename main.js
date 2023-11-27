status = "";
input_value = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.position(500,300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0,480,380);
}

function start()
{
    objectDetecter= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_value = document.getElementById("input").value;
    console.log(input_value);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;

}