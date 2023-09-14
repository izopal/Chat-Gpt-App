document.addEventListener('DOMContentLoaded', function(){
    const userInput = document.getElementById('user-input');
    const iconClose = document.querySelector('.chat .box.input .icon.close svg');
    
    // очищаємо поле "message" і показуємо кнопку iconClose при натисканні на поле message
    userInput.addEventListener('click', () => {
        iconClose.style.display = 'block';
    });
    // очищаємо поле "message" і приховуємо кнопку iconClose при натисканні на іконку закриття
    iconClose.addEventListener('click', () => {
        userInput.value = '';
        iconClose.style.display = 'none';
    });
});