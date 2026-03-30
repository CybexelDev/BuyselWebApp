// src/store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';

const initialUserState = {
  userName: null,
  accessToken: null,
  userId: null,
  image: null,
  verificationStatus: null,
  isLoggedIn: false,
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
         ...state,
        userName: action.payload.userName, 
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
        image: action.payload.image,
        verificationStatus: action.payload.auth_provider,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        userName: null,
        accessToken: null,
        userId: null,
        image:null,
        verificationStatus: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

const initialAgentState = {
  agentName: null,
  accessToken: null,
  agentId: null,
  image: null,
  agent_type: null,
  isLoggedIn: false,
};

function agentReducer(state = initialAgentState, action) {
  switch (action.type) {
    case 'SET_AGENT':
      return {
        ...state,
        agentName: action.payload.agentName, 
        accessToken: action.payload.accessToken,
        agentId: action.payload.agentId,
        image: action.payload.image,
        agent_type: action.payload.agent_type,
        isLoggedIn: true,
      };
    case 'AGENT_LOGOUT':
      return {
        ...state,
        agentName: null,
        accessToken: null,
        agentId: null,
        image:null,
        agent_type: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  user: userReducer,
  agent: agentReducer,
});


const persistConfig = {
  key: 'root',
  storage,     
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer);

// Persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };
