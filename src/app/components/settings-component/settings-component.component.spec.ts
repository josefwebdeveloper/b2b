import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponentComponent } from './settings-component.component';
import { DataService } from "../../services/data.service";
import { FormsModule } from '@angular/forms';

describe('SettingsComponentComponent', () => {
  let component: SettingsComponentComponent;
  let fixture: ComponentFixture<SettingsComponentComponent>;
  let mockDataService: { updateCustomIds: any; updateWorkerSettings: any; };

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj(['updateCustomIds', 'updateWorkerSettings']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SettingsComponentComponent],
      providers: [{ provide: DataService, useValue: mockDataService }]
    });

    fixture = TestBed.createComponent(SettingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateCustomIds when updateCustomIds is called', () => {
    component.customIds = ['id1', 'id2', 'id3'];
    component.updateCustomIds();
    expect(mockDataService.updateCustomIds).toHaveBeenCalledWith(['id1', 'id2', 'id3']);
  });

  it('should call updateWorkerSettings with correct parameters on onSettingsChange', () => {
    component.onSettingsChange('1000', '5');
    expect(mockDataService.updateWorkerSettings).toHaveBeenCalledWith(1000, 5);
  });
});
