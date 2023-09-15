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


document.addEventListener('devicemotion', e => {
    const moveX = (e.accelerationIncludingGravity.x / 10) * -1;
    const moveY = (e.accelerationIncludingGravity.y / 10) * -1;
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${moveX}deg;
        --move-y: ${moveY}deg;
        `
    })
});









