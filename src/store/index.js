import { createStore, combineREducers } from 'redux';

import rootReducer from '../reducers';

export default createStore(rootReducer);