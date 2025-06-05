The OnTarget Labs Interview API
===============================

Online code challenge for OnTarget Labs

Build & Run for local Dev environment
-------------------------------------

    npm install
    npm run build
    npm run start:dev

OR using MAKE

    make build
    make start-dev 


Build & Run for local Docker & Compose environment
--------------------------------------------------

    make docker-build
    make docker-start-dev


Build & Run for Prod
--------------------

TBD


Access Local OpenAPI/Swagger & API itself
-----------------------------------------

Navigate to http://localhost:3000/api-doc  

or

    open -u http://localhost:3000/api-doc


Design notes & Results description
----------------------------------

### Overall code quality and improvements
1. To implement ALL TBDs.
2. To use BigNumber/Decimals for all Currency/Money values from the project beginning (used numbers as is since example jsom uses just JS number literals).
3. TO implement AUTH for API & HMAC between internal microservicess ASAP from the project beginning.
4. To follow SOLID.
5. To introduce prettier and linter from the project beginning.

### Improving Testing startegy
1. Here you can find intital Unit testing using nest spec files
2. Here you can find End to End testing aswell
3. To improve testing should be introduced away more Unitn & E2E test COVERAGE, including proper mocking for the external RATE and TRANSACTION API. 
4. Also proper CI/CD task should be created to run the test continuously each commit created. 
5. Also continuous vulnerability scanning and SECURITY penetration test should be introduced.


The interview task itself
-------------------------

Let’s imagine you play a game where you can earn scores.
With scores, you can then buy some products in the game or transfer them to your bank account.
Whether you earn, spend, or request a payout, a new transaction is created in the transaction service that is available by API.
 
Write an MVP of data aggregation microservice that will collect transactions from transaction API and expose its own API endpoints:
1. Get aggregated data by user Id: balance, earned, spent, payout, paid out
2. Get list of requested payouts (user ID, payout amount), if there are several payouts requested by a user, then the amount must be aggregated into one.

### Pre-conditions:
1. Service will have millions of requests per day
2. Data must be up to date with less than 2 minute’s delay
3. You have limited access to transaction API (5 requests per minute, with limit 1000 transactions)
4. You can use NestJS or any other framework
5. You can mock transaction API entirely so that we can run your app
6. Exchange rate is 1 SCR = 1 EUR

### Transaction API

    GET /transactions?startDate=2023-02-01 00:00:00&endDate=2023-02-01 00:00:00

Response: 

    {
      "items": [
        {
          "id": "41bbdf81-735c-4aea-beb3-3e5f433a30c5",
          "userId": "074092",
          "createdAt": "2023-03-16T12:33:11.000Z",
          "type": "payout",
          "amount": 30
        },
        {
          "id": "41bbdf81-735c-4aea-beb3-3e5fasfsdfef",
          "userId": "074092",
          "createdAt": "2023-03-12T12:33:11.000Z",
          "type": "spent",
          "amount": 12
        },
        {
          "id": "41bbdf81-735c-4aea-beb3-342jhj234nj234",
          "userId": "074092",
          "createdAt": "2023-03-15T12:33:11.000Z",
          "type": "earned",
          "amount": 1.2
        }
      ],
      "meta": {
        "totalItems": 1200,
        "itemCount": 3,
        "itemsPerPage": 3,
        "totalPages": 400,
        "currentPage": 1
      }
    }

### Describe Testing Strategy
Please describe the optimal strategy for quality assurance of an application consisting of a backend as in the above example.
How would you have implemented automatic testing using a TDD approach if you have had more time?

