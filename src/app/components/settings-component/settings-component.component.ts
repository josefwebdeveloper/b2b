import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';
import {DataService} from "../../services/data.service";
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
      customIds: ['']
    }) as FormGroupTyped<SettingsFormData>;
  }

  // get customIds() {
  //   return this.settingsForm.get('customIds');
  // }

  // updateCustomIds(): void {
  //   const customIds = this.settingsForm.value.customIds;
  //   this.dataService.updateCustomIds(customIds);
  // }
  //


  onSettingsChange(): void {
    if (this.settingsForm.valid) {
      const settingsData = this.settingsForm.value;
      let customIds!: string[]
      if (settingsData.customIds.length > 0) {
        customIds = settingsData.customIds.split(',')
          .map((id: string) => id.trim()) // Trim whitespace
          .filter((id: string) => /^[a-zA-Z0-9]+$/.test(id));
      }

      console.log(settingsData)
      this.dataService.updateWorkerSettings(settingsData.timer, settingsData.arraySize, customIds);
    }
  }

}
