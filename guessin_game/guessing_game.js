'use strict'
let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20
let highScore = 0;

const  displayMessage = function (message){ 
     document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', function(){
	const guess = Number (document.querySelector('.guess').value);
	console.log(guess, typeof guess)


// when there is no input

if (!guess){
	displayMessage('✌ No number')

	// when payer wins
}
else if(guess === secretNumber){
	displayMessage('👍 Correct Number')
	document.querySelector('.number').textContent = secretNumber;

	document.querySelector('body').style.backgroundColor = "green";
	document.querySelector('.number').style.width = '30rem'

	if(score > highScore){
		highScore = score;
		document.querySelector('.highscore').textContent = highScore;
	}
}

	//when guess is wrong
	else if(guess !== secretNumber){
		if (score > 1){
			displayMessage(guess > 
				secretNumber ? "🌹 too High" : "too Low!")
			score--;
			document.querySelector('.score').textContent = score
		}
		else{
			displayMessage('you lost the game')
			document.querySelector('.score').textContent = 0;
	
			// when guess is too low
		}
	
	}

	//when guess is too High

// }else if (guess > secretNumber){
// 	if (score > 1){
// 		document.querySelector('.message').textContent = "🌹 too High"
// 		score--;
// 		document.querySelector('.score').textContent = score
// 	}else{
// 		document.querySelector('.message').textContent = 'you lost the game'
// 		document.querySelector('.score').textContent = 0;

// 		// when guess is too low
// 	}
// }else if (guess < secretNumber){
// 	if(score > 1){
// 		document.querySelector('message').textContent = "too low"
// 		score--;
//         document.querySelector('.score').textContent = score
// 	}else{
// 		document.querySelector('.message').textContent = 'you lost the game';
// 		document.querySelector('.score').textContent = 0;
// 	}
// }
// })

document.querySelector('.again').addEventListener('click', function(){
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector('.message').textContent = "start guessing..."
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?'
	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = "#222";

	document.querySelector('.number').style.width = '15rem'

})
})