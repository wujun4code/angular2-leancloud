import { Angular2CliTestAppPage } from './app.po';

describe('angular2-cli-test-app App', function() {
  let page: Angular2CliTestAppPage;

  beforeEach(() => {
    page = new Angular2CliTestAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-cli-test-app works!');
  });
});
