import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {DataObject} from "../../model/data-object.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
})

export class DataDisplayComponent implements OnInit, OnDestroy{
  dataStream: DataObject[] = [];
  subscription= new Subscription()
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.dataStream.subscribe(data => {
      this.dataStream = data; // Data here should now be the transformed data
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
