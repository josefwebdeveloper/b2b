import {ChangeDetectionStrategy, Component} from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DataService } from "../../services/data.service";
import {FormGroupTyped} from "../../utility/form-group-typed";
import {SettingsFormData} from "../../model/form.model";

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponentComponent {
  settingsForm: FormGroupTyped<SettingsFormData>;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      timer: ['3000', [Validators.required, Validators.min(1)]],
      arraySize: ['1000', [Validators.required, Validators.min(1)]],
      customIds: this.fb.array(Array(3).fill('').map(() => this.fb.control('')))
    }) as FormGroupTyped<SettingsFormData>;
  }

  get customIds() {
    return this.settingsForm.get('customIds') as FormArray;
  }

  updateCustomIds(): void {
    const customIds = this.settingsForm.value.customIds;
    this.dataService.updateCustomIds(customIds);
  }

  onSettingsChange(): void {
    if (this.settingsForm.valid) {
      const settingsData = this.settingsForm.value;
      this.dataService.updateWorkerSettings(settingsData.timer, settingsData.arraySize);
    }
  }

}
