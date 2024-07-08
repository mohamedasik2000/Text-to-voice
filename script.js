var speech=new SpeechSynthesisUtterance();
var taptospeakbutton=document.getElementById("tap-to-speak-button")
taptospeakbutton.addEventListener("click",function(){
    speech.text=textarea.value
    speech.volume=1
    speech.rate=1
    speech.pitch=1;
    window.speechSynthesis.speak(speech)
})