import { QuelRestoCeMidiPage } from './app.po';

describe('quel-resto-ce-midi App', function() {
  let page: QuelRestoCeMidiPage;

  beforeEach(() => {
    page = new QuelRestoCeMidiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
