function updateClock() {
    const clockEl = document.getElementById("clock");
    const dateEl = document.getElementById("date");
    
    if (!clockEl || !dateEl) return; // Exit if elements don't exist

    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July"];
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let date = now.getDate();
    let day = now.getDay();
    let month = now.getMonth();

    let ampm = hour < 12 ? "am" : "pm"
    hour = hour > 12 ? hour - 12: hour;
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second


    const timeString = `${hour}:${minute}${ampm}`;
    clockEl.textContent = timeString;

    const dateString = `${days[day]} ${date} ${months[month]}`;
    dateEl.textContent = dateString; 
}

updateClock();
setInterval(updateClock, 1000);


const enterBtn = document.getElementById('enter-btn');

enterBtn.addEventListener('click', () => {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('bar-scene').classList.remove('hidden');
});
