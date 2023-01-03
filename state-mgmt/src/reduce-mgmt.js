
// [10,20,30] --> 60 

// numbers.reduce((c,n) => c + n, 0) // reducers take the current value 
// and some new value, and performs some operation on it. the output of reducer is what the next 
//iterations input is. reducers are used in useReducer() and in redux which is 
//beneficial for state managemnet. 

import {useReducer} from "react";
import React from 'react';


function UserForm(){

    // you can combine the existing state with whatever comes in on the action. 
    // using this reducer pattern, you dont have to have a bunch of switch cases and action.payloads
    // rather you can just manage large object state easily and make all the mutations we want.
    //question: why the hell would nayone ever use theother pattern???? im confused
    const [state, dispatch] = useReducer(
        (state, action) => {
            return {
                ...state,
                ...action
            }
        },

        {
            first: "",
            last: "",
        })

    
        // this lets us just dispatch with whatever key we want to change, it changes that key only
        //and everything else would remain the same 

        return(
            <div>
                <input type="text" value={state.first} onChange={(e) => {
                    dispatch({first: e.target.value});
                }}></input>
                <input type="text" value={state.last} onChange={(e)=> {
                    dispatch({last:e.target.value})
                }}></input>

                <div>
                    First: {state.first}
                    <br></br>
                    Last: {state.last}
                </div>
            </div>
        )
}

function ReduceMgmt() {


    // use reducer also returns an array like useState,
    // and the array has two elements in it, the current state object {}, 
    //and it also returns a dispatch which is a way to invoke our reducer function
   
   //the existing state, and some action and the action is sent to the dispath
   //action is usually an object and we use a switch statemtn on the objects type
   //to mutate the state and return that state based on the data we get with the action


    const [ state, dispatch ] = useReducer((state, action) =>{
        switch(action.type){
            case "SET_NAME":
                return {...state, name: action.payload};

            case "ADD_NAME":
                return {...state, names: [...state.names,state.name], name:""}
        }

    },
    
    
    {
        names: [],
        name: "",
    });



// everytime we get an onChange event for our input, we dispatch to the reducer function 
// and we dispath to the function, the type and the payload, 
// which then gets given the current state, and an action. thenw e 
// just create a new object with that state and that payload. 


//great way to manage more complex state, like an object with a lot of data and keys
// you can also abstract the reducer from the component code itself and test it independtly

    return (
      <div className="App">
        <p>Reducer Lesson </p>

<ul>
        {state.names.map((name, i) => (
            <li key={i}>{name}</li>
        ))}
</ul>
        <input
      type="text"
      value={state.name}
      onChange={(e) =>{
        dispatch({type: "SET_NAME", payload: e.target.value})
      } }>
      </input>

      <button onClick={() => dispatch({type: "ADD_NAME"})}>
          Add Name
      </button>

      <div>Name = {state.name}</div>

      <UserForm></UserForm>
      </div> 
      
    );
  }
  
  export default ReduceMgmt;