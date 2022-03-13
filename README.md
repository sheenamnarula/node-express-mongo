# node-express-mongo

### Technologies used : 
- Node js
- Express js (framework)
- Mongo db (Nosql database)

## Prerequisites
- node version 14.17.3
- mocha (for test cases)

## Project Setup

```
git clone
```

```
npm i
```

```
export dbUrl=mongodb://****************
```
```
npm start
```

### Run test cases
```
npm i mocha -g
```
```
npm run test
```

### Sample api (hosted) : 

url : 
```
https://test.sheenamnarula93.com/api/records
```
body params : 
```
{
    "maxCount" : 95,
    "minCount" : 93,
    "startDate" : "2015-10-15T08:42:13.661Z",
    "endDate" : "2016-11-30T08:45:13.661Z"
}
```

response : 
```
{
    "code": 0,
    "message": "Success",
    "records": [
        {
            "key": "DSkLQthx",
            "createdAt": "2016-11-11T13:58:49.703Z",
            "totalCount": 95
        },
        {
            "key": "EQTViLNy",
            "createdAt": "2016-10-04T02:57:00.366Z",
            "totalCount": 93
        },
        {
            "key": "XCCbtLFv",
            "createdAt": "2016-09-28T11:01:42.031Z",
            "totalCount": 93
        },
        {
            "key": "XRlDmCpq",
            "createdAt": "2016-08-05T16:37:11.964Z",
            "totalCount": 93
        },
        {
            "key": "rhtyMrDv",
            "createdAt": "2016-08-02T10:50:34.939Z",
            "totalCount": 94
        },
        {
            "key": "bETJwMVo",
            "createdAt": "2016-07-27T15:03:21.549Z",
            "totalCount": 94
        },
        {
            "key": "gPxslKFs",
            "createdAt": "2016-05-12T12:43:55.189Z",
            "totalCount": 95
        },
        {
            "key": "VrBdKNgt",
            "createdAt": "2016-04-25T01:19:32.025Z",
            "totalCount": 94
        },
        {
            "key": "cBVKlIKn",
            "createdAt": "2016-01-04T10:49:13.329Z",
            "totalCount": 93
        },
        {
            "key": "xlKHEedI",
            "createdAt": "2015-12-01T06:43:25.866Z",
            "totalCount": 93
        },
        {
            "key": "JtYqwtsu",
            "createdAt": "2015-11-05T16:48:45.380Z",
            "totalCount": 94
        },
        {
            "key": "fAYlbeLZ",
            "createdAt": "2015-10-27T17:03:28.565Z",
            "totalCount": 95
        }
    ]
}
```