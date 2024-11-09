// chatbot-widget.js
(function() {
    // Function to create the chat widget iframe
    function createChatWidget(chatbotUrl) {
        const chatWidget = document.createElement('div');
        chatWidget.id = 'chat-widget';
        chatWidget.style.display = 'none';  // Hidden by default

        const iframe = document.createElement('iframe');
        iframe.src = chatbotUrl;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';

        chatWidget.appendChild(iframe);
        document.body.appendChild(chatWidget);

        return chatWidget;
    }

    // Function to initialize the chatbot
    function initChatBot() {
        // Get the chatbot URL from the script's attribute
        const chatbotUrl = document.querySelector('script[src*="chatbot-widget.js"]').getAttribute('chatbotUrl');

        if (!chatbotUrl) {
            console.error('Chatbot URL is missing');
            return;
        }

        // Create the chat widget
        const chatWidget = createChatWidget(chatbotUrl);

        // Show the widget on click
        const chatButton = document.createElement('div');
        chatButton.id = 'chat-cta';
        chatButton.innerHTML = 'Want to Talk? Chat Now';
        chatButton.style.position = 'fixed';
        chatButton.style.bottom = '20px';
        chatButton.style.right = '20px';
        chatButton.style.backgroundColor = '#000';
        chatButton.style.color = '#fff';
        chatButton.style.padding = '10px';
        chatButton.style.borderRadius = '5px';
        chatButton.style.cursor = 'pointer';

        document.body.appendChild(chatButton);

        chatButton.addEventListener('click', function() {
            chatWidget.style.display = 'block';  // Show the widget on click
        });
    }

    // Initialize the chatbot when the document is loaded
    document.addEventListener('DOMContentLoaded', initChatBot);
})();
