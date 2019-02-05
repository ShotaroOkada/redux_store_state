import * as React from 'react';
// import * as State from '../../states/CountState'

export interface ICountProps{
    count: number;
    // onUpSubmit: () => void;
    // onDownSubmit: () => void;
}

class Count extends React.Component<ICountProps>{
    public render(){
        const {count} = this.props
        return(
            <div>
                {count}
            </div>
        )
    }
}

export default Count;