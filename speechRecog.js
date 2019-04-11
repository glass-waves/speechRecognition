function setup(){

	noCanvas();


function touchStarted(start) {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}

	let lang = navigator.language || 'en-US';

	let speechRec = new p5.SpeechRec(lang, gotSpeech);

	function start(){
		speechRec.start();
	}

	function gotSpeech(){

		if(speechRec.resultValue){

			createP(speechRec.resultString);
		}

			}

}



