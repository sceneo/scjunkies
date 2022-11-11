import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.scss"]
})
export class FooterComponent {

  @Output()
  onSelection: EventEmitter<void> = new EventEmitter<void>();

  selectItem(): void {
    this.onSelection.emit();
  }
}
