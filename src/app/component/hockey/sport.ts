export interface sport{
    id:number;
    //name:string;
    //slug:string;
    homeTeam:homeTeam;
    status:string;
    startDate:string;


  }


  export interface homeTeam{
    name:string;
    id:number;
    arena:arena;
  }

  export interface arena{
    name:string;
  }