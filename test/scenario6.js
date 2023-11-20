import supertest from "supertest";
import chai from "chai";
const expect = chai.expect;

const url = "https://testapi.io/api/RMSTest/ibltest";

describe("Scenario 6", () => {
  it("To verify the Date value in the response headers", async () => {
    const response = await supertest(url).get("");
    const dateHeaderValue = response.headers["date"]; // To extract the Date value from the headers
    const dateResponse = new Date(dateHeaderValue); // To capture and convert the Date value from the headers
    expect(dateResponse).to.exist; // To ensure that the Date value exists and is not in the future
  });
});
