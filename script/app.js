document.addEventListener('mousemove', e => {
    if (e.buttons === 1) {
        Object.assign(document.documentElement, {
            style: `
            --move-x: ${(e.clientX - window.innerWidth * .5) * .0125}deg;
            --move-y: ${(e.clientY - window.innerHeight * .5) * -.05}deg;
            `
        })
    }
})


// if (window.DeviceMotionEvent) {
//     // Прискорювач підтримується на цьому пристрої
//     window.addEventListener('devicemotion', e => {
//         const moveX = (e.accelerationIncludingGravity.x / 10) * -1;
//         const moveY = (e.accelerationIncludingGravity.y / 10) * -1;
//         Object.assign(document.documentElement.style, {
//             '--move-x': `${moveX}deg`,
//             '--move-y': `${moveY}deg`
//         });
//     });
// } else {
//     console.log("Прискорювач не підтримується на цьому пристрої.");
// }





if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', e => {
        const moveX = (e.gamma / 10) * -1;                             // конвертація значення gamma(кут нахилу пристрою вліво або вправо) в кутовий рух
        const moveY = (e.beta / 10) * -1;                             // конвертація значення beta (кут нахилу пристрою вперед або назад) в кутовий рух
        Object.assign(document.documentElement.style, {
            '--move-x': `${moveX}deg`,
            '--move-y': `${moveY}deg`
        });
    });
} else {
    console.log("API прискорювача не підтримується на цьому пристрої.");
}




