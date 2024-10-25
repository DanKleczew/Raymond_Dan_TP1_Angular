import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [],
  templateUrl: './windows.component.html',
  styleUrl: './windows.component.scss'
})
export class WindowsComponent {

  @Output() selectedColor = new EventEmitter<string>();

  public colorChange(colorName: string) {
    this.selectedColor.emit(colorName);
  }

}
