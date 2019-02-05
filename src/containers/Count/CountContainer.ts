import { ICountState } from "../../states/CountState";
import { connect } from 'react-redux';
import Count from '../../components/Count/CountButton';
import { Dispatch } from 'redux';
import { CountAction } from '../../actions/Count/Action';
import { countUp, countDown } from '../../actions/Count/ActionCreator';

interface IDispatchSubmitProps{
    onUpSubmit: () => void
    onDownSubmit: () => void
}
function mapStateToProps(state: ICountState): ICountState{
    return state
}

function mapDispatchToProps(dispatch: Dispatch<CountAction>): IDispatchSubmitProps{
    return{
        onUpSubmit: () => {
            dispatch(countUp())
        },
        onDownSubmit: () => {
            dispatch(countDown())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);