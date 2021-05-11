# sample-bot-rest-api #

Code examples for following post:

* <a href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2">Azure Functions JavaScript developer guide</a>
* Azure functions are similar to aws lamda functions

## Install ##
* Install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
* Install project dependencies with following command

`npm i -g azure-functions-core-tools@2 --unsafe-perm true`


## Setup ##

`npm i`

## Test ##
Jest library has used for unit tests 
* <a href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-test-a-function#javascript-in-vs-code">Azure Functions JavaScript unit test guide</a>

`npm test`


## Integrations ##
* Mysql db has used for curd opertions
* <a href="https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-node">Azure Keyvault is used to store the database credentials </a>


## Environment Variable  ##
* DB_HOST  - : databse host name, value is fetching from azure keyvault
* DB_USER  - : databse user name, value is fetching from azure keyvault
* DB_PASS  - : databse password, value is fetching from azure keyvault
* DB_NAME  - : databse name, value is fetching from azure keyvault
* AZURE_CLIENT_ID      -:  azure client id is required for azure keyvault integration
* AZURE_CLIENT_SECRET  -:  azure secret id is required for azure keyvault integration
* AZURE_TENANT_ID      -:  azure tenant id is required for azure keyvault integration
* KEY_VAULT_URI        -:  azure keyvault url

## Run ##
Run project with following command

`func start`

## APIs ##

**1. AddBot** 

Add new bot details

````javascript
URL     - http://localhost:7071/api/v1/bot

METHOD  - POST

REQUEST 
{
    "id":"329",
	"name" : "Google bot",
	"owner" : "Firebase",
	"status":"active",
}
RESPONSE
{
    "statusCode": 200,
    "success": true,
    "data": "New Bot has been added successfuly"
}
````

**2. GetAllBots** 

Fetch all the available bots

````javascript
URL     - http://localhost:7071/api/v1/bots

METHOD  - GET   

RESPONSE
{
    "statusCode": 200,
    "success": true,
    "data": [
        {
            "id":"329",
            "name" : "Google bot",
            "owner" : "Firebase",
            "status":"active",
        },
        {
            "id": "223",
            "owner": "Cindy Thomas",
            "name": "Teams Bot",
            "status": "active"
        }
    ]
}
````


**3. GetBotById** 

The API returns the one single bot information

````javascript
URL     -  http://localhost:7071/api/v1/bot/321

METHOD  - GET   

RESPONSE
{
    "statusCode": 200,
    "success": true,
    "data": {
        "id":"329",
        "name" : "Google bot",
        "owner" : "Firebase",
        "status":"active",
    }
}
````


**4. UpdateBot** 

The API will update the bot information

````javascript
URL     -  http://localhost:7071/api/v1/bot

METHOD  - PUT   

REQUEST 
{
	"id":"329",
    "name" : "Google bot",
    "owner" : "Firebase",
    "status":"inactive",
}

RESPONSE
{
    "statusCode": 200,
    "success": true,
    "message": "Bot has been updated successfuly!"
}
````

**5. DeleteBot** 

The API will delete the bot information from db

````javascript
URL     -   http://localhost:7071/api/v1/bot/329

METHOD  - DELETE   


RESPONSE
{
    "statusCode": 200,
    "success": true,
    "message": "Bot has been deleted successfuly!"
}
````
