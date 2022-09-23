import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment(undefined));
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement(undefined));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter(undefined));
  };

  const content = <div>
    <h1>Redux Counter</h1>
    <div className={classes.value}>{counter}</div>
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  </div>;

  return (
      <main className={classes.counter}>
        {showCounter && content}
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};

export default Counter;
