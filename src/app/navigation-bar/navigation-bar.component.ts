import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  now: number;
  constructor() {
    
    setInterval(() => {
      this.now = Date.now();
    }, 1);
   }

  ngOnInit(): void {
  }

}
