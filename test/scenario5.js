import supertest from "supertest";
import chai from "chai";
const expect = chai.expect;

const url = "https://testapi.io/api/RMSTest/ibltest";

describe("Scenario 5", () => {
  it("To verify that transmission_start date is before transmission_end date", async () => {
    const response = await supertest(url).get("");
    const elements = response.body.schedule.elements;
    console.log("Response Body:", response.body); // To log the response body for reference

    elements.forEach((item) => {
      const startDateTime = new Date(item.transmission_start);
      const endDateTime = new Date(item.transmission_end);

      expect(startDateTime).to.be.below(endDateTime); // To check the transmission_start is before transmission_end for each item
    });
  });
});
