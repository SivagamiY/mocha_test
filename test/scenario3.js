import supertest from "supertest";
import chai from "chai";
const expect = chai.expect;

const url = "https://testapi.io/api/RMSTest/ibltest";

describe("Scenario 3", () => {
  it("To verify that the title field in episode is never null or empty for any schedule item", async () => {
    const response = await supertest(url).get("");
    const scheduleElements = response.body.schedule.elements;

    console.log("Response Body:", response.body); // To log the response body for reference

    scheduleElements.forEach((scheduleItem) => {
      expect(scheduleItem.episode.title).to.not.be.null; // To check the title is not null for each item
      expect(scheduleItem.episode.title).to.not.be.empty; // To check the title is not empty for each item
    });
  });
});
