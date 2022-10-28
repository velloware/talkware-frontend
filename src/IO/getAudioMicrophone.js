export class AudioMicrophone {
  constructor() {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      console.log("getUserMedia supported.");
      throw new Error("getUserMedia not supported");
    }
  }

  _socketEventEmmit(data) {
    console.log("socketEventEmmit");
    console.log(data);
  }

  async _GetAudioStream() {
    let chunks = [];
    let mediaRecorder = null;

    var audio = document.createElement("audio");
    try {
      const GetMidiaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      mediaRecorder = new MediaRecorder(GetMidiaStream);
      mediaRecorder.start(2000);

      mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];

        console.log(blob);
        var audioURL = window.URL.createObjectURL(blob);
        audio.controls = true;
        audio.src = audioURL;
        audio.play();

        // let reader = new FileReader();
        // reader.readAsDataURL(blob);
        // reader.onloadend = function () {
        //   let data = reader.result.split(";base64,")[1];
        //   data = encodeURIComponent(data);

        //   console.log("socketEventEmmit");
        //   console.log(data);
        // };
      };
    } catch (error) {
      console.log("The following getUserMedia error occurred: " + error);
    }
  }

  start() {
    this._GetAudioStream();
  }
}
