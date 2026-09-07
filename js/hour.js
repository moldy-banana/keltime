const now = new Date();
const localMinute = now.getMinutes();
const localHour = now.getHours();
const localYear = now.getFullYear();
const time = now.toLocaleString();
document.getElementById("time").innerHTML = localMinute + ":" + localHour + ":" + localYear;