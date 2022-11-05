import { league } from "./league";

export interface season{
    id:number;
    name:string;
    startYear:number;
    endYear:number;
    league:league;
}