import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineEntryComponent } from './timeline/timeline-entry/timeline-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TimelineComponent,
    TimelineEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
