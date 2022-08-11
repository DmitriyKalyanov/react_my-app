import React,{useState} from "react";

const Counter = (props) => {
    console.log(props);
    const {value} = props

    const formatValue = () => {
       return value === 0 ? 'empty' : value
    }
    const getBadgeClasses = () => {
    let classes = 'bagde m-2 '
    classes+=value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
    }
    const handleIncrement = () => {
        console.log('handle increment');
        // setValue((prevState) => prevState + 1)
        // console.log(value);
    }
    const handleDecrement = () => {
        console.log('handle decrement');
        // setValue((prevState) => prevState - 1)
        // console.log(value);
    }
    
    return (
        <div>
            <span>{props.name}</span>
            {/* <ul>{renderTags()}</ul> */}
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}

export default Counter