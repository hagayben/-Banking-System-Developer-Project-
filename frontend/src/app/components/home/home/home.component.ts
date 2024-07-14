import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  public constructor(private title: Title) {}
 
   public ngOnInit() {
     this.title.setTitle('bank home');
     console.log('component initialized');
   }
   public ngOnDestroy() {
     console.log('component destroyed');
   }
}
