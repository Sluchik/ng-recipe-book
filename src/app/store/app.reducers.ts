import * as fromSoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';


export interface AppState {
  shoppingList: fromSoppingList.State;
  auth: fromAuth.State;
}
