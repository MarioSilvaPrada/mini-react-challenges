import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function HelloWorld() {
    return React.createElement(
        'h1',
        {style:  {color: 'red'}},
        'Hello World!'
    )
}



ReactDOM.render(<HelloWorld />, document.getElementById('root'));

