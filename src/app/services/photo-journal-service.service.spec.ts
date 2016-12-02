/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoJournalService } from './photo-journal-service.service';

describe('PhotoJournalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoJournalService]
    });
  });

  it('should ...', inject([PhotoJournalService], (service: PhotoJournalService) => {
    expect(service).toBeTruthy();
  }));
});
