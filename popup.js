let changeBackgroundColorButton = document.getElementById("changeBackgroundColor");

changeBackgroundColorButton.addEventListener("click", () => {
    console.log("Button is clicked!");
    chrome.runtime.sendMessage({backgroundColor: "red"});
});