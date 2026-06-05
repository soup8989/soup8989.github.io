function updateClock() {
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
    document.getElementById("clock").textContent = timeString;

    const dateString = `${days[day]} ${date} ${months[month]}`;
    document.getElementById("date").textContent = dateString; 
}

updateClock();
setInterval(updateClock, 1000);


const btn = document.getElementById('enter-btn');
const section = document.getElementById('content');

btn.addEventListener('click', () => {
    section.classList.toggle('open');
    btn.textContent = section.classList.contains('open') ? 'close' : 'drop down';
});