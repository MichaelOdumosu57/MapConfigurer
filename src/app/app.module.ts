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
import { HttpClientModule, HttpClient, HttpHeaders,HttpXhrBackend,   }    from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {firebase }from './customExports'
    




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
        HttpClientModule,
        AngularFireModule.initializeApp(firebase),
        AngularFirestoreModule, // firestore
        AngularFireAuthModule, // auth
        AngularFireStorageModule, // storage  
        AngularFireDatabaseModule //database 
        // AppRoutingModule
    ],
    providers: [WINDOW_PROVIDERS],
    bootstrap: [AppComponent]
    })
export class AppModule { }  

