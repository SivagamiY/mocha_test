import supertest from "supertest";
import chai from "chai";
const expect = chai.expect;

const url = "https://testapi.io/api/RMSTest/ibltest";

describe("Scenario 4", () => {
  it("To verify that only one episode has live field in episode as true", async () => {
    const response = await supertest(url).get("");
    const scheduleElements = response.body.schedule.elements;
    const liveEpisodes = scheduleElements.filter(
      (item) => item.episode && item.episode.live === true
    ); // To count the number of episodes with live as true

    console.log("Response Body:", response.body); // To log the response body for reference
    expect(liveEpisodes.length).to.equal(1); // To check that only one episode has "live" as true
  });
});
