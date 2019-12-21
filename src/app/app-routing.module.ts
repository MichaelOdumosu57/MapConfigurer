import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {   WordsComponent   } from './words/words.component';
import {   FooterComponent   } from './footer/footer.component';
import {   OverlayComponent   } from './overlay/overlay.component';
import {   NavigationComponent   } from './navigation/navigation.component';

const routes: Routes = [
    {path:'home', component:WordsComponent},
    {path:'about', component:WordsComponent},
    {path:'services', component:WordsComponent},
    {path:'projects', component:WordsComponent},
    {path:'contact', component:WordsComponent},
];

@NgModule({
    imports: 
    [    
        RouterModule.forRoot(
        routes,
        { enableTracing: false } // <-- debugging purposes only
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
