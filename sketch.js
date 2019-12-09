//3 minutes = 180000 miliseconds
//36 seconds = 36000 miliseconds
//Total time of song = 216,000 miliseconds
//Added 4 secs of quiet = 220,000

//time or other
let startTime;
let elapsedTime;

//music variables
let musicorumSummus;

//image variables
let boat;
let card1;
let demon2;
let cardgrid;
let demon1;
let hand1;
let hand2;
let spiraling;
let magicparticle1;
let magicparticle2;
let magicparticle3;
let moneygrid;
let money;
let ring;
let ocean;
let skullmask;
let skullgrid;
let spiralgrid;
let timeclock;
let wavylines;

//remove variables
let intro;
let disrespect;

//colors
let purple1;
let green1;
let pink1;

//other vars
let a = 0;

//preloads
function preload() {
  //font
  blackadder = loadFont('ITCBLKAD.TTF');

  //music
  musicorumSummus = createAudio("friendsaudioproj.mp3");

  //images
  spiraling = loadImage("spiral@4x.png");
  boat = loadImage("Boat@4x.png");
  card1 = loadImage("1 card@4x.png");
  demon2 = loadImage("Demon grid@4x.png");
  cardgrid = loadImage("Card Grid@4x.png");
  demon1 = loadImage("Demon@4x.png");
  heart = loadImage("Heart@4x.png");
  hand1 = loadImage("Hand 1@4x.png");
  hand2 = loadImage("hand 2@4x.png");
  magicparticle1 = loadImage("Magic Particles@4x.png");
  magicparticle2 = loadImage("Magic particles 2@4x.png");
  magicparticle3 = loadImage("magic particles 3@4x.png");
  moneygrid = loadImage("Money grid@4x.png");
  money = loadImage("Money@4x.png");
  ring = loadImage("Ring@4x.png");
  ocean = loadImage("Ocean@4x.png");
  skullmask = loadImage("Skull mask@4x.png");
  skullgrid = loadImage("skull mask grid@4x.png");
  spiralgrid = loadImage("Spiral grid@4x.png");
  timeclock = loadImage("Timeclock@4x.png");
  wavylines = loadImage("Wavy lines@4x.png");
  royalcrown = loadImage("royal crown@4x.png");
  finalecircles = loadImage("finale circles@4x.png");
  finalerectangles = loadImage("finale rectangles@4x.png");

}

function setup() {
  createCanvas(1366,768);

  purple1 = color("#9900cc");
  green1 = color("#00ff00");
  pink1 = color("#ff00ff");

  introduction();

  //ellipses in disrespect and deride
  x1 = 0;
  y1 = 0;
  x2 = width;
  y2 = height;

  //rotate my world
  a = 10;

  //slide 1
  x3 = width;
  y3 = height;

  //slide2
  x4 = 0;
  y4 = height

  //slide 3
  x5 = width;
  y5 = height;

  //slide 4
  x6 = 0;
  y6 = height;

  //heartbeat
  x7 = 100;
  y7 = 100;

  //shipcrossing
  x8 = 0;
  y8 = 0;

  //friends1
  x9 = 0;
  y9 = 0;
  x10 = 0;
  y10 = 0;
  y11 = 0;
  x12 = 0;
  y12 = 0;
  x13 = width;
  y13 = height;
  x14 = 0;
  y14 = 0;
  x15 = 0;
  y15 = 0;
  x16 = 0;
  y16 = 0;
  x17 = 0;
  y17 = 0;
  x18 = 0;
  y18 = 0;
  x19 = 0;
  y19 = 0;
  x20 = 0;
  y20 = 0;
  x21 = width;
  y21 = height;
  x22 = width;
  y22 = height;
  x23= 0;
  y23=0;
  x24=0;
  y24=0;
  x25 = 100;
  y25 = 100;
  x26=width;
  y26 = height;
  x27=0;
  y27 = 0;
  y28 = 0;
  y29 = height;
  y30= height;
  y31 = height;
  y32 = height;
  y33 = height;
  y34 = height;
  
  startTime = millis();
  elapsedTime = startTime;
}

function draw() {
  background(0);
  textSize(60);
  let currentTime = millis();
  elapsedTime = currentTime - startTime;

  purple1 = color("#9900cc");
  green1 = color("#00ff00");
  pink1 = color("#ff00ff");

  if (elapsedTime <= 4000) {
    introduction();
  } else if (elapsedTime <= 8000) {
    disrespectplay();
    musicorumSummusEntrada();
  } else if (elapsedTime <= 12000) {
    derideplay();
  } else if (elapsedTime <= 16000) {
    myworldplay();
  } else if (elapsedTime <= 25000) {
    friends1play();
  } else if (elapsedTime <= 30000) {
    echoplay();
  } else if (elapsedTime <= 42000) {
    sitdownplay();
  } else if (elapsedTime <= 47000) {
    readfutureplay();
  } else if (elapsedTime <= 52500) {
    deepheartplay();
  } else if (elapsedTime <= 56000) {
    wildestdreamsplay();
  } else if (elapsedTime <= 60000) {
    voodooplay();
  } else if (elapsedTime <= 67000) {
    friends2play();
  } else if (elapsedTime <= 72000) {
    cardscardsplay();
  } else if (elapsedTime <= 75000) {
    pastpresentplay();
  } else if (elapsedTime <= 86000) {
    threecardsplay();
  } else if (elapsedTime <= 92000) {
    youngmanplay();
  } else if (elapsedTime <= 101000) {
    royaltyplay();
  } else if (elapsedTime <= 106000) {
    fundslowplay();
  } else if (elapsedTime <= 110000) {
    doughplay();
  } else if (elapsedTime <= 125000) {
    befreeplay();
  } else if (elapsedTime <= 133000) {
    greenfreedomplay();
  } else if (elapsedTime <= 140000) {
    wastetimeplay();
  } else if (elapsedTime <= 144500) {
    mothersisterbrotherplay();
  } else if (elapsedTime <= 150000) {
    marriedwifeplay();
  } else if (elapsedTime <= 158000) {
    mantobeplay();
  } else if (elapsedTime <= 169000) {
    shakemyhandplay();
  } else if (elapsedTime <= 177000) {
    areyoureadyplay();
  } else if (elapsedTime <= 181000) {
    transformationcentralplay();
  } else if (elapsedTime <= 184000) {
    reformationcentralplay();
  } else if (elapsedTime <= 186000) {
    transmodcentralplay();
  } else if (elapsedTime <= 190000) {
    canyoufeelitplay();
  } else if (elapsedTime <= 197000) {
    changinchanginplay();
  } else if (elapsedTime <= 200000) {
    dontblameplay();
  } else if (elapsedTime <= 206000) {
    friends3play();
  } else if (elapsedTime <= 216000) {
    gotwantedlosthadplay();
  } else if (elapsedTime <= 220000) {
    endTIMES();
  }
}

//functions for anims
function musicorumSummusEntrada() {
  musicorumSummus.play();
}

function introduction() {
  background(0);
  //font elements
  fill(255);
  textAlign(CENTER);
  textFont(blackadder);
  text('Friends On The Other Side', width / 2, height / 2);

}

function disrespectplay() {
  background(0, 0, 0);

  fill(green1);
  ellipse(x1, y1, 100, 100);
  fill(purple1);
  ellipse(x1 + 100, y1 + 200, 50, 50);
  fill(pink1);
  ellipse(x1 + 300, y1 + 200, 75, 75);

  x1 = x1 + 4;
  y1 = y1 + 4;

  fill(51, 204, 51);
  textAlign(CENTER);
  textFont(blackadder);
  text("Don't you disrespect me little man!", width / 2, height / 2);
}

function derideplay() {
  background(0);

  fill(green1);
  ellipse(x2, y2, 100, 100);
  fill(purple1);
  ellipse(x2 - 200, y2 - 100, 50, 50);
  fill(pink1);
  ellipse(x2 - 200, y2 - 300, 75, 75);

  fill(green1);
  ellipse(x2 - 600, y2 - 300, 100, 100);
  fill(purple1);
  ellipse(x2 - 400, y2 - 600, 50, 50);
  fill(pink1);
  ellipse(x2 - 350, y2 - 400, 75, 75);

  x2 = x2 - 4;
  y2 = y2 - 4;

  fill(255, 0, 255);
  textAlign(CENTER);
  textFont(blackadder);
  text("Don't you derrogate or deride", width / 2, height / 2);

}

function myworldplay() {
  background(0);

  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(a);
  image(spiraling, 0, 0, width * 2, height * 3);
  a = a + 0.015

  fill(255);
  textAlign(CENTER);
  textFont(blackadder);
  text("You're in my world now,", -100, 0);
  text("not your world", 100, 100);

}
//-------------------------------------
function friends1play() {
  background(0);

  let startTime = 16000;
  if (elapsedTime >= startTime + 4000) {
    demonrise1();
    demonrise2();
    demonrise3();
  }

  fill(204, 51, 255);
  textAlign(CENTER);
  textFont(blackadder);
  text("And I've got friends on the other side ", width / 2, height / 2);
}

function demonrise1() {
  y9 = y9 + 6;
  image(demon1, width * (1 / 5), y9, demon1.width / 4, demon1.height / 4);
  fill(134, 0, 179);
  text("(He's got friends on the other side)", width / 2, height * (3 / 5));
}

function demonrise2() {
  y10 = y10 + 7;
  image(demon2, width / 2, y10, demon2.width / 5, demon2.height / 5);
}

function demonrise3() {
  y11 = y11 + 5
  image(demon1, width * (4 / 5), y11, demon1.width / 4, demon1.height / 4);
}
//------------------------------------

function echoplay() {
  background(0);

  fill(255);
  textAlign(CENTER);
  textFont(blackadder);

  let startTime = 25000;

  if (elapsedTime >= startTime) {
    fill(purple1);
    text("That's an echo gentlemen.", width / 2, height / 2);
  }
  if (elapsedTime >= startTime + 1000) {
    fill(green1);
    text("Just a little something we have here in Louisiana", width / 2, height * 2 / 3);
  }
  if (elapsedTime >= startTime + 3000) {
    fill(pink1);
    text("A little parlor trick. Don't worry...", width / 2, height * 3 / 4);
  }
}


//sit down functions
function sitdownplay() {
  background(0);

  fill(255);
  textFont(blackadder);

  let startTime = 30000;

  if (elapsedTime <= startTime + 3000) {
    slide1();

  } else if (elapsedTime <= startTime + 6000) {
    slide2();

  } else if (elapsedTime <= startTime + 8000) {
    slide3();

  } else if (elapsedTime <= startTime + 11500) {
    slide4();
  }

}

function slide1() {
  fill(green1);
  x3 = x3 + 4;
  text("Sit down at my table", x3 - 1000, 100);
}

function slide2() {
  fill(pink1);
  x4 = x4 - 4;
  text("Put your minds at ease", x4 + 1000, y4 - 400);
}

function slide3() {
  fill(green1);
  x5 = x5 + 4;
  text("If you relax it will enable me", x5 - 1000, y5 - 200);
}

function slide4() {
  fill(purple1);
  x6 = x6 - 4;
  text("To do anything I please", x6 + 1000, y6 - 100);
}

//-----------------------------------------------------------------------
//read future functions
function readfutureplay() {
  background(0);
  fill(pink1);

  let startTime = 42000;
  text("I can read your future", width / 2, height / 2);

  if (elapsedTime >= startTime + 2000) {
    fill(green1);
    textAlign(CENTER);
    translate(width / 2, height / 2);
    rotate(a);
    text("I can change it 'round some too", 0, 0)
    a = a + 0.015
  }
}
//-----------------------------------------------

function deepheartplay() {
  background(0);

  heartbeat();

  let startTime = 47000;
  fill(255);
  if (elapsedTime <= startTime + 4000) {
    text("I'll look deep into your heart and soul", width / 2, height / 2);
  } else if (elapsedTime <= startTime + 6000) {
    fill(0);
    text("You do have a soul, don't you Lawrence?", width / 2, height / 2);
  }
}

function heartbeat() {
  x7 = x7 + 25;
  y7 = y7 + 25;
  image(heart, width / 2, height / 2, x7, y7);
}
//-----------------------------------------------

function wildestdreamsplay() {
  background(0);
  fill(255);

  let startTime = 52000;
  if (elapsedTime >= startTime) {
    fill(purple1);
    text("Make your", width * (1 / 4), height * (1 / 5));
  }
  if (elapsedTime >= startTime + 1000) {
    fill(green1);
    text("WILDEST", width * (1 / 3), height / 2);
  }
  if (elapsedTime >= startTime + 2000) {
    fill(green1);
    text("DREAMS", width * (2 / 3), height / 2);
  }
  if (elapsedTime >= startTime + 2500) {
    fill(pink1);
    text("come", width * (6/8), height * (4 / 5));
  }
  if (elapsedTime >= startTime + 2600) {
    fill(pink1);
    text("true", width * (7 /8)+10, height * (4 / 5));
  }
}

function voodooplay() {
  background(0);
  fill(255);

  let startTime = 56000;

  if (elapsedTime <= startTime + 1000) {
    image(magicparticle1, width * (1 / 3), height / 3 + 200, magicparticle1.width / 4, magicparticle1.height / 4);
    fill(green1);
    text("I got voodoo", width * (1 / 3), height / 3);
  } else if (elapsedTime <= startTime + 2000) {
    image(magicparticle2, width * (3 / 4), height / 3 + 150, magicparticle2.width / 4, magicparticle2.height / 4);
    fill(purple1);
    text("I got hoodoo", width * (3/4), height / 3);
  } else if (elapsedTime <= startTime + 4000) {
    image(magicparticle3, width/2, height / 3 + 150, magicparticle3.width / 4, magicparticle3.height / 4);
    fill(pink1);
    text("I got things I haven't even tried!", width/2, height*(4/5));
  }

}

//--------------------------------------------------------------
function friends2play() {
  background(0);

  let startTime = 60000;
  if (elapsedTime >= startTime + 3500) {
    demonrise4();
    demonrise5();
    demonrise6();
  }

  fill(204, 51, 255);
  textAlign(CENTER);
  textFont(blackadder);
  text("And I've got friends on the other side ", width / 2, height / 2);

}

function demonrise4() {
  y15 = y15 + 6;
  image(demon1, width * (1 / 5), y15, demon1.width / 4, demon1.height / 4);
  fill(134, 0, 179);
  text("(He's got friends on the other side)", width / 2, height * (3 / 5));
}

function demonrise5() {
  y16 = y16 + 7;
  image(demon2, width / 2, y16, demon2.width / 5, demon2.height / 5);
}

function demonrise6() {
  y17 = y17 + 5;
  image(demon1, width * (4 / 5), y17, demon1.width / 4, demon1.height / 4);
}
//--------------------------------------------------------------

function cardscardsplay() {
  background(0);
  cardslide();
  fill(255);
  text("The cards, the cards, the cards will tell...", width / 2, height / 2);

}

function cardslide() {
  x12 = x12 + 3;
  y12 = y12 + 3;
  image(cardgrid, x12, y12, cardgrid.width, cardgrid.height);
}
//-----------------------------------------------------------------

function pastpresentplay() {
  background(0);
  fill(255);

  let startTime = 72000;

  if (elapsedTime <= startTime + 500) {
    fill(purple1);
    text("The Past", width / 2, height * (1 / 4));
  } else if (elapsedTime <= startTime + 1500) {
    fill(pink1);
    text("The Present", width / 2, height * (2 / 4));
  } else if (elapsedTime <= startTime + 2500) {
    fill(green1);
    text("And The future as well...", width / 2, height * (3 / 4));
  }

}
//-----------------------------------------------------------------
function threecardsplay() {
  background(0);

  let startTime = 75000;

  if (elapsedTime <= startTime + 3000) {
    fill(green1);
    text("The cards, the cards", width * (1 / 4), height * (1 / 5));
    spincard1();
  } else if (elapsedTime <= startTime + 5000) {
    fill(pink1);
    text("Just take three", width * (2 / 4), height * (1 / 5));
    spincard2();
  } else if (elapsedTime <= startTime + 9000) {
    fill(purple1);
    text("Take a little trip into your future with me", width * (2 / 4), height * (4 / 5));
    spincard3();
  }
  else if(elapsedTime<=startTime+11000){
    glowup();
  }
}

function spincard1() {
  imageMode(CENTER);
  translate(width * (1 / 4), height / 2);
  rotate(a);
  image(card1, 0, 0, card1.width / 6, card1.height / 6);
  a = a + 0.1
}

function spincard2() {
  imageMode(CENTER);
  translate(width * (2 / 4), height / 2);
  rotate(a);
  image(card1, 0, 0, card1.width / 6, card1.height / 6);
  a = a + 0.1
}

function spincard3() {
  imageMode(CENTER);
  translate(width * (3 / 4), height / 2);
  rotate(a);
  image(card1, 0, 0, card1.width / 6, card1.height / 6);
  a = a + 0.1
}

function glowup(){
  x25 = x25+15;
  y25 = y25+15;
  image(card1, width/2, height/2, y25, y25);
}
//-----------------------------------------------------------
function youngmanplay() {
  background(0);
  text("Now you, young man, are from across the sea...", width / 2, height * (1 / 3));
  shipCrossing();
  image(ocean, width / 2, height, width*4, height*4);
}

function shipCrossing() {
  x8 = x8 + 3;
  image(boat, x8, height * (5 / 6), boat.width / 8, boat.height / 8);
}
//-----------------------------------------------------------
function royaltyplay() {
  background(0);
  fill(255, 204, 0);
  
  let startTime = 92000;
  if(elapsedTime>=startTime+500){
  text("You come from two long lines",width/2,height*(1/3));
  }
  if(elapsedTime>=startTime+2000){
    image(royalcrown,width/2,height*(3/5),width/4,height/2);
    text("Of royalty", width / 2, height*(4/5));
  }
  if(elapsedTime>=startTime+5000){
    fill(purple1);
  text("(I'm a royal myself on my mother's side)", width / 2, height*(9/10));
}
}
//-------------------------------------------------------------------------
function fundslowplay() {
  background(0);
  fill(255);
  
  let startTime = 101000;
  
  if(elapsedTime<=startTime+2500){
    raiseit();
  }else if(elapsedTime<=startTime+5000){
    dropit();
  }
}
function raiseit(){
  y26=y26-7;
  fill(green1);
  text("Your lifestyle's high", width / 2, y26);
}

function dropit(){
  y27 = y27+7;
  fill(purple1);
  text("But your funds are low", width / 2, y27);
}
//--------------------------------------------------------------------------
function doughplay() {
  background(0);

  let startTime = 106000
  if (elapsedTime >= startTime + 1000) {
    fill(pink1);
    text("You need to marry a lil' honey", width / 2, height * (1 / 5));
  }
  if (elapsedTime >= startTime + 2500) {
    fill(green1);
    text("whose daddy", width * (2/9), height * (4 / 5));
    image(money, width / 2, height * (2 / 5), money.width / 6, money.height / 6);
  }
  if (elapsedTime >= startTime + 3000) {
    fill(green1);
    text("got", width * (4.5/9), height * (4 / 5));
    image(money, width*(3.5/9), height * (3 / 5), money.width / 6, money.height / 6);
  }
  if (elapsedTime >= startTime + 3500) {
    fill(green1);
    text("dough!", width * (7/9), height * (4 / 5));
    image(money, width * (5.5/9), height * (3 / 5), money.width / 6, money.height / 6);
  }
}

function befreeplay() {
  background(0);

  let startTime = 110000;
  if (elapsedTime <= startTime + 4000) {
    fill(pink1);
    text("Mom and dad cut you off, huh playboy?", width / 2, height * (1 / 5));
  } else if (elapsedTime <= startTime + 8000) {
    fill(purple1);
    text("Now y'all gotta get hitched, but hitchin' ties you down.", width / 2, height * (2 / 5));
  } else if (elapsedTime <= startTime + 9000) {
    fill(pink1);
    text("You just wanna be free.", width / 2, height * (3 / 5));
  } else if (elapsedTime <= startTime + 11000) {
    fill(purple1);
    text("Hop from place to place.", width / 2, height * (4 / 5));
  } else if (elapsedTime <= startTime + 13000) {
    fill(0, 255, 0);
    text("But freedom... takes green!", width / 2, height / 2);
  }

}

function greenfreedomplay() {
  fill(255);
  let startTime = 125000;

  if (elapsedTime <= startTime + 1500) {
    background(51, 204, 51);
    text("It's the green", width / 2, height / 2);
  } else if (elapsedTime <= startTime + 2500) {
    background(0, 153, 51);
    text("It's the green", width / 2, height / 2);
  } else if (elapsedTime <= startTime + 5000) {
    background(0, 255, 0);
    text("It's the green you need", width / 2, height / 2);
  } else if (elapsedTime <= startTime + 8000) {
    background(0);
    text("And when I look into your future,", width / 2, height * (2 / 5));
    fill(0,255,0);
    text("It's the green that I see!", width / 2, height * (3 / 5));
  }
  if (elapsedTime >= startTime) {
    movethemoney();
  }
}

function movethemoney() {
  y19 = y19 + 5;
  image(moneygrid, width / 2, y19, moneygrid.width / 2, moneygrid.height / 2);
}
//------------------------------------------------------------------
function wastetimeplay() {
  background(0);
  fill(255);

  fill(pink1);
  text("On you little man, I don't want to waste much time", width / 2, height * (1 / 5));
  fill(purple1);
  text("You been pushed around all your life", width / 2, height * (5 / 6));

  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(a);
  timespin();
  a = a + 0.01
}

function timespin() {
  image(timeclock, 0, 0, timeclock.width / 6, timeclock.height / 6);
}
//---------------------------------------------------------------------

function mothersisterbrotherplay() {
  background(0);

  fill(green1);
  let startTime = 140000;
  if (elapsedTime <= startTime + 2000) {
    text("You been pushed around by your", width / 2, height * (1 / 5));
  } else if (elapsedTime <= startTime + 3000) {
    fill(purple1);
    text("Mother", width * (1 / 4), height * (3 / 5));
  } else if (elapsedTime <= startTime + 4000) {
    fill(pink1);
    text("and your sister", width * (2 / 4), height * (3 / 5));
  } else if (elapsedTime <= startTime + 5500) {
    fill(green1);
    text("and your brother.", width * (3 / 4), height * (3 / 5));
  }
}

function marriedwifeplay() {
  background(0);
 fill(purple1);

  let startTime = 144500;
  if (elapsedTime >= startTime + 1000) {
    text("And if you was married...", width * (1 / 3), height * (1 / 5));
  }
  if (elapsedTime >= startTime + 1800) {
    image(ring, width / 2, height * (3 / 5), ring.width / 6, ring.height / 6);
  }
  if (elapsedTime >= startTime + 3000) {
    fill(pink1);
    text("You'd be pushed around by your wife.", width * (3 / 5), height * (5 / 6));
  }
}

function mantobeplay() {
  background(0);

  let startTime = 150000
  if (elapsedTime <= startTime + 5000) {
    fill(purple1);
    text("But in your future, the you I see", width / 2, height/2);
  } else if (elapsedTime <= startTime + 8000) {
    background(255, 204, 0);
    fill(255, 153, 51);
    noStroke();
    ellipse(width/2,height/2,500,500);
    image(royalcrown,width/2,height/2,width/2,height);
    fill(0);
    text("Is exactly the man you always wanted to be!", width / 2, height/2);
  }

}

//--------------------------------------------------------------
function shakemyhandplay() {
  background(0);
  fill(purple1);
  text("Shake my hand.", width * (1 / 3), height * (1 / 5));
  fill(pink1);
  text("Come on boys.", width * (2 / 3), height * (1 / 5));
  fill(purple1);
  text("Won't you shake the poor sinner's hand?", width / 2, height * (4 / 5));

  let startTime = 158000;
  if (elapsedTime >= startTime + 1000) {
    gotoshakepurple();
  }
  if (elapsedTime >= startTime + 5000) {
    gotoshakepink();
  }
}

function gotoshakepink() {
  x13 = x13 - 1.7;
  image(hand2, x13, height * (2 / 3), hand2.width / 4, hand2.height / 4);
}

function gotoshakepurple() {
  x14 = x14 + 1.1;
  image(hand1, x14, height / 2, hand1.width / 4, hand1.height / 4);
}
//-------------------------------------------------------------------

function areyoureadyplay() {
  fill(255);

  let startTime = 169000;

  if (elapsedTime <= startTime + 2000) {
    background(0);
    text("Yes...", width / 2, height / 2);
  } else if (elapsedTime <= startTime + 8000) {
    background(77, 0, 153);
    wavylinesmoveleft();
    staticText();
    rotateskull();
  }
}

function staticText() {
  if (elapsedTime >= startTime + 3000) {
    text("Are you ready?", width / 2, height * (1 / 7));
  }
  if (elapsedTime >= startTime + 5000) {
    text("Are you ready?", width / 2, height * (6 / 7));
  }
}

function wavylinesmoveleft() {
  x18 = x18 + 5;
  image(wavylines, x18, height / 2, width * 6, height * 4);
}

function rotateskull() {
  if (elapsedTime >= startTime + 2000) {
    imageMode(CENTER);
    translate(width / 2, height / 2);
    rotate(a);
    image(skullmask, 0, 0, skullmask.width / 4, skullmask.height / 4);
    a = a + 0.04
  }
}
//--------------------------------------------------------------------
function transformationcentralplay() {
  background(77, 0, 153);
  wavylinesmovedown();
  fill(255);
  text("Transformation central!", width / 2, height * (2 / 5));
  text("(Transformation central!)", width / 2, height * (3 / 5));
}

function wavylinesmovedown() {
  y20 = y20 + 5;
  image(wavylines, width / 2, y20, width * 4, height * 6);
}
//--------------------------------------------------------------------

function reformationcentralplay() {
  background(77, 0, 153);
  fill(255);
  wavylinesmoveright();
  text("Reformation central!", width / 2, height * (2 / 5));
  text("(Reformation central!)", width / 2, height * (4 / 5));
}

function wavylinesmoveright() {
  x21 = x21 - 5;
  image(wavylines, x21, height / 2, width * 6, height * 4);
}
//------------------------------------------------------------------------

function transmodcentralplay() {
  background(77, 0, 153);
  wavylinesmoveup();
  fill(255);
  text("Transmogrification central!", width / 2, height / 2);
}

function wavylinesmoveup() {
  y22 = y22 - 5;
  image(wavylines, width / 2, y22, width * 4, height * 6);
}
//------------------------------------------------------------------------

function canyoufeelitplay() {
  background(77, 0, 153);
  
  fill(255);
  feelitstill();
  spiralgridspin();
  
}

function spiralgridspin() {
  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(a);
  image(spiralgrid, 0, 0, width*4, height*4);
  a = a + 0.03
}
function feelitstill(){
  text("Can you feel it?", width / 2, height / 2);
}
//------------------------------------------------------------
function changinchanginplay() {
  background(0);
  fill(255);
  shiftingcircles();
  
  let startTime = 190000;
  if (elapsedTime <= startTime + 500) {
    text("You're changin',", width * (1 / 3), height * (1 / 3));
    
  } else if (elapsedTime <= startTime + 1000) {
    text("You're changin',", width * (2 / 3), height * (1 / 3));
    
  } else if (elapsedTime <= startTime + 2000) {
    text("You're changin', all right!", width / 2, height / 2);
    
  } else if (elapsedTime <= startTime+ 6000) {
    text("I hope you're satisfied", width / 2, height / 2);
  }
}

function shiftingcircles(){
  y23=y23+5;
  image(finalecircles,width/2,y23,width*3,height*8);
}
//---------------------------------------------------------

function dontblameplay() {
  background(0);
  fill(255);
  shiftingrectangles();
  text("But if you ain't, don't blame me!!", width / 2, height / 2);
}

function shiftingrectangles(){
  y24 = y24+5;
  image(finalerectangles,width/2,y24,width*2,height*4);
}
//-------------------------------------------------

function friends3play() {
  background(0);
  fill(255);
  demonrisingfinal();
  text("You can blame my friends on the other side!", width / 2, height / 2);
}

function demonrisingfinal(){
  y29 = y29-4;
  image(demon2, width*(1/12), y29, demon2.width / 7, demon2.height / 7);
  image(demon1, width*(2/12), y29, demon1.width / 7, demon1.height / 7);
  
  y30= y30-3;
  image(demon2, width*(3/12), y30, demon2.width / 7, demon2.height / 7);
  image(demon1, width*(4/12), y30, demon1.width / 7, demon1.height / 7);
  
  y31 = y31-6;
  
  image(demon2, width*(5/12), y31, demon2.width / 7, demon2.height / 7);
  image(demon1, width*(6/12), y31, demon1.width / 7, demon1.height / 7);
  
  y32 = y32-2;
  
  image(demon2, width*(7/12), y32, demon2.width / 7, demon2.height / 7);
  image(demon1, width*(8/12), y32, demon1.width / 7, demon1.height / 7);
  
  y33 = y33-5;
  image(demon2, width*(9/12), y33, demon2.width / 7, demon2.height / 7);
  image(demon1, width*(10/12), y33, demon1.width / 7, demon1.height / 7);
  
  y34 = y34-4;
  image(demon2, width*(11/12), y34, demon2.width / 7, demon2.height / 7);
  image(demon1, width*(12/12), y34, demon1.width / 7, demon1.height / 7);
}
//-----------------------------------------------------------
function gotwantedlosthadplay() {
  background(77, 0, 153);
  fill(255);
  wavylinesstrikeagain();
  
  image(skullmask, width/2, height/2, skullmask.width / 4, skullmask.height / 4);
  
  let startTime = 206000;
  if(elapsedTime>=startTime+1000){
    text("(You got what you wanted!)", width / 2, height * (2 / 5));
  }
  if(elapsedTime>startTime+3000){
    text("(But you lost what you had!)", width / 2, height * (4 / 5));
  }
  rotateskullcircle();
}

function rotateskullcircle(){
    imageMode(CENTER);
    translate(width / 2, height / 2);
    rotate(a);
    image(skullgrid, 0, 0, skullmask.width/1.5, skullmask.height/1.5);
    a = a + 0.04
}

function wavylinesstrikeagain(){
  y28 = y28 + 5;
  image(wavylines, width / 2, y28, width * 4, height * 8);
}
//-------------------------------------------------

function endTIMES() {
  background(255);
  fill(0);
  textAlign(CENTER);
  textFont(blackadder);
  text('Fin', width / 2, height / 2);
}