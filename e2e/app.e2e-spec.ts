import { BooksuggestionPage } from './app.po';

describe('booksuggestion App', () => {
  let page: BooksuggestionPage;

  beforeEach(() => {
    page = new BooksuggestionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
