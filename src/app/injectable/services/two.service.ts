import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoService {

  public persistentData:string = "I'm a variable inside a singleton";
  constructor() { }
}
