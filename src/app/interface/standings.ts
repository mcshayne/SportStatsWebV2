import { positionStatuses } from "./positionStatuses";
import { stats } from "./stats";
import { team } from "./team";

export interface standings{
    position:number;
    team:team;
    positionStatuses:positionStatuses;
    stats:stats;
}