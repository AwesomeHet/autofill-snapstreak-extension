#AutoFill Friends Extension

AutoFill Friends Extension is a Firefox add-on designed to automate the process of filling out forms with Snapchat friend details. This extension simplifies the interaction with forms by allowing users to select a friend from a predefined list, automatically populating the relevant fields.
Features

    Easy Friend Selection: Search and select your Snapchat friends from a dropdown list.
    Automatic Form Filling: Automatically fills in form fields such as username, email, mobile number, and device based on the selected friend.
    User-Friendly Interface: Clean and intuitive interface for a seamless experience.
    About Me & Donation Sections: Sections that provide information about the extension and ways to support its development.

Installation

    Download or clone the repository:

    bash

    git clone https://github.com/AwesomeHet/autofill-snapstreak-extension.git

    Open Firefox and go to about:debugging#/runtime/this-firefox.
    Click on Load Temporary Add-on.
    Select the manifest.json file from the downloaded repository.

Usage

    Open the webpage with the form you want to fill.
    Click on the extension icon in the Firefox toolbar.
    Search for your friend by name or scroll through the dropdown list.
    Select a friend from the list.
    Click on the Fill Details! button to autofill the form.
    Use the About Me and Donate Me sections for more information.

Structure

The extension consists of the following main files:

    manifest.json: The metadata for the extension.
    popup.html: The main HTML interface for the extension.
    popup.js: The JavaScript functionality to handle user interactions and form filling.
    friends.json: A JSON file containing the list of friends with their display names and usernames.
    Images: Icons used for the interface (e.g., about me icon, donate me icon, Snapchat icon).

Customization

You can customize the friend list by modifying the friends.json file. Add or remove friends as needed, ensuring to follow the existing JSON structure.
Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Contact

For any questions or feedback, feel free to contact me at:

    Email: awesomehet1@gmail.com
    Additional Email: hetworkshard@gmail.com

Acknowledgments

    Thanks to Mozilla for providing the Firefox extension platform.
    Thanks to Snapchat for allowing the usage of their friend data.
