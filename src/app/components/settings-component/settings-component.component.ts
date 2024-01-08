import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SettingsComponentComponent {
  customIds: string[] = Array(3).fill('');
  constructor(private dataService: DataService) {}
  updateCustomIds(): void {
    this.dataService.updateCustomIds(this.customIds);
  }

  onSettingsChange(timerValue: string, arraySizeValue: string): void {
    const timer = +timerValue;
    const arraySize = +arraySizeValue;
    this.dataService.updateWorkerSettings(timer, arraySize);
  }
}
