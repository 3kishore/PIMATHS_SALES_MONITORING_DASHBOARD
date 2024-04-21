import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({form: formReducer});
// create redux store using above combined reducers
const loginStore = createStore(reducers);
// export redux store to use it in the application
export default loginStore;