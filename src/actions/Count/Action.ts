import { CountActionType } from './ActionType';

export interface ICountUPAction{
    type: CountActionType.COUNT_UP;
    count: number;
}

export interface ICountDownAction{
    type: CountActionType.COUNT_DOWN;
    count: number;
}

export type CountAction = ICountUPAction | ICountDownAction