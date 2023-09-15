// document.addEventListener('mousemove', e => {
//     if (e.buttons === 1) {
//         Object.assign(document.documentElement, {
//             style: `
//             --move-x: ${(e.clientX - window.innerWidth * .5) * .0125}deg;
//             --move-y: ${(e.clientY - window.innerHeight * .5) * -.05}deg;
//             `
//         })
//     }
// })

// if (window.DeviceMotionEvent) {
//     window.addEventListener('devicemotion', handleMotion);
// } else {
//     console.log("Прискорювач не підтримується на цьому пристрої.");
// }

// function handleMotion(e) {
//     const moveX = (e.accelerationIncludingGravity.x / 10) * -1;
//     const moveY = (e.accelerationIncludingGravity.y / 10) * -1;
    
//     // Оновлення стилів
//     document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
//     document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
// }





// Функція для оновлення стилів
function updateStyles(moveX, moveY) {
    document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
    document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
}

// Обробник руху миші та прискорювача
function handleInput(e) {
    if (e instanceof MouseEvent) {
        if (e.buttons === 1) {
            const moveX = (e.clientX - window.innerWidth * 0.5) * 0.0125;
            const moveY = (e.clientY - window.innerHeight * 0.5) * -0.05;
            updateStyles(moveX, moveY);
        }
    } else if (e instanceof DeviceMotionEvent) {
        const moveX = (e.accelerationIncludingGravity.x / 10) * -1;
        const moveY = (e.accelerationIncludingGravity.y / 10) * -1;
        updateStyles(moveX, moveY);
    }
}

// Додавання обробників подій
document.addEventListener('mousemove', handleInput);

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', handleInput);
} else {
    console.log("Прискорювач не підтримується на цьому пристрої.");
}
