
import { Store } from 'redux';
import { addListener } from 'src/vscode';
import * as actions from './actions';

export { reducer } from './reducers';
export { actions }
export * from './state';

export function initStore(store: Store) {
  addListener((msg) => store.dispatch(actions.receivedData(msg.configs, msg.locations)), 'responseData');
}
