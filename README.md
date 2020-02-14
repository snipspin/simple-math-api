# Simple Math API

## Creation
### Commands
npm init -y
npm install express sequelize pg
touch server.js
echo node_modules > .gitignore
git init
createdb simplemath
psql
\c simplemath

remove username / password from config/config.json

sequelize model:create --name equation --attributes level:integer,type:integer,question:string,result:integer

sequelize db:migrate

### Server.js

```javascript
// required server code
const express = require('express');
const app = express();
const port = 8080;
const db = require('./models');

app.use(express.urlencoded({extended: false}));

app.get('/*', (req,res) => {
    res.status(404).send('Not Found');
});

app.listen(port);
```

### Routes

- 1
    GET http://localhost:8080/equations/all
```json
[
    {
        "id": 1,
        "level": 1,
        "type": 1,
        "question": "4+3",
        "result": 7,
        "createdAt": "2020-02-14T01:41:03.423Z",
        "updatedAt": "2020-02-14T01:41:03.423Z"
    },
    {
        "id": 2,
        "level": 2,
        "type": 3,
        "question": "14*3",
        "result": 42,
        "createdAt": "2020-02-14T01:50:03.228Z",
        "updatedAt": "2020-02-14T01:50:03.228Z"
    },
    {
        "id": 3,
        "level": 2,
        "type": 3,
        "question": "25 * 25",
        "result": 625,
        "createdAt": "2020-02-14T02:15:30.740Z",
        "updatedAt": "2020-02-14T02:15:30.740Z"
    }
]
```
- 2
    GET http://localhost:8080/equations/all/3
- 3
    GET http://localhost:8080/equations/type/3
- 4
    GET http://localhost:8080/equations/level/2
- 5
    GET http://localhost:8080/equations/id/3
- 6
    PUT http://localhost:8080/equations/update/
- 7 
    POST http://localhost:8080/equations
- 8
    DELETE http://localhost:8080/equations/5
- 9
    GET http;//localhost:8080/illegal/route

## Requests

```json 
{
    "results": [
		{
			"id": "3a99f792-ee2c-42a0-9f81-28f84d624276",
			"name": "http://localhost:8080/equations",
			"url": "http://localhost:8080/equations",
			"time": 7,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				7
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "a4769f94-440d-4c1d-80c3-e15670ed0c9a",
			"name": "http://localhost:8080/equations/level/2",
			"url": "http://localhost:8080/equations/level/2",
			"time": 4,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				4
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "317af216-a069-4dd3-9979-935af5796411",
			"name": "http://localhost:8080/equations/type/3",
			"url": "http://localhost:8080/equations/type/3",
			"time": 10,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				10
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "9e75dd15-b6bd-4430-9e2a-a955e0e09860",
			"name": "http://localhost:8080/equations/all",
			"url": "http://localhost:8080/equations/all",
			"time": 7,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				7
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "79741f3f-51cb-4860-9523-2294d54c05d5",
			"name": "http://localhost:8080/equations/all/string",
			"url": "http://localhost:8080/equations/all/string",
			"time": 10,
			"responseCode": {
				"code": 400,
				"name": "Bad Request"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				10
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "fa0e5c0b-ac81-427d-814d-865107ce8ed7",
			"name": "http://localhost:8080/equations/5",
			"url": "http://localhost:8080/equations/5",
			"time": 7,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				7
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "b536bff9-dbb3-4eea-aae0-10b2ae092333",
			"name": "http://localhost:8080/equations/update/",
			"url": "http://localhost:8080/equations/update/",
			"time": 7,
			"responseCode": {
				"code": 400,
				"name": "Bad Request"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				7
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "1f5c1811-fec6-4aa3-ae9a-473e4b5f3809",
			"name": "http://localhost:8080/equation",
			"url": "http://localhost:8080/equation",
			"time": 8,
			"responseCode": {
				"code": 404,
				"name": "Not Found"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				8
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "4c843fa4-af13-4c93-a90f-527ae42d0d86",
			"name": "http://localhost:8080/equations/id/7",
			"url": "http://localhost:8080/equations/id/7",
			"time": 10,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				10
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "ac0fa18c-05e1-43c4-9786-075050cb3067",
			"name": "http://localhost:8080/equations/id/7",
			"url": "http://localhost:8080/equations/id/3",
			"time": 8,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				8
			],
			"allTests": [
				{}
			]
		}
    ],
    "requests": [
			{
				"id": "3a99f792-ee2c-42a0-9f81-28f84d624276",
				"method": "POST"
			},
			{
				"id": "a4769f94-440d-4c1d-80c3-e15670ed0c9a",
				"method": "GET"
			},
			{
				"id": "317af216-a069-4dd3-9979-935af5796411",
				"method": "GET"
			},
			{
				"id": "9e75dd15-b6bd-4430-9e2a-a955e0e09860",
				"method": "GET"
			},
			{
				"id": "79741f3f-51cb-4860-9523-2294d54c05d5",
				"method": "GET"
			},
			{
				"id": "fa0e5c0b-ac81-427d-814d-865107ce8ed7",
				"method": "DELETE"
			},
			{
				"id": "b536bff9-dbb3-4eea-aae0-10b2ae092333",
				"method": "PUT"
			},
			{
				"id": "1f5c1811-fec6-4aa3-ae9a-473e4b5f3809",
				"method": "GET"
			},
			{
				"id": "4c843fa4-af13-4c93-a90f-527ae42d0d86",
				"method": "GET"
			},
			{
				"id": "ac0fa18c-05e1-43c4-9786-075050cb3067",
				"method": "GET"
			}
		]
}
```

