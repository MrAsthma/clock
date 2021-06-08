setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60;
    // console.log(currentDate.getSeconds());
    // console.log('currentDate.getSeconds() / 60', currentDate.getSeconds() / 60);
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    // console.log(currentDate.getMinutes())
    // console.log('currentDate.getMinutes() / 60', currentDate.getMinutes() / 60);
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
	console.log(secondsRatio);
	
	if(secondsRatio >= 0.25 ){
		document.querySelector(".time").style.opacity = "1";
	}
	if(secondsRatio > 0.75 ){
		document.querySelector(".time").style.opacity = "0";
	}
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();


