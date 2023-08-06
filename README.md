# Mongoose CRUD Actions Test

This repository contains a simple Node.js application that demonstrates basic CRUD (Create, Read, Update, Delete) operations using Mongoose and Express.js with MongoDB.

## Overview

The `index.js` file in this repository sets up a basic Express.js server and connects it to a MongoDB database using Mongoose. The server handles HTTP requests to perform CRUD actions on two MongoDB collections: "users" and "docs."

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Ensure you have MongoDB installed and running.
4. Update the MongoDB connection string in `index.js` to point to your database.
5. Run the application using `node index.js`.
6. The server will be up and running on port 3030.

## Endpoints

1. `GET /`: Returns "Hello There" as a test endpoint to check if the server is running.

2. `POST /add`: Adds a new user to the "users" collection in MongoDB.

3. `POST /addDoc`: Adds a new document to the "docs" collection in MongoDB, associated with a specific user.

4. `GET /docs`: Retrieves all documents from the "docs" collection and populates the "user" field with user information.

## Dependencies

- Express.js: A web application framework for Node.js.
- Mongoose: A MongoDB object modeling tool for Node.js.
- Body-parser: A middleware to handle JSON and URL-encoded form data.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Your contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Happy testing of CRUD actions with Mongoose and Express.js!
