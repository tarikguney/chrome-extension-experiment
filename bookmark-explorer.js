chrome.bookmarks.onCreated.addListener(async (id, bookmark) => {
    chrome.runtime.sendMessage({id: id, bookmark: bookmark}, (response => {
        console.log(response);
    }));
})