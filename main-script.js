// Handles your frontend UI logic.
document.querySelector('#wrapper').addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'sign_out' },
        function (response) {
            if (response.message === 'success') {
                window.location.replace('./popup.html');
            }
        })
});
