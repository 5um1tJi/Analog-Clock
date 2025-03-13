// script.js
const h = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalHours = document.getElementById('digital-hours');
const digitalMinutes = document.getElementById('digital-minutes');
const digitalSeconds = document.getElementById('digital-seconds');
const digitalAmpm = document.getElementById('digital-ampm');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Analog Clock
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute
  const minuteDeg = minutes * 6 + seconds * 0.1; // 6 degrees per minute + 0.1 degrees per second
  const secondDeg = seconds * 6; // 6 degrees per second

  h.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  // Digital Clock
  const newHour = String(hours % 12 || 12).padStart(2, '0');
  const newMinute = String(minutes).padStart(2, '0');
  const newSecond = String(seconds).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  digitalHours.textContent = newHour;
  digitalMinutes.textContent = newMinute;
  digitalSeconds.textContent = newSecond;
  digitalAmpm.textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call