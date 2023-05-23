var trafficLightChangeInterval = 7 * 60 + 30; // in seconds
var initialGreenTimestamp = new Date('2023-05-22T19:20:24+03:00').getTime() / 1000; // Unix timestamp in seconds

function updateTrafficLights() {
    var currentTimestamp = new Date().getTime() / 1000; // Unix timestamp in seconds
    var timeSinceGreen = currentTimestamp - initialGreenTimestamp;
    var timeUntilChange = trafficLightChangeInterval - (timeSinceGreen % trafficLightChangeInterval);

    var cityLight = document.getElementById('city-side');
    var villaLight = document.getElementById('villa-side');
    var timeLeft = document.getElementById('time-left');

    if (timeSinceGreen % (2 * trafficLightChangeInterval) < trafficLightChangeInterval) {
        // The light is green on the villa side
        villaLight.textContent = ' ';
        villaLight.className = 'traffic-light green';
        cityLight.textContent = ' ';
        cityLight.className = 'traffic-light red';
    } else {
        // The light is green on the city side
        villaLight.textContent = ' ';
        villaLight.className = 'traffic-light red';
        cityLight.textContent = ' ';
        cityLight.className = 'traffic-light green';
    }

    if(Math.floor(timeUntilChange / 60) <= 0){
        timeLeft.textContent = Math.floor(timeUntilChange % 60) + 's';
    }else{
        timeLeft.textContent = Math.floor(timeUntilChange / 60) + 'm ' + Math.floor(timeUntilChange % 60) + 's';
    }
}

setInterval(updateTrafficLights, 100); // update every second
updateTrafficLights(); // initial update
