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
  role: null,
  listedCount: null,
  isLoggedIn: false,
  remainingProperty: null,
  is_plan: false
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {

    case 'SET_USER':
      console.log("SET_USER payload:", action.payload);

      return {
        ...state,
        userName: action.payload.userName,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
        image: action.payload.image,
        verificationStatus: action.payload.verificationStatus,
        role: action.payload.role,
        listedCount: action.payload.listedCount,
        remainingProperty: action.payload.remainingProperty,
        isLoggedIn: true,
        is_plan: action.payload.is_plan
      };

    case 'LOGOUT':
      return initialUserState;

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
  role: null,
  isLoggedIn: false,
  remainingPropertyAgent: null
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
        role: action.payload.role,
        remainingPropertyAgent: action.payload.remainingPropertyAgent,
        isLoggedIn: true
      };

    case 'AGENT_LOGOUT':
      return initialAgentState;

    default:
      return state;
  }
}


// Individual reducers
const appReducer = combineReducers({
  user: userReducer,
  agent: agentReducer
});


// Root reducer
const rootReducer = (state, action) => {

  // USER LOGIN
  // Clear agent completely
  if (action.type === 'SET_USER') {
    return appReducer(
      {
        ...state,
        agent: initialAgentState
      },
      action
    );
  }


  // AGENT LOGIN
  // Clear user completely
  if (action.type === 'SET_AGENT') {
    return appReducer(
      {
        ...state,
        user: initialUserState
      },
      action
    );
  }


  return appReducer(state, action);
};


const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };