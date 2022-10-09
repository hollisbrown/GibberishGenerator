var button = document.getElementById("button");
button.addEventListener("click", generate);

var pic = document.getElementById("pic");
var ctx = pic.getContext("2d");
var username = document.getElementById("name");
var handle = document.getElementById("handle");
var quote = document.getElementById("quote");


var names = [
    ["Abe","Bob","Creed","Dorian","Ed","Fred","Gus","Hal","Ian","Jeff","Ken","Logan","Michael","Naadir","Oswald","Peter","Quinn","Robert","Steve","Todd"],
    ["Johnson", "Williams", "Wilson", "Taylor", "Saylor", "Gonzalez", "Rodriguez", "White", "Scott","Balakrishnan", "Nguyen","Walker"]
]

var words = [
    ["#Bitcoin"],
    ["is a swarm of", "is an army of", "is a pack of","is a storm of", "is a gathering of", "is a horde of", "is a platoon of", "is a battalion of","is a brigade of","is a squadron of", "is a squad of", "is a war of", "is a stream of","is a vortex of","is a beam of","is a fully decentralised web of","is a network of"],
    ["cyber", "cyborg", "android", "energy", "space", "killer", "astral", "plasma", "nano", "fire", "dark matter", "quantum", "digital", "computer", "web3", "lightning"],
    ["hornets", "wasps", "bees", "ants", "bulls", "whales", "sharks", "eagles", "tigers", "lions", "wolves", "rhinos", "woodpeckers", "vipers", "leopards", "lizards", "wizards","demi-gods", "warriors", "jedis"],
    ["serving", "liberating", "fighting for", "conjuring", "protecting", "supporting", "defending", "pledging allegiance to", "saluting", "embracing"],
    ["the goddess", "the priestess", "the elders", "the valkyrie", "the spirit", "the essence", "the ambassadors","the desciples", "the principles", "the virtues", "the higher powers", "the old gods", "the forgotten dragon","the leviathan"],
    ["of wisdom,", "of democracy,", "of science,","of innovation,", "of power,", "of dreams,", "of thermodynamics,", "of logic,", "of reason,", "of smartness,", "of humanity,"],
    ["feeding on", "consisting of nothing but", "emerging from", "forged from", "created by", "hovering in", "uploaded into"],
    ["the fire of", "the quantum plasma of", "the background radiation of", "the sheer essence of", "the tornado of", "the never-ending stream of", "the greatest achievements of"],
    ["truth,", "excellence,", "wealth,", "prosperity,", "mankind,", "community,", "the internet,", "energy,", "dreams,", "decentralisation,", "independence,"],
    ["exponentially growing", "building", "energetically speeding", "relentlessly working", "continously accelerating", "assembling", "using proof of work"],
    ["even smarter, faster and stronger", "even heavier", "even smarter", "more efficient than ever","even further", "to the moon", "with no end in sight", "without pause", "without censorship", "without government control"],
    ["behind a wall of", "in a stream of", "in a vortex of", "through a portal of", "in a palace of", "in a digital shrine of", "in a decentralised ledger of", "through a cyber chain of", "in a quantum tunnel of"],
    ["encrypted energy", "thermodynamically sound money", "digital gold", "endless potential", "unlimited power","encrypted souls","digital freedom","true ownership", "space and time"]
];

window.onload = function () {
    generate();
}

function generate(){
    generatePicture();
    generateName();
    generateText();
}

function generatePicture() {


    let w = 64;
    let h = 64;

    let colBackground = "rgb(" + (Math.random() * 80 + 70).toString() + ", " + (Math.random() * 80 + 70).toString() + ", " + (Math.random() * 80 + 70).toString() +")";
    let colBody = "rgb(" + (Math.random() * 90 + 110).toString() + "," + (Math.random() * 90 + 110).toString() + "," + (Math.random() * 90 + 110).toString() +")";
    let colHead = "rgb(" + (Math.random() * 50 + 210).toString() + "," + (Math.random() * 30 + 150).toString() + "," + (Math.random() * 10 + 150).toString() +")";

    let colHair = "rgb(" + (Math.random() * 150 + 30).toString() + "," + (Math.random() * 150 + 30).toString() + "," + (Math.random() * 150 + 30).toString() +")";
    let colLaser = "rgb(255,100,100)";
    let colBlack = "rgb(30,30,30)";
    let colWhite = "rgb(253,253,253)";

    ctx.fillStyle = colBackground;
    ctx.fillRect(0, 0, 64, 64);

    ctx.lineCap = "round";

    //body
    ctx.lineWidth = 50;
    ctx.strokeStyle = colBody;
    ctx.beginPath();
    ctx.moveTo(w/2,h*2);
    ctx.lineTo(w/2,h*0.8);
    ctx.stroke();

    let hairOffsetX = (Math.random() - 0.5) * w / 6;
    let hairOffsetY = (Math.random() - 0.5) * w / 6;
    let hairWidth = Math.random() * 10 + 30;

    //hair
    ctx.lineWidth = hairWidth;
    ctx.strokeStyle = colHair;
    ctx.beginPath();
    ctx.moveTo(w / 2 + w * 0.1 - hairOffsetX, h * 0.1 + hairOffsetY);
    ctx.lineTo(w / 2 - w * 0.1 + hairOffsetX, h * 0.1 - hairOffsetY);
    ctx.stroke();

    //head
    ctx.lineWidth = 20;
    ctx.strokeStyle = colHead;
    ctx.beginPath();
    ctx.moveTo(w / 2, h * 0.5);
    ctx.lineTo(w / 2, h * 0.3);
    ctx.stroke();



    //eyes
    let eyeOffsetX = (Math.random() - 0.5) * w / 10;
    let eyeOffsetY = (Math.random() - 0.5) * w / 10;
    let eyeLeftX = (w / 2 - w * 0.05) + eyeOffsetX;
    let eyeLeftY = h * 0.4 + eyeOffsetY;
    let eyeRightX = (w / 2 + w * 0.05) + eyeOffsetX;
    let eyeRightY = h * 0.4 + eyeOffsetY;

    ctx.lineWidth = 7;
    ctx.strokeStyle = colBlack;
    ctx.beginPath();
    ctx.moveTo(eyeLeftX, eyeLeftY);
    ctx.lineTo(eyeLeftX, eyeLeftY * 0.95);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(eyeRightX, eyeRightY);
    ctx.lineTo(eyeRightX, eyeRightY * 0.95);
    ctx.stroke();

    let laserOffset = (Math.random() - 0.5) * w;
    //lasers
    ctx.lineWidth = 7;
    ctx.strokeStyle = colLaser;
    ctx.beginPath();
    ctx.moveTo(eyeLeftX, eyeLeftY);
    ctx.lineTo(eyeLeftX + laserOffset * 1.5, eyeLeftY * 4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(eyeRightX, eyeRightY);
    ctx.lineTo(eyeRightX + laserOffset * 1.2, eyeRightY * 4);
    ctx.stroke();

    ctx.lineWidth = 4;
    ctx.strokeStyle = colWhite;
    ctx.beginPath();
    ctx.moveTo(eyeLeftX, eyeLeftY);
    ctx.lineTo(eyeLeftX + laserOffset * 1.5, eyeLeftY * 4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(eyeRightX, eyeRightY);
    ctx.lineTo(eyeRightX + laserOffset * 1.2, eyeRightY * 4);
    ctx.stroke();
}

function generateName(){
    let firstName = getRandomFrom(names[0]);
    let lastName = getRandomFrom(names[1]);
    username.textContent = firstName + " " + lastName;
    handle.textContent = "@"+(firstName.charAt(0)+lastName).toLowerCase();
}

function generateText(){
    let quoteText = "<span>" + getRandomFrom(words[0]) + "</span> ";
    for (let i = 1; i < words.length; i++) {
        quoteText += getRandomFrom(words[i]) + " ";
    }
    quote.innerHTML = quoteText;
}

function getRandomFrom(arr) {
    let id = Math.floor(Math.random() * arr.length);
    return arr[id];
}