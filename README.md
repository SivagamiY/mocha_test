# BBC Software Engineer in Test Take Home Test

Inside this repository, you'll find a set of automated test cases meticulously developed for the purpose of testing the API at https://testapi.io/api/RMSTest/ibltest. Each test scenario delves into specific aspects of the API response, guaranteeing a thorough examination of its functionality and reliability.

### Prerequisites

Before running the test cases, make sure you have the following installed:

* Node.js
* npm

## Installation

##### Clone the repository to your local machine:

```bash
git clone https://github.com/SivagamiY/BBC-Take-Home-Test.git
```

##### Install the project dependencies:

```bash
npm install
npm i --save -dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env
```
## Running the Tests
##### To execute all the test scenarios, use the following command:

```bash
npm test
```
This will run all the test scenarios defined in the project.

##### To run a specific test scenario separately, use the following command:

```bash
npm run test:scenario1
```

Replace scenario1 with the desired scenario file name (e.g., scenario2.js, scenario3.js). This command will execute only the specified test scenario.

## Dependencies

* Supertest
* Mocha
* Chai
* Babel

## Variables 

#### Scenario 1

1. Make a GET request to https://testapi.io/api/RMSTest/ibltest
2. Verify that the HTTP status code of the response is 200
3. Verify that the response time of the request is below 1000 milliseconds 

| Variable       | Usage                                               | Variable Name | Type                |
|----------------|-----------------------------------------------------|---------------|---------------------|
| url            | Represents the base URL for the API being tested.   | url           | supertest.Instance  |
| response       | Stores the response from the API request.           | response      | supertest.Response  |
| startTime      | Represents the starting time when measuring the response time. | startTime | Date                |
| endTime        | Represents the ending time when measuring the response time.   | endTime   | Date                |
| responseTime   | Stores the calculated response time in milliseconds. | responseTime  | number              |

#### Scenario 2
1. Make a GET request to https://testapi.io/api/RMSTest/ibltest
2. Verify if the “id” field is never null or empty(“”) for all 4 items present in the
data array
3. Verify that the “type” in “episode” for every item is always “episode”

| Variable           | Usage                                               | Variable Name     | Type              |
|--------------------|-----------------------------------------------------|-------------------|-------------------|
| url                | Represents the base URL for the API being tested.   | url               | string            |
| makeGetRequest     | A function that makes a GET request to the specified URL and returns schedule elements from the API response. | makeGetRequest    | Function          |
| response           | Stores the response from the API request.           | response          | supertest.Response|
| scheduleElements   | Stores the schedule elements obtained from the API response for later assertions. | scheduleElements  | Array             |
| item               | Represents an individual element in the scheduleElements array during forEach iterations. | item            | Object            |

#### Scenario 3
1. Make a GET request to https://testapi.io/api/RMSTest/ibltest
2. Verify that the “title” field in “episode”, is never null or empty(“”) for any
schedule item

| Variable       | Usage                                               | Variable Name | Type              |
|----------------|-----------------------------------------------------|---------------|-------------------|
| url            | Represents the base URL for the API being tested.   | url           | string            |
| response       | Stores the response from the API request.           | response      | supertest.Response|
| scheduleElements | Stores the schedule elements obtained from the API response for later assertions. | scheduleElements | Array            |
| scheduleItem   | Represents an individual schedule item during forEach iterations. | scheduleItem | Object            |

#### Scenario 4
1. Make a GET request to https://testapi.io/api/RMSTest/ibltest
2. Verify that only one episode in the list has “live” field in “episode” as true

| Variable           | Usage                                               | Variable Name     | Type              |
|--------------------|-----------------------------------------------------|-------------------|-------------------|
| url                | Represents the base URL for the API being tested.   | url               | string            |
| response           | Stores the response from the API request.           | response          | supertest.Response|
| scheduleElements   | Stores the schedule elements obtained from the API response for later assertions. | scheduleElements  | Array             |
| liveEpisodes       | Episodes with the "live" field set to true.         | liveEpisodes      | Array             |

#### Scenario 5
1. Make a GET request to https://testapi.io/api/RMSTest/ibltest
2. Verify that the “transmission_start” date value is before the
“transmission_end” date

| Variable           | Usage                                               | Variable Name     | Type              |
|--------------------|-----------------------------------------------------|-------------------|-------------------|
| url                | Represents the base URL for the API being tested.   | url               | string            |
| response           | Stores the response from the API request.           | response          | supertest.Response|
| elements           | Schedule elements obtained from the API response.   | elements          | Array             |
| startDateTime      | Represents the start date and time for each schedule item. | startDateTime  | Date              |
| endDateTime        | Represents the end date and time for each schedule item.   | endDateTime    | Date              |

#### Scenario 6
1. Make a GET request to https://testapi.io/api/RMSTest/ibltest
2. In the response headers, verify the “Date” value

| Variable           | Usage                                               | Variable Name     | Type              |
|--------------------|-----------------------------------------------------|-------------------|-------------------|
| url                | Represents the base URL for the API being tested.   | url               | string            |
| response           | Stores the response from the API request.           | response          | supertest.Response|
| dateHeaderValue    | Extracted Date value from the response headers.      | dateHeaderValue   | string            |
| dateResponse       | Captured and converted Date value from the headers.  | dateResponse      | Date              |

#### Scenario 7
1. Make a GET request to https://testapi.io/api/RMSTest/ibltest/2023-09-11
2. Verify that the HTTP status code of the response is 404
3. Verify the error object had the properties ‘details’ and ‘http_response_code’

| Variable             | Usage                                               | Variable Name         | Type              |
|----------------------|-----------------------------------------------------|-----------------------|-------------------|
| url                  | Represents the base URL for the API being tested.   | url                   | string            |
| response             | Stores the response from the API request.           | response              | supertest.Response|
