import { OtherAction } from "../../common/baseActionConstants";
import counterReducer from "./counterReducer";
import { IRootCounterModel } from "../model";

const INITIAL_STATE: IRootCounterModel = {
    counter: counterReducer(),
};

const rootCounterReducer = (state: IRootCounterModel = INITIAL_STATE, action: OtherAction = OtherAction): IRootCounterModel => {
    const reducedState = {
        counter: counterReducer(state.counter, action),
    };
    return reducedState;
};
export default rootCounterReducer;
export { INITIAL_STATE };
