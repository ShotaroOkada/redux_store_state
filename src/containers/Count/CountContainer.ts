import { ICountState } from "../../states/CountState";
import { connect } from 'react-redux';
import Count from '../../components/Count/CountButton';

function mapStateToProps(state: ICountState): ICountState{
    return state
}

export default connect(
    mapStateToProps
)(Count);