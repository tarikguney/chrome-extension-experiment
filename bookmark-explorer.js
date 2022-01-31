chrome.bookmarks.onCreated.addListener(async (id, bookmark) => {
    let [activeTab] = await chrome.tabs.query({active: true, currentWindow: true});

    await chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        func: (id, bookmark) => {
            console.log("Running from the background service.")
            console.log(id);
            console.log(bookmark);
        },
        args: [id, bookmark]
    })
})