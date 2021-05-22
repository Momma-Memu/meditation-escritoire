# meditation-escritoire
*A project for the Zendesk internship challenge.*

## Dependencies 
- dotenv
- express
- express-async-handler
- node-fetch
- per-env
- pug

## Setup locally
1. Create a .env file in the root directory of the project.
    - Use the .env.example for reference as what to use for each env variable.
    - Note that you will need your own zendesk account information to use this project.
    - Note that the Zendesk api will only work after going to your setting/API and changing `Password access` to checked on.

2. Run `npm install` in the root directory of the project to install the project dependencies. 

3. Run `npm start` to start up the server.

4. If you would like to run the test cases you must first install `mocha`.
    - Run `npm install mocha`.
    - Run `mocha` to run the tests.