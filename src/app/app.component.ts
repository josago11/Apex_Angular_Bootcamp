import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasDeAtributoComponent } from './components/directivas-de-atributo/directivas-de-atributo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectivasDeAtributoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apex_Angular_Bootcamp';
}
