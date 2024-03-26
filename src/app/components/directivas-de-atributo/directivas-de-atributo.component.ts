import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directivas-de-atributo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivas-de-atributo.component.html',
  styleUrl: './directivas-de-atributo.component.scss'
})
export class DirectivasDeAtributoComponent {

  protected activeClass:Boolean = false;

  protected activeStyle:Boolean = false;

}
