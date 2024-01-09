import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {DataObject} from "../../model/data-object.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataDisplayComponent implements OnInit, OnDestroy{
  dataStream: DataObject[] = [];
  subscription= new Subscription()
  constructor(
    private dataService: DataService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.subscription.add(this.dataService.dataStream.subscribe(data => {
      this.dataStream = data;
      this.changeDetectorRef.markForCheck();
    }));

  }
  trackById(index: number, item: DataObject): any {
    return item.id;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
