// script.js
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();

    if (message) {
        const chatBox = document.getElementById("chatBox");

        // Создание нового элемента сообщения
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = message;

        // Добавляем сообщение в чат
        chatBox.appendChild(messageElement);

        // Прокручиваем чат вниз
        chatBox.scrollTop = chatBox.scrollHeight;

        // Очистить поле ввода
        messageInput.value = "";
    }
}

// Для отправки сообщения по нажатию Enter
document.getElementById("messageInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
