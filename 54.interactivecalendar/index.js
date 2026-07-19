//month,day,daynumber,year
const monthEl = document.getElementById("month");
const dayName = document.getElementById("day");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");
const date = new Date();

const month = date.getMonth;
monthEl.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});

dayName.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});
dayNum.innerHTML = date.getDate();

year.innerHTML = date.getFullYear();
