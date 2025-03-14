// ملف JavaScript لتحديث الساعة الرقمية LED وإضافة مواقيت الصلاة

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayString = days[now.getDay()];
    
    document.getElementById("clock").textContent = timeString;
    document.getElementById("day").textContent = dayString;
}

// مواقيت الصلاة في الجزائر (توقيت تقريبي)
const prayerTimes = {
    "الفجر": "05:00 AM",
    "الظهر": "12:30 PM",
    "العصر": "04:00 PM",
    "المغرب": "07:00 PM",
    "العشاء": "08:30 PM"
};

function displayPrayerTimes() {
    let container = document.getElementById("prayer-times");
    container.innerHTML = "";
    
    for (let prayer in prayerTimes) {
        let prayerBox = document.createElement("div");
        prayerBox.className = "prayer-box";
        prayerBox.innerHTML = `<strong>${prayer}</strong><br>${prayerTimes[prayer]}`;
        container.appendChild(prayerBox);
    }
}

// تحديث الساعة كل ثانية
setInterval(updateClock, 1000);
updateClock();
displayPrayerTimes();
