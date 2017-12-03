import createStore from 'redux-zero'
import {mydata} from './Data'

const COMMENT = [

]

const initialState = {
   mydata: mydata,
    comments: COMMENT,
   showing: false,
   isHide: false,
}

const store = createStore(initialState)
export default store;