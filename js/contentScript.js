setInterval(checkAdPlaying, 5000);

const footerClasses = [ 
    `footer[data-testid='now-playing-bar-ad-type-ad']`, 
    `footer[data-testadtype='ad-type-ad']`
]

function checkAdPlaying() {
    // perform several checks because spotify likes to fuss with their class names.
    for(let adClass of footerClasses) {
        let el = document.querySelector(adClass)
        if(el) {
            muteTab();
            break;
        } else {
            unmuteTab()
        }
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