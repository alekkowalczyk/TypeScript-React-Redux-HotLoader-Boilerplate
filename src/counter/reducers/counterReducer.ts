import { OtherAction } from "../../common/baseActionConstants";
import { CounterActionDefs, CounterActionConstants } from "../actions";
import { CounterModel } from "../model";

type CounterModuleAction =
    CounterActionDefs.IncreaseCounterAction |
    CounterActionDefs.DecreaseCounterAction |
    OtherAction;

const INITIAL_STATE: CounterModel = new CounterModel({ num: 0 });

const counterReducer = (state: CounterModel = INITIAL_STATE, action: CounterModuleAction = OtherAction): CounterModel => {
    console.log(action);
    switch (action.type) {
            case CounterActionConstants.INCREASE_COUNTER:
                return state.Increase();
            case CounterActionConstants.DECREASE_COUNTER:
                return state.Decrease();
            default:
                return state;
    }
};
export default counterReducer;
