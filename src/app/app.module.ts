import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { SettingsComponentComponent } from './components/settings-component/settings-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    SettingsComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
