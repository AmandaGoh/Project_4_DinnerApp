import { HONEYDINNERPage } from './app.po';

describe('honey-dinner App', function() {
  let page: HONEYDINNERPage;

  beforeEach(() => {
    page = new HONEYDINNERPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
