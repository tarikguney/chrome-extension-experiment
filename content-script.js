chrome.runtime.onMessage.addListener(((message, sender) => {
    console.log("I have received a message");
    document.body.style.backgroundColor = message;
}));