document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    let intervalCount = 0;

    const colors = ['red', 'blue', 'green', 'yellow', 'purple','orange','aqua'];
    const intervalId = setInterval(() => {

        message.style.color = colors[intervalCount % colors.length];
        intervalCount += 1;

        if (intervalCount >= 7) {
            clearInterval(intervalId); 
            message.style.color = 'green'; 
            console.log("Animatsiya to'xtatildi, rang yashilga o'zgardi.");
            setTimeout(() => {
                console.log("Animatsiya tugadi!");
            }, 2000);
        }
    }, 1000);
});
