function handleMessage(request, sender, sendResponse) {
  
  console.log(`content script sent a message: ${request.content}`);
  
  const regex = /Advertisement/;
  
  if(regex.exec(sender.tab.title)) {
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