chrome.runtime.onMessage.addListener(async (message, sender) => {
    console.log(message);
    if (message.hasOwnProperty("backgroundColor")) {
        let [activeTab] = await chrome.tabs.query({active: true, currentWindow: true});
        chrome.tabs.sendMessage(activeTab.id, message.backgroundColor);
    }
});