const Nightmare = require("nightmare");
const expect = require("chai").expect;

describe("Home Page", function () {
  this.timeout(60000);
  it("Should Load", function () {
    Nightmare({
        show: true
      })
      .goto("http://localhost:3000/")
      .evaluate(() => document.title)
      .then(title => {
        expect(title).to.equal("Muscal Goggles | Home");
        done();
      })
  })
})