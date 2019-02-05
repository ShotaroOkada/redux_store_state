import { ICountUPAction, ICountDownAction } from './Action';
import { CountActionType } from './ActionType';


export function countUp(count: number): ICountUPAction{
    return{
        count,
        type: CountActionType.COUNT_UP
    }
}

export function countDown(count: number): ICountDownAction{
    return{
        count,
        type: CountActionType.COUNT_DOWN
    }
}