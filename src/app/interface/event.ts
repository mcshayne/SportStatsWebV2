import { homeTeam } from "./homeTeam";
import { visitingTeam } from "./visitingTeam";
import { league } from "./league";
import { sport } from "./sport";

export interface event{
    id:number;
    status:string;
    homeTeam:homeTeam;
    visitingTeam:visitingTeam;
    homeTeamScore:number;
    visitingTeamScore:number;
    startDate:Date;
    endDate:Date;
    league:league;
    sport:sport;
  }