(function() {
  // Wait until the DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Default URL for the chatbot
    var chatbotUrl = window.chatbotUrl || "https://app.udility.com/repl"; 
    
    // Create the chat widget
    var chatWidget = document.createElement('div');
    chatWidget.id = 'chat-widget';
    chatWidget.style.display = 'none'; // Initially hidden
    
    // Create the chat iframe
    var chatIframe = document.createElement('iframe');
    chatIframe.id = 'chat-iframe';
    chatIframe.src = chatbotUrl;
    chatIframe.style.width = '100%';
    chatIframe.style.height = '100%';
    chatIframe.style.border = 'none';
    chatIframe.style.display = 'none'; // Hidden until loaded
    chatWidget.appendChild(chatIframe);
    
    // Create the chat loader (spinner)
    var chatLoader = document.createElement('div');
    chatLoader.id = 'chat-loader';
    var spinner = document.createElement('div');
    spinner.classList.add('spinner');
    chatLoader.appendChild(spinner);
    chatLoader.innerHTML += " Loading..."; // Optional text
    chatWidget.appendChild(chatLoader);
    
    // Create the chat avatar
    var chatAvatar = document.createElement('div');
    chatAvatar.id = 'chat-avatar';
    chatAvatar.style.cursor = 'pointer';
    
    // Set the avatar image (this should be passed as an option or hardcoded)
    var avatarImage = document.createElement('img');
    avatarImage.src = "https://app.udility.com/wp-content/uploads/2024/11/M62we5h8_400x400.jpg";
    avatarImage.alt = "Chat Avatar";
    chatAvatar.appendChild(avatarImage);
    
    // Add a message (CTA)
    var chatCta = document.createElement('div');
    chatCta.id = 'chat-cta';
    chatCta.innerHTML = "Want to Talk? Chat Now";
    
    // Append avatar and CTA to the body
    document.body.appendChild(chatAvatar);
    document.body.appendChild(chatCta);
    document.body.appendChild(chatWidget);
    
    // Avatar click logic to show/hide the chat widget
    chatAvatar.addEventListener('click', function() {
      if (chatWidget.style.display === 'none') {
        chatWidget.style.display = 'block';
        chatLoader.style.display = 'flex';
        chatIframe.style.display = 'none';
        
        // Load the iframe content dynamically
        chatIframe.onload = function() {
          chatLoader.style.display = 'none';
          chatIframe.style.display = 'block';
        };
      } else {
        chatWidget.style.display = 'none';
        chatIframe.src = ''; // Stop loading the iframe
        chatCta.style.display = 'block'; // Show CTA when closed
      }
    });
  });
})();
