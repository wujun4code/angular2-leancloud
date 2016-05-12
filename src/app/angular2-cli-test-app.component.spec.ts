import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2CliTestAppAppComponent } from '../app/angular2-cli-test-app.component';

beforeEachProviders(() => [Angular2CliTestAppAppComponent]);

describe('App: Angular2CliTestApp', () => {
  it('should create the app',
      inject([Angular2CliTestAppAppComponent], (app: Angular2CliTestAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-cli-test-app works!\'',
      inject([Angular2CliTestAppAppComponent], (app: Angular2CliTestAppAppComponent) => {
    expect(app.title).toEqual('angular2-cli-test-app works!');
  }));
});
