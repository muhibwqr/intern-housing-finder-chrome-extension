// Example for LinkedIn/Jobright pages; update selector per site
const possibleAddress = document.querySelector('.top-card-layout__entity-info')?.innerText;
if (possibleAddress) {
    chrome.storage.local.set({ 'lastDetectedAddress': possibleAddress });
}
