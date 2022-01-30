// Initialize button with user's preferred color
let searchGoogleButton = document.getElementById("searchGoogle");

 function searchGoogle(url) {
    //if (url.includes("https://www.google.com")) {
        let searchText = document.getElementsByName("q")[0];
        searchText.value = "I have felt lucky!";

        let searchButton = document.getElementsByName("btnK")[0];
        searchButton.click();

        console.info("I have done some work for you!");
  /*  } else {
        console.error("You are calling me from a wrong place!")
    }*/
}

// When the button is clicked, inject setPageBackgroundColor into current page
searchGoogleButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: searchGoogle,
    });
});