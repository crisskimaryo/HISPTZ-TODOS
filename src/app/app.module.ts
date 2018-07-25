import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SortablejsModule } from 'angular-sortablejs';
import { NewtaskComponent } from './page/newtask/newtask.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    NewtaskComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SortablejsModule.forRoot({ animation: 150 }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
