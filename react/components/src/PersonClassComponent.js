import React from 'react';

export class PersonCC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name}
    }

    render() {
        return(<div>{this.state.name}</div>)
    }
}
