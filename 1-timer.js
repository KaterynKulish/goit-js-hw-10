import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-A92OCY9B.js";let s;const o=document.querySelector("button"),a=document.querySelector("input");document.querySelector("[data-hours]");o.disabled=!0;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(console.log(e[0]),s=e[0],e[0].getTime()<=u.defaultDate.getTime()){f.warning({title:"error",message:"Please choose a date in the future"}),o.disabled=!0;return}o.disabled=!1}};o.addEventListener("click",h);function h(){a.disabled=!0,o.disabled=!0;const e=setInterval(()=>{const n=s.getTime()-Date.now();console.log(n);const t=y(n);console.log(t),document.querySelector("[data-days]").textContent=t.days,document.querySelector("[data-hours]").textContent=t.hours,document.querySelector("[data-minutes]").textContent=t.minutes,document.querySelector("[data-seconds]").textContent=t.seconds,n<1e3&&(clearInterval(e),a.disabled=!1,o.disabled=!0)},1e3)}function y(e){const d=r(Math.floor(e/864e5)),c=r(Math.floor(e%864e5/36e5)),i=r(Math.floor(e%864e5%36e5/6e4)),l=r(Math.floor(e%864e5%36e5%6e4/1e3));return{days:d,hours:c,minutes:i,seconds:l}}function r(e){return String(e).padStart(2,"0")}m("#datetime-picker",u);
//# sourceMappingURL=1-timer.js.map