import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [ //это лучше вынести из компонента
        { id: 0, value: 0, name: 'Ненужная вещь' }, 
        { id: 1, value: 4, name: 'Ложка'  }, 
        { id: 2, value: 0, name: 'Вилка'  },
        { id: 3, value: 0, name: 'Тарелка'  },
        { id: 4, value: 0, name: 'Набор минималиста'  },
    ]
    const updatedState = [ // Это вообще зачем ?
        { id: 0, value: 1, name: 'Ненужная вещь' }, 
        { id: 1, value: 2, name: 'Ложка'  }, 
        { id: 2, value: 3, name: 'Вилка'  },
        { id: 3, value: 4, name: 'Тарелка'  },
        { id: 4, value: 0, name: 'Набор минималиста'  },
    ]
    
    const [counters, setCounters] = useState(initialState)
    
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => {
          return  c.id !== id
        })
        
        setCounters(newCounters)
    }
    
    const handleReset = () => {
        setCounters(initialState)
    }
    
    const handleIncrement = (id) => {
        const newArray = counters.map((counter) => {
            if (counter.id === id) {
                counter.value++
            }
            return object
        })
        
        setCounters(newArray)
    }
    
    const handleDecrement = (id) => {
        const newArray = counters.map((counter) => {
            if (counter.id === id) {
                counter.value--
            }
            return counter
        })
        setCounters(newArray)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter 
                    key={count.id} 
                    onDelete={handleDelete} 
                    {... count} 
                    onIncrement={handleIncrement} 
                    onDecrement={handleDecrement}
                />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    )
}

export default CountersList
