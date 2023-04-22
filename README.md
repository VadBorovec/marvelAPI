# Marvel Comics Project

This is a simple web application that uses the Marvel API to display a library of comics and the characters that are in each comic. The application is built using Parcel, modules, and axios to call the Marvel API. The structure of the project is divided into components, constants, and utils.

## Installation

Clone the repository, navigate to the project folder, and run the following command to install the required dependencies:

```
npm install
```

## Usage

To start the application, run the following command:

```
npm start
```

This will open the application in your default browser.

## Project Structure

The project consists of the following components:

- **App**: The main component that initializes the application.
- **Comics**: A component that displays the library of comics and handles the event listeners for the modal window.
- **Characters**: A component that displays the characters that are in a selected comic.
- **Notification**: A component that displays notifications to the user.
- **Errors**: A component that displays error messages to the user.

The project also includes the following files and directories:

- **constants**: A directory that contains constants used throughout the project, such as API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, and IMG_NOT_AVAILABLE.
- **utils**: A directory that contains utility functions used throughout the project, such as getDataApi, which handles API requests.
- **index.html**: The main HTML file that initializes the application.
- **index.js**: The main JavaScript file that imports the App component and handles the initialization of the application.
- **package.json**: The configuration file that includes the project dependencies and build scripts.
- **App.css**: The CSS file that styles the App component.
- **Comics.css**: The CSS file that styles the Comics component.
- **Characters.css**: The CSS file that styles the Characters component.
- **Notification.css**: The CSS file that styles the Notification component.
- **img**: A directory that contains the image files used in the application.
- **favicon.png**: The image file used as the application's favicon.

## API

The application uses the Marvel API to fetch data. To use the application, you need to obtain an API key from the [Marvel Developer Portal](https://developer.marvel.com/). Once you have obtained an API key, you need to update the API_KEY constant in the `constants/api.js` file.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more information.
