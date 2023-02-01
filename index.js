// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');


speakButton.addEventListener('click', ()=>{
    msg.rate = options[0].value;
    msg.pitch = options[1].value;
    msg.text = options[2].value;

speechSynthesis.speak(msg)
})

  stopButton.addEventListener('click', ()=>{
    speechSynthesis.cancel();
  });
