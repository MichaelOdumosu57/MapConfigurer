import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {   WordsComponent   } from './words/words.component';
import {   FooterComponent   } from './footer/footer.component';
import {   OverlayComponent   } from './overlay/overlay.component';
import {   NavigationComponent   } from './navigation/navigation.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
