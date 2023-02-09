export function formatDate(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  let dateSuffix;
  switch (day) {
    case 1:
    case 21:
    case 31:
      dateSuffix = "st";
      break;
    case 2:
    case 22:
      dateSuffix = "nd";
      break;
    case 3:
    case 23:
      dateSuffix = "rd";
      break;
    default:
      dateSuffix = "th";
      break;
  }

  return `${dayOfWeek} ${day}${dateSuffix}, ${month} ${year}`;
}
export function getGreeting() {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
