//* test.js
describe("Fetias Login", () => {
  beforeAll(async () => {
    await page.goto("https://app02.apps.fetias.com/login.html");

    await page.setViewport({
      width: 1536,
      height: 722,
      deviceScaleFactor: 1,
    });
  });

  it("should fill up the Form", async () => {
    await page.focus('input[name="userName"]');
    await page.keyboard.type("wenwei.tee@gneysoftware.com");
    await page.focus('input[name="password"]');
    await page.keyboard.type("Weijian-0213");
    await page.screenshot({ path: "images/loginpage.png" });
    await page.click('button[type="button"]');
  }, 60000);

  it("Should take a screenshot on Home Page", async () => {
    await page.waitForNavigation({ waitUntil: "networkidle0" });
    await page.goto("https://app02.apps.fetias.com/client#/list");
    await page.screenshot({ path: "images/Sidebarpage.png" });
  }, 60000); //* 60000 is the time out of this test.
});
