import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponentComponent } from './settings-component.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { By } from '@angular/platform-browser';

describe('SettingsComponentComponent', () => {
  let component: SettingsComponentComponent;
  let fixture: ComponentFixture<SettingsComponentComponent>;
  let mockDataService;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj(['updateCustomIds', 'updateWorkerSettings']);


    await TestBed.configureTestingModule({
      declarations: [SettingsComponentComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: DataService, useValue: mockDataService },
        FormBuilder
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponentComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.settingsForm.reset({
      timer: '',
      arraySize: '',
      customIds: formBuilder.array([])
    });
    expect(component.settingsForm.valid).toBeFalsy();
  });


});
