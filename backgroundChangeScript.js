chrome.runtime.onMessage.addListener(async (message, sender) => {
    console.log(message);
    if (message.hasOwnProperty("backgroundColor")) {
        let [activeTab] = await chrome.tabs.query({active: true, currentWindow: true});
        //  chrome.tabs.sendMessage(activeTab.id, message);
        await chrome.scripting.executeScript({
            target: {tabId: activeTab.id},
            func: (backgroundColor) => {
                document.body.style.backgroundColor = backgroundColor;
            },
            args: [message.backgroundColor]
        });
    }
});