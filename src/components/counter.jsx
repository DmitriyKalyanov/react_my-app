import React,{useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const formatCount = () => {
       return count === 0 ? 'empty' : count
    }
    const getBadgeClasses = () => {
    let classes = 'bagde m-2 '
    classes+=count === 0 ? 'bg-warning' : 'bg-primary'
    return classes
    }
    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
        console.log(count);
    }
    const handleDecrement = () => {
        setCount((prevState) => prevState - 1)
        console.log(count);
    }
    
    return (
        <React.Fragment>
            {/* <ul>{renderTags()}</ul> */}
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>-</button>
        </React.Fragment>
    )
}

export default Counter