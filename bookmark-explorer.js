chrome.bookmarks.onCreated.addListener((id, bookmark) => {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {id: id, bookmark: bookmark}, function (response) {
            console.log(response);
        });
    });
});