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
      // Adicionamos uma funcao anonima dentro da propriedade ondataavaliable,
      // A cada Event que o MediaRecorder "Emite" a funcao ondataavailable e chamada
      mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];

        //Aqui vc pode reproduzir se quiser
        console.log(blob);
        // var audioURL = window.URL.createObjectURL(blob);
        // audio.controls = true;
        // audio.src = audioURL;
        // audio.play();

        //Aqui estamos pegando o Blob e transformando em base64
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let data = reader.result.split(";base64,")[1];
          data = encodeURIComponent(data);

          console.log("");
          console.log(data);
        };
      };
    } catch (error) {
      console.log("The following getUserMedia error occurred: " + error);
    }
  }

  start() {
    this._GetAudioStream();
  }
}
