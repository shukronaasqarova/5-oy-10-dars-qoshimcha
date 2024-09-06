setTimeout(() => {
    const ism = prompt("Ismingizni kiriting:");
    alert(`Salom, ${ism}!`);
}, 3000); 

const intervalId = setInterval(() => {
    console.log("Bu xabar har 2 soniyada bir marta ko'rsatiladi.");
}, 2000); 

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval to'xtatildi.");
}, 10000); 