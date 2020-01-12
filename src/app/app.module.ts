import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { WINDOW_PROVIDERS } from './window.service';
import { NavigationComponent } from './navigation/navigation.component';
import { OverlayComponent } from './overlay/overlay.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import {    HttpClientModule   }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WordsComponent,
    NavigationComponent,
    OverlayComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // AppRoutingModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
