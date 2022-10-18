import { sport } from "./sport";

export interface IDataResponse<T> {
    sport: Array<T>;
    meta: {
       offset: number;
       count: number;
       limit: number;
       totalCount: number;
    };
}