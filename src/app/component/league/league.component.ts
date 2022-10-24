import { Component, Input, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/service/league.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent {
  leaguesM: any = [];
  leaguesW: any = [];
  leagueId: number = 0;
  tableDiv: boolean = false;
  leagueDiv: boolean = true;
  @Input() sportIdentifier: string = "";
  @Output() getLeagueId = new EventEmitter<string>;

  addNewItem(value:string) {
    this.getLeagueId.emit(value);
    console.log("test sh")
  }
  
  constructor(private leagueService: LeagueService) { }
 
  ngOnInit(): void {
      if(this.sportIdentifier.match("floorball")) {
        this.getDataFlM();
        this.getDataFlW();
      }
      if(this.sportIdentifier.match("football")) {
        this.getDataFoM();
        this.getDataFoW();
      }
      if(this.sportIdentifier.match("hockey")) {
        this.getDataIceM();
        this.getDataIceW();
      }
  }
  
  public getDataFoM():void{
    this.leagueService.getFootballLeaguesM().subscribe(res => 
      {this.leaguesM = Object.values(res)[1]
        const key = 'name';
      let tempName = new Set(new Map(this.leaguesM.map((item: any) => [item[key], item.id])))
      this.leaguesM = tempName;
        console.log(res)})
    }
  
    public getDataFoW():void{
      this.leagueService.getFootballLeaguesW().subscribe(res => 
        {this.leaguesW = Object.values(res)[1]
          const key = 'name';
          let tempName = new Set(new Map(this.leaguesW.map((item: any) => [item[key], item.id])))
          this.leaguesW = tempName;
            console.log(res)})
      }
    
      public getDataFlM():void{
        this.leagueService.getFloorballLeaguesM().subscribe(res => 
          {this.leaguesM = Object.values(res)[1]
            const key = 'name';
            let tempName = new Set(new Map(this.leaguesM.map((item: any) => [item[key], item.id])))
            this.leaguesM = tempName;
              console.log(res)})
        }
      
        public getDataFlW():void{
          this.leagueService.getFloorballLeaguesW().subscribe(res => 
            {this.leaguesW = Object.values(res)[1]
              const key = 'name';
              let tempName = new Set(new Map(this.leaguesW.map((item: any) => [item[key], item.id])))
              this.leaguesW = tempName;
                console.log(res)})
          }

          public getDataIceM():void{
            this.leagueService.getHockeyLeaguesM().subscribe(res => 
              {this.leaguesM = Object.values(res)[1]
                const key = 'name';
                let tempName = new Set(new Map(this.leaguesM.map((item: any) => [item[key], item.id])))
                this.leaguesM = tempName;
                  console.log(res)})
            }

            public getDataIceW():void{
              this.leagueService.getHockeyLeaguesW().subscribe(res => 
                {this.leaguesW = Object.values(res)[1]
                  const key = 'name';
                  let tempName = new Set(new Map(this.leaguesW.map((item: any) => [item[key], item.id])))
                  this.leaguesW = tempName;
                    console.log(res)})
              }
}
