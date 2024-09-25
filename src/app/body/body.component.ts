import { Component } from '@angular/core';
import { WindowsComponent } from "../windows/windows.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [WindowsComponent, NgClass],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  backgroundColor: string = "";

  onColorSelection(event : string) {
    this.backgroundColor = event;
  }

}
