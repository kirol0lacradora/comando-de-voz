var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    var content = event.results [0][0].transcript;
    console.log(content);
    document.getElementById ("textbox").innerHTML=content;
    if (content=="selfie"){
        speak();
    }
}

function speak(){
   var synth = window.speechSynthesis;//primeiro inicializa o api
   speakData = "tirando selfie em 3 segundos!"//criamos uma nova api q sera nossa
   var utterThis = new SpeechSynthesisUtterance(speakData);//manda a api funcionar(ouvir ler e falar)
   synth.speak(utterThis);
   Webcam.attach(camera);
   setTimeout(function(){
    takeSelfie();
    saveSelfie();},3000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:320,
    height:240,
    image_format:'png',
    png_quality: 90
});

function takeSelfie(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="foto" src="'+data_uri+'"/>';
    });
}
function saveSelfie(){
    link = document.getElementById("link");
    image = document.getElementById("foto").src;
    link.href = image;
    link.click();
}