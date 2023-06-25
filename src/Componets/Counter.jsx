import React from 'react'
import './Counter.css'
import { increment, decrement, reset } from '../store/ConunterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const { num } = useSelector(state => state.val)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(1))
    }
    const handleDecrement = () => {
        dispatch(decrement(1))
    }
    const handleReset = () => {
        dispatch(reset())
    }
    return (
        <div className='counter'>
            <h1>COUNTER</h1>
            <h2>{num}</h2>
            <div className='counter-btns'>
                <button onClick={handleIncrement} >Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset} className='reset'>Reset</button>
            </div>
        </div>
    )
}

export default Counter
