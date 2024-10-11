// Function to auto-fill the form
function autoFillForm(selectedUsername) {
  // Auto-fill static details
  const usernameField = document.querySelector('input[name="request[custom_fields][24281229]"], input[id="request_custom_fields_24281229"]');
  if (usernameField) {
    usernameField.value = "hett.pxtell";  // Your predefined username
    usernameField.dispatchEvent(new Event('input', { bubbles: true }));
  }

  const emailField = document.querySelector('input[name="request[custom_fields][24335325]"], input[id="request_custom_fields_24335325"]');
  if (emailField) {
    emailField.value = "awesomehet1@gmail.com";  // Your predefined email
    emailField.dispatchEvent(new Event('input', { bubbles: true }));
  }

  const mobileField = document.querySelector('input[name="request[custom_fields][24369716]"], input[id="request_custom_fields_24369716"]');
  if (mobileField) {
    mobileField.value = "+917485906699";  // Your predefined mobile number
    mobileField.dispatchEvent(new Event('input', { bubbles: true }));
  }

  const deviceField = document.querySelector('input[name="request[custom_fields][24369726]"], input[id="request_custom_fields_24369726"]');
  if (deviceField) {
    deviceField.value = "OnePlus 10R";  // Your predefined device
    deviceField.dispatchEvent(new Event('input', { bubbles: true }));
  }

  // Auto-fill friend's username from the selected username
  const friendsUsernameField = document.querySelector('input[name="request[custom_fields][24369736]"], input[id="request_custom_fields_24369736"]');
  if (friendsUsernameField) {
    friendsUsernameField.value = selectedUsername;  // Use selected friend's username
    friendsUsernameField.dispatchEvent(new Event('input', { bubbles: true }));
  }

  // Auto-fill the date (for the "When did you start having this issue?")
  const issueDateField = document.querySelector('input[type="date"]');
  if (issueDateField) {
    issueDateField.value = new Date().toISOString().split('T')[0]; // Today's date
    issueDateField.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "fillForm" && request.username) {
    autoFillForm(request.username);
  }
});
