const DateFormatter = date => {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let year, month, day;

  if (date) {
    year = date.substring(0, 4);
    month = date.substring(6, 7);
    day = date.substring(8);
  }

  return day + " " + monthNames[month] + " " + year;
};

export { DateFormatter };
