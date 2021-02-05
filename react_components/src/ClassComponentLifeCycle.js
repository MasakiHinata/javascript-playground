import React from 'react';

export class CCLifeCycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    componentDidMount() {
        console.log("component did mount")
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    render() {
        return (<>
            <p>{`You Clicked ${this.state.count} times.`}</p>
            <button onClick={() => this.setState({count: this.state.count+1})}>
                Click me
            </button>
        </>)
    }
}