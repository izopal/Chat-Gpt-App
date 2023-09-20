
body.addEventListener('wheel', () => {
  chat.style.pointerEvents = 'none';
  chat.style.zIndex        = '-1';                      // Встановлюємо менше значення z-index
});


const angle = 7.5;
body.addEventListener('mousemove', (e) => {
  chat.style.pointerEvents = 'all';
  chat.style.zIndex = '1';
  // console.log(e);
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


let str = '';
const reference = "привіт";
const t1 = '67|111|112|121|114|105|103|104|116|32|169|32|50|48|50|49|45|50|48|50|50|32|124|32|77|46|83|97|107|97|108',
      t2 = '109|121|32|112|104|111|110|101|32|43|51|56|48|57|54|54|53|49|48|54|51|54',
      t3 = '109|121|32|103|105|116|104|117|98|32|64|105|122|111|112|97|108';
body.addEventListener('keypress', (e) =>{
  str += e.key;
  if(reference.indexOf(str) !== 0){
    str = '';
    return;
  }
  if (str === reference) {
    console.log(text(t1));
    console.log(text(t2));
    console.log(text(t3));
    str = '';
  }
});

const text =  str => str.split('|')
                        .map(item => String.fromCharCode(item))
                        .join('');

