import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InjectableModule } from './injectable/injectable.module';
import { ComponentTwoComponent } from './module-two/components/component-two/component-two.component';
import { ModuleTwoModule } from './module-two/module-two.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InjectableModule, ModuleTwoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apex_Angular_Bootcamp';
  
}
