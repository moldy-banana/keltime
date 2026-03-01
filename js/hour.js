const now = new Date();
const localHour = now.getHours();
const time = now.toLocaleString();
document.getElementById("time").innerHTML = localHour;