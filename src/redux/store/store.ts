import {
	createStore,
	applyMiddleware,
} from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

import reducer from '../reducer'

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk)),
)

export type State = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
export default store
