var running = true

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if (message.text == "opened") {
    var views = chrome.extension.getViews({type: "popup"})
    var toggle = views[0].document.getElementById('toggle')
    toggle.checked = running
  } else if (message.text == "toggled") {
    running = !running
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  var action_url = "javascript:window.print();";
  chrome.tabs.update(tab.id, {url: action_url});
});