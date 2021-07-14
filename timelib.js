function msToS(milliseconds) {
  return milliseconds / 1000;
}

function todaysDate() {
  var datetime = new Date();
  return datetime;
}

function formatDate(today) {
  return today.toISOString().split('T')[0];
}

module.exports = {msToS, todaysDate, formatDate}; // Functions
