# 09 Servers and APIs: Weather Dashboard.

# Table of Contents

- [Required-Technologies](#required-technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Code Snippet](#code-snippet)
- [Features](#features)
- [Future-Features](#future-features)
- [License](#license)
- [Technologies](#technologies-used)


## Required Technologies
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


## Installation

Once the files are downloaded onto your machine open the project folder in your preferred terminal.\
To install the necessary dependencies run the "npm i" command to install the required files. and then run "npm run start" to run the vehicle creator!

## Usage

Use the 5-day weather forecast APILinks to an external site. to retrieve weather data for cities.

## Code Snippet

server.ts sample snippet

```
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
app.use(express.static('../client/dist'));

// TODO: Implement middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// TODO: Implement middleware to connect the routes
app.use(routes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

```

## Features

Features include:

None at this time.

## Future Features

Features that may be implemented in the future include:


## License

Licensed under the MIT license.

## Technologies Used

<ul>
<li>Node.js (for installing packages as well as building and running code).</li>
<li>Inquire.js (for question prompts).</li>
<li>Visual Studio Code (for writing code).</li>
<li>Mozila Web Docs and W3 Schools (for getting help with JavaScript).</li>
</ul>
