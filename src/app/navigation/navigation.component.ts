import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "navigation.component.html",
})
export class NavigationComponent {

  @Output()
  onSelection: EventEmitter<void> = new EventEmitter<void>();

  isCollapsed: boolean = true;

  selectItem(): void {
    this.isCollapsed = !this.isCollapsed;
    this.onSelection.emit();
  }

}
