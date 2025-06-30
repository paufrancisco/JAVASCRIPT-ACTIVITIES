function updateClock(){
    const now = new Date();
    let hr = now.getHours().toString().padStart(2,0);
    const meridiem = hr >=12 ? "PM" : "AM";
    hr = hr % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);

    const timeString = `${hr}:${minutes}:${sec} ${meridiem}`; 
    document.getElementById('clock').textContent = timeString;

}
updateClock();
setInterval(updateClock,1000);