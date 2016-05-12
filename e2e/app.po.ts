export class Angular2CliTestAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-cli-test-app-app h1')).getText();
  }
}
