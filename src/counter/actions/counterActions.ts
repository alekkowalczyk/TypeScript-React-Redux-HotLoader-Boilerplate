import * as Constants from "./counterActionConstants";
import * as ActionDefs from "./counterActionDefs";

export function increaseCounted(): ActionDefs.IncreaseCounterAction {
    return {
            type: Constants.INCREASE_COUNTER,
    };
};

export function decreaseCounted(): ActionDefs.DecreaseCounterAction {
    return {
            type: Constants.DECREASE_COUNTER,
    };
};
