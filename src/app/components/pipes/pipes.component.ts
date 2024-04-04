import { Component } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';
import { CustomPipeCapitalizerPipe } from '../../pipes/custom-pipe-capitalizer.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CurrencyPipe, CustomPipeCapitalizerPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

  protected numVar:number = 34.22;
  protected strVar:string = "hello world";

}
