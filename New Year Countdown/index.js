const dayEl = document.getElementById("Days")
const hourEl = document.getElementById("Hours")
const minuteEl = document.getElementById("Minutes")
const secondEl = document.getElementById("Seconds")

const newYearTime = new Date("Jan 1, 2026 00:00:00:").getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now
    console.log(gap);
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second)
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(updateCountdown, 1000)
}