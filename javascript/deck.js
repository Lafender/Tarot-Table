/*
if you are adding your own cards:
set var cardlist array with the names of your cards 
(make sure they are in quotes so that they are string variables)

all of the cards in the deck are called by their location in the array.
this is done so that they can be drawn randomly by the Math.random() function
*/
var cardlist = ["00fool.png", "01magician.png", "02priestess.png", "03empress.png", "04emperor.png", "05heirophant.png", "06lovers.png", "07chariot.png", "08justice.png", "09hermit.png", "10wheeloffortune.png", "11strength.png", "12hangedman.png", "13death.png", "14temperance.png", "15devil.png", "16tower.png", "17star.png", "18moon.png", "19sun.png", "20judgment.png", "21world.png", "coins01.png", "coins02.png", "coins03.png", "coins04.png", "coins05.png", "coins06.png", "coins07.png", "coins08.png", "coins09.png", "coins10.png", "coinsking.png", "coinsknight.png", "coinspage.png", "coinsqueen.png", "cups01.png", "cups02.png", "cups03.png", "cups04.png", "cups05.png", "cups06.png", "cups07.png", "cups08.png", "cups09.png", "cups10.png", "cupsking.png", "cupsknight.png", "cupspage.png", "cupsqueen.png", "swords01.png", "swords02.png", "swords03.png", "swords04.png", "swords05.png", "swords06.png", "swords07.png", "swords08.png", "swords09.png", "swords10.png", "swordsking.png", "swordsknight.png", "swordspage.png", "swordsqueen.png", "wands01.png", "wands02.png", "wands03.png", "wands04.png", "wands05.png", "wands06.png", "wands07.png", "wands08.png", "wands09.png", "wands10.png", "wandsking.png", "wandsknight.png", "wandspage.png", "wandsqueen.png"];

// define newdeck variable as the size of your deck
var newdeck = 79; // 79 is the standard number of cards in a tarot deck


/*
the drawn array will record both which cards have been drawn so that they are not drawn twice.
it will have its length checked and will be cleared when its length is equal to newdeck variable
*/
var drawn = [newdeck]; // newdeck is an integer. 


var test_interval;


function showcard(x, img) {
	document.getElementById(cards[x]).src = "tarot/" + cardlist[img];
};

function draw(findcard) {
	var setcard = Math.floor(Math.random() * 78);
	if (drawn.includes(setcard) != true) {
		drawn.push(setcard);
		showcard(findcard, setcard);
		return;
	} else {
		if (drawn.length >= newdeck) {
			reset_deck();
		};
		draw(findcard);
	};
};

function reset_deck() {
	drawn = [newdeck];
};

function test_draw(x) {
	var test_interval = setInterval(draw, 1000);
	setTimeout(endInterval, x * 1000, test_interval)
};

function endInterval(x) {
	clearInterval(x);
};
