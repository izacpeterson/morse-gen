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
  //   test();
});

function test() {
  const dah = new Audio("dah.mp3");
  dah.play();
  dah.addEventListener("ended", () => {
    console.log("dah ended");
    dah.play();
  });
}

function playMorse(message) {
  //   const dah = new Audio("dah.mp3");
  //   const dit = new Audio("dit.mp3");
  //   const morseMessage = convertToMorse(message).split("");
  //   console.log(morseMessage);
  //   let index = 0;
  //   setInterval(() => {
  //     if (morseMessage[index] === ".") {
  //       dit.play();
  //     } else if (morseMessage[index] === "-") {
  //       dah.play();
  //     } else if (morseMessage[index] === "/") {
  //     }
  //     index++;
  //   }, 180);
  const morseMessage = convertToMorse(message).split("");
  let audioMessage = [];
  console.log(morseMessage);
  morseMessage.forEach((el) => {
    if (el === ".") {
      audioMessage.push(new Audio("dit.mp3"));
    } else if (el === "-") {
      audioMessage.push(new Audio("dah.mp3"));
    } else if (el === " ") {
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
    } else if (el === "/") {
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
      audioMessage.push(new Audio("space.mp3"));
    }
  });

  console.log(audioMessage);
  let index = 0;

  //   audioMessage[index].play();

  playAuido(audioMessage, index);
}

function playAuido(audio, index) {
  if (audio[index]) {
    audio[index].addEventListener("ended", () => {
      setTimeout(() => {
        index++;
        playAuido(audio, index);
      }, 10);
    });
    audio[index].play();
  } else {
    console.log("end");
    alert("end");
  }
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {}
}
