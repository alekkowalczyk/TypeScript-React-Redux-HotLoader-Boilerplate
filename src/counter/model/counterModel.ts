export interface ICounterProps {
    readonly num: number;
};

export class CounterModel implements ICounterProps {
    public readonly num: number;

    constructor(props: ICounterProps) {
        this.num = props.num;
    }

    public Increase(): CounterModel {
        return new CounterModel({
            ...(this as ICounterProps),
            num: this.num + 1,
        });
    }

    public Decrease(): CounterModel {
        return new CounterModel({
            ...(this as ICounterProps),
            num: this.num - 1,
        });
    }
}
