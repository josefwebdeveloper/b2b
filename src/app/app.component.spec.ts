import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Component} from "@angular/core";

@Component({
  selector: 'app-settings-component',
  template: '<div>Mock Settings Component</div>'
})
class MockSettingsComponent {}

@Component({
  selector: 'app-data-display',
  template: '<div>Mock Data Display Component</div>'
})
class MockDataDisplayComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockSettingsComponent,
        MockDataDisplayComponent

      ],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'b2b'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('b2b');
  });


});
