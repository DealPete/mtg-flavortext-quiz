var streak_length = 0;
var cards = {};

$(document).ready( function() {
	function get_new_question(data) {
		cards = data;
		$('#flavor').text(cards.cards[cards.answer].flavor);
	//	$('input:radio').attr("checked", false);
		[0, 1, 2, 3].forEach( function(card) {
			$('#card' + card).html(cards.cards[card].name);
		});
	}
		
	[0, 1, 2, 3].forEach( function(btn) {
		$('#card' + btn).click(function() {
			if (btn == cards.answer.toString()) {
				$('#result').html('Correct!');
				streak_length++;
			} else {
				$('#result').html('Wrong!');
				streak_length = 0;
			}

			$('h2').html('Streak Length: ' + streak_length);

			$.getJSON('/cards', get_new_question );

			$('img').attr("src", "");
			$('img').attr("src", "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=" + cards.cards[cards.answer].multiverseid + "&type=card");

			event.preventDefault();
		});
	});
	
	$.getJSON('/cards', get_new_question );
});
