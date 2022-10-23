import { groups } from "./groups";
import { league } from "./league";

export interface leagueStanding{
    league:league;
    groups:groups;
    availableGroupTypes:string;
}