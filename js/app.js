var nativeVoice = 1, voices, speechSpeed = 1, info;

var setInput = function() {
    var a = document.getElementById("ttsInput").value;
    if(a !== "") {
        info = a;
    }
    else {
        info = "Yo... Whazzzup ??? Paste anything here, and press the speak button to convert text into speech !!!";
    }
}

var setSpeed = function(x) {
    var b = document.getElementById("select-speed").value;
    speechSpeed = b;
    console.log(b);
}

var startSpeech = function() {
    setInput();
    voices = document.getElementById("select-voice");
    nativeVoice = voices.options[voices.selectedIndex].value;
    setSpeed();
    switch(nativeVoice){
        case "1":
            responsiveVoice.speak(info, "UK English Female",{rate: speechSpeed});
            break;
        case "2":
            responsiveVoice.speak(info, "UK English Male", {rate: speechSpeed});
            break;
        case "3":
            responsiveVoice.speak(info, "US English Female", {rate: speechSpeed});
            break;
        case "4":            
            responsiveVoice.speak(info, "US English Male", {rate: speechSpeed});
            break;
        case "5":
            responsiveVoice.speak(info, "Australian Female", {rate: speechSpeed});
            break;
        case "6":
            responsiveVoice.speak(info, "Dutch Female", {rate: speechSpeed});
            break;
//        case "7":
//          responsiveVoice.speak(info, "Hindi Female", {rate: speechSpeed});
//          break;
        case "8":
            responsiveVoice.speak(info, "Japanese Female", {rate: speechSpeed});
            break;
        case "9":
            responsiveVoice.speak(info, "Korean Female", {rate: speechSpeed});
            break;
    }
}

var stopSpeech = function() {
    responsiveVoice.cancel();
}

var checkSupport = function() {
    if(responsiveVoice.voiceSupport()) {
        responsiveVoice.speak("Congratulations! You can listen to the book of Jesse and Lillian online. Click on the Read Button to start listening.");
    }
    else{
        alert("Congratulations! Your browser doesn't support Listening to the book of Jesse and Lillian online.");
    }    
}

var info = function() {
    alert("Guide: \n\n1. **Voice Selection**: You can choose your preferred voice for text-to-speech conversion by selecting from the dropdown menu labelled 'Select Voice.' The available voices include options such as USA Female Voice, USA Male Voice, UK Female Voice, etc.\n\n3. **Playback Mode**: You may choose between two playback modes: 'Repeat One' and 'Loop All' from the dropdown menu labelled 'Playback Mode.' 'Repeat One' repeats the current chapter continuously, while 'Loop All' automatically moves to the next chapter after the current one finishes.\n\n4. **Chapter Selection**: You can select the desired chapter from the dropdown menu labelled 'Select Chapter.' The available chapters are listed in chronological order, making it easy for you to find and select the chapter you wanna to listen to.\n\n5. **Playback Controls**: The 'READ' button initiates the text-to-speech conversion for the selected chapter. The 'STOP' button allows you to stop the speech playback at any time.\n\n6. **Additional Features**: You may access additional features and information by clicking on the icons of Jesse and Lillian, which may include options for customisation or navigation.\n\n7. **Audio Download Option**: You also have the option to download the audio file corresponding to the selected chapter by clicking on the 'Download 🔊' button.\n\n8. **Footer**: The footer contains information about the creators or owners of the application, adding credibility and transparency to the platform. It also displays the copyright information. Please be informed about copyright infringement!\n\n9. **Modal Dialogs**: Modal dialogs are used to provide additional information or notifications, such as informing users when the default voice is not supported for a particular chapter and suggesting alternative voices. \n\nEnjoy the experience! 😊");
}
Mousetrap.bind('i', function() { 
    var x = document.getElementById("ttsInput");
    x.focus();
});

Mousetrap.bind(['command+enter', 'ctrl+enter'], function(e) {
    startSpeech();
});

Mousetrap.bind(['command+/', 'ctrl+/'], function(e) {
    stopSpeech();
});

/** 

// code to control the speech speed using keyboard combinations

Mousetrap.bind(['ctrl+,'], function(e) {
    if(speechSpeed >= 0){
        speechSpeed -= 0.2;    
        document.getElementById("select-speed").value = speechSpeed;
    } if(speechSpeed <= 0){
        speechSpeed = 0;
        alert("This is the minimum speed of speech available !");
    }
    console.log(speechSpeed);
});

Mousetrap.bind(['ctrl+.'], function(e) {
    if(speechSpeed !== 0 && speechSpeed <= 1.4){
        speechSpeed += 0.2;    
        document.getElementById("select-speed").value = speechSpeed;
    } if(speechSpeed > 1.4){
        speechSpeed = 1.5;
        alert("This is the maximum speed of speech available !");
    }
    console.log(speechSpeed);
});

**/
