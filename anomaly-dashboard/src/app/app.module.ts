import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './api.service'; // Ensure the service is included

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent // Declare the DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService], // Provide the API service
  bootstrap: [AppComponent]
})
export class AppModule {}
