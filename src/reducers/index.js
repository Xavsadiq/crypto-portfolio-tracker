import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cryptoListReducer from "./cryptoListReducer";
import cryptoReducer from "./cryptoReducer";
import firebaseReducer from "./firebaseReducer";
import uniqueCryptoReducer from "./uniqueCryptoReducer";

export default combineReducers({
    auth: authReducer,
    crypto: cryptoReducer,
    cryptoList: cryptoListReducer,
    transactions: firebaseReducer,
    uniqueCrypto: uniqueCryptoReducer
    
});