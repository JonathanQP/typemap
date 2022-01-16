// hier komt je code
// console.log("Hallo wereld!");

let points = document.getElementsByClassName("point");
console.log(points);
let dialogues = document.getElementsByClassName("dialogue");

let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")

let key1 = new Audio("./sound/key1.wav");
let key2 = new Audio("./sound/key2.wav");
let key3 = new Audio("./sound/key3.wav");

let audioPress = new Audio("./sound/press.wav");
let audioForest = new Audio("./sound/forest.wav");
let audioMetal = new Audio("./sound/metal.wav");
let audioSpooky = new Audio("./sound/spooky.wav");
let audioCat = new Audio("./sound/cat.wav");
let audioTrain = new Audio("./sound/train.wav");
let audioElectronic = new Audio("./sound/electronic.wav");
let audioKeyboard = new Audio("./sound/keyboard.mp3");
let audioComputer = new Audio("./sound/computer.wav");
let audioBells = new Audio("./sound/bells.wav");
let audioBook = new Audio("./sound/book.wav");
let audioDog = new Audio("./sound/dog.wav");
let audioQuiz = new Audio("./sound/quiz.wav");

audioPress.loop = true;
audioForest.loop = true;
audioMetal.loop = true;
audioSpooky.loop = true;
audioCat.loop = true;
audioElectronic.loop = true;
audioTrain.loop = true;
audioKeyboard.loop = true;
audioComputer.loop = true;
audioBells.loop = true;
audioBook.loop = true;
audioDog.loop = true;
audioQuiz.loop = true;

points[5].style.visibility = "hidden";
points[6].style.visibility = "hidden";
points[7].style.visibility = "hidden";
points[9].style.visibility = "hidden";
points[10].style.visibility = "hidden";

points[0].addEventListener("click", dialogue1Start);

let sky = document.getElementById('bgbox');
let radio = document.getElementsByClassName('radio');

function playSound() {
  key2.play();
}

for (var i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', playSound, false);
}

let nextButtonTut = document.getElementsByClassName("nextButtonTut");
let endButtonTut = document.getElementsByClassName("endButtonTut");
let tutorialText = document.getElementsByClassName("tutorialText");
let tutorial = document.getElementsByClassName("tutorial");

nextButtonTut[0].addEventListener("click", dialogue0Next);

let dialogueCount = 0;
let instruction = document.getElementById("instruction");

function dialogue0Next() {
  key2.play();
  let dialogueArray  = ["<img src='./img/interest.jpg' id='tutorialImg'>In a minute you'll be brought to our <span>map screen</span>. <br>On this screen you'll be able to select <span>points of interest</span> that will have you start conversations with some rather interesting figures. As you proceed to the dialogue, new points will unlock. Be sure to pay close attenton to what they have to say. There'll be a <span>quiz</span> at the end! But don't worry, you can take your time.", "<img src='./img/qr.svg' id='tutorialImg'>Before you proceed we'd like to ask four you to enter your <span>email</span>. This way we'll be able to give you access to your prize! We'll also use this information to inform you about interesting museum news in the future. You can enter your email on your phone by scanning this <span>QR-code</span>. You can unsubscribe from the newsletter at any time."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    tutorialText[0].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    tutorialText[0].innerHTML = "All set, if you entered your email we'll notify you about your prize when you're done with this experience. We hope you have fun on this (A)typical journey.";
    nextButtonTut[0].style.visibility = "hidden";
    endButtonTut[0].style.visibility = "visible";
    dialogueCount = 0;
    instruction.innerHTML = "Press the End button to close the tutorial."
  }
}

endButtonTut[0].addEventListener("click", dialogue0End);

function dialogue0End() {
  key3.play();
  nextButtonTut[0].style.visibility = "hidden";
  endButtonTut[0].style.visibility = "hidden";
  tutorial[0].style.visibility = "hidden";
  instruction.innerHTML = "Press the Next button to close the procceed."
}

function dialogue1Start() {
  key1.play();
  setTimeout(function(){
    audioPress.play();
  }, 500)
  sky.style.backgroundColor = "#D99D29";
  dialogues[0].style.visibility = "visible";
  nextButtons[0].style.visibility = "visible";
  dialogueText[0].innerHTML = "Hmm? And who do we have here? Me? Why I'm <span>Christoffel Plantin</span> of course, the famous book printer and publisher! You can call me Christophe in English though.";
}

let nextButtons = document.getElementsByClassName("nextButton");
let endButtons = document.getElementsByClassName("endButton");
let dialogueText = document.getElementsByClassName("dialogueText");

nextButtons[0].addEventListener("click", dialogue1Next);

function dialogue1Next() {
  key2.play();
  let dialogueArray  = ["I suppose I can tell you a little about me. I'm a busy man though, lots of books to print. We'll keep it short. I was born in <span>France</span> circa 1520, oui oui. But I'm a true <span>Antwerpian</span> at heart.", "<img src='./img/moretus.jpg' id='tutorialImg'>I'm known for establishing the <span>Plantin Press</span> you see, one of the most important printing presses of the 16th century.<br>Together with my business partner and son-in-law, <span>Jan Moretus</span>, we made history. We were responsible for some of the finest books on the whole world."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[0].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[0].innerHTML = "I hear they turned it into a museum... I'd love to go someday, but again, I'm a busy man and my buddy <span>Rubens</span> wants to hang out after work. Gotta go, kid. Maybe check out some of my work? Should find some in this city if you look for it.";
    nextButtons[0].style.visibility = "hidden";
    endButtons[0].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[0].addEventListener("click", dialogue1End);

function dialogue1End() {
  key3.play();
  nextButtons[0].style.visibility = "hidden";
  endButtons[0].style.visibility = "hidden";
  dialogues[0].style.visibility = "hidden";
  section2.style.visibility = "visible";
  points[0].style.opacity = 0.25;
  audioPress.pause();
  audioPress.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";
}

points[1].addEventListener("click", dialogue2Start);

function dialogue2Start() {
  key1.play();
  audioSpooky.play();
  sky.style.backgroundColor = "#333332";
  dialogues[1].style.visibility = "visible";
  nextButtons[1].style.visibility = "visible";
  dialogueText[1].innerHTML = "Do not be afraid. It is I, <span>Andreas Vesalius</span>. <span>Anatomist</span>, <span>physician</span> and now... a skeleton. It's rather nice, I can study the human skeleton at any time! Hoho. Plantin? Yes, I know him.";
}

nextButtons[1].addEventListener("click", dialogue2Next);

function dialogue2Next() {
  key2.play();
  let dialogueArray  = ["<img src='./img/anatomy.jpg' id='tutorialImg'>One of my colleagues, the Spanish doctor <span>Juan de Valverde</span>, published the <span>Vivae imagines corporis humani</span> with him. And they used MY <span>illustrations</span> in it!<br>Hmm? I'm not upset. I'm proud.",  "What kind of illustrations? Oh, it's all <span>human anatomy</span> of course, lots of skeletons. Like me. You've got one too you know. It's SO fascinating. The sphenoid, the ethmoid... I could talk about it for hours. Hmm? Too complicated? Maybe Juan's book would help."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[1].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[1].innerHTML = "I really do recommend it. You can admire my work in this city you know. It's why I'm here today! Where do you find it? It's at that <span>museum</span>... Museum Plantin-M... M.... MMMMM...<br>I forgot. Maybe you can find it yourself? My bones are growing cold.";
    nextButtons[1].style.visibility = "hidden";
    endButtons[1].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[1].addEventListener("click", dialogue2End);
var dialogue2status;

function dialogue2End() {
  key3.play();
  nextButtons[1].style.visibility = "hidden";
  endButtons[1].style.visibility = "hidden";
  dialogues[1].style.visibility = "hidden";
  dialogue2status = 1;
  points[1].style.opacity = 0.25;
  audioSpooky.pause();
  audioSpooky.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";
  if (dialogue3status == 1 && dialogue2status == 1  && dialogue4status == 1) {
    section3.style.visibility = "visible";
  }
}

points[2].addEventListener("click", dialogue3Start);

function dialogue3Start() {
  key1.play();
  audioForest.play();
  sky.style.backgroundColor = "#99BD98";
  dialogues[2].style.visibility = "visible";
  nextButtons[2].style.visibility = "visible";
  dialogueText[2].innerHTML = "...";
}

nextButtons[2].addEventListener("click", dialogue3Next);

function dialogue3Next() {
  key2.play();
  let dialogueArray  = ["......<br>...I'm a tree. Why are you talking to me?", "...I look like the famous 16th century <span>botanist, Rembert Dodoens</span>?","...", "Yes. That's who I used to be, before I took root here.","<img src='./img/cruydt.jpg' id='tutorialImg'>Plantin? Yes...<br>I remember him. I suppose you could say he's a fellow plant, haha. He published my book. The <span>Cruydeboeck</span>. I think you call it Herbals in English? It's a beautiful book, full of illustrations of flowers and other wonderful plants. Do you wish to read it?"];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[2].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[2].innerHTML = "I no longer read books. They're often made from trees, you see. My leaves shake when I think about it.<br>Oh but you should still read it. I want you to love plants as much as I do! You can find it at... hmmm... a <span>museum</span>. I can't go to museums, I'm afraid you'll have to find it without me. Do not tell anyone of my true nature. Do you get it? Nature? Haha. Goodbye.";
    nextButtons[2].style.visibility = "hidden";
    endButtons[2].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[2].addEventListener("click", dialogue3End);
var dialogue3status;

function dialogue3End() {
  key3.play();
  nextButtons[2].style.visibility = "hidden";
  endButtons[2].style.visibility = "hidden";
  dialogues[2].style.visibility = "hidden";
  dialogue3status = 1;
  points[2].style.opacity = 0.25;
  audioForest.pause();
  audioForest.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  if (dialogue3status == 1 && dialogue2status == 1  && dialogue4status == 1) {
    section3.style.visibility = "visible";
  }
}

points[3].addEventListener("click", dialogue4Start);

function dialogue4Start() {
  key1.play();
  audioMetal.play();
  sky.style.backgroundColor = "#6e6259";
  dialogues[3].style.visibility = "visible";
  nextButtons[3].style.visibility = "visible";
  dialogueText[3].innerHTML = "LETTERS. I LOVE TO PRESS LETTERS SO MUCH.<br><i>*CLING CLANG*</i>";
}

nextButtons[3].addEventListener("click", dialogue4Next);

function dialogue4Next() {
  key2.play();
  let dialogueArray  = ["IN THE PAST, ALL WORDS WERE PRESSED USING US. OH SUCH JOY, SUCH PURPOSE. <span>1,250 SHEETS</span> PER DAY, BABY.<br><i>*CLANG*</i>", "<img src='./img/press.jpg' id='tutorialImg'>ME AND MY <span>6 COMRADES</span> ARE THE <span>OLDEST PRINTING PRESSES</span> IN THE WORLD YOU KNOW. AND YOU CAN ONLY FIND US HERE.<br><i>*CLING CLANG*</i><br>HERE IN THE ANTWERP PLACE."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[3].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[3].innerHTML = "IN THE <span>MORETUS</span> PLACE. IN THE <span>MUSEUM</span> PLACE.<br>YOU WILL VISIT, YES? SUCH JOY, SUCH PURPOSE.<br><i>*The figure goes quiet.*</i>";
    nextButtons[3].style.visibility = "hidden";
    endButtons[3].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[3].addEventListener("click", dialogue4End);
var dialogue4status;

function dialogue4End() {
  key3.play();
  nextButtons[3].style.visibility = "hidden";
  endButtons[3].style.visibility = "hidden";
  dialogues[3].style.visibility = "hidden";
  dialogue4status = 1;
  points[3].style.opacity = 0.25;
  audioMetal.pause();
  audioMetal.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  if (dialogue3status == 1 && dialogue2status == 1  && dialogue4status == 1) {
    section3.style.visibility = "visible";
  }
}

points[4].addEventListener("click", dialogue5Start);

function dialogue5Start() {
  key1.play();
  audioCat.play();
  sky.style.backgroundColor = "#00a9ce";
  dialogues[4].style.visibility = "visible";
  nextButtons[4].style.visibility = "visible";
  dialogueText[4].innerHTML = "Heeeey. Watcha doin' here?";
}

nextButtons[4].addEventListener("click", dialogue5Next);

function dialogue5Next() {
  key2.play();
  let dialogueArray  = ["<span>Museum Plantin-Moretus</span>?<br><img src='./img/museum.jpg' id='tutorialImg'>Yessss. That's heeere. But you can't enterrr. I'm afraid we've lost the <span>keeey</span>. A dooog took it from me. TYPICAL.", "Why did I have the keeey? I'm in chaaarge around here. I'm a biiit of a museum <span>mascot</span>. I'm from the <span>wooodblock collection</span> of the museum and I wasss on the 2021's <span>New Year's caaard</span>!", "That doesn't make meee a mascot? RUDE. I'm toootally a mascot. I was going to teeell you where that dooog ran off to, but you'll haaave to figure it out on your ooown."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[4].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[4].innerHTML = "Heeey, waaait...<br>Be sure to look for meee in the museum when you've found it, yeees? I dooon't stay mad for tooooo long. USUALLY.";
    nextButtons[4].style.visibility = "hidden";
    endButtons[4].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[4].addEventListener("click", dialogue5End);
var dialogue5status;

function dialogue5End() {
  key3.play();
  nextButtons[4].style.visibility = "hidden";
  endButtons[4].style.visibility = "hidden";
  dialogues[4].style.visibility = "hidden";
  dialogue5status = 1;
  points[4].style.opacity = 0.25;
  audioCat.pause();
  audioCat.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";
  points[5].style.visibility = "visible";
  points[6].style.visibility = "visible";
  points[7].style.visibility = "visible";

  if (dialogue5status == 1 && dialogue6status == 1  && dialogue7status == 1 && dialogue8status == 1) {
    section4.style.visibility = "visible";
  }
}

points[5].addEventListener("click", dialogue6Start);

function dialogue6Start() {
  key1.play();
  audioKeyboard.play();
  sky.style.backgroundColor = "#b580d1";
  dialogues[5].style.visibility = "visible";
  nextButtons[5].style.visibility = "visible";
  dialogueText[5].innerHTML = "Trying to enter the museum, huh? Yeah, it's closed for now. I was trying to get in earlier to discuss a new proposal. Even went through the effort to dress like this to dot their i's and cross their t's.";
}

nextButtons[5].addEventListener("click", dialogue6Next);

function dialogue6Next() {
  key2.play();
  let dialogueArray  = ["<img src='./img/studiotype.png' id='tutorialImg'>The proposal? Oh it's for a new font I'm developing. I'm <span>Jo De Baerdemaeker</span>, but people also know me as <span>@typojo</span>. As the creator of <span>Studio Type</span> I'm one of the only font developers in Belgium you know, and I live here in Antwerp. It's a fascinating city for lovers of typography like me.", "I don't just make fonts you see, I also <span>study their history</span> and <span>digitize</span> them. That's where the museum comes into place. It's a great source of inspiration, so <span>I work with them</span>.", "You should go on one of our <span>Type Walks</span> for example. Those are tours I give throughout the city in which you'll discover all kinds of typographical beauty. And maybe you'll discover a way to open the museum on the way?"];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[5].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[5].innerHTML = "You can also consider looking <span>outside</span> of Antwerp, just because you go look elsewhere doesn't mean you won't find <span>connections</span> to this place. Just keep your eyes open for interesting letters.<br>Good luck.";
    nextButtons[5].style.visibility = "hidden";
    endButtons[5].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[5].addEventListener("click", dialogue6End);
var dialogue6status;

function dialogue6End() {
  key3.play();
  nextButtons[5].style.visibility = "hidden";
  endButtons[5].style.visibility = "hidden";
  dialogues[5].style.visibility = "hidden";
  dialogue6status = 1;
  points[5].style.opacity = 0.25;
  audioKeyboard.pause();
  audioKeyboard.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  if (dialogue5status == 1 && dialogue6status == 1  && dialogue7status == 1 && dialogue8status == 1) {
    section4.style.visibility = "visible";
  }
}

points[6].addEventListener("click", dialogue7Start);

function dialogue7Start() {
  key1.play();
  audioTrain.play();
  sky.style.backgroundColor = "#41b6e6";
  dialogues[6].style.visibility = "visible";
  nextButtons[6].style.visibility = "visible";
  dialogueText[6].innerHTML = "Welcome to the <span>Antwerp Central Station</span>. Are you new here? It's a beautiful building, isn't it? That's why people also call it the <span>Railroad Cathedral</span>. You won't find a station like this anywhere else. Is there anything I can help you with?";
}

nextButtons[6].addEventListener("click", dialogue7Next);

function dialogue7Next() {
  key2.play();
  let dialogueArray  = ["<img src='./img/antwerpen.jpg' id='tutorialImg'>Typography? A way to the Plantin-Moretus museum? Hmmm.<br>Well if you look around this station, you'll see plenty of <span>beautiful typography, in golden lettering</span>... Does that help?", "There's a lot of typography like that in this city, I think that's what a <span>Type Walk</span>'s for, right? It sounds like fun! Maybe I'll give it a go after my shift."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[6].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[6].innerHTML = "And if you can't find what you're looking for, may I suggest you <span>travel</span> by train? Safe travels!";
    nextButtons[6].style.visibility = "hidden";
    endButtons[6].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[6].addEventListener("click", dialogue7End);
var dialogue7status;

function dialogue7End() {
  key3.play();
  nextButtons[6].style.visibility = "hidden";
  endButtons[6].style.visibility = "hidden";
  dialogues[6].style.visibility = "hidden";
  dialogue7status = 1;
  points[6].style.opacity = 0.25;
  audioTrain.pause();
  audioTrain.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  if (dialogue5status == 1 && dialogue6status == 1  && dialogue7status == 1 && dialogue8status == 1) {
    section4.style.visibility = "visible";
  }
}

points[7].addEventListener("click", dialogue8Start);

function dialogue8Start() {
  key1.play();
  audioElectronic.play();
  sky.style.backgroundColor = "#ffcd00";
  dialogues[7].style.visibility = "visible";
  nextButtons[7].style.visibility = "visible";
  dialogueText[7].innerHTML = "YOU LOOK SURPRISED! I AM A <span>FONT</span>! ALL <span>DIGITAL</span>, ALL 0s AND 1s. <i>*BEEP*</i><br>WAIT. YOU DON'T LOOK THAT SURPRISED. DID YOU MEET... HIM? DID YOU MEET... &lt;letterpressman&gt;?<br>HE'S MY GREAT-GRANDFATHER.";
}

nextButtons[7].addEventListener("click", dialogue8Next);

function dialogue8Next() {
  key2.play();
  let dialogueArray  = ["<img src='./img/fontflyer.jpg' id='tutorialImg'>AND NOT JUST ANY FONT! I AM THE FONT EVERYONE SEES IN THIS CITY. I AM THE <span><Antwerpen></span> FONT!<br>I AM DESIGNED BY <span>STUDIO TYPE</span> AKA &lt;<span>Jo De Baerdemaeker</span>&gt;. I AM USED IN THE <span>CITY'S COMMUNICATIONS</span>.<br>LOOK AT A SIGN AROUND HERE AND YOU MIGHT SEE ME.<i>*BEEP BOOP*</i>", "EVEN THE <span>LETTERS YOU ARE READING</span> ARE ALL ME! SURPRISED? I KNOW I AM."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[7].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[7].innerHTML = "DIGITAL LETTERS ARE GREAT. I HEAR YOU CAN FIND ALL KINDS OF DIGITAL LETTERS IN <span>OTHER PARTS OF THE WORLD</span>. BUT REMEMBER TO RESPECT YOUR ELDERS, MY GREAT-GRANDPA IS SCARY.<br><i>*The beeping quiets down.*</i>";
    nextButtons[7].style.visibility = "hidden";
    endButtons[7].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[7].addEventListener("click", dialogue8End);
var dialogue8status;

function dialogue8End() {
  key3.play();
  nextButtons[7].style.visibility = "hidden";
  endButtons[7].style.visibility = "hidden";
  dialogues[7].style.visibility = "hidden";
  dialogue8status = 1;
  points[7].style.opacity = 0.25;
  audioElectronic.pause();
  audioElectronic.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  if (dialogue5status == 1 && dialogue6status == 1  && dialogue7status == 1 && dialogue8status == 1) {
    section4.style.visibility = "visible";
  }
}

points[8].addEventListener("click", dialogue9Start);

function dialogue9Start() {
  key1.play();
  audioBook.play();
  sky.style.backgroundColor = "#8FC2D7";
  dialogues[8].style.visibility = "visible";
  nextButtons[8].style.visibility = "visible";
  dialogueText[8].innerHTML = "Welcome to <span>Brussels</span>. I'm <span>Henry van de Velde</span>, the 20th century<span> painter, interior designer and architect</span>. What brings you to this fine city?";
}

nextButtons[8].addEventListener("click", dialogue9Next);

function dialogue9Next() {
  key2.play();
  let dialogueArray  = ["<img src='./img/boekentoren.jpg' id='tutorialImg'>Oh, here from Antwerp are you? Why that's where I was born! And you are looking for a way to enter the Plantin-Moretus museum so you figured the <span>Boekentoren</span> would be a good source of information? I see! Good thinking, the building houses <span>3 million books</span> after all. ","However... you took the wrong train. I might have been active in Brussels, but the Boekentoren is in <span>Ghent</span>.", "I designed the Boekentoren for the <span>Ghent University</span> and it became one of my most famous buildings. A tower full of typography, designed by an Antwerpian! Plantin would love it. Yes, don't worry about the train thing. I will do everything in my power to help you.", "After all I would be helping a new friend of mine too. <span>Jo De Baerdemaeker</span>, do you know him?<br>You've met?! How wonderful. Yes, he won the title <span>'New Flemish Masters in the Fine Arts'</span> at the <span>Henry van de Velde Awards</span>, so I like to follow his works."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[8].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[8].innerHTML = "That can't be a coincidence! You must be on the right track. I believe you should continue your search for points of interest related to De Baerdemaeker. You can even find connections to his typography on the <span>other side of the world</span>, you know. Bon voyage!";
    nextButtons[8].style.visibility = "hidden";
    endButtons[8].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[8].addEventListener("click", dialogue9End);
var dialogue9status;

function dialogue9End() {
  key3.play();
  nextButtons[8].style.visibility = "hidden";
  endButtons[8].style.visibility = "hidden";
  dialogues[8].style.visibility = "hidden";
  dialogue9status = 1;
  points[8].style.opacity = 0.25;
  audioBook.pause();
  audioBook.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";
  points[9].style.visibility = "visible";
  points[10].style.visibility = "visible";

  if (dialogue9status == 1 && dialogue10status == 1  && dialogue11status == 1) {
    section5.style.visibility = "visible";
  }
}

points[9].addEventListener("click", dialogue10Start);

function dialogue10Start() {
  key1.play();
  audioComputer.play();
  sky.style.backgroundColor = "#00CFC1";
  dialogues[9].style.visibility = "visible";
  nextButtons[9].style.visibility = "visible";
  dialogueText[9].innerHTML = "Welcome to the <span>United States of America</span>. Hmm? Bill Gates? No no no, I'm a tourist from Antwerp. Don't worry, I get that all the time.";
}

nextButtons[9].addEventListener("click", dialogue10Next);

function dialogue10Next() {
  key2.play();
  let dialogueArray  = ["...Look, please don't tell anyone it's me. I'll do anything. 2 billion? 5? You name it.", "Oh, you just want to learn more about fonts? Yeah, <span>Google and Apple</span> have them too, but when I worked at <span>Microsoft</span> we were some real font pioneers. <span>TrueType and OpenType</span>, we set those standards in the 90s. And they're still the standards today.", "Do I know anything about fonts from Antwerp? Well yeah, did you see the card? I love Antwerp. Totally. Let me think.","<img src='./img/nirmala.png' id='tutorialImg'>Well you got that Belgian fellow right, I think he's from Antwerp. Joey The Beardmaker? Uh, <span>Baerdemaeker</span>? Yeah sure, why not. He's worked with us. He worked on <span>Nirmala UI</span> for example, that's one of our fonts. Did the Bengali variant. He's a real pro, probably."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[9].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[9].innerHTML = "Alright, I did what you asked, I'm outta here. Remember, I wasn't here.";
    nextButtons[9].style.visibility = "hidden";
    endButtons[9].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[9].addEventListener("click", dialogue10End);
var dialogue10status;

function dialogue10End() {
  key3.play();
  nextButtons[9].style.visibility = "hidden";
  endButtons[9].style.visibility = "hidden";
  dialogues[9].style.visibility = "hidden";
  dialogue10status = 1;
  points[9].style.opacity = 0.25;
  audioComputer.pause();
  audioComputer.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  if (dialogue9status == 1 && dialogue10status == 1  && dialogue11status == 1) {
    section5.style.visibility = "visible";
  }
}

points[10].addEventListener("click", dialogue11Start);

function dialogue11Start() {
  key1.play();
  setTimeout(function(){
    audioBells.play();
  }, 500)
  sky.style.backgroundColor = "#607196";
  dialogues[10].style.visibility = "visible";
  nextButtons[10].style.visibility = "visible";
  dialogueText[10].innerHTML = "Welcome to <span>Tibet</span>. I'm <span>Tenzin Gyatso</span>. You might know me as the <span>14th Dalai Lama</span>, the highest spiritual leader of Tibet. But most of all I'm... a lover of Antwerp and its fonts. I just had to meet you.";
}

nextButtons[10].addEventListener("click", dialogue11Next);

function dialogue11Next() {
  key2.play();
  let dialogueArray  = ["I've heard about your travels you see, going around the world just to enter a museum in Antwerp? I admire your dedication!<br> Not only that, I also wish to help you. You see, I know you have met <span>Jo De Baerdemaeker</span> and he has helped us a great deal in the past. It only makes sense to repay that favor.", "How did he help us? Well, he helped us <span>preserve Tibetan fonts</span>. He even wrote about it in a book called <span>Tibetan Typeforms</span>. That man cares a great deal about the history of typography, from all over the world.", "<img src='./img/tibetan.png' id='tutorialImg'>Tibetan script is quite beautiful. Both our <span>printed uchen script</span> and our <span>hand-written umê script</span> are important to our identity."];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[10].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[10].innerHTML = "Anyway, I've been told you're looking for a <span>dog</span>. You're on the right track, she was spotted around here a while ago. She took a plane to another country though, I believe it was <span>Japan</span>? I'm certain you'll recover the <span>key</span> to the museum soon. Goodbye.";
    nextButtons[10].style.visibility = "hidden";
    endButtons[10].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[10].addEventListener("click", dialogue11End);
var dialogue11status;

function dialogue11End() {
  key3.play();
  nextButtons[10].style.visibility = "hidden";
  endButtons[10].style.visibility = "hidden";
  dialogues[10].style.visibility = "hidden";
  dialogue11status = 1;
  points[10].style.opacity = 0.25;
  audioBells.pause();
  audioBells.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  if (dialogue9status == 1 && dialogue10status == 1  && dialogue11status == 1) {
    section5.style.visibility = "visible";
  }
}

points[11].addEventListener("click", dialogue12Start);

function dialogue12Start() {
  key1.play();
  audioDog.play();
  sky.style.backgroundColor = "#FF7B9C";
  dialogues[11].style.visibility = "visible";
  nextButtons[11].style.visibility = "visible";
  dialogueText[11].innerHTML = "Woof! Bark bark.<br>(Hello! My name's <span>Patrasche</span>. I can't believe you tracked me down all the way to <span>Japan</span>.)";
}

nextButtons[11].addEventListener("click", dialogue12Next);

function dialogue12Next() {
  key2.play();
  let dialogueArray  = ["Awooooooooo! Bark bark bark.<br>(The name seems familiar does it? That's right, I'm THE Patrasche from the famous 1872 novel <span>A Dog of Flanders</span>. You know, the one about a boy named <span>Nello and his dog, Patrasche</span> -that's me- that is set in <span>Antwerp</span>. It's a very popular story in <span>Japan, Korea and the Phillipines</span>! It has even been adapted into several Japanese films and anime.)", "<img src='./img/plaque.jpg' id='tutorialImg'>Woof woof woof!<br>(So what I'm saying is that I'm a bit of a celebrity over here, it's neat.<br>Tourists even go all the way to Antwerp to see monuments like the one with this <span>plaque</span>. Do you recognize the font? That's right, it's <span>Antwerpen by Studio Type, AKA Jo De Baerdemaeker</span>.)", "Woooooof. Woof woof.<br>(I know what you've been up to. You're here for the <span>key to museum Plantin-Moretus</span>, right? Great! I wanted you to find me after all.)","Bark! Woof woof!<br>(You see, I wanted to show the world that Antwerp has <span>typographical roots</span> that reach all the way to places like the US, Tibet and Japan. You understand now, don't you?)"];
  let dialogueCountTotal = dialogueArray.length;
  if (dialogueCount < dialogueCountTotal) {
    dialogueText[11].innerHTML = dialogueArray[dialogueCount];
    dialogueCount++;
  } else {
    dialogueText[11].innerHTML = "Woof. Awoooooo!<br>(I need to make sure you understand. I'll give you the key to the museum... if you pass my <span>test</span>! Answer my questions about the things you learned on this journey and get <span>at least 6</span> of them right!)";
    nextButtons[11].style.visibility = "hidden";
    endButtons[11].style.visibility = "visible";
    dialogueCount = 0;
  }
}

endButtons[11].addEventListener("click", dialogue12End);
let quiz = document.getElementsByClassName("game-quiz-container");

function dialogue12End() {
  key3.play();
  audioDog.pause();
  audioDog.currentTime = 0;
  sky.style.backgroundColor = "#F2EFE9";

  nextButtons[11].style.visibility = "hidden";
  endButtons[11].style.visibility = "hidden";
  dialogues[11].style.visibility = "hidden";
  section1.style.visibility = "hidden";
  section2.style.visibility = "hidden";
  section3.style.visibility = "hidden";
  section4.style.visibility = "hidden";
  section5.style.visibility = "hidden";
  quiz[0].style.visibility = "visible";
  audioQuiz.play();
}

let audioCorrect = new Audio("./sound/correct.mp3");
let audioWrong = new Audio("./sound/bad.wav");
let audioFanfare = new Audio("./sound/fanfare.mp3");
let audioSad = new Audio("./sound/sad.wav");

//quiz code adapted from https://codepen.io/Sulaimon-Olaniran/pen/zYKJLjK

const questions = [
    {
        question: "What's Christophe Plantin called in Dutch?",
        optionA: "Christoffel",
        optionB: "Kristo",
        optionC: "Chrisie",
        optionD: "Christovich",
        correctOption: "optionA"
    },

    {
        question: "Where was Plantin born?",
        optionA: "Germany",
        optionB: "France",
        optionC: "Italy",
        optionD: "The Netherlands",
        correctOption: "optionB"
    },

    {
        question: "What was Vesalius' profession?",
        optionA: "Museum Mascot",
        optionB: "Botanist",
        optionC: "Architect",
        optionD: "Anatomist",
        correctOption: "optionD"
    },

    {
        question: "Who was Plantin's business partner?",
        optionA: "Andreas Vesalius",
        optionB: "Bill Gates",
        optionC: "Jan Moretus",
        optionD: "Juan de Valverde",
        correctOption: "optionC"
    },

    {
      question: "What was the cat's supposed profession?",
      optionA: "Museum Mascot",
      optionB: "Botanist",
      optionC: "Architect",
      optionD: "Anatomist",
      correctOption: "optionA"
    },

    {
      question: "What was Dodoens' profession?",
      optionA: "Museum Mascot",
      optionB: "Botanist",
      optionC: "Architect",
      optionD: "Anatomist",
      correctOption: "optionB"
    },

    {
      question: "What was Van de Velde's profession?",
      optionA: "Museum Mascot",
      optionB: "Botanist",
      optionC: "Architect",
      optionD: "Anatomist",
      correctOption: "optionC"
    },

    {
        question: "What's Van de Velde's first name?",
        optionA: "Harry",
        optionB: "Henry",
        optionC: "Harold",
        optionD: "Hertog",
        correctOption: "optionB"
    },

    {
        question: "What country wasn't given as an example of the popularity of A Dog of Flanders?",
        optionA: "Japan",
        optionB: "Korea",
        optionC: "Phillipines",
        optionD: "Thailand",
        correctOption: "optionD"
    },

    {
        question: "What's the name of Antwerp's official font?",
        optionA: "Antwerpian",
        optionB: "Antwerp",
        optionC: "Antwerpen",
        optionD: "(A)typical",
        correctOption: "optionC"
    },

    {
        question: "How many of the oldest printing presses can you find in the museum?",
        optionA: "12",
        optionB: "6",
        optionC: "7",
        optionD: "1",
        correctOption: "optionC"
    },

    {
        question: "What card was the cat illustration used in?",
        optionA: "A New Year's card",
        optionB: "A Christmas card",
        optionC: "A birthday card",
        optionD: "A trading card",
        correctOption: "optionA"
    },


    {
        question: "What are de tours that De Baerdemaeker organizes called?",
        optionA: "Type Runs",
        optionB: "Type Walks",
        optionC: "Type Tours",
        optionD: "Text Walks",
        correctOption: "optionB"
    },

    {
        question: "What's the color of the lettering in Antwerp's central train station?",
        optionA: "Bronze",
        optionB: "Silver",
        optionC: "Gold",
        optionD: "Diamond",
        correctOption: "optionC"
    },

    {
        question: "In which city do you find the Boekentoren?",
        optionA: "Ghent",
        optionB: "Brussels",
        optionC: "Antwerp",
        optionD: "New York",
        correctOption: "optionA"
    },

    {
        question: "What profession did Henry van de Velde not practise?",
        optionA: "Painting",
        optionB: "Interior Design",
        optionC: "Font Development",
        optionD: "Architecture",
        correctOption: "optionC"
    },

    {
        question: "What font standards was Microsoft involved with?",
        optionA: "OpenType and TrueType",
        optionB: "FreeType and RealType",
        optionC: "OpenType and RealType",
        optionD: "FreeType and TrueType",
        correctOption: "optionA"
    },

    {
        question: "What font did De Baerdemaeker work on for Microsoft?",
        optionA: "Nirvana UI",
        optionB: "Normala UI",
        optionC: "Nirmala UI",
        optionD: "Nirmilia UI",
        correctOption: "optionC"
    },

    {
        question: "Tenzin Gyatzo wore a letter in his portrait photo. Which one?",
        optionA: "D",
        optionB: "G",
        optionC: "T",
        optionD: "A",
        correctOption: "optionD"
    },

    {
        question: "What did De Baerdemaeker do for Tibetan culture?",
        optionA: "He preserved fonts",
        optionB: "He created new fonts",
        optionC: "He introduced fonts",
        optionD: "He sold fonts",
        correctOption: "optionA"
    },

    {
        question: "What country was the dog found in?",
        optionA: "United States",
        optionB: "Belgium",
        optionC: "France",
        optionD: "Japan",
        correctOption: "optionD"
    },

    {
        question: "What was the name of the dog's owner?",
        optionA: "Patrasche",
        optionB: "Nello",
        optionC: "Tintin",
        optionD: "Jo De Baerdemaeker",
        correctOption: "optionB"
    },

    {
        question: "What's the name of the book about a boy and his dog?",
        optionA: "A Boy of Flanders",
        optionB: "A Dog of Flanders",
        optionC: "A Friend of Flanders",
        optionD: "A Boy and his Dog",
        correctOption: "optionB"
    },

    {
        question: "What's was Jan Moretus' connection to Plantin?",
        optionA: "His brother",
        optionB: "His stepfather",
        optionC: "His son-in-law",
        optionD: "His uncle",
        correctOption: "optionC"
    },

    {
        question: "What form did Dodoens take?",
        optionA: "Tree",
        optionB: "Skeleton",
        optionC: "Orb",
        optionD: "Painting",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#71F79F"
            audioCorrect.play();
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#EA3546"
            document.getElementById(correctOption).style.backgroundColor = "#71F79F"
            audioWrong.play();
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null
    audioQuiz.pause();
    audioQuiz.currentTime = 0;

    // condition check for player remark and remark color
    if (playerScore <= 5) {
        remark = "You can do it! The dog gives you another chance.<br>Carefully reread the conversations and try the dog's test again."
        remarkColor = "#EA3546"
        audioSad.play();
    }
    else if (playerScore >= 6) {
        remark = "Well done! The dog handed over her key.<br>We will send you an email that details the prize you've won if you entered one."
        remarkColor = "#71F79F"
        audioFanfare.play();
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
  if (playerScore < 6) {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    quiz[0].style.visibility = "hidden";
    section1.style.visibility = "visible";
    section2.style.visibility = "visible";
    section3.style.visibility = "visible";
    section4.style.visibility = "visible";
    section5.style.visibility = "visible";
  } else {
    location.reload();
  }
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
