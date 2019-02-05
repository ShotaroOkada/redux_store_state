import { ICountUPAction, ICountDownAction } from './Action';
import { CountActionType } from './ActionType';


export function countUp(): ICountUPAction{
    return{
        type: CountActionType.COUNT_UP
    }
}

export function countDown(): ICountDownAction{
    return{
        type: CountActionType.COUNT_DOWN
    }
}