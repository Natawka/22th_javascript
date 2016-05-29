
$(function(){
	
	
	$(':submit').click(function(){
		let checkedBox = $(':checked');
		let correctAnswers = ['answer2','answer5','answer7'];
		
		let goodResult = () => {
			$('.hider').show().click(function(){
				$(this).hide();
				$('.window .correct').hide();
				$(':checked').removeAttr('checked');
			});
			$('.window .correct').show();
		 		
		}
		let badResult = () => {
			$('.hider').show().click(function(){
				$(this).hide();
				$('.window .incorrect').hide();
				$(':checked').removeAttr('checked');
			});
			$('.window .incorrect').show();	
			
		}
		
		if(checkedBox.length == correctAnswers.length){
		
			let count = 0;
			for (let k = 0; k < correctAnswers.length; k++) {
				if (checkedBox[k].getAttribute('id') == correctAnswers[k]){
					count ++;
				}
			}
			if (count==3){
				goodResult();
			}else{
				badResult();
			}
		}else{
			badResult();
		}
		
	})
	
	
	
});
