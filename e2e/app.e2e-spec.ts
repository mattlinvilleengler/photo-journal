import { PhotoJournalPage } from './app.po';

describe('photo-journal App', function() {
  let page: PhotoJournalPage;

  beforeEach(() => {
    page = new PhotoJournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
