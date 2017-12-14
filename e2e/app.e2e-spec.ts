import { KepindustryPage } from './app.po';

describe('kepindustry App', () => {
  let page: KepindustryPage;

  beforeEach(() => {
    page = new KepindustryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
