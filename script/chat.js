const initialHeight = textarea.clientHeight;             // Зберігаємо початкову висоту

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';                        // Спочатку встановлюємо висоту на автоматичну
  textarea.style.height = `${textarea.scrollHeight}px`;  // Встановлюємо висоту, яка дорівнює висоті вмісту
});



textarea.addEventListener('keydown', e => {
  iconClose.style.display = textarea.value !== '' ? 'block' : 'none';
  if(e.key === 'Enter') {
    e.preventDefault();                                     // Забороняємо дійсну подію переходу на новий рядок
    sendMessage();
    textarea.value = "";                                    // Очищаємо поле textarea
    textarea.style.height = `${initialHeight}px`;           // Встановлюємо початкову висоту
  }
})

iconClose.addEventListener('click', () => {
  textarea.value = "";   
  iconClose.style.display = 'none';
  textarea.style.height = `${initialHeight}px`;           // Встановлюємо початкову висоту
});  

sendBtn.addEventListener('click', e =>{
  sendMessage();
  textarea.value = "";
  textarea.style.height = `${initialHeight}px`;           // Встановлюємо початкову висоту
});

function sendMessage(){
  const messages = textarea.value.trim();
  const options = {
    method: "POST",
    headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json"
    },
    body:   JSON.stringify({
                              model: "gpt-3.5-turbo",
                              messages: [{
                                          role:    "user", 
                                          content: textarea.value,
                                      }],
                              max_tokens: 70,
    })
  };
  if(messages !==''){
    appendMessage('user', messages);
   
    fetch ('https://api.openai.com/v1/chat/completions', options)
      .then((response) => response.json())
      .then((data) => {
          appendMessage('bot', data.choices[0].message.content);
          iconSend.style.display ='block';
          iconSpiner.style.display ='none';
      })
      .catch((error) =>{
          if(error.name === 'TypeError'){
            appendMessage('bot', 'Помилка: Провірте, ваш apiKey');
            iconSend.style.display ='block';
            iconSpiner.style.display ='none';
          }
    });
  }
} 



function appendMessage(sender, messages){
  MSakal.style.display     = 'none';  
  iconClose.style.display  = 'none';
  iconSend.style.display   = 'none';
  iconSpiner.style.display = 'block';
 
  const chatElement    = document.createElement('div');
  const iconElement    = document.createElement('div');
  const messageElement = document.createElement('div');

  chatElement.classList.add('chat-box');
  iconElement.classList.add('icon');
  messageElement.classList.add('sender');
  
  messageElement.innerText = messages;
  if(sender === 'user') {
    chatElement.classList.add('user');
    iconElement.style.backgroundImage = 'url(./img/user.png)';
  } else {
    chatElement.classList.add('bot');
    iconElement.style.backgroundImage = 'url(./img/bot.png)';
  };
 
  chatElement.append(iconElement, messageElement);
  
  chatLog.appendChild(chatElement);
  chatLog.scrollTo = chatLog.scrollHeight;

}




 
   





