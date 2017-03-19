import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducers
import rootReducer from './reducers/index';

// mockup data
import comments from '../data/comments';
import posts from '../data/posts';

const defaultState = {
    posts,
    comments
};

const enhancers = compose (
   // window.devToolsExtension ? window.devToolsExtension() : f => f
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;