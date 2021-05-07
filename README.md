# CGApp Application Exercise Instructions
## Overall Objective
Create a Node.js based application that manages chatbot information via a REST API

## Instructions
Create a Node.js REST API that implements the following functions. Endpoint names can be whatever you choose but you will get extra credit
for having names that follow best practices. 
1. Get all bots and print to the console all the bot information
2. Get one bot and print to the console information about that particular bot
3. Add a new bot
4. Update a bot
5. Delete a bot

bots.json contains the initial data for the bots. You can copy this into your code, but you will get extra credit for reading it in when 
your applicaiton starts.

## Where is the bot data?
bots.json contains the initial data for the bots

 

## How do I deploy this on my local machine? 
- Set the system environment variable for the system you are testing against (DEVTEST, UAT, PROD)
  - For example in a Linux/Mac environment - *export system=DEVTEST*
- *npm install*
- *node main.js*
