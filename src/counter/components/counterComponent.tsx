import * as React from "react";

export interface ICounterComponentProps {
    num: number,
    increase: () => void;
    decrease: () => void;
}

const CounterComponent = (props: ICounterComponentProps) => {
        return  <div>
                    <div onClick={props.increase}>Increase</div>
                    <h3>{props.num}</h3>
                    <div onClick={props.decrease}>Decrease</div>
                </div>;
};

export default CounterComponent;
