/**
* Created by albertoclarit on 3/28/17.
*/
import MyNavigation from '../navigation/MyNavigation'

export default navReducer = (state, action) => {
    const newState = MyNavigation.router.getStateForAction(action, state);
    return newState || state;
};
