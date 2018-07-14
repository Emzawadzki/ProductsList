import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './scss/main.scss';

class App extends React.Component {
    render () {
        return(
            <Home />
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);