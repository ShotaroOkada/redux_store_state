import * as React from 'react';
// import * as State from '../../states/CountState'

export interface ICountProps{
    count: number;
    onUpSubmit: () => void;
    onDownSubmit: () => void;
}

class Count extends React.Component<ICountProps>{
    public render(){
        const {count} = this.props
        return(
            <div>
                {count}
                <button onClick={this.onUpSubmit}>countUp</button>
                <button onClick={this.onDownSubmit}>countDown</button>
            </div>
        )
    }

    public onUpSubmit = (): void =>{
        this.props.onUpSubmit();
    }

    public onDownSubmit = (): void =>{
        this.props.onDownSubmit();
    }
}

export default Count;