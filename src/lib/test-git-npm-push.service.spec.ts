import { TestBed } from '@angular/core/testing';

import { TestGitNpmPushService } from './test-git-npm-push.service';

describe('TestGitNpmPushService', () => {
  let service: TestGitNpmPushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestGitNpmPushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
