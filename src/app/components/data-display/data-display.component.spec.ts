import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataDisplayComponent } from './data-display.component';
import { DataService } from '../../services/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataObject } from '../../model/data-object.model';

class MockDataService {
  // Mock data for testing
  private mockData: DataObject[] = [{
    id: '1',
    color: 'Test Data',
    float:5,
    int:5,
    child: {
      id: '1',
      color: 'Test Data'
    }
  }];

  // Mock dataStream Observable
  get dataStream(): Observable<DataObject[]> {
    return of(this.mockData);
  }
}

describe('DataDisplayComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;
  let mockDataService: MockDataService;

  beforeEach(async () => {
    // Provide the mock service for DataService
    await TestBed.configureTestingModule({
      declarations: [DataDisplayComponent],
      providers: [
        { provide: DataService, useClass: MockDataService },
        ChangeDetectorRef
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should update dataStream with data from service', () => {
    // Arrange
    const mockData = [{
      id: '1',
      color: 'Test Data',
      float:5,
      int:5,
      child: {
        id: '1',
        color: 'Test Data'
      }
    }];
    mockDataService = TestBed.inject(DataService) as unknown as MockDataService;

    // Act
    component.ngOnInit();
    fixture.detectChanges();

    // Assert
    expect(component.dataStream).toEqual(mockData);
  });
  // Test if the component correctly updates dataStream with data from the service
  it('should update dataStream with data from service', () => {
    mockDataService = TestBed.inject(DataService) as unknown as MockDataService;
    component.ngOnInit();
    expect(component.dataStream).toEqual([{
      id: '1',
      color: 'Test Data',
      float:5,
      int:5,
      child: {
        id: '1',
        color: 'Test Data'
      }
    }]);
  });

});
