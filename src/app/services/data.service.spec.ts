import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let mockWorker: Worker;
  let postMessageSpy: jasmine.Spy;

  beforeEach(() => {
    postMessageSpy = jasmine.createSpy('postMessage');

    mockWorker = {
      postMessage: postMessageSpy,
      onmessage: null
    } as unknown as Worker;

    spyOn(window, 'Worker').and.returnValue(mockWorker);

    TestBed.configureTestingModule({});

    service = TestBed.inject(DataService);
  });

  it('should update custom IDs', () => {
    const customIds = ['id1', 'id2', 'id3'];
    service.updateCustomIds(customIds);
    expect((service as any)._customIds).toEqual(customIds);
  });

  it('should update worker settings', () => {
    const timer = 1000;
    const arraySize = 1000;
    service.updateWorkerSettings(timer, arraySize);

    expect(postMessageSpy).toHaveBeenCalledWith({ timer, arraySize });
  });
});
