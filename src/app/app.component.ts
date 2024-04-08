import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialComponent } from './components/material/material.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apex_Angular_Bootcamp';
}
