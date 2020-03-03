import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CitiesComponent } from './component/cities/cities.component';
import { CreateComponent } from './component/create/create.component';
import { ErrorComponent } from './component/error/error.component';
import { from } from 'rxjs';
import { DetailComponent } from './component/detail/detail.component';
import { EditComponent } from './component/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    CreateComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
