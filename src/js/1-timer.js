import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const btn = document.querySelector('button');
const input = document.querySelector('input');
const timeField = document.querySelector('[data-hours]');
btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      iziToast.warning({
        title: 'error',
        message: 'Please choose a date in the future',
      });
      btn.disabled = true;
      return;
    }
    btn.disabled = false;
  },
};

btn.addEventListener('click', startTimer);

function startTimer() {
  input.disabled = true;
  btn.disabled = true;

  const intervalId = setInterval(() => {
    const deltaTime = userSelectedDate.getTime() - Date.now();
    console.log(deltaTime);
    const time = convertMs(deltaTime);
    console.log(time);
    document.querySelector('[data-days]').textContent = time.days;
    document.querySelector('[data-hours]').textContent = time.hours;
    document.querySelector('[data-minutes]').textContent = time.minutes;
    document.querySelector('[data-seconds]').textContent = time.seconds;
    if (deltaTime < 1000) {
      clearInterval(intervalId);
      input.disabled = false;
      btn.disabled = true;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

flatpickr('#datetime-picker', options);
