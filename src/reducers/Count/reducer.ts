import { ICountState } from "../../states/CountState";
import { CountAction } from '../../actions/Count/Action';
import { CountActionType } from '../../actions/Count/ActionType';

const initialState: ICountState = {
    count: 0
}

const Countreducer = (state: ICountState = initialState, action: CountAction): ICountState => {
    switch(action.type){
        case CountActionType.COUNT_UP:
        return{
            count: state.count + 1
        };

        case CountActionType.COUNT_DOWN:
        return{
            count: state.count - 1
        };

        default: 
        return state;
    }
}

export default Countreducer;