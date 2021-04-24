import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routes';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {BlockModule} from './block/block.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppCommonModule} from './common/common.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {WordModule} from './word/word.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BlockModule,
    AppRoutingModule,
    AppCommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    WordModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
