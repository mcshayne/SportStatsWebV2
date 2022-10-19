import { league } from "./league";
import { sport } from "./sport";
import { stats } from "./stats";
import { team } from "./team";

export interface standing{
    position:number;
    team:team;
    sport:sport;
    league:league;
    stats:stats;
}