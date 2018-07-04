import * as fromSoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  shoppingList: fromSoppingList.State;
  auth: fromAuth.State;
}

interface LocalAppStore extends AppState {
  dataType: string;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromSoppingList.shoppingListReducer,
  auth: fromAuth.authReducer
};
