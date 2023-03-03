import { combineReducers } from 'redux';

import filterReducer from './filter/filter-reducer';
import { contactsSlice } from './contacts/contacts-slice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});

export default rootReducer;
