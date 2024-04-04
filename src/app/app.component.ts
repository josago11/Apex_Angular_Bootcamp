import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { CurrencyPipe  } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apex_Angular_Bootcamp';
}
