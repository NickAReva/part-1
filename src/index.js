import React from 'react';
import ReactDOM from 'react-dom';
    const App = () =>{
      const now = new Date()
      const a = 10
      const b = 20

      return(
        <div>
          <p>Hello World</p>
          <p>
          {a} plus {b} is {a + b}
          </p>
        </div>
      )
    }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
