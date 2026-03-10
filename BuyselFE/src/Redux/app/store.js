// src/store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

// User Reducer
const initialUserState = {
  user: null,
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

// Admin Reducer
const initialAgentState = {
  agentName: null,
  accessToken: null,
  agentId: null,
  image: null,
  isLoggedIn: false,
};

function agentReducer(state = initialAgentState, action) {
  switch (action.type) {
    case 'SET_AGENT':
      return {
        ...state,
        agentName: action.payload.agentName, // Save admin user data
        accessToken: action.payload.accessToken,
        agentId: action.payload.agentId,
        image: action.payload.image,
        isLoggedIn: true,
      };
    case 'AGENT_LOGOUT':
      return {
        ...state,
        agent: null,
        accessToken: null,
        agentId: null,
        image:null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  agent: agentReducer,
});

// Persist Config
const persistConfig = {
  key: 'root', // key for the persisted data
  storage,     // localStorage (can also use sessionStorage or other storages)
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with the persisted reducer
const store = createStore(persistedReducer);

// Persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };
