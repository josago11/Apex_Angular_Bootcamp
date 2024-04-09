import { Component } from '@angular/core';
import { TwoService } from '../../../injectable/services/two.service';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  templateUrl: './component-two.component.html'
})
export class ComponentTwoComponent {
  constructor(public twoService:TwoService){

  }

}
