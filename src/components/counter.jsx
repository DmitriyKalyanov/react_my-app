import React,{useState} from "react";

const Counter = (props) => {
    console.log(props);
    const [value, setValue] = useState(props.value)

    const formatValue = () => {
       return value === 0 ? 'empty' : value
    }
    const getBadgeClasses = () => {
    let classes = 'bagde m-2 '
    classes+=value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
    }
    const handleIncrement = () => {
        setValue((prevState) => prevState + 1)
        console.log(value);
    }
    const handleDecrement = () => {
        setValue((prevState) => prevState - 1)
        console.log(value);
    }
    
    return (
        <div>
            <span>{props.name}</span>
            {/* <ul>{renderTags()}</ul> */}
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Counter