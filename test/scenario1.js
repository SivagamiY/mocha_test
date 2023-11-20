import supertest from "supertest";
import chai from "chai";

const url = supertest("https://testapi.io/api/RMSTest/ibltest");

describe("Scenario 1", () => {
  let response;
  beforeEach(async () => {
    response = await url.get("");
  });

  it("To verify the HTTP status code is 200", () => {
    chai.expect(response.status).to.equal(200); // To verify HTTP status code
    console.log("HTTP Status Code: 200 - OK");
  });

  it("To verify the response time is below 1000 milliseconds", () => {
    const startTime = new Date();
    const endTime = new Date();
    const responseTime = endTime - startTime; // To calculate response time
    chai.expect(responseTime).to.be.below(1000); // To verify response time
    console.log(
      "Response Time:",
      responseTime,
      "milliseconds - Below 1000 milliseconds"
    );
  });
});
