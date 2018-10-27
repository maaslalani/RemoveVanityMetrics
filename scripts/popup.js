chrome.runtime.sendMessage({text: "opened"});
toggle.addEventListener('click', () => chrome.runtime.sendMessage({text: "toggled"}))