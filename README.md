# hng_devops_basic-api
A rudimentry api meant for testing  NIGNX reverse proxy


# How to run locally

## clone the repo
1. git clone https://github.com/lexyuko/hng_devops_basic-api.git

## install nodejs dependencies
2. run npm install

## start the server
3. run node .



# Endpoint & expected results
You can use postman, insomniac or curl to test the endpoint

local base url  http://localhost:5001 
live base url https://

## Endpoints
GET / :
{"message":"API is running"}

GET /health :
{
 "messagge":"healthy"
}

GET /me :
{
        "name":"Akpabio Alexander Ifiok",
        "email":"akpabioalexander8@gmail.com",
        "github":"https://github.com/lexyuko"
    }
 
