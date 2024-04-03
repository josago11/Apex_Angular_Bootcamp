import { Component } from '@angular/core';
import { InjectableModule } from '../../injectable.module';

@Component({
  selector: 'app-injectable',
  standalone: true,
  imports: [],
  templateUrl: './injectable.component.html',
  styleUrl: './injectable.component.scss'
})
export class InjectableComponent {
  constructor(public injectableM:InjectableModule) {
      
   }
}
