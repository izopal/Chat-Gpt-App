window.addEventListener('mousemove', e => {
    console.log(e);
    if (e.buttons === 1) {
        document.documentElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth * 0.5) * 0.0125}deg`);
        document.documentElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight * 0.5) * -0.05}deg`);
    }
});




    window.addEventListener('devicemotion', e => {
        console.log(e);
        const moveX = (e.accelerationIncludingGravity.x / 10) * -1;
        const moveY = (e.accelerationIncludingGravity.y / 10) * -1;
        document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
        document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
    });


    window.addEventListener('deviceorientation', e => {
        console.log(e);
        const moveX = (e.gamma / 10) * -1;                             // конвертація значення gamma(кут нахилу пристрою вліво або вправо) в кутовий рух
        const moveY = (e.beta / 10) * -1;                             // конвертація значення beta (кут нахилу пристрою вперед або назад) в кутовий рух
        document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
        document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
    });




