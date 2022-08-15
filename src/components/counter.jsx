import React,{useState} from "react";

const Counter = (props) => {
    const {value, onIncrement, onDecrement, onDelete, name, id} = props

    const formatValue = () => {
       return value === 0 ? 'empty' : value // что будет если чилсо меньше нуля?
    }
    
    const getBadgeClasses = () => {
        let classes = 'bagde m-2 '
        classes+=value === 0 ? 'bg-warning' : 'bg-primary' // что будет если чилсо меньше нуля?
        return classes
    }
    
    return (
        <div>
            <span>{name}</span>
            {/* <ul>{renderTags()}</ul> */}
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => onIncrement(id)}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => onDecrement(id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Counter
