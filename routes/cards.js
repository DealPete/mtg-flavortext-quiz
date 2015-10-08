var express = require('express');
var cards = require('../mtg-cards-with-flavor.json');

var router = express.Router();

router.get('/cards', function(req, res) {

	card = {"answer" : Math.floor(Math.random() * 4) };

	card.cards = [0, 0, 0, 0].map( function(obj) {
		number = Math.floor(Math.random() * cards.length) + 1;
		
		return { "number" : number,
			"name" : cards[number].card,
			"flavor" : cards[number].flavor,
			"multiverseid": cards[number].multiverseid };
	});

	res.json(card);
});

module.exports = router;
