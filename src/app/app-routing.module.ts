import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { GdprComponent } from "./footer/gdpr/gdpr.component";
import { ImpressumComponent } from "./footer/impressum/impressum.component";
import { CookiesComponent } from "./footer/cookies/cookies.component";
import { HomeComponent } from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "footer",
    children:[
      { path: 'gdpr', component: GdprComponent},
      { path: 'impressum', component: ImpressumComponent},
      { path: 'cookies', component: CookiesComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
