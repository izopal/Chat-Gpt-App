
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keydown', e => {
  iconClose.style.display = userInput.value !== '' ? 'block' : 'none';
  if(e.key === 'Enter'){
    sendMessage();
  }
})

iconClose.addEventListener('click', () => {
  userInput.value = '';
  iconClose.style.display = 'none';
});  

function sendMessage(){
  const messages = userInput.value.trim();
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
                                          content: userInput.value,
                                      }],
                              max_tokens: 30,
    })
  };
  if(messages !==''){
    appendMessage('user', messages);
    userInput.value = "";
    fetch ('https://api.openai.com/v1/chat/completions', options)
      .then((response) => response.json())
      .then((data) => {
          appendMessage('bot', data.choices[0].message.content);
          sendBtn.classList.add('fa-solid', 'fa-paper-plane');
          sendBtn.classList.remove('fas', 'fa-spinner', 'fa-pulse');
    })
      .catch((error) =>{
          if(error.name === 'TypeError'){
            appendMessage('bot', 'Помилка: Провірте, ваш apiKey');
            sendBtn.classList.add('fa-solid', 'fa-paper-plane');
            sendBtn.classList.remove('fas', 'fa-spinner', 'fa-pulse');
          }
    });
  }
} 



function appendMessage(sender, messages){
  MSakal.style.display ='none';  
  iconClose.style.display = 'none';
  sendBtn.classList.remove('fa-solid', 'fa-paper-plane');
  sendBtn.classList.add('fas', 'fa-spinner', 'fa-pulse');

  const chatElement    = document.createElement('div');
  const iconElement    = document.createElement('div');
  const icon           = document.createElement('div');
  const messageElement = document.createElement('div');

  chatElement.classList.add('chat-box');
  iconElement.classList.add('icon');
  messageElement.classList.add('sender');
  
  messageElement.innerText = messages;

  if(sender === 'user'){
    iconElement.style.backgroundImage = 'url(./img/user.png)'
  }else{
    iconElement.style.backgroundImage = 'url(./img/bot.png)'
  }

 
  chatElement.appendChild(iconElement);
  chatElement.appendChild(messageElement);

  chatLog.appendChild(chatElement);
  chatLog.scrollTo = chatLog.scrollHeight;

}




 
   





