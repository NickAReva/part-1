import React from 'react';
import ReactDOM from 'react-dom';
    const App = () =>{
      console.log('Hello from component')
      return(
        <div>
          <p>Hello World</p>
        </div>
      )
    }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
