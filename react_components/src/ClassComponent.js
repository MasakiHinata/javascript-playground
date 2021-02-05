import React from 'react';

export class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isDone: false}
    }

    render() {
        return (<>
            <input
                type="checkbox"
                checked={this.state.isDone}
                onClick={() => this.setState({isDone: !this.state.isDone})}
            />
            <span>Todo</span>
        </>);
    }
}