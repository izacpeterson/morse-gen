//Dit = 60ms
//Dah = 180ms
//Space between letters = 3 dits;
//Space between words = 7 dits;

const morseCode = {
  A: ".- ",
  B: "-... ",
  C: "-.-. ",
  D: "-.. ",
  E: ". ",
  F: "..-. ",
  G: "--. ",
  H: ".... ",
  I: ".. ",
  J: ".--- ",
  K: "-.- ",
  L: ".-.. ",
  M: "-- ",
  N: "-. ",
  O: "--- ",
  P: ".--. ",
  Q: "--.- ",
  R: ".-. ",
  S: "... ",
  T: "- ",
  U: "..- ",
  V: "...- ",
  W: ".-- ",
  X: "-..- ",
  Y: "-.-- ",
  Z: "--.. ",
  " ": "/ ",
};
console.log(morseCode["A"]);

function convertToMorse(str) {
  return str
    .toUpperCase()
    .split("")
    .map((el) => {
      return morseCode[el];
    })
    .join("");
}
console.log(convertToMorse("Hello World"));

document.querySelector("#start").addEventListener("click", () => {
  playMorse(document.getElementById("message").value || "Hello World");
  document.getElementById("out").innerHTML = convertToMorse(document.getElementById("message").value || "Hello World");
});

function playMorse(message) {
  let uris = [];

  let morse = convertToMorse(message).split("");

  morse.forEach((el) => {
    if (el === ".") {
      uris.push("dit.mp3");
    } else if (el === "-") {
      uris.push("dah.mp3");
    } else if (el === " ") {
      uris.push("space.mp3");
    } else if (el === "/") {
      uris.push("space.mp3");
      uris.push("space.mp3");
      uris.push("space.mp3");
      uris.push("space.mp3");
      uris.push("space.mp3");
      uris.push("space.mp3");
      uris.push("space.mp3");
    }
  });

  let proms = uris.map((uri) => fetch(uri).then((r) => r.blob()));

  Promise.all(proms).then((blobs) => {
    let blob = new Blob(blobs);
    let blobUrl = URL.createObjectURL(blob);
    let audio = new Audio(blobUrl);
    audio.play();
    document.querySelector("body").innerHTML += `<a href="${blobUrl}" download="morse.mp3">Download</a>`;
  });
}
