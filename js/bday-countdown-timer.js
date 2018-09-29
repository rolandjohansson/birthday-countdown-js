// ===== Bday Calculator ===== //
let countdown = null;

let birthdayInputField = document.getElementById("bday-input");
let birthdayOutputField = document.getElementById("bday-output");

function millisToYears(millis) {
  return Math.floor(millis / 31556926000);
}

function millisToDays(millis) {
  return Math.floor(millis / (1000 * 60 * 60 * 24));
}

function millisToHours(millis) {
  return Math.floor((millis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function millisToMinutes(millis) {
  return Math.floor((millis % (1000 * 60 * 60)) / (1000 * 60));
}

function millisToSeconds(millis) {
  return Math.floor((millis % (1000 * 60)) / 1000);
}

function TimeInterval() {
  this.years = 0;
  this.days = 0;
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
}

// Returns a TimeInterval object with the time left from now to the future date some_date.
// TODO: Throw exception if date2 < date1
function dateDifference(date1, date2) {
  var ti = new TimeInterval();
  
  let millisDiff = date2 - date1;
  ti.years = millisToYears(millisDiff);
  ti.days = millisToDays(millisDiff);
  ti.hours = millisToHours(millisDiff);
  ti.minutes = millisToMinutes(millisDiff);
  ti.seconds = millisToSeconds(millisDiff);

  return ti;
}


function showTimeLeft() {
 
  let userBirthday = new Date(birthdayInputField.value);
  let now = new Date();

  // age is a TimeIntervalObject
  let age = dateDifference(userBirthday, now);

  let futureBirthday = new Date(userBirthday.getFullYear() + age.years + 1, userBirthday.getMonth(), userBirthday.getDate());
  
  ti = dateDifference(now, futureBirthday);

  birthdayOutputField.innerHTML = "Du fyller <b>" + (age.years + 1) + "</b><br><small>om <b>" + ti.days + "</b> dag(ar) <b>" + ti.hours + "</b> timmar <b>" + ti.minutes + "</b> minuter och <b>" + ti.seconds + "</b> sekunder</small>";
}

// TODO: prevent 5 digits in year input field

// Anonomymous event listening function is executed on submit event
document.querySelector("#birthday-form").addEventListener("submit", function (e) {

  // Prevent the normal submission of the form
  e.preventDefault();

  if (countdown != null) {
    clearInterval(countdown);
    console.log("Countdown stopped");
  }

  showTimeLeft();

  countdown = setInterval(showTimeLeft, 1000);
});