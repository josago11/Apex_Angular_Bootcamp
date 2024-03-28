import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapitalizeDirective } from './directives/capitalize.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CapitalizeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apex_Angular_Bootcamp';
}
