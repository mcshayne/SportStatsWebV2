import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit  {

  leagueId: number = 0;
  tableDiv: boolean = false;
  leagueDiv: boolean = true;
  sportIdentifier: string ="" ;

  //Code from https://medium.com/beingcoders/angular-basics-refresh-an-angular-component-without-reloading-the-same-component-b6c513f06fb2 
  // to get navbar and sport-component to work together.
  someSubscription: any;
  constructor(private route: ActivatedRoute,private router:Router) {
    /* Code that makes the page refreash once you press a new key in the nav-bar*/
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
  this.someSubscription = this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      // Here is the dashing line comes in the picture.
      // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
      this.router.navigated = false;
    }
  });}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sportIdentifier = params.get("sportName") as string;
      
    });
    console.log(this.sportIdentifier)
  }
  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  public switchView(id:number) {
    this.leagueId = id;
    this.tableDiv = true;
    this.leagueDiv = false;
  }
}
