import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DataObject} from '../model/data-object.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataWorker: Worker | undefined;
  private _dataStream = new BehaviorSubject<DataObject[]>([]);
  private _customIds: string[] = [];

  get dataStream() {
    return this._dataStream.asObservable();
  }


  constructor() {

    if (typeof Worker !== 'undefined') {
      this.dataWorker = new Worker(new URL('./../app.worker', import.meta.url), {type: 'module'});
      this.dataWorker.onmessage = ({ data }) => {
        this.handleIncomingData(data); // Call handleIncomingData here
      };
    } else {
      // Web Workers are not supported in this environment.
      console.error('Web Workers are not supported in this environment.');
    }
  }

  updateCustomIds(customIds: string[]) {
    this._customIds = customIds;
  }

  updateWorkerSettings(timer: number, arraySize: number) {

    this.dataWorker?.postMessage({timer, arraySize});
  }
  stopWorkerInterval() {
    this.dataWorker?.postMessage({ command: 'stop' });
  }
  handleIncomingData(data: DataObject[]) {
    // Apply transformations here (e.g., slicing to last 10 elements)
    const modifiedData = this.applyTransformations(data);
    this._dataStream.next(modifiedData);
  }

  private applyTransformations(data: DataObject[]): DataObject[] {
    return data.slice(-10);
  }
}


