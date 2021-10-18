function handleMessage(request, sender, sendResponse) {

  
  if(request.content === "mute") {
    chrome.tabs.update(sender.tab.id, { muted: true });
    sendResponse({
      msg: `Muted the ad playing`
    })
  } else {
    chrome.tabs.update(sender.tab.id, { muted: false });
    sendResponse({
      msg: `There is no ad playing`
    })
  }
}

chrome.runtime.onMessage.addListener(handleMessage)