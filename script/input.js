

const angle = 7.5;

body.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) {
    const offsetX = (e.pageX - window.innerWidth * 0.5) * 0.05;
    const clampedOffsetX = Math.min(Math.max(offsetX, -angle), angle);
    layers.style.setProperty('--move-x', `${clampedOffsetX}deg`);
    
  
    const offsetY = (e.pageY - window.innerHeight * 0.5) * -0.05;
    const clampedOffsetY = Math.min(Math.max(offsetY, -angle), angle);
    layers.style.setProperty('--move-y', `${clampedOffsetY}deg`);
  }
});


body.addEventListener('touchmove', (e) => {
  const offsetX = (e.changedTouches[0].pageX - window.innerWidth * 0.5) * 0.05;
  const clampedOffsetX = Math.min(Math.max(offsetX, -angle), angle);
  layers.style.setProperty('--move-x', `${clampedOffsetX}deg`);

  const offsetY = (e.changedTouches[0].pageY - window.innerHeight * 0.5) * -0.05;
  const clampedOffsetY = Math.min(Math.max(offsetY, -angle), angle);
  layers.style.setProperty('--move-y', `${clampedOffsetY}deg`);
});

// Повернення до початкового положення, наприклад, зі зміною кутів до нуля.
body.addEventListener('mouseup', () => {
  layers.style.setProperty('--move-x', '0deg');
  layers.style.setProperty('--move-y', '0deg');
});
body.addEventListener('touchend', () => {
  layers.style.setProperty('--move-x', '0deg');
  layers.style.setProperty('--move-y', '0deg');
});

// body.addEventListener('devicemotion', e => {
//     console.log(e);
//     const moveX = (e.accelerationIncludingGravity.x / 10) * -1;
//     const moveY = (e.accelerationIncludingGravity.y / 10) * -1;
//     layers.style.setProperty('--move-x', `${moveX}deg`);
//     layers.style.setProperty('--move-y', `${moveY}deg`);
//     });


// body.addEventListener('deviceorientation', e => {
//     console.log(e);
//     const moveX = (e.gamma / 10) * -1;                             // конвертація значення gamma(кут нахилу пристрою вліво або вправо) в кутовий рух
//     const moveY = (e.beta / 10) * -1;                             // конвертація значення beta (кут нахилу пристрою вперед або назад) в кутовий рух
//     layers.style.setProperty('--move-x', `${moveX}deg`);
//     layers.style.setProperty('--move-y', `${moveY}deg`);
// });