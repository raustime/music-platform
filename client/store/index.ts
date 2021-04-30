import {createStore} from 'redux';
import {createWrapper, Context, MakeStore} from 'next-redux-wrapper';
import {  reducer, RootState } from './reducers';

// create a makeStore function
const makeStore:MakeStore<RootState> = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
