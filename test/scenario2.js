import supertest from "supertest";
import chai from "chai";
const expect = chai.expect;

const url = "https://testapi.io/api/RMSTest/ibltest";

async function makeGetRequest() {
  const response = await supertest(url).get("");

  console.log("Response Body:", response.body); // To log the response body for reference
  return response.body.schedule.elements;
}

describe("Scenario 2", () => {
  let scheduleElements;
  beforeEach(async () => {
    scheduleElements = await makeGetRequest();
  });

  it("To verify that the id field is never null or empty for all items", () => {
    try {
      scheduleElements.forEach((item) => {
        expect(item.id).to.not.be.null; // To check id is not null for each item
        expect(item.id).to.not.be.empty; // To check id is not empty for each item
      });
    } catch (error) {
      throw error; // To catch errors and log them
    }
  });

  it("To verify that the type in episode is always episode", () => {
    try {
      scheduleElements.forEach((item) => {
        expect(item.episode.type).to.equal("episode"); // To check type is always episode for each item
      });
    } catch (error) {
      throw error; // To catch errors and log them
    }
  });
});
