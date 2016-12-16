import { Angular2LeanEnginePage } from './app.po';

describe('angular2-lean-engine App', function() {
  let page: Angular2LeanEnginePage;

  beforeEach(() => {
    page = new Angular2LeanEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
