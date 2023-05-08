import { useState, useEffect } from 'react'; //Imports shouldn't use template literas (``)
import './App.css';

const Person = (props) => { // a Person compponent
  return(
    <>
      <h1>Name: {props.name}</h1> {/* props (property) */}
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const their_name = `Jennifer`;
  const isNameShowing = true;
  const isUserLoggedIn = true; // if true, show home page, else, show login page
  const [counter, setCounter] = useState(7); // In React, a function beggining with "use..." is called a hook
  useEffect(() => { // When the page is reloaded
    alert(`Page has reloaded`)
    //counter = 100; // Never modify state manually, never mutate the state. This "counter" isn't just a normal variable, it's a part of the React state. It can only ce changed using its own setter "setCounter"
    setCounter(100); // If this is absent, it will just use "useState(7)" at the to
  }, []); // The [] is the dependency array, set to be empty. So the contents of useEffect(() => {...}); will happen once after page reload rather than repeatedly occuring per button click. The 2nd, 3rd, etc times the contents of useEffect(() => {...}); is executed, it will juts be ignored.

  useEffect(() => { // Will also trigger when page is reloaded, but now will also trigger if the counter variable changes
    alert(`counter has been changed to ${counter}, I repeat: ` + counter);
  }, [counter]);

  /* //Bad practice. [counter] will cause useEffect(() => {}); to be called, which will trigger setCounter(100) and [counter] again in an infinite loop 
  useEffect(() => {
    setCounter(100);
  }, [counter]);
  */

 //WHY IS THE ALERT TRIGGERED 5 TIMES WHEN WEBSITE IS MANUALLY RELOADED?

  return (
    <div className="App">
      {/* React JS' Virtual DOM (Document Objext Model) can the website appearance without reloading */}
      <button onClick={() => alert(`clicked`)}>Click this button for an alert message</button>
      <br />
      <button onClick={() => setCounter(0)}>Set number to 0</button>
      <br />
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button> {/* () => {} callback function. no name, waiting for a command */}
        <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <p>==============================</p>
      <h1>Number: {2 + 3}</h1>
      {their_name ? (
        <>
          <h1>Hello, {their_name}!</h1>
        </>
      ):(
        <> {/* Use <> and </> so that you can enter multiple html tags */}
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
      <p>==============================</p>
      <Person /> {/* The Person component is injected/refereenced here */}
      <Person name={`John`} lastName={`Doe`} age={30}/> {/* Pass data to props */}
      <Person name="Jane" age={10 + 15}/>
      <Person name={their_name} lastName= 'Johnson' age={24}/>
    </div>
  );
}

export default App;
