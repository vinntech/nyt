import NYTService from '../services/nyt.service';
import config from '../config.json';

describe("Snapshot:NYTService", () => {

  test("url function exists", () => {
    expect(NYTService).toHaveProperty("url");
  });

  test("getArticles function exists", () => {
    expect(NYTService).toHaveProperty("getArticles");
  });

  test('url should not return blank', () => {
    var notNull = NYTService.url();
    expect(notNull).not.toBe('');
  });

  /* Test1 */
  test("Number of articles should be 20", async () => {
    const data = await NYTService.getArticles();
    expect(data.length).toBeLessThanOrEqual(20);
  });


});
