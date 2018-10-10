var cards = ["card01", "card02", "card03", "card04", "card05", "card06", "card07", "card08", "card09", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24", "card25"];
var fulltable = 25;
var smalltable = 9;
var tablesize;
function resizecards(newsize, tablesize) {
	var i;
	for (i = 0; i < tablesize; i++) {
		document.getElementById(cards[i]).style.width = newsize;
	};
};
