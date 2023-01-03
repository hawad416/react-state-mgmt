import logo from './logo.svg';
import {useState} from "react";

function App() {

  //this account would be associated with a particular instance of the component
  //meaning that if we created multiple Counter componenet, they each have their own 
  // reference to the count state. The state is couple iwht the instance of that component 
  // therefore each instnace can be indpendetly mutated and will manage its state independentl/
  let [count, setCount] = useState(0);

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
    </div>
  );
}

export default App;
