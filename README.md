# Webpage Compliance Checker

## Features
Webpage Content Analysis: Fetches the content of a specified webpage and analyzes it for compliance.

Modular Structure: Organizes the code into controllers and services for better maintainability.

Express Server: Uses Express.js to create a simple API for handling compliance checks.

## Usage
#### Install dependencies:

```
npm install
```
Set up your OpenAI API key and compliance policy in the config.js file.

#### Start the application:

```
npm start
```

Make a POST request to http://localhost:3000/check-compliance with a JSON payload containing the url of the webpage to be checked.

Example:

```
{
  "url": "https://www.example.com"
}
```
The API will respond with findings regarding the compliance of the webpage's content.

#### Configuration
The application uses a configuration file (config.js) for storing sensitive information such as the OpenAI API key and compliance policy. Make sure to configure this file before running the application.

#### Dependencies
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
Axios: Promise-based HTTP client for the browser and Node.js.
OpenAI: OpenAI API for content analysis (replace with your preferred language model).
Contributing

License
This project is licensed under the MIT License - see the LICENSE file for details.

