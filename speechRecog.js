function setup(){

	noCanvas();

	let lang = navigator.language || 'en-US';

	let speechRec = new p5.SpeechRec(lang, gotSpeech);

	speechRec.start();

	function gotSpeech(){

		if(speechRec.resultValue){

			createP(speechRec.resultString);
		}

			}

}



function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
