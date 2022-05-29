import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  myUrl: any;
  title: string;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe(event => {
          this.myUrl = event;
          if(this.myUrl.url === "/music"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-one"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-two"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-three"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-four"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-five"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-six"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-seven"){
            this.title = 'Music'
          }
          else if(this.myUrl.url === "/music/album-eight"){
            this.title = 'Music'
          }
          else if (this.myUrl.url === "/about"){
            this.title = 'About'
          }
          else if (this.myUrl.url === "/"){
            this.title = 'Home'
          }
          else {
            this.title = ''
          }
      });
 }

}
