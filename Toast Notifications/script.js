const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

// Array of random messages
const messages = [
    "Message One",
    "Message Two",
    "Message Three"
]

button.addEventListener("click", () => createNotification("success"))


function createNotification(type) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : "info");
    notif.innerText = getRandomMessage()

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}