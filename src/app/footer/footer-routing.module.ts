import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "../gallery/gallery.component";
import { HomeComponent } from "../home/home.component";
import { CookiesComponent } from "./cookies/cookies.component";
import { GdprComponent } from "./gdpr/gdpr.component";
import { ImpressumComponent } from "./impressum/impressum.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "cookies", component: CookiesComponent },
  { path: "gdpr", component: GdprComponent },
  { path: "impressum", component: ImpressumComponent },
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
export class FooterRoutingModule {}
