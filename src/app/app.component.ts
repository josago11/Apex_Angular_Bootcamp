import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apex_Angular_Bootcamp';
}
