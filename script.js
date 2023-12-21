var dayText, day, hours, minutes, seconds;

var days = ['SU','MO','TU','WE','TH','FR','SA'];

function now() {
  var now = new Date();
  dayText = days[now.getDay()];
  day = now.getDate();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
}

function updateWatch() {
  document.getElementById('dayText').innerText = dayText;
  document.getElementById('day').innerText = addPadding(day);
  document.getElementById('hours').innerText = addPadding(hours);
  document.getElementById('minutes').innerText = addPadding(minutes);
  updateSeconds();
}

function updateSeconds() {
  document.getElementById('seconds').innerText = addPadding(seconds);
}

function addPadding(value) {
  return value < 10 ? '0' + value : value;
}

now();
updateWatch();

window.setInterval(function() {
  seconds++;
  updateSeconds();
 
  if (seconds === 60) {
    now();
    updateWatch();
  }
}, 1000);