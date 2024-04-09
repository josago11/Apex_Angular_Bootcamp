import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directivas-estructurales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivas-estructurales.component.html',
  styleUrl: './directivas-estructurales.component.scss'
})
export class DirectivasEstructuralesComponent {
  public array:String[] =["A", "B", "C"];

}
