        document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chatMessages');
            const messageInput = document.getElementById('messageInput');
            const sendButton = document.getElementById('sendButton');
            const typingIndicator = document.getElementById('typingIndicator');
            
            // Hide typing indicator initially
            typingIndicator.style.display = 'none';
            
            // Function to add a new message to the chat
            function addMessage(text, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
                
                const timeDiv = document.createElement('div');
                timeDiv.classList.add('message-time');
                timeDiv.textContent = 'Just now';
                
                messageDiv.textContent = text;
                messageDiv.appendChild(timeDiv);
                
                chatMessages.appendChild(messageDiv);
                
                // Scroll to the bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
                // Ensure the input field is focused
                messageInput.focus();

            }
            
            // Function to simulate bot response
            function getBotResponse(userMessage) {
                const responses = {
                    "hello": "Hello there! How can I assist you today?",
                    "hi": "Hi! What can I do for you?",
                    "how are you": "I'm just a program, but I'm functioning perfectly! How can I help?",
                    "python": "Python is a versatile programming language used for web development, data analysis, AI, and more. It's known for its simplicity and readability.",
                    "javascript": "JavaScript is the programming language of the web. It allows you to implement complex features on web pages.",
                    "flask": "Flask is a lightweight Python web framework. It's great for building REST APIs and small to medium web applications.",
                    "machine learning": "Machine learning is a subset of AI that enables systems to learn from data and improve over time without explicit programming.",
                    "thank you": "You're welcome! Is there anything else I can help with?",
                    "bye": "Goodbye! Feel free to come back if you have more questions.",
                    "default": "I'm not sure I understand. Could you rephrase that?",
                    "help": "Sure! What do you need help with? You can ask about programming, AI, or general tech topics.",
                    "what is ai": "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It includes machine learning, natural language processing, and more.",
                    "what is machine learning": "Machine learning is a branch of AI that focuses on building systems that learn from data, identify patterns, and make decisions with minimal human intervention.",
                    "what is flask": "Flask is a micro web framework for Python. It is designed to make it easy to build web applications quickly and with minimal code.",
                    "what is javascript": "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is a core technology of the World Wide Web, alongside HTML and CSS, and enables interactive web pages.",
                    "what is python": "Python is a high-level, interpreted programming language known for its easy-to-read syntax and versatility. It is widely used in web development, data analysis, artificial intelligence, scientific computing, and more.",
                    "what is web development": "Web development is the process of creating websites and web applications. It involves both front-end (client-side) and back-end (server-side) development.",
                    "what is data analysis": "Data analysis is the process of inspecting, cleansing, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making.",
                    "what is ai chatbot": "An AI chatbot is a software application that uses artificial intelligence to simulate human conversation. It can understand and respond to user queries in natural language, providing information or assistance.",
                    "what is ai assistant": "An AI assistant is a software agent that can perform tasks or services for an individual based on commands or questions. It uses AI technologies to understand and respond to user requests.",
                    "what is ai programming": "AI programming refers to the process of creating software that can perform tasks that typically require human intelligence. This includes machine learning, natural language processing, computer vision, and more.",
                    "what is ai technology": "  AI technology encompasses a range of tools and techniques that enable machines to mimic human cognitive functions. This includes machine learning, neural networks, natural language processing, and robotics.",
                    "what is ai development": "AI development involves creating algorithms and models that allow computers to perform tasks that typically require human intelligence. This includes training models on data, testing, and deploying AI systems.",
                    "what is ai research": "AI research is the study of how to create intelligent machines that can perform tasks that typically require human intelligence. This includes exploring new algorithms, improving existing models  and understanding the ethical implications of AI.",
                    "what is ai ethics": "AI ethics is the field of study that examines the moral implications and societal impact of artificial intelligence. It addresses issues such as bias in AI systems, privacy concerns..."
                };
                
                // Convert to lowercase for case-insensitive matching
                const lowerMessage = userMessage.toLowerCase();
                
                // Find a matching response
                for (const [key, value] of Object.entries(responses)) {
                    if (lowerMessage.includes(key)) {
                        return value;
                    }
                }
                
                // Default response if no match found
                return "I'm not sure I understand. Could you rephrase that?";
            }
            
            // Function to simulate bot typing and response
            function respondToUser(userMessage) {
                // Show typing indicator
                typingIndicator.style.display = 'flex';
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Simulate thinking time
                setTimeout(() => {
                    // Hide typing indicator
                    typingIndicator.style.display = 'none';
                    
                    // Get and add bot response
                    const botResponse = getBotResponse(userMessage);
                    addMessage(botResponse, false);
                }, 1500);
            }
            
            // Handle send button click
            sendButton.addEventListener('click', function() {
                const message = messageInput.value.trim();
                
                if (message) {
                    // Add user message
                    addMessage(message, true);
                    
                    // Clear input
                    messageInput.value = '';
                    
                    // Get bot response
                    respondToUser(message);

                } else {
                    // If input is empty, do nothing or show an alert
                    alert("Please enter a message before sending.");
                    return;
                    
                }
            });
            
            // Handle Enter key press
            messageInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendButton.click();
                }
            });
            
            // Add some sample messages after page load
            setTimeout(() => {
                addMessage("Can you explain machine learning?", true);
                setTimeout(() => {
                    respondToUser("Can you explain machine learning?");
                }, 1000);
            }, 2000);
        });
