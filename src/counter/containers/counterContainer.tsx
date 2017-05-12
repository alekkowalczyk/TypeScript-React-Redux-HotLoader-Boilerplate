import * as React from "react";
import { Dispatch, compose } from "redux";
import { connect } from "react-redux";
import { CounterActions } from "../actions";
import CounterComponent from "../components/counterComponent";
import { Store } from "../../app/";
import { CounterModel } from "../model";

type OwnProps = {}

type ConnectedState = {
    num: number;
};
type ConnectedDispatch = {
    increase: () => void;
    decrease: () => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => {
    return {
        num: state.counterRoot.counter.num
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    increase: () => dispatch(CounterActions.increaseCounted()),
    decrease: () => dispatch(CounterActions.decreaseCounted()),
});

class CounterContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { num, increase, decrease } = this.props;
        return <div>
                    <CounterComponent num={num} increase={increase} decrease={decrease} />
                </div>;
    }
}
export default compose(connect(
        mapStateToProps,
        mapDispatchToProps
    ))(CounterContainer);
