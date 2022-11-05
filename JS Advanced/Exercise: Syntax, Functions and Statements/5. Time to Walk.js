function timeToWalk(numSteps, footprintLength, speed) {

    let distanceInKm = (numSteps * footprintLength) * 0.001;
    let numOfBreaks = Math.floor(distanceInKm / 0.5);
    let timeInHours = distanceInKm / speed;
    let breaksTimeInSeconds = numOfBreaks * 60;
    let timeInSeconds = timeInHours * 3600;
    let totalTimeInSeconds = breaksTimeInSeconds + timeInSeconds;

    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = Math.round(totalTimeInSeconds % 60);

    hours = hours < 10 ? `0` + hours : hours;
    minutes = minutes < 10 ? `0` + minutes : minutes;
    seconds = seconds < 10 ? `0` + seconds : seconds;

    console.log(`${hours}:${minutes}:${seconds}`);


}
