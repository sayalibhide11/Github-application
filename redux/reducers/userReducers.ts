import { UserAction } from "./../actions/userActions";

const initialState = {
  // isLoading: false,
  // page: 1,
  //   seed: 1,
  searchedFor: " ",
  usersArray: [],
  isSearching: false,
  error: null
};

const userReducers = (state = initialState, action = UserAction) => {
  switch (action.type) {
   
  //  case "LOAD_DATA":
  //    return {
  //     ...state,
  //     isLoading: true
  //   }

   case "ON_SEARCH":
    console.log("I typed", action.payload);
    return {
      ...state, 
      searchedFor: action.payload
    }
    //  return Object.assign({}, state, {searchedFor: action.payload})

    case "ON_SEARCH_START":
      return {
        ...state,
        isSearching: true
      }
      // return Object.assign({}, state, {isSearching: true})
      
    case "ON_SEARCH_SUCCESS":
       return {
         ...state,
         usersArray: action.payload,
         isSearching: false
       }
      // return Object.assign({}, state, { usersArray: action.payload, isSearching: false})

    case "ON_SEARCH_FAILURE":
    return {
      ...state,
      error: action.payload,
      isSearching: false
    }
    // return Object.assign({}, state, { error: action.payload, isSearching: false})
    
    default:
      return state;
  }
};

export default userReducers;
