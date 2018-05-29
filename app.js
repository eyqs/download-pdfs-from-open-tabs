chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({currentWindow: true}, (tabs) => {
    for (const tab of tabs) {
      if (tab.url.toLowerCase().endsWith(".pdf")) {
        chrome.downloads.download({
          url: tab.url,
          filename: `pdfs/${tab.url.split("/").pop()}`,
        });
      }
    }
  });
});
