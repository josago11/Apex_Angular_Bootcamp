import { Injectable } from '@angular/core';
import { InjectableModule } from '../injectable.module';

@Injectable({
  providedIn: InjectableModule
})
export class OneService {

  public strVar:String = "Test";
  constructor() { }
}
