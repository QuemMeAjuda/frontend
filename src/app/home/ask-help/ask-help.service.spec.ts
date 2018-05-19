import { TestBed, inject } from '@angular/core/testing';

import { AskHelpService } from './ask-help.service';

describe('AskHelpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AskHelpService]
    });
  });

  it('should be created', inject([AskHelpService], (service: AskHelpService) => {
    expect(service).toBeTruthy();
  }));
});
