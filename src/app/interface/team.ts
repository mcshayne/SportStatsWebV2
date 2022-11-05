import { sport } from "./sport";

export interface team {
    id:number;
    name:string;
    shortName:string;
    logo:string;
    teamClass:string;
    teamClassId:number;
    sport:sport;
}