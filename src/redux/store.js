import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from './contacts/contacts-slice';
import filterReducer from "components/Filter/filter-reducer";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

export default store;