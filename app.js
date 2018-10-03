chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({currentWindow: true}, (tabs) => {
    const regex = /https:\/\/canvas.ubc.ca\/courses\/\d+\/files\/\d+\?module_item_id=\d+/;
    for (const tab of tabs) {
      if (tab.url.toLowerCase().endsWith(".pdf")) {
        chrome.downloads.download({
          url: tab.url,
          filename: `pdfs/${tab.url.split("/").pop()}`,
        });
      } else if (regex.test(tab.url.toLowerCase())) {
        const name = tab.url.split("?")[0];
        chrome.downloads.download({
          url: `${name}/download`,
          filename: `pdfs/${name.split("/").pop()}.pdf`,
        });
      }
    }
  });
});
