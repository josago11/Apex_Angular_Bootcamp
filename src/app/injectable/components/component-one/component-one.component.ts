import { Component } from '@angular/core';
import { TwoService } from '../../services/two.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [],
  templateUrl: './component-one.component.html'
})
export class ComponentOneComponent {
  constructor(protected two:TwoService){
  
  }

}
