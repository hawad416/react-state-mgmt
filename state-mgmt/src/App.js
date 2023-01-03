import logo from './logo.svg';
import {useState} from "react";
import React from 'react';


function NameList(){
  const [list, setList] = useState(["hawa", "em", "zohar"]);
  const [name, setName] = useState("");

  const [ex, setEx] = useState(() => "Hawa") //useState can take a function as a starting point so if you have some 
// complex calculations you want to do in order to set an initial value, then you can do this 

  return(
    <div>
      <ul>
        {list.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <input
      id="tInput"
      type="text"
      value={name}
      onChange={(e) =>{
        setName(e.target.value);
      } }>
      </input>

      <button
      type='submit'
      value="submit"
      onClick={
        () => {
          //list.push(name); arrays and objects use reference semantics, so if you give react a reference to an array, it 
          //holds not the array data itself but a ref to it and it gives us back the same reference 
          // thats why if we do a refresh we get that updated data but react has no idea we did that. 
            setName('');
            setList([...list, name]); //this is better instead of in place mutating 
        }
      }
      > Add Name to The List!

      </button>
    </div>
  )
}

function App() {

  //this account would be associated with a particular instance of the component
  //meaning that if we created multiple Counter componenet, they each have their own 
  // reference to the count state. The state is couple iwht the instance of that component 
  // therefore each instnace can be indpendetly mutated and will manage its state independentl/
  let [count, setCount] = useState(0); // scalar state mgmt 

  function addOne(){
    setCount(count + 1); // critical to understanding all of state
    //management in react. setting the value of a return just sets a local copy
    // scalars which include string number bool, are returned and passed by value
    // so you get a copy of the value not the actual object. 
    // thats why you cant just do count++, rather we need to use the setter
  }

  return (
    <div className="App">
      <p>Hello!</p>
      <button onClick={addOne}>Count = {count}</button>
      <NameList></NameList>
    </div>
  );
}

export default App;
