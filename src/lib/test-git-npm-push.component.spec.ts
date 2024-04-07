import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGitNpmPushComponent } from './test-git-npm-push.component';

describe('TestGitNpmPushComponent', () => {
  let component: TestGitNpmPushComponent;
  let fixture: ComponentFixture<TestGitNpmPushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestGitNpmPushComponent]
    });
    fixture = TestBed.createComponent(TestGitNpmPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
