import React from 'react';
import ReactDOM from 'react-dom';
  const Hello = (props) => {
    return (
      <div>
        <p>
        Hello {props.name}, you are {props.age} years old
        </p>
      </div>
    )
  }
  const App = () =>{
    const name='Peter'
    const age= 10
    return(
        <div>
          <h1>Greatings</h1>
          <Hello name="Maya" age={26+10}/>
          <Hello name={name} age={age}/>
          <Hello/>
        </div>
      )
    }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
