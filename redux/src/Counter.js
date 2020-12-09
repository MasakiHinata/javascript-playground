import { store } from './index'
import { connect } from 'react-redux'
import { Component } from "react";

// ACTION INCREMENT
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// const Counter = () => {
//   const counter = useSelector(state => state.counter)
//   return (
//     <div>
//       <h1>Counter {counter}</h1>
//       <button onClick={() => store.dispatch(increment())}>increment</button>
//       <button onClick={() => store.dispatch(decrement())}>decrement</button>
//     </div>
//   );
// }

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter {this.props.value}</h1>
        <button onClick={() => this.props.increment()}>increment</button>
        <button onClick={() => this.props.decrement()}>decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ value: state.counter })
const mapDispatchToProps = { increment, decrement }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)