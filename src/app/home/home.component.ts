import {Component} from "@angular/core";
import {ContentService} from "../services/content.service";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
})
export class HomeComponent {
  get content(): string[] {
    return ContentService.getHomeContent().paragraphs
  }
  get subHeader(): string {
    return ContentService.getHomeContent().subHeader
  }
}
