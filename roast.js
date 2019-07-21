console.log('Hello?')

var bodyParts = ["ears", "elbows", "eyeball", "booty", "quad", "toe", "lower back", "face", "weenis", "car", "house", "shoes", "girlfriend", "boyfriend", "nostrils", "cooking", "clothes", "lips", "hair", "soul", "cousin", "complexion", "twin", "hands"];
var descriptions = ["thicc", "clean", "sleepy", "hungry", "fat", "shiny", "thirsty", "beautiful", "dry", "runny", "derpy", "dumb", "ugly", "pleasant", "clingy", "dirty", "flappy", "cheesy", "cute", "funny", "creepy", "hot", "cold", "painful", "weird", "old"];
var comparisons = ["cow", "truck", "chihuahua", "donkey", "bear", "beast", "banana", "tree trunk", "pterydactyl", "Thanos", "wight walker", "spiderman", "pooper scooper", "creeper", "chick", "boi", "plant", "human", "rhino", "snek", "zombie", "plague", "toilet", "clam", "bird", "snack", "thot"];

var bodyParts = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var descriptions = descriptions[Math.floor(Math.random() * descriptions.length)];
var comparisons = comparisons[Math.floor(Math.random() * 
comparisons.length)];

// var adlibs = "Your " + bodyParts + " looks like a " + descriptions + " " + comparisons + "!!";

var adlibs = ["Bruh.", "Your", bodyParts, "looks", "like", "a", descriptions, comparisons + "!!"].join(" ");
adlibs;





function run(e) {
    const changeDiv = document.getElementsByClassName('roast');

    changeDiv.innerHTML = adlibs;
}

const start = document.querySelector(`[name = "ouch"]`);

// start.addEventListener('click', run);

start.addEventListener('click', run);