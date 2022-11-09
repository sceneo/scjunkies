import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ContentService } from "./services/content.service";
import { NavigationModule } from "./navigation/navigation.module";
import { FooterModule } from "./footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FooterModule,
    NavigationModule,
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
