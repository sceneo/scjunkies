import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import {FooterComponent} from "./footer.component";
import { CookiesComponent } from "./cookies/cookies.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { GdprComponent } from "./gdpr/gdpr.component";
import { FooterRoutingModule } from "./footer-routing.module";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    FooterRoutingModule,
  ],
  declarations: [
    FooterComponent,
    GdprComponent,
    ImpressumComponent,
    CookiesComponent,
  ],
  exports: [
    FooterComponent,
  ],
  providers: []
})
export class FooterModule {}
