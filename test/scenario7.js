import supertest from "supertest";
import chai from "chai";
const expect = chai.expect;

const url = "https://testapi.io/api/RMSTest/ibltest/2023-09-11";

describe("Scenario 7", () => {
  it("To verify the HTTP status code and error object", async () => {
    const response = await supertest(url).get(``);
    expect(response.status).to.equal(404); // To verify the HTTP status code is 404
    expect(response.body.error).to.exist.and.to.include.all.keys(
      "details",
      "http_response_code"
    ); // To verify the error object properties
  });
});
