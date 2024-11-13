import { useState } from "react";

interface ComponentState {
    count: number | null;
}

const Counter: React.FC = () => {
    const [countState, setCountState] = useState<ComponentState>({ count: 0} as ComponentState );

    const incrementCount = () => {
        setCountState((prevState) => ({
            ...prevState,
            count: (prevState.count || 0) + 1,
        }));
    };

    const decrementCount = () => {
        setCountState((prevState) => ({
            ...prevState,
            count: (prevState.count || 0) - 1,
        }));
    };

    const resetCount = () => {
        setCountState((prevState) => ({
            ...prevState,
            count: 0,
        }));
    };

    return (
        <div>
            <p>Counter: {countState.count}</p>
            <button onClick={incrementCount}> + </button>
            <button onClick={decrementCount}> - </button>
            <button onClick={resetCount}>Reset Counter</button>
        </div>
    )
};

export default Counter;