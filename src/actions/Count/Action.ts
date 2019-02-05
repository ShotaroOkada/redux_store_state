import { CountActionType } from './ActionType';

export interface ICountUPAction{
    type: CountActionType.COUNT_UP;
}

export interface ICountDownAction{
    type: CountActionType.COUNT_DOWN;
}

export type CountAction = ICountUPAction | ICountDownAction