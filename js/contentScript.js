setInterval(sendMessage, 5000);

function sendMessage() {
    chrome.runtime.sendMessage({ content: "tabInfo" }, response => {
        return true;
    });

}