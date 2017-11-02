import createStore from 'redux-zero'
import {mydata} from './Data'

const initialState = {
   mydata: mydata,
   selected: 0
}

const store = createStore(initialState)
export default store