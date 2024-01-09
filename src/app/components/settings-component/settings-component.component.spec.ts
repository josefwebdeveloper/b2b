import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms';
import { SettingsComponentComponent } from './settings-component.component';
import { DataService } from '../../services/data.service';

describe('SettingsComponentComponent', () => {
  let component: SettingsComponentComponent;
  let fixture: ComponentFixture<SettingsComponentComponent>;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('DataService', ['updateCustomIds']);

    await TestBed.configureTestingModule({
      declarations: [SettingsComponentComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder, { provide: DataService, useValue: mockDataService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize settingsForm with default values', () => {
    expect(component.settingsForm).toBeTruthy();
    expect(component.settingsForm.value).toEqual({
      timer: '3000',
      arraySize: '1000',
      customIds: ['', '', '']
    });
  });

  it('should validate timer and arraySize fields', () => {
    component.settingsForm.controls['timer'].setValue(-1);
    component.settingsForm.controls['arraySize'].setValue(-1);
    expect(component.settingsForm.valid).toBeFalsy();
  });

  it('should call updateCustomIds on DataService with correct values', () => {
    component.settingsForm.controls['customIds'].setValue(['id1', 'id2', 'id3']);
    component.updateCustomIds();

    expect(mockDataService.updateCustomIds).toHaveBeenCalledWith(['id1', 'id2', 'id3']);
  });

});
