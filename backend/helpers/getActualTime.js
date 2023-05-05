function getCurrentDateTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let day = today.getDate();
  let month = today.getMonth() + 1; // getMonth() returns 0-indexed values, so we add 1 to get the actual month
  let year = today.getFullYear();

  // Add leading zeros to hours, minutes, seconds, day, and month if they are less than 10
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  let formattedDateTime =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    day +
    "/" +
    month +
    "/" +
    year;
  return formattedDateTime; // Return the formatted date and time string
}

console.log(getCurrentDateTime()); // Output: hh:mm:ss dd/mm/yyyy

module.exports = getCurrentDateTime; // Export the getCurrentDateTime function
