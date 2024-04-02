import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  protected strVar:string = "Hello World"
  protected triggerEvent(event:MouseEvent):void{
    alert("I was triggered by an event");
  }
}
