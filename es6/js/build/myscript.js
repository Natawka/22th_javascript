'use strict';

$(function () {

	$(':submit').click(function () {
		var checkedBox = $(':checked');
		var correctAnswers = ['answer2', 'answer5', 'answer7'];

		var goodResult = function goodResult() {
			$('.hider').show().click(function () {
				$(this).hide();
				$('.window .correct').hide();
				$(':checked').removeAttr('checked');
			});
			$('.window .correct').show();
		};
		var badResult = function badResult() {
			$('.hider').show().click(function () {
				$(this).hide();
				$('.window .incorrect').hide();
				$(':checked').removeAttr('checked');
			});
			$('.window .incorrect').show();
		};

		if (checkedBox.length == correctAnswers.length) {

			var count = 0;
			for (var k = 0; k < correctAnswers.length; k++) {
				if (checkedBox[k].getAttribute('id') == correctAnswers[k]) {
					count++;
				}
			}
			if (count == 3) {
				goodResult();
			} else {
				badResult();
			}
		} else {
			badResult();
		}
	});
});
