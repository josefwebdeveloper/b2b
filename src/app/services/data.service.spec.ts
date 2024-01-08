import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should update custom IDs', () => {
    const customIds = ['id1', 'id2', 'id3'];
    service.updateCustomIds(customIds);
    expect((service as any)._customIds).toEqual(customIds);
  });
});
