import { sport } from "./sport";

export interface league{
    id:number;
    name:string;
    level:string;
    teamClass:string;
    teamClassId:number;
    startDate:string;
    endDate:string;
    sport:sport;
}