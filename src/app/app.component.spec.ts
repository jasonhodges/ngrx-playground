import { AppComponent } from '@ngrx-playground/app.component';
import { AppTestModule } from '@ngrx-playground/app.test.module';
import { createTestHarness, setupTestModule, TestHarness } from '@ngrx-playground/util/test-harness';

describe('AppComponent', () => {
  let testHarness: TestHarness<AppComponent>;

  beforeEach(async () => {
    await setupTestModule(AppTestModule);
    testHarness = createTestHarness(AppComponent);
  });

  it('should create', () => {
    expect(testHarness.hasComponentCreated).toBeTruthy();
  });
});
