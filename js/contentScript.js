setInterval(checkAdPlaying, 5000);

function checkAdPlaying() {
    let el = document.querySelector("footer[data-testid='now-playing-bar-ad-type-ad']")
    if(el) {
        muteTab()
    } else {
        unmuteTab()
    }
}

function muteTab() {
    chrome.runtime.sendMessage({ content: "mute" }, response => {
        return true;
    });

}

function unmuteTab() {
    chrome.runtime.sendMessage({ content: "unmute" }, response => {
        return true;
    })
}