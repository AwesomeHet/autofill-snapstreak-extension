document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const friendsList = document.getElementById('friendsList');
  const fillButton = document.getElementById('fillForm');
  let friendsData = [];

  // Sections
  const aboutSection = document.getElementById('aboutSection');
  const donateSection = document.getElementById('donateSection');
  const mainSection = document.querySelector('body > div, body > h3, body > div:nth-of-type(2), body > select, body > button'); // Main form

  // Buttons
  const aboutMeButton = document.getElementById('about-me');
  const donateMeButton = document.getElementById('donate-me');
  const backFromAbout = document.getElementById('backFromAbout');
  const backFromDonate = document.getElementById('backFromDonate');

  // Function to hide main section and show specific sections
  function showSection(sectionToShow) {
    mainSection.style.display = 'none'; // Hide the main section
    sectionToShow.style.display = 'block'; // Show the desired section
  }

  // Back button handler
  function showMainSection() {
    aboutSection.style.display = 'none';
    donateSection.style.display = 'none';
    mainSection.style.display = 'block'; // Show main section
  }

  // About Me click
  aboutMeButton.addEventListener('click', () => {
    showSection(aboutSection);
  });

  // Donate Me click
  donateMeButton.addEventListener('click', () => {
    showSection(donateSection);
  });

  // Back buttons
  backFromAbout.addEventListener('click', showMainSection);
  backFromDonate.addEventListener('click', showMainSection);

  // Load friends data from friends.json
  fetch(chrome.runtime.getURL('friends.json'))
    .then((response) => response.json())
    .then((friends) => {
      friendsData = friends;
      populateFriendList(friendsData);
    });

  // Populate the friend list dropdown
  function populateFriendList(friends) {
    friendsList.innerHTML = ''; // Clear the dropdown
    friends.forEach((friend) => {
      const option = document.createElement('option');
      option.value = friend.Username;  // Set the username as the value
      option.textContent = friend["Display Name"];  // Set display name as text
      friendsList.appendChild(option);
    });
  }

  // Filter friends based on search input
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredFriends = friendsData.filter(friend =>
      friend["Display Name"].toLowerCase().includes(query)
    );
    populateFriendList(filteredFriends);
  });

  // Listen for the button click to autofill
  fillButton.addEventListener('click', () => {
    const selectedFriend = friendsList.value; // Get the selected friend's username

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm", username: selectedFriend }, function (response) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else {
          console.log('Message sent to content script to fill the form.');
        }
      });
    });
  });
});
