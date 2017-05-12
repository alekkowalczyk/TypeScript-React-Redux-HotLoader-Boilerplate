import * as Constants from "./counterActionConstants";

export type IncreaseCounterAction = {
        type: Constants.INCREASE_COUNTER,
    };

export type DecreaseCounterAction = {
    type: Constants.DECREASE_COUNTER,
};
