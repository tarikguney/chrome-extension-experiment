chrome.runtime.onMessage.addListener(((message, sender, sendResponse) => {
    console.log(message.id);
    console.log(message.bookmark);

    console.log(sender);
    sendResponse("I am working");
}));