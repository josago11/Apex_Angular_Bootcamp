import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasEstructuralesComponent } from './components/directivas-estructurales/directivas-estructurales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectivasEstructuralesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apex_Angular_Bootcamp';
}
