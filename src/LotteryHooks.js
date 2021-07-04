import React, {useState} from 'react'
import BallHooks from './BallHooks'

export default function LotteryHooks(props) {
    const {title = 'Lotto Hooks', numBalls = 6, maxNum = 40} = props
    const [nums, setNums]=useState(Array.from({length:numBalls}))

    const generate = ()=>{
        setNums(nums.map(n =>
               Math.floor(Math.random() * maxNum )+1
               ))
    }

    const handleClick = ()=>{
        generate()
    }
    return (
        <section className="Lottery">
                <div><h1>{title}</h1>
                    {nums.map(n =><BallHooks num={n}/>)}</div>
                <button onClick={handleClick}>Generate</button>
            </section >
    )
}
