'use client'

import { useReducer } from "react"

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type Actions = { 
  type: REDUCER_ACTION_TYPE,
  }

const counterReducer = (state:number, action:Actions) => {
  switch (action.type) {
     case REDUCER_ACTION_TYPE.INCREMENT:
       return state + 1;
     case REDUCER_ACTION_TYPE.DECREMENT:
       return state - 1;
     default:
       throw new Error('Invalid action type');
  }
 }

const initialState = 0;

//Implementado com useReducer() ao invés de useState()
export default function PhotosPage() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="h-screen">
      
      <h2>
        Photos Counter {state}
      </h2>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>Decrement</button>
    </div>
  )
}