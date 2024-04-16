import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slug',
  standalone: true,
  imports: [],
  templateUrl: './slug.component.html',
  styleUrl: './slug.component.scss'
})
export class SlugComponent {

  public stringVar:string = "";

  private sub: Subscription = new Subscription;

  constructor(private readonly activatedRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.sub = this.activatedRoute.params.subscribe((params: Params): void => {
      this.stringVar = params['slug'];
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
